const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50768535483";
const text = encodeURIComponent("Hola YIA, quiero agendar una llamada de diagnóstico gratis de 30 minutos.");

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a YIA por WhatsApp"
    >
      <span className="whatsapp-pulse" />
      <svg width="25" height="25" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.02 3.2A12.68 12.68 0 0 0 5.31 22.7L4 29l6.45-1.7A12.66 12.66 0 1 0 16.02 3.2Zm0 23.04c-1.86 0-3.66-.5-5.25-1.45l-.38-.23-3.82 1 1.02-3.72-.25-.39a10.36 10.36 0 1 1 8.68 4.79Zm5.69-7.76c-.31-.16-1.84-.91-2.12-1.02-.29-.1-.5-.16-.7.16-.21.31-.81 1.02-1 1.22-.18.21-.36.23-.67.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.32-.02-.49.14-.64.14-.14.31-.36.47-.54.16-.19.21-.31.31-.52.11-.21.05-.39-.02-.55-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.54 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.37 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.98.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
}
