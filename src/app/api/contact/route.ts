import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function buildEmailTemplate(payload: ContactPayload, logoSrc: string): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 24px;border-bottom:1px solid #2a2a2a;vertical-align:top">
        <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;margin-bottom:4px">${label}</span>
        <span style="display:block;font-size:15px;color:#f3f4f6">${value}</span>
      </td>
    </tr>`;

  const logoHtml = logoSrc
    ? `<td style="vertical-align:middle;padding-right:16px;">
        <img src="${logoSrc}" alt="The Prime Media Logo" width="54" height="54" style="display:block;border:0;outline:none;text-decoration:none;max-height:54px;width:auto;" />
       </td>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#141414;border:1px solid #2a2a2a;border-radius:16px;overflow:hidden;max-width:100%">
            <tr>
              <td style="background-color:#141414;padding:32px 24px;border-bottom:1px solid #2a2a2a">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    ${logoHtml}
                    <td style="vertical-align:middle;">
                      <span style="font-size:24px;font-weight:bold;color:#f3f4f6;display:block;line-height:1.2;">The Prime Media</span>
                      <span style="display:block;font-size:13px;color:#9ca3af;margin-top:4px;">Your Brand, at it's Prime.</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px">
                <p style="margin:0 0 20px;font-size:18px;color:#f3f4f6;font-weight:bold">New Discovery Brief Received</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px">
                  ${row("Full Name", escapeHtml(payload.name))}
                  ${row("Email Address", escapeHtml(payload.email))}
                  ${row("Company / Brand Name", escapeHtml(payload.company || "—"))}
                  ${row("Services Required", escapeHtml(payload.service || "—"))}
                  ${row("Estimated Investment / Budget", escapeHtml(payload.budget || "—"))}
                  ${row("Project Goals & Brief", escapeHtml(payload.message))}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;border-top:1px solid #2a2a2a;background-color:#1a1a1a">
                <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6">
                  This message was sent from the contact form on theprimemedia website. Please follow up with the sender at
                  <a href="mailto:${escapeHtml(payload.email)}" style="color:#EC4B46">${escapeHtml(payload.email)}</a>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function getTransporter(): Transporter {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const to = process.env.MAIL_TO;
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Mail recipient is not configured." },
        { status: 500 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.SITE_URL;
    let logoSrc = "";
    let attachments: Array<{
      filename: string;
      path: string;
      cid: string;
      contentType: string;
      contentDisposition?: "inline" | "attachment";
    }> = [];

    if (appUrl) {
      // Use hosted HTTPS PNG image URL (ideal for production)
      logoSrc = `${appUrl.replace(/\/$/, "")}/Logo.png`;
    } else {
      // Fallback: Inline PNG CID embedding for Outlook & mail clients
      const logoPngPath = path.join(process.cwd(), "public", "Logo.png");
      if (fs.existsSync(logoPngPath)) {
        logoSrc = "cid:logo@theprimemedia";
        attachments = [
          {
            filename: "logo.png",
            path: logoPngPath,
            cid: "logo@theprimemedia",
            contentType: "image/png",
            contentDisposition: "inline",
          },
        ];
      }
    }

    await getTransporter().sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to,
      replyTo: email,
      subject: `New Discovery Brief — ${name} (${email})`,
      text: [
        `New Discovery Brief Received`,
        ``,
        `Full Name: ${name}`,
        `Email Address: ${email}`,
        `Company / Brand Name: ${payload.company || "—"}`,
        `Services Required: ${payload.service || "—"}`,
        `Estimated Investment / Budget: ${payload.budget || "—"}`,
        ``,
        `Project Goals & Brief:`,
        message,
      ].join("\n"),
      html: buildEmailTemplate(payload, logoSrc),
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}