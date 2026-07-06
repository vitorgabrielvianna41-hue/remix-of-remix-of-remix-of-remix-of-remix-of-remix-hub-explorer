/**
 * Landing Page Configuration — OrçaFunilaria Pro (funileiros autônomos)
 */

export const CONFIG = {
  brand: {
    name: "OrçaFunilaria Pro",
    shortName: "OrçaFunilaria",
    tagline: "FEITO PARA FUNILEIROS",
    socialProofCount: "+1.000",
  },

  checkout: {
    basic: "#",
    premium: "#",
  },

  pricing: {
    basic: "R$ 10,00",
    premium: "R$ 19,90",
    premiumOriginal: "R$ 197,00",
    paymentType: "PAGAMENTO ÚNICO",
  },

  offer: {
    topBarText: "OFERTA VÁLIDA SOMENTE HOJE",
    guaranteeDays: 30,
    guaranteeText: "30 dias de garantia incondicional",
    paymentMethods: "Pagamento seguro via PIX ou Cartão",
  },

  hero: {
    badge: "🔧 FEITO PARA FUNILEIROS",
    subheadline:
      "Gere PDF profissional e personalizado com o OrçaFunilaria Pro em minutos e feche mais serviços.",
    socialProofCount: "+1.000",
    socialProofLabel: "FUNILEIROS JÁ USAM",
    ctaScrollLabel: "QUERO MEU ACESSO AGORA  →",
  },

  finalCta: {
    body: "Enquanto você lê isso, tem um funileiro que já mandou o PDF. Por menos de R$20 você nunca mais perde serviço por demora.",
    ctaLabel: "⚡ QUERO MEU ACESSO AGORA",
    footer: "✓ 30 dias de garantia   ✓ Acesso imediato   ✓ Sem mensalidade",
  },

  salesPopup: {
    template: (name: string, plan: string) => `${name} comprou o ${plan}`,
    defaultPlan: "Plano Premium",
    sales: [
      { name: "Cláudio", city: "Guarulhos - SP", time: "há 3 minutos" },
      { name: "Rogério", city: "Contagem - MG", time: "há 7 minutos" },
      { name: "Fábio", city: "Curitiba - PR", time: "há 12 minutos" },
      { name: "Anderson", city: "Duque de Caxias - RJ", time: "há 19 minutos" },
      { name: "Wagner", city: "Feira de Santana - BA", time: "há 22 minutos" },
      { name: "Marcelo", city: "Campinas - SP", time: "há 28 minutos" },
      { name: "Douglas", city: "Joinville - SC", time: "há 9 minutos" },
      { name: "Rafael", city: "Goiânia - GO", time: "há 41 minutos" },
    ],
  },
} as const;
