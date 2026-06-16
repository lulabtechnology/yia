"use client";

import { FormEvent, useMemo, useState } from "react";

const fallbackNumber = "50768535483";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const whatsappNumber = useMemo(() => {
    return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || fallbackNumber;
  }, []);

  const buildWhatsAppUrl = (payload: Record<string, string>) => {
    const text = [
      "Hola YIA, quiero una llamada de diagnóstico gratis.",
      `Nombre: ${payload.name}`,
      `Empresa: ${payload.company}`,
      `WhatsApp: ${payload.phone}`,
      `Actividad: ${payload.business}`
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      business: String(formData.get("business") || "").trim()
    };

    if (!payload.name || !payload.company || !payload.phone || !payload.business) {
      setStatus("error");
      setMessage("Completa todos los campos para preparar el mensaje.");
      return;
    }

    setStatus("sending");
    setMessage("Preparando tu solicitud...");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      setStatus("sent");
      setMessage("Listo. Abrimos WhatsApp con tus datos para que YIA te atienda más rápido.");
      window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("No pudimos enviar por el formulario, pero puedes escribir directo por WhatsApp.");
      window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        <span>Nombre</span>
        <input name="name" type="text" placeholder="Tu nombre" autoComplete="name" required />
      </label>
      <label>
        <span>Empresa</span>
        <input name="company" type="text" placeholder="Nombre de la empresa" autoComplete="organization" required />
      </label>
      <label>
        <span>WhatsApp</span>
        <input name="phone" type="tel" placeholder="+507 6XXX-XXXX" autoComplete="tel" required />
      </label>
      <label className="full">
        <span>¿A qué se dedica tu empresa?</span>
        <textarea name="business" placeholder="Ej: restaurante, clínica, logística, comercio, servicios profesionales..." required />
      </label>
      <button className="button button-gold full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Solicitar diagnóstico gratis"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
