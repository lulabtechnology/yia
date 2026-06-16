import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yia.com.pa"),
  title: {
    default: "YIA | Contabilidad mensual para PYMES en Panamá",
    template: "%s | YIA"
  },
  description:
    "Servicio mensual de contabilidad tercerizada para PYMES en Panamá: registros contables, reportes financieros, declaraciones de impuestos y QuickBooks incluido.",
  keywords: [
    "contador para pymes Panamá",
    "contabilidad para empresas Panamá",
    "servicios contables Panamá",
    "outsourcing contable Panamá",
    "declaración de renta empresas Panamá",
    "ITBMS Panamá",
    "QuickBooks Panamá"
  ],
  openGraph: {
    title: "YIA | Contabilidad mensual para PYMES en Panamá",
    description:
      "Tus números claros, tus impuestos bajo control y reportes financieros que sí puedes entender.",
    url: "https://yia.com.pa",
    siteName: "YIA - Your Innovative Accountant",
    images: [
      {
        url: "/images/hero-yia.webp",
        width: 1672,
        height: 941,
        alt: "YIA contabilidad moderna para PYMES"
      }
    ],
    locale: "es_PA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "YIA | Contabilidad mensual para PYMES en Panamá",
    description:
      "Contabilidad mensual, reportes claros y QuickBooks incluido para dueños de empresas en Panamá.",
    images: ["/images/hero-yia.webp"]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  themeColor: "#1F2937",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
