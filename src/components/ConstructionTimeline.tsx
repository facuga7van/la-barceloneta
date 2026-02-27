const STEPS = [
  { date: "Nov 24", pct: 30, label: "Estructura" },
  { date: "Mar 25", pct: 45, label: "Cerramientos" },
  { date: "Jul 25", pct: 55, label: "Instalaciones" },
  { date: "Nov 25", pct: 65, label: "Terminaciones" },
  { date: "Mar 26", pct: 80, label: "Equipamiento" },
  { date: "Jul 26", pct: 100, label: "Entrega" },
];

const ACTIVE_STEP = 2; // Instalaciones (55%)

export default function ConstructionTimeline() {
  return (
    <div className="relative shrink-0 w-full px-[4px] pt-[16px] pb-[48px]" data-name="Construction Timeline">
      {/* Progress bar track */}
      <div className="relative h-[2px] w-full mb-[32px]">
        <div className="absolute inset-0 bg-[#f1f1f1]" />
        <div
          className="absolute left-0 top-0 h-full bg-[#040404] transition-all duration-500"
          style={{ width: `${STEPS[ACTIVE_STEP].pct}%` }}
        />
      </div>

      {/* Steps */}
      <div className="flex items-start justify-between relative w-full">
        {STEPS.map((step, i) => {
          const isActive = i === ACTIVE_STEP;
          const isDone = i < ACTIVE_STEP;
          const position = (i / (STEPS.length - 1)) * 100;

          return (
            <div
              key={i}
              className="flex flex-col items-center gap-[8px]"
              style={{ width: `${100 / STEPS.length}%` }}
            >
              {/* Dot */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "size-[20px] bg-[#040404] ring-4 ring-[#040404]/20"
                    : isDone
                    ? "size-[12px] bg-[#040404]"
                    : "size-[12px] bg-[#c4c4c4]"
                }`}
              />
              {/* Percentage */}
              <p
                className={`font-['Helvetica:Regular',sans-serif] text-[13px] tracking-[-0.13px] text-center leading-[1.2] ${
                  isActive ? "text-[#040404] font-['Helvetica:Bold',sans-serif]" : "text-[#a3a3a3]"
                }`}
              >
                {step.pct}%
              </p>
              {/* Label */}
              <p
                className={`font-['Helvetica:Regular',sans-serif] text-[13px] tracking-[-0.13px] text-center leading-[1.2] ${
                  isActive ? "text-[#040404] font-['Helvetica:Bold',sans-serif]" : "text-[#575757]"
                }`}
              >
                {step.label}
              </p>
              {/* Date */}
              <p className="font-['Helvetica:Regular',sans-serif] text-[11px] text-[#a3a3a3] tracking-[-0.11px] text-center leading-[1.2]">
                {step.date}
              </p>
              {/* Active indicator */}
              {isActive && (
                <div className="mt-[4px] bg-[#040404] text-white text-[11px] font-['Helvetica:Bold',sans-serif] px-[8px] py-[2px] rounded-[4px] whitespace-nowrap">
                  Etapa actual
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
