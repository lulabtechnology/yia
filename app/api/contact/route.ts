import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
  phone?: string;
  business?: string;
};

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 500);
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const payload = {
    name: clean(body.name),
    company: clean(body.company),
    phone: clean(body.phone),
    business: clean(body.business)
  };

  if (!payload.name || !payload.company || !payload.phone || !payload.business) {
    return NextResponse.json({ ok: false, message: "Faltan campos obligatorios." }, { status: 422 });
  }

  const to = process.env.LEAD_TO_EMAIL || "hola@yia.com.pa";
  const from = process.env.LEAD_FROM_EMAIL || "YIA Leads <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      emailSent: false,
      message: "Lead recibido localmente. Configura RESEND_API_KEY para envío real por correo."
    });
  }

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; color:#1F2937; line-height:1.6;">
      <h2 style="margin:0 0 12px;">Nuevo lead desde la landing de YIA</h2>
      <p><strong>Nombre:</strong> ${payload.name}</p>
      <p><strong>Empresa:</strong> ${payload.company}</p>
      <p><strong>WhatsApp:</strong> ${payload.phone}</p>
      <p><strong>Actividad:</strong> ${payload.business}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:22px 0;" />
      <p>El usuario solicitó una llamada de diagnóstico gratis de 30 minutos.</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Nuevo lead YIA: ${payload.company}`,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, message: "No se pudo enviar el correo. Revisa las variables de entorno de Resend." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, emailSent: true, message: "Lead enviado." });
}
