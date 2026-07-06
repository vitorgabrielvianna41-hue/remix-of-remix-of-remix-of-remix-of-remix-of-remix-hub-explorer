/**
 * Landing Page Configuration — CustoRural Pro (produtores rurais)
 */

export const CONFIG = {
  brand: {
    name: "CustoRural Pro",
    shortName: "CustoRural",
    tagline: "FEITO PARA PRODUTORES RURAIS",
    socialProofCount: "+1.000",
  },

  checkout: {
    basic: "https://pay.wiapy.com/wWwDzWDijsG",
    premium: "https://pay.wiapy.com/jWBv9O_vwY",
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
    badge: "🌱 FEITO PARA PRODUTORES RURAIS",
    subheadline:
      "Descubra em minutos o custo real da sua produção, o preço mínimo pra não ter prejuízo e quanto cobrar pra ter lucro de verdade.",
    socialProofCount: "+1.000",
    socialProofLabel: "PRODUTORES JÁ USAM",
    ctaScrollLabel: "QUERO CALCULAR MEU LUCRO  →",
  },

  finalCta: {
    body: "Enquanto você lê isso, tem produtor vendendo no prejuízo sem saber. Por menos de R$20 você descobre exatamente quanto sobra em cada lote.",
    ctaLabel: "⚡ QUERO TESTAR AGORA",
    footer: "✓ 30 dias de garantia   ✓ Acesso imediato   ✓ Sem mensalidade",
  },

  salesPopup: {
    template: (name: string, plan: string) => `${name} comprou o ${plan}`,
    defaultPlan: "Plano Premium",
    sales: [
      { name: "José", city: "Toledo - PR", time: "há 3 minutos" },
      { name: "Antônio", city: "Uberaba - MG", time: "há 7 minutos" },
      { name: "Pedro", city: "Cascavel - PR", time: "há 12 minutos" },
      { name: "Marcos", city: "Patos de Minas - MG", time: "há 19 minutos" },
      { name: "Geraldo", city: "Goiânia - GO", time: "há 22 minutos" },
      { name: "Sebastião", city: "Petrolina - PE", time: "há 28 minutos" },
      { name: "Vitor", city: "Chapecó - SC", time: "há 9 minutos" },
      { name: "Edson", city: "Dourados - MS", time: "há 41 minutos" },
    ],
  },
} as const;
