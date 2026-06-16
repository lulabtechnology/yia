const faqs = [
  {
    question: "¿Y si ya tengo contador?",
    answer:
      "Perfecto. La pregunta no es solo si alguien declara impuestos, sino si recibes reportes claros, respuesta oportuna y una lectura mensual de lo que está pasando en tu empresa. YIA revisa tu situación y te explica si conviene ordenar, complementar o migrar."
  },
  {
    question: "¿QuickBooks está incluido?",
    answer:
      "Sí. La propuesta de YIA integra tecnología contable dentro del servicio mensual, para que la información esté organizada y no dependas de hojas de cálculo sueltas."
  },
  {
    question: "¿Atienden empresas fuera de Ciudad de Panamá?",
    answer:
      "Sí. La landing está pensada para captar PYMES en todo Panamá, con énfasis en Ciudad de Panamá, Panamá Oeste y Colón."
  },
  {
    question: "¿Me pueden ayudar si tengo atraso o desorden contable?",
    answer:
      "Sí. El diagnóstico inicial sirve para entender el estado actual de la contabilidad, detectar riesgos y definir un plan de organización antes de trabajar mes a mes."
  },
  {
    question: "¿Publican precios en la landing?",
    answer:
      "No. El primer paso es una llamada de diagnóstico gratis de 30 minutos para entender la empresa, el volumen de operación y el alcance real del servicio."
  }
];

export function Faq() {
  return (
    <div className="faq-list">
      {faqs.map((item) => (
        <details className="faq-item reveal" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
