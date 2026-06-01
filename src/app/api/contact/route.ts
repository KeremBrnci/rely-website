import { NextResponse } from "next/server";

type ContactPayload = {
  requestType?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  platform?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const requestType = body.requestType === "contact" ? "contact" : "demo";
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !company || !message) {
    return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Geçersiz e-posta." }, { status: 400 });
  }

  if (message.length < 10) {
    return NextResponse.json({ error: "Mesaj çok kısa." }, { status: 400 });
  }

  if (requestType === "demo" && !body.platform?.trim()) {
    return NextResponse.json({ error: "Platform seçimi gerekli." }, { status: 400 });
  }

  const entry = {
    requestType,
    name,
    email,
    company,
    phone: body.phone?.trim() || null,
    platform: body.platform?.trim() || null,
    message,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", entry);
  }

  return NextResponse.json({ ok: true });
}
