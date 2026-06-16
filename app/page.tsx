import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { ParallaxImageSection } from "@/components/ParallaxImageSection";
import { SiteEffects } from "@/components/SiteEffects";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50768535483";
const whatsappText = encodeURIComponent("Hola YIA, quiero agendar una llamada de diagnóstico gratis de 30 minutos.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const benefits = [
  {
    title: "Sabes si realmente ganaste",
    text: "Reportes mensuales claros para entender ingresos, gastos, utilidad y flujo de caja sin depender de suposiciones."
  },
  {
    title: "Cumples con la DGI sin vivir preocupado",
    text: "Declaraciones de ITBMS, renta y obligaciones fiscales organizadas dentro de un proceso mensual."
  },
  {
    title: "QuickBooks incluido",
    text: "Tecnología contable dentro del honorario para que tu información esté más ordenada y accesible."
  },
  {
    title: "Comunicación ejecutiva",
    text: "No solo recibes papeles: recibes lectura financiera, próximos pasos y señales de alerta para decidir mejor."
  }
];

const includes = [
  "Registros contables mensuales",
  "Reportes financieros entendibles",
  "Declaración de ITBMS y renta",
  "QuickBooks incluido en el servicio",
  "Revisión mensual ejecutiva",
  "Análisis trimestral de estrategia"
];

const process = [
  {
    step: "01",
    title: "Diagnóstico gratis de 30 minutos",
    text: "Conversamos sobre tu empresa, dolores actuales, contador anterior, reportes y riesgos fiscales."
  },
  {
    step: "02",
    title: "Ordenamos la información",
    text: "Revisamos documentos, movimientos, obligaciones y estructura para iniciar con claridad."
  },
  {
    step: "03",
    title: "Reportes y seguimiento mensual",
    text: "Cada mes sabes cuánto ganaste, cuánto debes, qué viene y qué decisión conviene tomar."
  }
];

export default function Home() {
  return (
    <>
      <SiteEffects />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de YIA">
          <img src="/images/logo-yia.png" alt="YIA - Your Innovative Accountant" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#incluye">Servicio</a>
          <a href="#proceso">Proceso</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <img className="hero-bg" src="/images/hero-yia.webp" alt="Contabilidad moderna con reportes financieros" />
          <div className="hero-overlay" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-content">
            <p className="eyebrow reveal">YIA · Your Innovative Accountant</p>
            <h1 className="reveal">Contabilidad mensual para PYMES que quieren entender sus números.</h1>
            <p className="hero-copy reveal">
              Registros contables, reportes financieros, declaraciones de impuestos y QuickBooks incluido para que sepas cada mes cuánto ganaste, cuánto debes y qué viene.
            </p>
            <div className="hero-actions reveal">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agenda diagnóstico gratis
              </a>
              <a className="button button-ghost" href="#contacto">
                Dejar mis datos
              </a>
            </div>
            <div className="hero-proof reveal" aria-label="Diferenciadores de YIA">
              <span>QuickBooks incluido</span>
              <span>Reportes claros</span>
              <span>Comunicación mensual</span>
            </div>
          </div>
        </section>

        <section className="section section-light" id="para-quien">
          <div className="container two-column intro-grid">
            <div>
              <p className="eyebrow reveal">Para quién es YIA</p>
              <h2 className="section-title reveal">Para dueños que crecieron y ya no pueden manejar la empresa a ciegas.</h2>
            </div>
            <div className="large-copy reveal">
              <p>
                Si tu empresa depende de Excel, un contador que responde tarde o reportes que no explican nada, YIA te ayuda a convertir la contabilidad en una herramienta real de decisión.
              </p>
              <p>
                El objetivo no es hablarte en jerga contable. Es que entiendas tus números y puedas dormir tranquilo con la DGI.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="beneficios">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow reveal">Beneficios</p>
              <h2 className="section-title reveal">Menos incertidumbre. Más control financiero.</h2>
              <p className="section-subtitle reveal">
                YIA combina contabilidad, tecnología y comunicación ejecutiva para que el dueño entienda lo que pasa en su negocio.
              </p>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article className="benefit-card reveal" key={benefit.title}>
                  <span className="card-icon" aria-hidden="true" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ParallaxImageSection
          eyebrow="La diferencia de YIA"
          title="Deja de adivinar. Mira tus números con claridad cada mes."
          text="Una contabilidad moderna no solo presenta declaraciones: te muestra qué está pasando, qué viene y qué decisión conviene tomar."
          cta="Escribir por WhatsApp"
          href={whatsappUrl}
          image="/images/parallax-yia.webp"
        />

        <section className="section section-dark split-showcase" id="incluye">
          <div className="container two-column showcase-grid">
            <div className="showcase-media reveal">
              <img src="/images/reports-yia.webp" alt="Reportes financieros mensuales de YIA" />
            </div>
            <div className="showcase-copy">
              <p className="eyebrow reveal">Qué incluye el servicio mensual</p>
              <h2 className="section-title reveal">Contabilidad completa, tecnología incluida y reportes que sí puedes leer.</h2>
              <p className="section-subtitle reveal">
                El servicio está diseñado para PYMES que necesitan orden, cumplimiento y una lectura financiera clara cada mes.
              </p>
              <div className="include-list">
                {includes.map((item) => (
                  <div className="include-item reveal" key={item}>
                    <span aria-hidden="true">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="proceso">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow reveal">Cómo funciona</p>
              <h2 className="section-title reveal">Un proceso simple para empezar con orden.</h2>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article className="process-card reveal" key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section advisory-section">
          <img className="advisory-bg" src="/images/consultation-yia.webp" alt="Consulta estratégica de contabilidad para PYMES" />
          <div className="advisory-overlay" />
          <div className="container advisory-content">
            <p className="eyebrow reveal">Sobre el acompañamiento</p>
            <h2 className="reveal">No necesitas otro reporte que nadie lee. Necesitas una conversación clara sobre tu empresa.</h2>
            <p className="reveal">
              YIA te acompaña con una comunicación cercana-profesional: seria, directa y sin complicarte con términos contables innecesarios.
            </p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container two-column faq-grid">
            <div>
              <p className="eyebrow reveal">Preguntas frecuentes</p>
              <h2 className="section-title reveal">Respuestas claras antes de iniciar.</h2>
              <p className="section-subtitle reveal">
                La idea es que sepas si YIA encaja con tu empresa antes de tomar una decisión.
              </p>
            </div>
            <Faq />
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow reveal">Diagnóstico gratis</p>
              <h2 className="section-title reveal">Cuéntanos de tu empresa y empecemos por ordenar el panorama.</h2>
              <p className="section-subtitle reveal">
                Completa el formulario corto o escribe directo por WhatsApp. La llamada inicial dura 30 minutos y sirve para entender tu situación contable actual.
              </p>
              <div className="contact-links reveal">
                <a href="mailto:hola@yia.com.pa">hola@yia.com.pa</a>
                <a href="https://www.instagram.com/yiapanama" target="_blank" rel="noreferrer">@yiapanama</a>
                <a href="https://www.tiktok.com/@yiapanama" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </div>
            <div className="form-shell reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <img src="/images/logo-yia.png" alt="YIA" />
            <p>Contabilidad mensual tercerizada para PYMES en Panamá.</p>
          </div>
          <div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:hola@yia.com.pa">hola@yia.com.pa</a>
            <a href="https://www.instagram.com/yiapanama" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  );
}
