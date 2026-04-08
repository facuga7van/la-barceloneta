import { useState, type RefObject } from "react";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

const CARD_DATA = [
  {
    metric: "+6%",
    period: "Por 24 meses",
    title: "RENTA ASEGURADA",
    subtitle: "Renta fija garantizada por contrato (opcional).",
    detail: "Es la renta fija que obtenés desde el momento de tu inversión, garantizada por contrato durante los primeros 24 meses. Funciona como un retorno seguro e inmediato mientras el proyecto avanza en su etapa de construcción.",
    bgColor: "#141414",
  },
  {
    metric: "+8\u201312%",
    period: "Anual",
    title: "RENTA HOTELERA",
    subtitle: "Ganancia luego, con hotel (variable, mayor).",
    detail: "Es la renta que obtenés una vez que el edificio entra en operación hotelera. Se calcula en base a ocupación, tarifa promedio (ADR) y estadísticas reales del hotel, por eso es la renta más alta del modelo.",
    bgColor: "#f45f00",
  },
  {
    metric: "+5%",
    period: "Anual",
    title: "RENTA DE ESPERA",
    subtitle: "Ganancia durante obra (segura, baja).",
    detail: "Es la renta que obtenés mientras la obra se encuentra en construcción.\nFunciona como una compensación fija por acompañar el desarrollo desde sus primeras etapas.\n\nTiene un rendimiento estable y previsible, y te permite generar ingresos desde el inicio, aun antes de que el edificio entre en operación hotelera.",
    bgColor: "#1e3d59",
  },
];

export default function RentaCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const hscrollRef = useHorizontalScroll();

  return (
    <section
      ref={hscrollRef as RefObject<HTMLElement>}
      className="relative w-full overflow-hidden lg:h-screen"
      data-name="RentaCardsSection"
    >
      {/* Progress bar — desktop only */}
      <div
        data-hscroll-progress
        className="hidden lg:block fixed bottom-0 left-0 h-1 bg-[#f45f00] w-full z-50 origin-left"
      />

      {/* Card wrapper — flex-row on desktop for horizontal overflow */}
      <div
        data-hscroll-wrapper
        className="flex flex-col lg:flex-row lg:flex-nowrap lg:w-max items-stretch"
        data-name="Cards"
      >
      {CARD_DATA.map((card, i) => {
        const isActive = activeCard === i;
        const isHighlighted = hoveredCard === i || isActive;

        return (
          <div
            key={i}
            data-name={`Card${i + 1}`}
            data-hscroll-card
            className={`cursor-pointer h-[400px] lg:h-screen lg:w-[500px] lg:shrink-0 min-w-0 relative overflow-hidden transition-colors duration-300 border-t border-b border-[rgba(0,0,0,0.1)] ${i < 2 ? "lg:border-r border-[rgba(0,0,0,0.1)]" : ""}`}
            style={{ backgroundColor: isHighlighted ? card.bgColor : undefined }}
            onClick={() => setActiveCard(isActive ? null : i)}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Default state: metric + title/subtitle — absolute positioned */}
            <div
              className={`absolute inset-0 flex flex-col justify-end gap-[32px] p-[24px] lg:p-[40px] transition-all duration-300 ease-in-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              {/* (+) button — top-right corner */}
              <div className={`absolute top-[24px] lg:top-[40px] right-[24px] lg:right-[40px] w-[28px] h-[28px] rounded-full border flex items-center justify-center transition-colors duration-300 ${isHighlighted ? 'border-white/40 text-white/40' : 'border-[#c4c4c4] text-[#c4c4c4]'}`}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className={`font-['Helvetica:Regular',sans-serif] leading-[1] text-[40px] lg:text-[60px] tracking-[-0.6px] transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-[#1e3d59]'}`}>
                  {card.metric}
                </span>
                <span className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[20px] lg:text-[30px] tracking-[-0.6px] transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-[#575757]'}`}>
                  {card.period}
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[22px] lg:text-[30px] tracking-[-0.6px] transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-black'}`}>
                  {card.title}
                </p>
                <p className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[15px] lg:text-[18px] tracking-[-0.18px] opacity-80 transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-black'}`}>
                  {card.subtitle}
                </p>
              </div>
              {/* "Ver más" indicator */}
              <div className={`flex items-center gap-[6px] transition-opacity duration-300 ${isHighlighted ? 'opacity-100' : 'opacity-0'}`}>
                <span className={`font-['Helvetica:Regular',sans-serif] text-[13px] tracking-[-0.13px] ${isHighlighted ? 'text-white/70' : 'text-[#575757]'}`}>
                  Ver más
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-[1px]">
                  <path d="M7 3v8M3 7h8" stroke={isHighlighted ? "rgba(255,255,255,0.7)" : "#575757"} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Active/expanded state: title + detail — absolute positioned */}
            <div
              className={`absolute inset-0 flex flex-col gap-[16px] p-[24px] lg:p-[40px] overflow-y-auto transition-all duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[24px] text-white font-bold tracking-[-0.24px]">
                  {card.title}
                </h3>
                {/* Close "×" icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M5 5l10 10M15 5L5 15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              {card.detail.split("\n").map((line, li) =>
                line.trim() ? (
                  <p key={li} className="font-['Helvetica:Regular',sans-serif] text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.16px] leading-[1.6]">
                    {line}
                  </p>
                ) : <br key={li} />
              )}
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
}
