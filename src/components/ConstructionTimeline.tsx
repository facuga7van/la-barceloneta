import { useState } from "react";

const STEPS = [
  { date: "Nov 2024", pct: 30, label: "Estructura", description: "Hormigón armado, columnas y losas de todos los pisos completados." },
  { date: "Mar 2025", pct: 45, label: "Cerramientos", description: "Carpintería exterior, vidrios y fachada en proceso de instalación." },
  { date: "Jul 2025", pct: 55, label: "Instalaciones", description: "Instalaciones eléctricas, sanitarias y de gas en ejecución." },
  { date: "Nov 2025", pct: 65, label: "Terminaciones", description: "Pisos, revestimientos, pintura y detalles de terminación." },
  { date: "Mar 2026", pct: 80, label: "Equipamiento", description: "Equipamiento de amenities, ascensores y áreas comunes." },
  { date: "Jul 2026", pct: 100, label: "Entrega", description: "Entrega final de unidades y puesta en marcha del condo-hotel." },
];

/**
 * ACTIVE_STEP — Índice del paso actual de obra (0-based).
 *   0 = Estructura (30%), 1 = Cerramientos (45%), 2 = Instalaciones (55%),
 *   3 = Terminaciones (65%), 4 = Equipamiento (80%), 5 = Entrega (100%)
 */
const ACTIVE_STEP = 2;

const ACCENT = "#1e3d59";

interface ConstructionTimelineProps {
  imageSrc: string;
}

export default function ConstructionTimeline({ imageSrc }: ConstructionTimelineProps) {
  const [selectedStep, setSelectedStep] = useState(ACTIVE_STEP);
  const step = STEPS[selectedStep];

  const goTo = (index: number) => {
    if (index >= 0 && index < STEPS.length) setSelectedStep(index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-stretch w-full">

        {/* Timeline panel */}
        <div className="flex-1 flex flex-col min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-x-visible">

          {/* Progress bar + dots unified container */}
          <div className="relative w-full min-w-[480px] lg:min-w-0">
            {/* Bar track */}
            <div className="relative h-[4px] w-full rounded-full overflow-hidden bg-[#e8ebef]">
              <div
                className="absolute left-0 top-0 h-full rounded-full transition-[width] duration-700 ease-out"
                style={{ width: `${STEPS[selectedStep].pct}%`, background: `linear-gradient(90deg, ${ACCENT}, #48749e)` }}
              />
            </div>

            {/* Step dots — overlaid on bar */}
            <div className="flex items-start justify-between w-full mt-[20px] lg:mt-[24px]">
              {STEPS.map((s, i) => {
                const isSelected = i === selectedStep;
                const isDone = i <= ACTIVE_STEP;

                return (
                  <button
                    key={i}
                    type="button"
                    className="flex flex-col items-center gap-[8px] bg-transparent border-none cursor-pointer p-0 group min-w-[72px] lg:min-w-0"
                    style={{ width: `${100 / STEPS.length}%` }}
                    onClick={() => goTo(i)}
                    aria-label={`${s.label} — ${s.pct}%`}
                    aria-current={isSelected ? "step" : undefined}
                  >
                    {/* Dot */}
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <div className="absolute size-[28px] rounded-full opacity-20 transition-transform duration-300" style={{ background: ACCENT }} />
                      )}
                      <div
                        className={`rounded-full transition-all duration-300 relative z-[1] ${
                          isSelected
                            ? "size-[14px]"
                            : isDone
                            ? "size-[10px] group-hover:size-[12px]"
                            : "size-[10px] bg-[#d4d4d4] group-hover:bg-[#aaa] group-hover:size-[12px]"
                        }`}
                        style={isSelected || isDone ? { background: ACCENT } : undefined}
                      />
                    </div>
                    {/* Label + date */}
                    <div className="flex flex-col items-center gap-[2px]">
                      <span
                        className={`font-['Helvetica:Regular',sans-serif] text-[10px] sm:text-[11px] lg:text-[11px] xl:text-[13px] tracking-[-0.11px] text-center leading-[1.3] transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                          isSelected ? "font-bold text-[#040404]" : isDone ? "text-[#575757]" : "text-[#aaa]"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span className={`font-['Helvetica:Regular',sans-serif] text-[9px] sm:text-[10px] lg:text-[10px] xl:text-[11px] tracking-[-0.11px] text-center leading-[1.2] whitespace-nowrap lg:whitespace-normal ${isSelected ? "text-[#575757]" : "text-[#c4c4c4]"}`}>
                        {s.date}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail card */}
          <div className="mt-[20px] lg:mt-[28px] rounded-[16px] p-[20px] lg:p-[28px] flex flex-col gap-[14px] border border-[#e8ebef]" style={{ background: "linear-gradient(135deg, #f8fafb 0%, #f0f4f7 100%)" }}>
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex items-baseline gap-[10px]">
                <span key={step.pct} className="font-['Helvetica:Bold',sans-serif] text-[32px] lg:text-[44px] tracking-[-1.5px] leading-none animate-[numberPop_0.3s_ease-out]" style={{ color: ACCENT }}>
                  {step.pct}%
                </span>
                <span key={step.label} className="font-['Helvetica:Bold',sans-serif] text-[16px] lg:text-[20px] text-[#040404] tracking-[-0.3px] leading-[1.2] animate-[numberPop_0.3s_ease-out]">
                  {step.label}
                </span>
              </div>
              {selectedStep === ACTIVE_STEP && (
                <span className="text-white text-[11px] lg:text-[12px] font-['Helvetica:Bold',sans-serif] px-[10px] py-[4px] rounded-[8px] whitespace-nowrap" style={{ background: ACCENT }}>
                  En curso
                </span>
              )}
              {selectedStep < ACTIVE_STEP && (
                <span className="bg-[#039360] text-white text-[11px] lg:text-[12px] font-['Helvetica:Bold',sans-serif] px-[10px] py-[4px] rounded-[8px] whitespace-nowrap">
                  Completado
                </span>
              )}
              {selectedStep > ACTIVE_STEP && (
                <span className="bg-[#c4c4c4] text-white text-[11px] lg:text-[12px] font-['Helvetica:Bold',sans-serif] px-[10px] py-[4px] rounded-[8px] whitespace-nowrap">
                  Próximamente
                </span>
              )}
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] text-[14px] lg:text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.6] m-0">
              {step.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-[16px] lg:mt-[20px]">
            <button
              type="button"
              className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer py-[8px] px-[12px] -ml-[12px] rounded-[10px] transition-all duration-200 ${selectedStep > 0 ? "text-[#040404] hover:bg-[#f1f1f1]" : "text-[#d4d4d4] cursor-default"}`}
              onClick={() => goTo(selectedStep - 1)}
              disabled={selectedStep === 0}
              aria-label="Etapa anterior"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-['Helvetica:Regular',sans-serif] text-[13px] hidden sm:inline">Anterior</span>
            </button>
            <div className="flex gap-[6px]">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`rounded-full border-none cursor-pointer transition-all duration-300 ${i === selectedStep ? "w-[20px] h-[6px]" : "size-[6px] hover:bg-[#999]"}`}
                  style={i === selectedStep ? { background: ACCENT } : { background: i <= ACTIVE_STEP ? "#bbb" : "#ddd" }}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a ${STEPS[i].label}`}
                />
              ))}
            </div>
            <button
              type="button"
              className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer py-[8px] px-[12px] -mr-[12px] rounded-[10px] transition-all duration-200 ${selectedStep < STEPS.length - 1 ? "text-[#040404] hover:bg-[#f1f1f1]" : "text-[#d4d4d4] cursor-default"}`}
              onClick={() => goTo(selectedStep + 1)}
              disabled={selectedStep === STEPS.length - 1}
              aria-label="Etapa siguiente"
            >
              <span className="font-['Helvetica:Regular',sans-serif] text-[13px] hidden sm:inline">Siguiente</span>
              <svg className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image panel — taller */}
        <div className="w-full lg:flex-1 h-[320px] sm:h-[400px] lg:h-auto lg:min-h-[480px] relative rounded-[16px] overflow-hidden">
          <img
            alt={`Avance de obra — ${step.label} (${step.pct}%)`}
            loading="lazy"
            className="absolute inset-0 max-w-none object-cover size-full"
            src={imageSrc}
          />
          {/* Subtle overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent h-[120px] lg:h-[160px]" />
          <div className="absolute bottom-0 left-0 right-0 p-[20px] lg:p-[28px]">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-['Helvetica:Bold',sans-serif] text-white text-[28px] lg:text-[42px] tracking-[-1px] leading-none drop-shadow-lg">
                  {step.pct}%
                </span>
                <p className="font-['Helvetica:Regular',sans-serif] text-white/80 text-[13px] lg:text-[15px] mt-[4px] drop-shadow">
                  {step.label}
                </p>
              </div>
              <span className="font-['Helvetica:Regular',sans-serif] text-white/60 text-[12px] lg:text-[13px] drop-shadow">
                {step.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
