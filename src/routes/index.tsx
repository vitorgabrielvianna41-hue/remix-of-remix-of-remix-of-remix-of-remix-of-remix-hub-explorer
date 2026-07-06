import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { CONFIG } from "@/config/landing";

import heroMockup from "@/assets/hero-mockup-novo-v2.png";
import appNovo from "@/assets/app-inicio.png";
import appCustos from "@/assets/app-lote.png";
import appResultado from "@/assets/app-perfil.png";
import criadorImg from "@/assets/criador-rural.jpg";
import bonus1Img from "@/assets/bonus-rural-1.jpg";
import bonus2Img from "@/assets/bonus-rural-2.jpg";
import bonus3Img from "@/assets/bonus-rural-3.jpg";
import bonus4Img from "@/assets/bonus-rural-4.jpg";
import garantiaAsset from "@/assets/garantia-30-dias.png";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import depo4 from "@/assets/depo-4.jpg";
import depo5 from "@/assets/depo-5.jpg";
import depo6 from "@/assets/depo-6.jpg";

const garantiaImg = garantiaAsset;
const depoPhotos = [depo1, depo2, depo3, depo4, depo5, depo6];

export default function LandingPage() {
  return <Landing />;
}

/* -------- EARTHY PALETTE -------- */
const C = {
  navy: "#1a2e1f",       // dark forest
  navyDeep: "#0f1f12",   // deeper forest
  green: "#2D5016",      // primary green
  greenSoft: "#3d6b22",
  brown: "#5C3A21",
  brownSoft: "#8B5E3C",
  beige: "#E8D9B5",
  cream: "#FAF4E6",
  yellow: "#FFC107",     // CTA
  yellowDeep: "#E0A800",
  orange: "#E67E22",     // urgency
  white: "#FFFFFF",
  cardBorder: "#D9C9A3",
  ink: "#1f2a1a",
  inkSoft: "#4a5a44",
  inkMuted: "#7a8470",
  check: "#2D5016",
};

const heading: CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 900,
  letterSpacing: "-0.01em",
  textTransform: "uppercase",
};
const body: CSSProperties = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };

const CHECKOUT_BASIC = CONFIG.checkout.basic;
const CHECKOUT_COMPLETE = CONFIG.checkout.premium;

function todayPt() {
  const months = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO",
  ];
  const d = new Date();
  return `${d.getDate()} DE ${months[d.getMonth()]} DE ${d.getFullYear()}`;
}

function Landing() {
  return (
    <div style={{ ...body, backgroundColor: C.navyDeep, color: C.ink, minHeight: "100vh" }}>
      <TopBar />
      <Hero />
      <HowYouGet />
      <Pains />
      <HowItWorks />
      <Included />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <Guarantee />
      <Author />
      <FAQ />
      <FinalCTA />
      <SalesPopup />
    </div>
  );
}

/* ---------- SALES POPUP ---------- */
function SalesPopup() {
  const sales = CONFIG.salesPopup.sales;
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (cancelled) return;
      setVisible(true);
      setTimeout(() => !cancelled && setVisible(false), 5000);
    };
    const t0 = setTimeout(show, 3000);
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % sales.length);
      show();
    }, 10000);
    return () => {
      cancelled = true;
      clearTimeout(t0);
      clearInterval(interval);
    };
  }, [sales.length]);

  const s = sales[idx];
  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 9999,
        background: "#0a2e1f",
        color: "#fff",
        border: "1px solid #1a5c3a",
        borderRadius: 14,
        padding: "10px 36px 10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 20px 50px -15px rgba(0,0,0,0.5)",
        maxWidth: 320,
        fontFamily: "'Montserrat', sans-serif",
        transform: visible ? "translateX(0)" : "translateX(-130%)",
        opacity: visible ? 1 : 0,
        transition: "transform .45s ease, opacity .45s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "linear-gradient(135deg,#22c55e,#16a34a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 20,
        }}
      >
        🌱
      </div>
      <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.25, color: "#fde047" }}>
          {CONFIG.salesPopup.template(s.name, CONFIG.salesPopup.defaultPlan)}
        </div>
        <div style={{ fontSize: 11, color: "#86efac", marginTop: 2 }}>
          {s.city} · {s.time}
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Fechar"
        style={{
          position: "absolute",
          top: 6,
          right: 8,
          background: "transparent",
          border: 0,
          color: "#94a3b8",
          fontSize: 16,
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

/* ---------- TOPBAR ---------- */
function TopBar() {
  return (
    <div
      style={{
        background: C.orange,
        color: C.white,
        textAlign: "center",
        padding: "10px 12px",
        ...heading,
        fontSize: 13,
        letterSpacing: 0.5,
      }}
    >
      ⏰ {CONFIG.offer.topBarText}: {todayPt()}
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      style={{
        background: `radial-gradient(120% 80% at 50% 0%, #25422a 0%, ${C.navy} 55%, ${C.navyDeep} 100%)`,
        padding: "40px 16px 56px",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <span
          style={{
            ...heading,
            display: "inline-block",
            background: "rgba(255,193,7,0.10)",
            color: C.yellow,
            border: `1px solid ${C.yellow}`,
            padding: "8px 18px",
            borderRadius: 999,
            fontSize: 12,
            letterSpacing: 2,
          }}
        >
          {CONFIG.hero.badge}
        </span>
        <h1
          style={{
            ...heading,
            fontSize: "clamp(28px, 7.5vw, 64px)",
            lineHeight: 1.05,
            margin: "20px 0 0",
            color: C.white,
          }}
        >
          VOCÊ ESTÁ <span style={{ color: C.yellow }}>LUCRANDO</span> OU
          {" "}<span style={{ color: C.yellow }}>PERDENDO DINHEIRO</span> NA SUA PRODUÇÃO?
        </h1>
        <p style={{ ...heading, marginTop: 22, fontSize: 14, color: C.yellow, letterSpacing: 1 }}>
          {CONFIG.hero.socialProofCount} {CONFIG.hero.socialProofLabel}
        </p>
        <p
          style={{
            marginTop: 10,
            fontSize: 16,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 620,
            margin: "10px auto 0",
          }}
        >
          {CONFIG.hero.subheadline}
        </p>
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
          <img
            src={heroMockup}
            alt={`${CONFIG.brand.name} no celular`}
            style={{
              width: "min(520px, 100%)",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))",
            }}
          />
        </div>
        <CTAButton label={CONFIG.hero.ctaScrollLabel} scrollTo="planos" style={{ marginTop: 24 }} />
      </div>
    </section>
  );
}

function CTAButton({
  label,
  style,
  full,
  href = CHECKOUT_COMPLETE,
  scrollTo,
}: {
  label: string;
  style?: CSSProperties;
  full?: boolean;
  href?: string;
  scrollTo?: string;
}) {
  return (
    <a
      href={scrollTo ? `#${scrollTo}` : href}
      onClick={
        scrollTo
          ? (e) => {
              e.preventDefault();
              const el = document.getElementById(scrollTo);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          : undefined
      }
      style={{
        ...heading,
        background: `linear-gradient(180deg, ${C.yellow} 0%, ${C.yellowDeep} 100%)`,
        color: C.navyDeep,
        border: "none",
        borderRadius: 999,
        padding: "18px 36px",
        fontSize: 17,
        cursor: "pointer",
        display: full ? "block" : "inline-block",
        width: full ? "100%" : "auto",
        textAlign: "center",
        textDecoration: "none",
        boxSizing: "border-box",
        boxShadow: "0 18px 40px rgba(255,193,7,0.45), 0 0 0 6px rgba(255,193,7,0.10)",
        transition: "transform .15s ease",
        letterSpacing: 0.5,
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {label}
    </a>
  );
}

/* ---------- HOW YOU GET ---------- */
function HowYouGet() {
  const steps = [
    { icon: "📧", t: "Comprou? Você recebe o app no seu e-mail em menos de 2 minutos" },
    { icon: "📱", t: "Clica e abre o app direto no celular — sem baixar nada na loja" },
    { icon: "✅", t: "É só usar — funciona no campo, mesmo sem sinal de internet" },
  ];
  const badges = ["ACESSO IMEDIATO", "FUNCIONA OFFLINE", "ATUALIZAÇÕES GRATUITAS", "SUPORTE VIP"];
  return (
    <section style={{ background: C.navyDeep, padding: "10px 16px 56px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            background: "#1d2e22",
            borderRadius: 16,
            padding: 16,
            border: "1px solid rgba(255,193,7,0.18)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h3
            style={{
              ...heading,
              color: C.yellow,
              fontSize: "clamp(18px, 4.5vw, 24px)",
              letterSpacing: 1,
              margin: "0 0 10px",
              textAlign: "center",
            }}
          >
            COMO VOCÊ RECEBE O APP?
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {steps.map((s, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: C.white,
                  fontSize: 13,
                  lineHeight: 1.35,
                }}
              >
                <span style={{ fontSize: 14, flexShrink: 0, lineHeight: 1 }}>{s.icon}</span>
                <span>{s.t}</span>
              </li>
            ))}
          </ul>
          <p
            style={{
              margin: "6px 0 0",
              color: "#9bb09f",
              fontSize: 11,
              textAlign: "center",
            }}
          >
            Funciona em qualquer celular Android ou iPhone, com ou sem internet no campo.
          </p>
        </div>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {badges.map((b, i) => (
            <div
              key={i}
              style={{
                ...heading,
                color: "#7bc47f",
                fontSize: 12,
                letterSpacing: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>✓</span>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TAG ---------- */
function YellowTag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        ...heading,
        display: "inline-block",
        background: C.yellow,
        color: C.navyDeep,
        padding: "8px 18px",
        borderRadius: 999,
        fontSize: 12,
        letterSpacing: 2,
      }}
    >
      {children}
    </span>
  );
}

/* ---------- PAINS ---------- */
function Pains() {
  const items = [
    {
      icon: "🤷",
      t: "Vende a produção sem saber se está tendo lucro — e só descobre que perdeu dinheiro quando fecha as contas no fim do mês",
    },
    {
      icon: "📝",
      t: "Faz a conta de cabeça ou no caderno, esquece o frete, a energia, a ração — e termina o lote no prejuízo sem perceber",
    },
    {
      icon: "💸",
      t: "Negocia com o comprador no chute, baixa o preço pra fechar e descobre depois que vendeu por menos do que gastou pra produzir",
    },
    {
      icon: "📉",
      t: "Trabalha o ano inteiro, o lote vende, mas o dinheiro some — e você não sabe explicar pra onde foi",
    },
    {
      icon: "🧮",
      t: "Tenta usar planilha no computador, perde tempo, erra fórmula e desiste — fica chutando de novo no próximo lote",
    },
  ];
  return (
    <section style={{ background: C.cream, padding: "72px 20px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <YellowTag>VOCÊ SE IDENTIFICA?</YellowTag>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(28px, 6vw, 44px)",
            margin: "20px 0 8px",
            color: C.ink,
            lineHeight: 1.1,
          }}
        >
          ALGUMA DESSAS SITUAÇÕES
          <br />
          <span style={{ color: C.green }}>TE FEZ PERDER DINHEIRO?</span>
        </h2>
        <div style={{ width: 60, height: 4, background: C.yellow, margin: "18px auto 36px", borderRadius: 2 }} />
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, textAlign: "left" }}>
          {items.map((it, i) => (
            <li
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.cardBorder}`,
                borderRadius: 14,
                padding: "18px 22px",
                display: "flex",
                gap: 16,
                alignItems: "center",
                boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: C.beige,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {it.icon}
              </div>
              <span style={{ color: C.ink, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>{it.t}</span>
            </li>
          ))}
        </ul>
        <p
          style={{
            ...heading,
            marginTop: 40,
            color: C.ink,
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: 1.4,
          }}
        >
          SE MARCOU PELO MENOS 1 — ESSE APP FOI FEITO PRA VOCÊ.
        </p>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "1",
      img: appNovo,
      title: "LANCE O LOTE",
      desc: "Cadastre seu lote ou safra em segundos — avicultura, gado de leite, horta, suíno, peixe ou qualquer cultura. Só escolher o tipo e a quantidade.",
    },
    {
      n: "2",
      img: appCustos,
      title: "LANCE OS GASTOS",
      desc: "Vai lançando cada gasto que aparece: ração, mão de obra, frete, energia, insumo. Tudo no celular, sem planilha, sem calculadora.",
    },
    {
      n: "3",
      img: appResultado,
      title: "VEJA QUANTO SOBRA",
      desc: "Na hora o app mostra o custo real por unidade, o preço mínimo pra não perder dinheiro e o preço com seu lucro pra negociar firme.",
    },
  ];
  return (
    <section style={{ background: C.navyDeep, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
        <YellowTag>O APP NA PRÁTICA</YellowTag>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(28px, 6vw, 44px)",
            margin: "20px 0 0",
            color: C.white,
          }}
        >
          O QUE É O <span style={{ color: C.yellow }}>CUSTORURAL PRO</span>
        </h2>
        <div style={{ width: 60, height: 4, background: C.yellow, margin: "18px auto 48px", borderRadius: 2 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {steps.map((s) => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  ...heading,
                  color: C.yellow,
                  fontSize: 11,
                  letterSpacing: 2,
                  marginBottom: 6,
                }}
              >
                PASSO
              </div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,193,7,0.15)",
                  color: C.yellow,
                  ...heading,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  width: 220,
                  height: 440,
                  padding: 10,
                  background: "#0a0a0a",
                  border: "3px solid #1f2937",
                  borderRadius: 32,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)",
                  overflow: "hidden",
                  marginBottom: 22,
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: 22,
                    display: "block",
                  }}
                />
              </div>
              <h3 style={{ ...heading, fontSize: 18, color: C.white, margin: "0 0 10px" }}>{s.title}</h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  maxWidth: 260,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 15,
            margin: "48px auto 0",
            maxWidth: 620,
            lineHeight: 1.55,
          }}
        >
          E você ainda salva o histórico de cada lote, cadastra seus compradores e gera proposta de venda em PDF pra mandar pelo WhatsApp.
        </p>
        <CTAButton label="QUERO TESTAR AGORA" scrollTo="planos" style={{ marginTop: 30 }} />
      </div>
    </section>
  );
}

/* ---------- INCLUDED ---------- */
function Included() {
  const items = [
    "Cálculo do custo real por unidade produzida (kg, dúzia, litro, cabeça, caixa...)",
    "Preço mínimo pra não vender no prejuízo e preço com a sua margem de lucro",
    "Funciona pra avicultura, gado de leite, suíno, horta, peixe e qualquer produção",
    "Histórico de lotes salvos pra comparar safras e ver onde está perdendo dinheiro",
    "Cadastro de compradores e clientes + proposta de venda em PDF pelo WhatsApp",
    "Funciona offline no celular — usa direto no campo, sem sinal de internet",
    "Acesso vitalício + todas as atualizações futuras, sem mensalidade",
  ];
  return (
    <section style={{ background: C.navyDeep, padding: "60px 20px 80px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(28px, 6vw, 44px)",
            color: C.white,
            margin: 0,
          }}
        >
          O QUE ESTÁ <span style={{ color: C.yellow }}>INCLUÍDO</span>
        </h2>
        <div style={{ width: 60, height: 4, background: C.yellow, margin: "18px auto 36px", borderRadius: 2 }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
            textAlign: "left",
          }}
        >
          {items.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "16px 18px",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: C.yellow,
                  color: C.navyDeep,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, lineHeight: 1.5, fontWeight: 600 }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BONUSES ---------- */
function Bonuses() {
  const items = [
    { title: 'Curso "Produtor que Lucra"', img: bonus1Img, value: "R$ 37,00" },
    { title: '"Diagnóstico da Produção em 1 Hora"', img: bonus2Img, value: "R$ 37,00" },
    { title: 'Kit "Produtor Rural" para Fechar Venda no WhatsApp', img: bonus3Img, value: "R$ 37,00" },
    { title: '"Quanto Cobrar?" Guia de Preço por Região', img: bonus4Img, value: "R$ 37,00" },
  ];

  return (
    <section style={{ background: C.navyDeep, padding: "80px 20px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <YellowTag>SOMENTE NO PLANO PREMIUM</YellowTag>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(30px, 6vw, 46px)",
            margin: "20px 0 8px",
            color: C.white,
          }}
        >
          BÔNUS <span style={{ color: C.yellow }}>EXCLUSIVOS</span>
        </h2>
        <p style={{ ...heading, color: "rgba(255,255,255,0.65)", fontSize: 13, letterSpacing: 2, marginTop: 10 }}>
          ACESSO IMEDIATO COM O PLANO PREMIUM
        </p>
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
            padding: "4px 0 18px",
          }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: 16,
                padding: 12,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  background: "#fff",
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 14,
                }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <h3
                style={{
                  ...heading,
                  fontSize: 13,
                  color: C.white,
                  margin: "0 0 10px",
                  textTransform: "none",
                  letterSpacing: 0,
                  lineHeight: 1.3,
                  minHeight: 50,
                }}
              >
                {it.title}
              </h3>
              <div style={{ color: "#ef4444", fontSize: 13, textDecoration: "line-through" }}>{it.value}</div>
              <div style={{ ...heading, color: "#7bc47f", fontSize: 14, marginTop: 4 }}>HOJE GRÁTIS</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            border: `2px dashed ${C.yellow}`,
            borderRadius: 16,
            padding: 28,
            textAlign: "center",
            background: "rgba(255,193,7,0.04)",
            maxWidth: 420,
            marginInline: "auto",
          }}
        >
          <div style={{ ...heading, color: C.yellow, fontSize: 11, letterSpacing: 1.5 }}>VALOR TOTAL DOS BÔNUS</div>
          <div style={{ ...heading, color: C.white, fontSize: 56, lineHeight: 1, margin: "14px 0" }}>GRÁTIS</div>
          <div style={{ color: "#ef4444", textDecoration: "line-through", fontSize: 14 }}>(R$ 148,00)</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 14, lineHeight: 1.4 }}>
            Tudo incluído no Plano Premium
          </div>
          <div style={{ ...heading, color: "#7bc47f", fontSize: 13, marginTop: 12, letterSpacing: 1 }}>
            ACESSO IMEDIATO
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  return (
    <section id="planos" style={{ background: C.cream, padding: "80px 20px", scrollMarginTop: 24 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <YellowTag>INVESTIMENTO</YellowTag>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(30px, 6vw, 46px)",
            color: C.ink,
            margin: "20px 0 0",
          }}
        >
          ESCOLHA SEU <span style={{ color: C.green }}>PLANO</span>
        </h2>
        <div style={{ width: 60, height: 4, background: C.yellow, margin: "18px auto 48px", borderRadius: 2 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {/* BASIC */}
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.cardBorder}`,
              borderRadius: 18,
              padding: 32,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ ...heading, fontSize: 22, color: C.ink, margin: 0 }}>PLANO BÁSICO</h3>
            <div
              style={{
                ...heading,
                color: C.inkMuted,
                fontSize: 11,
                letterSpacing: 2,
                marginTop: 6,
              }}
            >
              VERSÃO COM LIMITAÇÕES
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "grid", gap: 12 }}>
              {[
                { ok: true, t: "App CustoRural Pro" },
                { ok: false, t: "Apenas 3 lotes salvos por mês" },
                { ok: false, t: "Sem cadastro de compradores" },
                { ok: false, t: "Sem proposta de venda em PDF" },
                { ok: false, t: "Sem bônus exclusivos" },
                { ok: false, t: "Sem atualizações futuras" },
              ].map((it, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: C.ink }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: it.ok ? "#dcfce7" : "#fee2e2",
                      color: it.ok ? "#16a34a" : "#dc2626",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    {it.ok ? "✓" : "✕"}
                  </span>
                  <span style={{ color: it.ok ? C.ink : C.inkMuted }}>{it.t}</span>
                </li>
              ))}
            </ul>
            <div style={{ flex: 1 }} />
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <div style={{ ...heading, fontSize: 40, color: C.ink, lineHeight: 1 }}>{CONFIG.pricing.basic}</div>
              <div style={{ ...heading, color: C.inkMuted, fontSize: 11, letterSpacing: 2, marginTop: 6 }}>
                {CONFIG.pricing.paymentType}
              </div>
            </div>
            <a
              href={CHECKOUT_BASIC}
              style={{
                ...heading,
                marginTop: 22,
                display: "block",
                background: C.ink,
                color: C.white,
                padding: "16px",
                borderRadius: 999,
                textDecoration: "none",
                textAlign: "center",
                fontSize: 14,
                letterSpacing: 1,
              }}
            >
              QUERO O PLANO BÁSICO
            </a>
          </div>

          {/* PREMIUM */}
          <div
            style={{
              background: C.navyDeep,
              borderRadius: 18,
              padding: 32,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              boxShadow: "0 30px 70px -20px rgba(255,193,7,0.35), 0 0 0 4px rgba(255,193,7,0.10)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -16,
                left: "50%",
                transform: "translateX(-50%)",
                background: C.yellow,
                color: C.navyDeep,
                ...heading,
                fontSize: 12,
                padding: "8px 20px",
                borderRadius: 999,
                letterSpacing: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              ⭐ MAIS RECOMENDADO
            </div>
            <h3 style={{ ...heading, fontSize: 22, color: C.white, margin: 0 }}>PLANO PREMIUM</h3>
            <div
              style={{
                ...heading,
                color: "rgba(255,255,255,0.6)",
                fontSize: 11,
                letterSpacing: 2,
                marginTop: 6,
              }}
            >
              TUDO LIBERADO PRO PRODUTOR
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "grid", gap: 11 }}>
              {[
                "App CustoRural Pro completo",
                "Cálculo do custo real e quanto sobra em cada lote",
                "Histórico ilimitado de lotes e safras",
                "Cadastro de compradores e proposta em PDF",
                "Acesso vitalício + atualizações",
              ].map((t, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: C.white }}
                >
                  <span style={{ color: "#7bc47f", fontWeight: 900 }}>✓</span>
                  <span>{t}</span>
                </li>
              ))}
              {[
                "BÔNUS: Curso Produtor que Lucra",
                "BÔNUS: Diagnóstico da Produção em 1 Hora",
                "BÔNUS: Kit Produtor Rural",
                "BÔNUS: Tabela de preços por região",
                "BÔNUS: Scripts de WhatsApp pra vender",
              ].map((t, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: C.white }}
                >
                  <span>🎁</span>
                  <span>{t}</span>
                </li>
              ))}
              <li
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 14,
                  color: C.yellow,
                  fontWeight: 700,
                }}
              >
                <span>⭐</span>
                <span>Inclui todos os 5 bônus</span>
              </li>
            </ul>
            <div style={{ flex: 1 }} />
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <div style={{ color: "#ef4444", textDecoration: "line-through", fontSize: 14 }}>
                De {CONFIG.pricing.premiumOriginal} por apenas
              </div>
              <div style={{ ...heading, fontSize: 48, color: C.white, lineHeight: 1, marginTop: 6 }}>{CONFIG.pricing.premium}</div>
              <div style={{ ...heading, color: "rgba(255,255,255,0.6)", fontSize: 11, letterSpacing: 2, marginTop: 6 }}>
                {CONFIG.pricing.paymentType}
              </div>
            </div>
            <CTAButton label="⚡ QUERO O PLANO PREMIUM" full style={{ marginTop: 22 }} />
          </div>
        </div>
        <p style={{ color: C.inkSoft, fontSize: 13, marginTop: 30 }}>
          🛡 {CONFIG.offer.guaranteeText} • {CONFIG.offer.paymentMethods}
        </p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS (text cards marquee) ---------- */
function Testimonials() {
  const testimonials = [
    {
      name: "José Roberto",
      city: "Toledo - PR",
      role: "Avicultura",
      text: "Eu vendia frango sem saber se tava no lucro. No primeiro lote que lancei no app vi que tava perdendo R$ 0,40 por kg. Mudei o preço com o comprador e agora sei o que sobra.",
    },
    {
      name: "Antônio Carlos",
      city: "Patos de Minas - MG",
      role: "Gado de leite",
      text: "Achei que era complicado, mas é só ir lançando os gastos. O app me mostrou que o litro tava saindo mais caro do que eu vendia. Reajustei e parei de trabalhar de graça.",
    },
    {
      name: "Pedro Henrique",
      city: "Cascavel - PR",
      role: "Suinocultura",
      text: "Trabalho com porco há 12 anos e sempre fiz conta no caderno. Esse app mostra na hora quanto sobra. Não negocio mais no chute, sei o quanto posso baixar.",
    },
    {
      name: "Sebastião",
      city: "Petrolina - PE",
      role: "Horticultura",
      text: "Plantio alface, couve, cheiro verde. Agora cada caixa que mando pra feira eu sei o custo e o preço mínimo. Já parei de vender barato pra atravessador.",
    },
    {
      name: "Geraldo",
      city: "Goiânia - GO",
      role: "Piscicultura",
      text: "Vendia tilápia no preço que o comprador colocava. Calculei tudo no app e descobri que tava no prejuízo há meses. Agora chego firme na negociação.",
    },
    {
      name: "Vitor Hugo",
      city: "Chapecó - SC",
      role: "Agricultura familiar",
      text: "Funciona offline, uso direto no sítio sem sinal. Lanço o gasto na hora que compro o insumo. No fim do lote tá tudo somado. Coisa boa demais.",
    },
  ];
  const loop = [...testimonials, ...testimonials];
  return (
    <section style={{ background: C.beige, padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", padding: "0 20px" }}>
        <YellowTag>RESULTADOS REAIS</YellowTag>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(28px, 6vw, 44px)",
            margin: "20px 0 0",
            color: C.ink,
            lineHeight: 1.1,
          }}
        >
          O QUE OS PRODUTORES
          <br />
          <span style={{ color: C.green }}>ESTÃO DIZENDO</span>
        </h2>
        <p style={{ ...heading, color: C.green, fontSize: 13, letterSpacing: 1.5, marginTop: 18 }}>
          QUEM PAROU DE VENDER NO ESCURO
        </p>
      </div>

      <style>{`
        @keyframes depMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .dep-track { animation: depMarquee 50s linear infinite; }
        .dep-track:hover { animation-play-state: paused; }
      `}</style>

      <div style={{ marginTop: 40, width: "100%", overflow: "hidden", position: "relative" }}>
        <div
          className="dep-track"
          style={{
            display: "flex",
            gap: 20,
            width: "max-content",
            padding: "10px 10px 20px",
          }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: 320,
                borderRadius: 18,
                background: C.white,
                border: `1px solid ${C.cardBorder}`,
                padding: 22,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.18)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={depoPhotos[i % depoPhotos.length]}
                  alt={t.name}
                  loading="lazy"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: `2px solid ${C.green}`,
                  }}
                />
                <div>
                  <div style={{ ...heading, fontSize: 14, color: C.ink, textTransform: "none" }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: C.inkMuted }}>{t.city} · {t.role}</div>
                </div>
              </div>
              <div style={{ color: "#f5c518", fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ margin: 0, color: C.inkSoft, fontSize: 14, lineHeight: 1.55 }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GUARANTEE ---------- */
function Guarantee() {
  return (
    <section style={{ background: C.cream, padding: "60px 20px" }}>
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          background: C.white,
          border: `1px solid ${C.cardBorder}`,
          borderRadius: 20,
          padding: "40px",
          display: "flex",
          alignItems: "center",
          gap: 36,
          flexWrap: "wrap",
          justifyContent: "center",
          boxShadow: "0 20px 50px -25px rgba(15,23,42,0.15)",
        }}
      >
        <img
          src={garantiaAsset}
          alt="Garantia de 30 dias"
          style={{
            width: 180,
            height: 180,
            objectFit: "contain",
            flexShrink: 0,
            filter: "drop-shadow(0 20px 30px rgba(255,193,7,0.45))",
          }}
        />
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2
            style={{
              ...heading,
              fontSize: "clamp(22px, 4vw, 32px)",
              color: C.ink,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            CONFIAMOS <span style={{ color: C.green }}>TANTO</span> NO PRODUTO QUE DAMOS{" "}
            <span style={{ color: C.green }}>30 DIAS</span> DE GARANTIA INCONDICIONAL
          </h2>
          <div style={{ width: 60, height: 4, background: C.yellow, margin: "18px 0", borderRadius: 2 }} />
          <p style={{ color: C.inkSoft, fontSize: 15, lineHeight: 1.6, margin: 0 }}>
            Teste o <strong style={{ color: C.ink }}>CustoRural Pro</strong> sem pressa.
            Se em 30 dias você achar que não serve pra sua produção — sem burocracia, sem perguntar nada,
            devolvemos cada centavo. Você não corre risco nenhum.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- AUTHOR ---------- */
function Author() {
  return (
    <section style={{ background: C.cream, padding: "60px 20px 80px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <YellowTag>A HISTÓRIA</YellowTag>
          <h2
            style={{
              ...heading,
              fontSize: "clamp(28px, 6vw, 44px)",
              color: C.ink,
              margin: "20px 0 0",
              lineHeight: 1.1,
            }}
          >
            QUEM CRIOU O <span style={{ color: C.green }}>CUSTORURAL PRO?</span>
          </h2>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 36,
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "3 / 4",
              width: "100%",
              maxWidth: 380,
              margin: "0 auto",
              display: "flex",
              alignItems: "flex-end",
              boxShadow: "0 20px 50px -20px rgba(15,23,42,0.4)",
            }}
          >
            <img
              src={criadorImg}
              alt="José Roberto - Produtor rural há +20 anos"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                padding: "30px 18px 14px",
                color: C.white,
              }}
            >
              <div style={{ ...heading, fontSize: 18 }}>José Roberto</div>
              <div style={{ ...heading, color: C.yellow, fontSize: 11, letterSpacing: 1.5, marginTop: 4 }}>
                PRODUTOR RURAL HÁ +20 ANOS
              </div>
            </div>
          </div>

          <div>
            <div style={{ ...heading, color: C.green, fontSize: 12, letterSpacing: 2 }}>A HISTÓRIA</div>
            <h3 style={{ ...heading, fontSize: 32, color: C.ink, margin: "10px 0 4px" }}>ME CHAMO</h3>
            <h3 style={{ ...heading, fontSize: 32, color: C.ink, margin: 0 }}>JOSÉ ROBERTO</h3>
            <div style={{ ...heading, color: C.green, fontSize: 13, marginTop: 12, letterSpacing: 0.5 }}>
              Produtor rural há +20 anos
            </div>

            <p style={{ color: C.inkSoft, fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>
              Trabalhei a vida toda no sítio. Comecei com avicultura, depois mexi com gado de leite e horta.
              E sempre tive o mesmo problema: nunca sabia se tava lucrando de verdade. Fazia conta de cabeça,
              anotava num caderninho, e no fim do ano o dinheiro tinha sumido.
            </p>
            <p style={{ color: C.inkSoft, fontSize: 15, lineHeight: 1.7, marginTop: 14 }}>
              Já vendi lote de frango por preço que mal pagou a ração. Já entreguei leite por valor que não cobria
              a luz e a mão de obra. E o pior: só descobria isso meses depois, quando já era tarde.
            </p>
            <p style={{ color: C.inkSoft, fontSize: 15, lineHeight: 1.7, marginTop: 14 }}>
              Foi por isso que criei o <strong style={{ color: C.ink }}>CustoRural Pro</strong> — um app simples
              que qualquer produtor usa no celular, mesmo sem internet no campo. Lança o gasto, vê o custo real
              e sabe na hora até onde pode negociar sem perder dinheiro.
            </p>

            <div
              style={{
                marginTop: 24,
                background: C.beige,
                borderLeft: `4px solid ${C.green}`,
                padding: "16px 20px",
                borderRadius: 8,
                color: C.ink,
                fontWeight: 700,
                fontSize: 15,
                lineHeight: 1.5,
              }}
            >
              "Se eu tivesse esse app quando comecei, teria evitado anos vendendo no prejuízo sem saber."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "Funciona pra qualquer tipo de produção?",
      a: "Sim. Funciona pra avicultura, suinocultura, gado de leite, gado de corte, horta, piscicultura, agricultura em geral — qualquer produção em que você tem gasto e vende um produto. Você escolhe a unidade (kg, litro, dúzia, cabeça, caixa) e o app calcula.",
    },
    {
      q: "Funciona sem internet no campo?",
      a: "Sim. O app é PWA e funciona 100% offline. Você lança os gastos direto no sítio, sem sinal de celular. Quando voltar pra área com internet, ele sincroniza sozinho.",
    },
    {
      q: "Preciso entender de planilha ou contabilidade?",
      a: "Não. Foi feito pra produtor que não gosta de planilha. Você só vai lançando os gastos (ração, mão de obra, frete, energia, insumo) e o app faz toda a conta sozinho.",
    },
    {
      q: "Como vou receber o app depois que comprar?",
      a: "Na hora. Em menos de 2 minutos chega no seu e-mail o link do app. Você clica, abre no celular e já começa a usar. Não precisa baixar nada na Play Store.",
    },
    {
      q: "Funciona no meu celular?",
      a: "Sim. Funciona em qualquer Android ou iPhone, mesmo aparelho mais antigo. Abre no navegador do celular, igual um site.",
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 30 dias pra pedir o dinheiro de volta, sem precisar explicar nada. Zero risco.",
    },
    {
      q: "Qual a diferença entre os planos?",
      a: "O Básico só deixa salvar 3 lotes por mês e não tem cadastro de comprador nem PDF. O Premium libera tudo: lotes ilimitados, histórico, compradores, proposta em PDF, atualizações vitalícias e os 5 bônus.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: "72px 20px", background: C.beige }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(26px, 5vw, 36px)",
            color: C.ink,
            margin: "0 0 28px",
            textAlign: "center",
          }}
        >
          AINDA COM <span style={{ color: C.green }}>DÚVIDA?</span>
        </h2>
        <div style={{ display: "grid", gap: 12 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.cardBorder}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: C.ink,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: 15,
                    fontWeight: 700,
                    textAlign: "left",
                    ...body,
                  }}
                >
                  <span>{it.q}</span>
                  <span style={{ color: C.green, fontSize: 22, lineHeight: 1, marginLeft: 12 }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p style={{ margin: "12px 0 0", color: C.inkSoft, fontSize: 14, lineHeight: 1.6 }}>{it.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyDeep} 100%)`,
        padding: "64px 20px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ ...heading, fontSize: "clamp(28px, 6vw, 40px)", color: C.white, margin: 0, lineHeight: 1.1 }}>
          PARE DE VENDER NO ESCURO. <span style={{ color: C.yellow }}>DESCUBRA SEU LUCRO AGORA.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.55, marginTop: 18 }}>
          {CONFIG.finalCta.body}
        </p>
        <CTAButton label={CONFIG.finalCta.ctaLabel} style={{ marginTop: 26 }} />
        <p style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
          {CONFIG.finalCta.footer}
        </p>
      </div>
    </section>
  );
}
