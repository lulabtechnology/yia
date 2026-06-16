# YIA Landing Page

Landing page moderna para **YIA - Your Innovative Accountant**, lista para subir a GitHub y desplegar en Vercel.

## Stack

- Next.js 14.2.5 App Router
- React 18.3.1
- TypeScript 5.5.4
- CSS moderno sin dependencias de UI
- Inter cargada globalmente
- Animaciones con CSS + IntersectionObserver
- Parallax real con JavaScript optimizado para desktop y celular
- API route opcional para leads por correo usando Resend

## Instalación local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Deploy en Vercel

1. Sube la carpeta a GitHub.
2. En Vercel: **Add New Project**.
3. Importa el repositorio.
4. Framework: Vercel detecta Next.js automáticamente.
5. Deploy.

## Variables de entorno opcionales

Copia `.env.example` a `.env.local` si quieres probar localmente.

```env
RESEND_API_KEY=
LEAD_TO_EMAIL=hola@yia.com.pa
LEAD_FROM_EMAIL=YIA Leads <leads@tudominio.com>
NEXT_PUBLIC_WHATSAPP_NUMBER=50768535483
```

Sin `RESEND_API_KEY`, el formulario igual abre WhatsApp con los datos prellenados. Para envío real por correo, configura Resend y verifica el dominio de envío.

## Cambiar imágenes

Las imágenes están en:

```text
public/images/
```

- `logo-yia.png`
- `hero-yia.webp`
- `parallax-yia.webp`
- `reports-yia.webp`
- `consultation-yia.webp`

## Ajustes rápidos

- WhatsApp: cambia `NEXT_PUBLIC_WHATSAPP_NUMBER` o el valor de fallback en `app/page.tsx`, `components/ContactForm.tsx` y `components/WhatsAppFloat.tsx`.
- Textos: edita `app/page.tsx`.
- Colores: edita las variables de `app/globals.css`.


## Nota Vercel

Este ZIP fija versiones estables y desactiva el uso de package-lock durante la instalación para evitar errores de dependencias en Vercel.

