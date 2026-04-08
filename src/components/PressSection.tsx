import { useState, useRef } from "react";
import svgPaths from "../imports/svg-1a10080iez";
import imgImagen from "figma:asset/7694e423852a974cdbc6d9264be6bf9dd34a1208.webp";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

function Title5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full lg:flex-1" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
        <h2 className="block leading-[1.2] font-bold whitespace-pre-wrap">Prensa</h2>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[450px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[16px] tracking-[-0.15px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Los medios hablan del modelo de inversión en fracciones y de La Barceloneta.</p>
      </div>
    </div>
  );
}

function Header16() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] items-start lg:items-center relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
      <Title5 />
      <Content12 />
    </div>
  );
}

function StrategySection2() {
  return (
    <section className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[32px] lg:pb-[60px] pt-[40px] lg:pt-[80px] px-[16px] lg:px-[32px] relative w-full">
        <Header16 />
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Image">
      <div className="h-[64.044px] relative shrink-0 w-full max-w-[256.176px]" data-name="Logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256.176 64.0439">
          <path d={svgPaths.pda034c0} fill="var(--fill-0, white)" id="Logo" />
        </svg>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-auto lg:h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Forbes Argentina</h3>
      </div>
      <p className="flex-none lg:flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">Forbes Argentina destacó el crecimiento del formato 1/8 en CABA y el rol de La Barceloneta como referencia dentro del segmento condo-hotel.</p>
    </div>
  );
}

function Body() {
  return (
    <div data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text2 />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full overflow-hidden" data-name="Image">
      <div className="h-[180.396px] relative shrink-0 w-full max-w-[322.5px]" data-name="Imagen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Testimonio de prensa" loading="lazy" className="absolute h-[106.53%] left-[-2.79%] max-w-none top-[-3.77%] w-[106.05%] transition-transform duration-500 group-hover:scale-105" src={imgImagen} />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-auto lg:h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Perfil</h3>
      </div>
      <p className="flex-none lg:flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">El medio analizó la propuesta del modelo fraccionado y su impacto en el mercado inmobiliario actual.</p>
    </div>
  );
}

function Body1() {
  return (
    <div data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text3 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#f45f00] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Image">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[36px] lg:text-[45px] text-center text-white tracking-[-0.6px] w-full max-w-[302px] whitespace-pre-wrap">Próximamente</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-auto lg:h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Medio de Inversiones</h3>
      </div>
      <p className="flex-none lg:flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">Un análisis del mecanismo de renta (RE, RH, RA) y por qué está creciendo entre inversores jóvenes y conservadores por igual.</p>
    </div>
  );
}

function Body2() {
  return (
    <div data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text4 />
      </div>
    </div>
  );
}

function PrensaMobile() {
  const PRENSA_DATA = [
    { image: <Image />, body: <Body /> },
    { image: <Image1 />, body: <Body1 /> },
    { image: <Image2 />, body: <Body2 /> },
  ];

  return (
    <div className="flex flex-col gap-[24px] w-full px-[16px] lg:hidden">
      {PRENSA_DATA.map((item, i) => (
        <article key={i} data-press-logo className="flex flex-col w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] rounded-[12px] overflow-hidden">
          <div className="w-full h-[200px] shrink-0 flex">
            {item.image}
          </div>
          <div className="w-full">
            {item.body}
          </div>
        </article>
      ))}
    </div>
  );
}

function Frame53() {
  const [activePressa, setActivePressa] = useState<number | null>(null);

  const PRENSA_DATA = [
    { image: <Image />, body: <Body />, name: "Prensa 1" },
    { image: <Image1 />, body: <Body1 />, name: "Prensa 2" },
    { image: <Image2 />, body: <Body2 />, name: "Prensa 3" },
  ];

  return (
    <div className="hidden lg:flex content-stretch flex-row items-stretch relative shrink-0 w-full">
      {PRENSA_DATA.map((item, i) => {
        const isActive = activePressa === i;
        return (
          <article
            key={i}
            data-press-logo
            className={`bg-white flex-[1_0_0] h-[540px] min-w-0 relative overflow-hidden cursor-pointer ${!isActive ? "group" : ""}`}
            data-name={item.name}
            onClick={() => setActivePressa(isActive ? null : i)}
          >
            <div className="flex flex-col items-start overflow-clip rounded-[inherit] size-full">
              {item.image}
              <div className={`bg-white w-full overflow-hidden transition-[max-height] duration-500 ease-in-out shrink-0 ${isActive ? "max-h-[230px]" : "max-h-0 group-hover:max-h-[230px]"}`}>
                {item.body}
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
          </article>
        );
      })}
    </div>
  );
}

export default function PressSection() {
  const pressRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!pressRef.current) return;

    const mm = gsap.matchMedia();
    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion } = context.conditions!;
      const el = pressRef.current;
      if (!el) return;
      const logos = gsap.utils.toArray<HTMLElement>("[data-press-logo]", el);

      if (reduceMotion || logos.length === 0) {
        gsap.set(logos, { autoAlpha: 1, scale: 1 });
        return;
      }

      gsap.set(logos, { autoAlpha: 0, scale: 0.8 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(logos, {
            autoAlpha: 1,
            scale: 1,
            stagger: { each: 0.1, from: "edges" },
            ease: "back.out(1.2)",
            duration: 0.6,
          });
        },
        once: true,
      });
    });
  }, { scope: pressRef });

  return (
    <section ref={pressRef} id="prensa" className="content-stretch flex flex-col items-start pb-[60px] lg:pb-[120px] relative shrink-0 w-full">
      <StrategySection2 />
      <Frame53 />
      <PrensaMobile />
    </section>
  );
}
