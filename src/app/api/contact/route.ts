import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// ── Rate limiting (in-memory, per-IP) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  record.count++;
  return record.count > RATE_LIMIT_MAX;
}

// ── Validation schema ──
const projectTypes = [
  "business_website",
  "web_application",
  "ecommerce",
  "redesign",
  "other",
] as const;

const timelines = ["asap", "1_month", "1_3_months", "flexible"] as const;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  company: z.string().max(150).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, { message: "Please select a project type" }),
  budget: z.string().min(1, "Please enter your budget").max(100),
  timeline: z.enum(timelines, { message: "Please select a timeline" }),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  description: z.string().min(1, "Please describe your project").max(3000),
  honeypot: z.string().max(0).optional(),
});

const projectTypeLabels: Record<string, string> = {
  business_website: "Business Website",
  web_application: "Web Application",
  ecommerce: "E-commerce",
  redesign: "Website Redesign",
  other: "Other",
};

const timelineLabels: Record<string, string> = {
  asap: "As soon as possible",
  "1_month": "Within 1 month",
  "1_3_months": "1-3 months",
  flexible: "Flexible",
};

export async function POST(request: Request) {
  try {
    // ── Rate limit check ──
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // ── Honeypot check ──
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    // ── Validate with Zod ──
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] = issue.message;
      });
      return NextResponse.json(
        { error: "Validation failed", fields: errors },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      website,
      description,
    } = result.data;

    // ── Configure Nodemailer Transporter ──
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json(
        { error: "Email service is temporarily unconfigured. Please email directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const displayProjectType = projectTypeLabels[projectType] || projectType;
    const displayTimeline = timelineLabels[timeline] || timeline;

    const mailOptions = {
      from: `"${name} via Portfolio" <${emailUser}>`,
      replyTo: email,
      to: emailUser,
      subject: `🚀 New Project Enquiry: ${name} (${displayProjectType})`,
      text: `
New Project Enquiry Received:

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Project Type: ${displayProjectType}
Budget: ${budget}
Timeline: ${displayTimeline}
Website: ${website || "N/A"}

Project Description:
${description}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #ffffff;">
          <h2 style="color: #111827; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 0;">
            🚀 New Project Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #111827;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px 0; color: #111827;">${displayProjectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Budget:</td>
              <td style="padding: 8px 0; color: #059669; font-weight: bold;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0; color: #111827;">${displayTimeline}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Existing Website:</td>
              <td style="padding: 8px 0; color: #111827;">${
                website
                  ? `<a href="${website}" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">${website}</a>`
                  : "—"
              }</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #374151;">Project Description:</p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            Sent directly from your portfolio contact form. Hit 'Reply' to respond to ${name}.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Route / Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or email directly." },
      { status: 500 }
    );
  }
}
