import { useState, useRef, useEffect, useCallback } from "react";

const CARD_DATA = [
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
  {
    metric: "+30%",
    period: "Estimado",
    title: "VALORIZACIÓN",
    subtitle: "Plusvalía del inmueble a medida que avanza la obra.",
    detail: "Es la ganancia de capital que obtenés por la revalorización de tu fracción.\nA medida que la obra avanza y el edificio se acerca a su entrega, el valor de mercado de cada unidad aumenta.\n\nEsta valorización se refleja en el precio de reventa de tu fracción, generando una ganancia patrimonial que se suma a las rentas.",
    bgColor: "#141414",
  },
];

export default function RentaCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);

  const onCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Refs for measuring expanded content height for smooth animation
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [detailHeights, setDetailHeights] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const heights = detailRefs.current.map(el => el?.scrollHeight ?? 0);
    setDetailHeights(heights);
  }, [activeCard]);

  return (
    <div className="content-stretch flex flex-col lg:flex-row items-stretch relative shrink-0 w-full" data-name="Cards">
      {CARD_DATA.map((card, i) => {
        const isActive = activeCard === i;

        return (
          <div
            key={i}
            data-name={`Card${i + 1}`}
            data-gsap="fade-up"
            className={`cursor-pointer flex-[1_0_0] min-h-[400px] lg:min-h-[540px] min-w-0 lg:min-w-[340px] relative flex flex-col p-[24px] lg:p-[40px] transition-all duration-300 overflow-hidden border-t border-b border-[rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none ${i < 2 ? "lg:border-r border-[rgba(0,0,0,0.1)]" : ""}`}
            style={{ backgroundColor: isActive ? card.bgColor : undefined }}
            onClick={() => setActiveCard(isActive ? null : i)}
            onMouseMove={onCardMouseMove}
            onMouseLeave={() => setGlowPos(null)}
          >
            {/* Cursor-following glow spotlight */}
            {isActive && glowPos && (
              <div
                className="absolute pointer-events-none z-0 rounded-full opacity-20 blur-[60px]"
                style={{
                  width: 200, height: 200,
                  left: glowPos.x - 100, top: glowPos.y - 100,
                  background: "white",
                  transition: "left 0.15s ease-out, top 0.15s ease-out",
                }}
              />
            )}
            {/* (+) / (×) toggle button — always visible */}
            <div className={`absolute top-[24px] lg:top-[40px] right-[24px] lg:right-[40px] w-[28px] h-[28px] rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-white/40 text-white/40 rotate-45' : 'border-[#c4c4c4] text-[#c4c4c4]'}`}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            {/* Default state: metric + title/subtitle */}
            <div
              className={`flex flex-col flex-1 justify-end gap-[32px] transition-all duration-400 ease-in-out ${isActive ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100"}`}
            >
              <div className="flex flex-col gap-[8px]">
                <span className={`font-['Helvetica:Regular',sans-serif] leading-[1] text-[40px] lg:text-[60px] tracking-[-0.6px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#1e3d59]'}`}>
                  {card.metric}
                </span>
                <span className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[20px] lg:text-[30px] tracking-[-0.6px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#575757]'}`}>
                  {card.period}
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[22px] lg:text-[30px] tracking-[-0.6px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-black'}`}>
                  {card.title}
                </p>
                <p className={`font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[15px] lg:text-[18px] tracking-[-0.18px] opacity-80 transition-colors duration-300 ${isActive ? 'text-white' : 'text-black'}`}>
                  {card.subtitle}
                </p>
              </div>
              {/* "Ver más" indicator — always visible */}
              <div className="flex items-center gap-[6px]">
                <span className={`font-['Helvetica:Regular',sans-serif] text-[13px] tracking-[-0.13px] transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-[#575757]'}`}>
                  Ver más
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-[1px]">
                  <path d="M7 3v8M3 7h8" stroke={isActive ? "rgba(255,255,255,0.7)" : "#575757"} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Active/expanded state: title + detail — animated with max-height */}
            <div
              ref={el => { detailRefs.current[i] = el; }}
              className="overflow-hidden transition-all duration-400 ease-in-out"
              style={{
                maxHeight: isActive ? `${detailHeights[i] || 600}px` : "0px",
                opacity: isActive ? 1 : 0,
              }}
            >
              <div className="flex flex-col gap-[16px] pt-[8px]">
                <h3 className="font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[24px] text-white font-bold tracking-[-0.24px]">
                  {card.title}
                </h3>
                {card.detail.split("\n").map((line, li) =>
                  line.trim() ? (
                    <p key={li} className="font-['Helvetica:Regular',sans-serif] text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.16px] leading-[1.6]">
                      {line}
                    </p>
                  ) : <br key={li} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
