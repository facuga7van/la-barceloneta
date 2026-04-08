import { useState, useEffect, useRef, useCallback } from "react";
import { Facebook as FbIcon, Instagram as IgIcon, Linkedin as LiIcon } from "lucide-react";
import ConstructionTimeline from "../components/ConstructionTimeline";
import Layout from "../components/Layout";
import HeroSection, { LogoGm } from "../components/HeroSection";
import ContactSection, { ContactHeader } from "../components/ContactForm";
import RentaCards from "../components/RentaCards";
import PressSection from "../components/PressSection";
import svgPaths from "./svg-1a10080iez";
import imgImage5483 from "figma:asset/5fa2811ceac5459ca22dc90ff1434b4271d95280.webp";
import imgImage5472 from "figma:asset/e3b035696adca0a791535c23f307956a1eceb398.webp";
import imgImage5457 from "figma:asset/a1e4300735e617601eb68cb252aab3a81e0488cb.webp";
import imgArrowRight02 from "figma:asset/742d27d63a4c2ac7129e534a9d89fd15a13a1a99.webp";
import imgArrowRight3 from "figma:asset/4f6aa36958afd713bc1c8acb59b4994a3636420d.webp";
import imgArrowRight4 from "figma:asset/ee42972642d8fa9e5f8cda6dbdda134bd59958d1.webp";
import imgArrowRight5 from "figma:asset/e7b02b83f7d79cd443a54c11301740ab75dd548e.webp";
import imgArrowRight6 from "figma:asset/6af0a074825e112e70f7ac339572847d568610c2.webp";
import imgImage1 from "figma:asset/aecf8491a4aed42a021d65d003982cb10eaa27bb.webp";
import imgImage5477 from "figma:asset/f57b3df53eecbd1024de251092ca13b5ba9f2c7f.webp";
import imgImage5484 from "figma:asset/c2f24df4b6ca0039f037d93862af8ddfbae7000b.webp";
import imgImage5458 from "figma:asset/914b7a18cc94a82207d92425d5761fe22525c121.webp";


// New assets from client feedback
import imgLogoFeelFree from "figma:asset/LB BS AS FEEL FREE - ROSA.svg";
import imgSeccionOctavos from "figma:asset/SECCION-MOSTRANDO-OCTAVOS.webp";
import imgLogoNeuquen from "figma:asset/LB NEUQUÉN CELESTE.svg";
import imgNeuquenExpansion from "figma:asset/lb-enandb.webp";
import imgLogoLB from "figma:asset/LB LOGO.svg";
import imgRooftop from "figma:asset/Copia de Copia de Copia de OCHA-BRC-ROOF TOP-CHILLA-14.webp";
import imgGaleriaArte from "figma:asset/GALERÍA DE ARTE 3.webp";
import imgBarJazz from "figma:asset/BAR 5.webp";
import imgRecreationRoom from "figma:asset/RECREATION ROOM 7.webp";
import imgAreaBienestar from "figma:asset/Copia de Copia de Copia de OCHA-BRC-AMENITIE-ZEN 1.webp";


const GRID_IMAGES = [
  { src: imgArrowRight5, alt: "Interior lounge" },
  { src: imgArrowRight3, alt: "Rooftop terraza" },
  { src: imgArrowRight4, alt: "SPA y piscina" },
  { src: imgArrowRight6, alt: "Piscina vista aérea" },
  { src: imgArrowRight02, alt: "Terraza nocturna" },
  { src: imgArrowRight5, alt: "Interior lounge" },
  { src: imgArrowRight3, alt: "Rooftop terraza" },
  { src: imgArrowRight4, alt: "SPA y piscina" },
];

function Images() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);
  const speed = 0.6; // px per frame

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        scrollPos.current += speed;
        if (scrollPos.current >= halfWidth) {
          scrollPos.current -= halfWidth;
        }
        el.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // Duplicate items for seamless loop
  const items = [...GRID_IMAGES, ...GRID_IMAGES];

  return (
    <div className="w-full overflow-hidden bg-black shrink-0 relative" data-name="Images">
      <div
        ref={trackRef}
        className="flex gap-[16px] p-[16px] overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {items.map((img, i) => (
          <div
            key={i}
            className="flex-none w-[305px] h-[410px] overflow-hidden group"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const imgEl = e.currentTarget.querySelector("img");
              if (!imgEl) return;
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
              imgEl.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
            }}
            onMouseLeave={(e) => {
              const imgEl = e.currentTarget.querySelector("img");
              if (imgEl) imgEl.style.transform = "";
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out pointer-events-none"
            />
          </div>
        ))}
      </div>
      {/* Gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-black/60 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-black/60 to-transparent z-10" />
    </div>
  );
}

function Banner() {
  return (
    <a id="brochure" href="https://drive.google.com/file/d/1-NlHPsM-R_g7Uc5tK72hWYvNuhRM20gR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative shrink-0 w-full block cursor-pointer no-underline" data-name="Banner" data-gsap="scale-in">
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <div className="aspect-[2320/264] relative shrink-0 w-full" data-name="image 5483">
          <img alt="La Barceloneta Buenos Aires" loading="eager" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5483} />
        </div>
      </div>
    </a>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full lg:flex-1" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
        <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">¿Cómo gano con este modelo?</h2>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[450px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[16px] tracking-[-0.15px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Nos ajustamos a tus posibilidades de inversión otorgando beneficios desde el principio. Para que más que invertir en un inmueble inviertas en una experiencia.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] items-start lg:items-center relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
      <Title />
      <Content1 />
    </div>
  );
}

function ComoGano() {
  return (
    <section id="como-gano" className="relative shrink-0 w-full" data-name="Como gano">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] lg:pb-[40px] pt-[32px] lg:pt-[48px] px-[24px] lg:px-[80px] xl:px-[260px] relative w-full">
        <Header />
      </div>
    </section>
  );
}


function Title1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full lg:flex-1" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
        <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">Elegí tu fracción</h2>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[450px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[16px] tracking-[-0.15px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Accedé a una unidad desde USD 22.500 y hacé que tu ladrillo trabaje por vos.</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] items-start lg:items-center relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
      <Title1 />
      <Content5 />
    </div>
  );
}

function StrategySection() {
  return (
    <section id="fracciones" className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] lg:pb-[40px] pt-[32px] lg:pt-[48px] px-[24px] lg:px-[80px] xl:px-[260px] relative w-full">
        <Header1 />
      </div>
    </section>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative rounded-[99px] shrink-0 w-full max-w-[542px] z-[3]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="bg-[#040404] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative size-full">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
              <p className="leading-[1.2]">Monoloft NORTE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative size-full">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#040404] text-[15px] text-center tracking-[-0.15px] whitespace-nowrap">
              <p className="leading-[1.2]">Monoloft SUR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="hidden lg:block absolute bg-[rgba(0,0,0,0.1)] h-[434px] left-0 right-[604px] top-[28px] z-[2]">
      <div aria-hidden="true" className="absolute border-[#040404] border-r-2 border-solid inset-[0_-2px_0_0] pointer-events-none" />
    </div>
  );
}

function Grafico({
  planSrc = imgImage5472,
  fraction = 0,
  totalFractions = 8,
  onFractionChange,
}: {
  planSrc?: string;
  fraction?: number;
  totalFractions?: number;
  onFractionChange?: (f: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getFraction = (clientX: number) => {
    if (!containerRef.current) return fraction;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return Math.round((x / rect.width) * (totalFractions - 1));
  };

  // Sync with slider: dot 0 = left edge (0%), dot 7 = right edge (100%)
  const overlayPct = (fraction / (totalFractions - 1)) * 100;

  return (
    <div
      ref={containerRef}
      className="content-stretch flex shrink-0 isolate items-center justify-center h-[220px] sm:h-[280px] md:h-[350px] lg:h-[422px] relative w-full z-[2] select-none cursor-ew-resize"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        onFractionChange?.(getFraction(e.clientX));
      }}
      onPointerMove={(e) => {
        if (e.buttons === 0) return;
        onFractionChange?.(getFraction(e.clientX));
      }}
      data-name="Grafico"
    >
      {/* Floor plan image */}
      <div className="relative h-[200px] sm:h-[260px] md:h-[330px] lg:h-[422px] shrink-0 w-full max-w-[597.609px] z-[1]">
        <img
          alt="Plano del departamento"
          loading="lazy"
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={planSrc}
          data-name="image 5472"
        />
      </div>
      {/* Draggable overlay — grows left→right as fraction increases */}
      <div
        className="absolute top-0 left-0 h-full bg-[rgba(0,0,0,0.08)] z-[2] pointer-events-none"
        style={{ width: `${overlayPct}%`, transition: "width 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
      >
        {/* Right border = thumb cursor */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#040404]" />
      </div>
    </div>
  );
}

function Unselected() {
  return <div className="bg-[#040404] rounded-[9999px] shrink-0 size-[8px] z-[15]" data-name="Unselected" />;
}

function Selection() {
  return (
    <div className="bg-[#040404] relative rounded-[9999px] shrink-0 size-[20px] z-[13]" data-name="Selection">
      <p className="absolute font-['Helvetica:Bold',sans-serif] leading-[1.2] left-1/2 -translate-x-1/2 not-italic text-[#040404] text-[15px] lg:text-[22px] text-center top-[24px] tracking-[-0.22px] whitespace-nowrap">1/8</p>
    </div>
  );
}

function Unselected1() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[11]" data-name="Unselected" />;
}

function Unselected2() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[9]" data-name="Unselected" />;
}

function Unselected3() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[7]" data-name="Unselected" />;
}

function Unselected4() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[5]" data-name="Unselected" />;
}

function Unselected5() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[3]" data-name="Unselected" />;
}

function Unselected6() {
  return <div className="bg-[#f1f1f1] rounded-[9999px] shrink-0 size-[8px] z-[1]" data-name="Unselected" />;
}

function Slider() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full z-[1]" data-name="Slider">
      <Unselected />
      <div className="bg-[#040404] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[14]" data-name="Divider" />
      <Selection />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[12]" data-name="Divider" />
      <Unselected1 />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[10]" data-name="Divider" />
      <Unselected2 />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[8]" data-name="Divider" />
      <Unselected3 />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[6]" data-name="Divider" />
      <Unselected4 />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[4]" data-name="Divider" />
      <Unselected5 />
      <div className="bg-[#f1f1f1] flex-[1_0_0] h-[2px] min-h-px min-w-px z-[2]" data-name="Divider" />
      <Unselected6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-auto lg:h-[544px] isolate items-center relative shrink-0 w-full lg:w-[713px]">
      <Frame13 />
      <Grafico />
      <Slider />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-start justify-between py-[16px] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px] w-full" data-name="Header">
      <p className="relative shrink-0">TU INVERSIÓN</p>
      <p className="relative shrink-0 text-right">U$D 22.500</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">RENTA DE ESPERA</p>
      <p className="font-['Helvetica:Regular',sans-serif] opacity-70 relative shrink-0 text-[#a3a3a3] text-[15px] tracking-[-0.15px]">(5% anual)</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-end min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">+U$D 247</p>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full" data-name="Header">
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">RENTA HOTELERA</p>
      <p className="font-['Helvetica:Regular',sans-serif] opacity-70 relative shrink-0 text-[#a3a3a3] text-[15px] tracking-[-0.15px]">(5% anual)</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-end min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">+U$D 247</p>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full" data-name="Header">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">RENTA ASEGURADA</p>
      <p className="font-['Helvetica:Regular',sans-serif] opacity-70 relative shrink-0 text-[#a3a3a3] text-[15px] tracking-[-0.15px]">(5% anual)</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-end min-h-px min-w-px relative">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px]">+U$D 247</p>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full" data-name="Header">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.2] min-h-px min-w-px not-italic py-[40px] relative self-stretch">
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <p className="font-['Helvetica:Regular',sans-serif] opacity-70 relative shrink-0 text-[#040404] text-[13px] tracking-[-0.13px] w-full max-w-[393px] whitespace-pre-wrap">* Los valores son estimados. La renta hotelera (RH) puede variar según ocupación y tarifa.</p>
    </div>
  );
}

function FractionViewerInteractive() {
  const [activeTab, setActiveTab] = useState<"norte" | "sur">("norte");
  const [activeDot, setActiveDot] = useState(1);

  const TOTAL_FRACTIONS = 8;
  const TOTAL_DOTS = TOTAL_FRACTIONS + 1; // 0/8 through 8/8
  const BASE = activeTab === "norte" ? 22500 : 25000;
  const fractions = activeDot; // 0 = no fractions, 1-8 = fractions
  const investment = BASE * fractions;
  const rentaEspera     = fractions > 0 ? Math.round(investment * 0.05  / 12) : 0;
  const rentaHotelera   = fractions > 0 ? Math.round(investment * 0.10  / 12) : 0;
  const rentaAsegurada  = fractions > 0 ? Math.round(investment * 0.05  / 12) : 0;

  const fmt = (n: number) => n.toLocaleString("es-AR");

  const planSrc = imgImage5472;

  const sliderTrackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start pt-[32px] relative shrink-0 w-full">
      {/* Left: tabs + floor plan + slider */}
      <div className="content-stretch flex flex-col gap-[24px] isolate items-center relative shrink-0 w-full lg:w-[713px] overflow-hidden" data-gsap="fade-left">
        {/* Norte/Sur tabs */}
        <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative rounded-[99px] shrink-0 w-full max-w-[542px] z-[3]">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
          {(["norte", "sur"] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[40px] cursor-pointer transition-colors duration-200 ${activeTab === tab ? "bg-[#040404]" : ""}`}
            >
              <div className="flex items-center justify-center size-full">
                <span className={`font-['Helvetica:Regular',sans-serif] text-[15px] text-center tracking-[-0.15px] whitespace-nowrap transition-colors duration-200 ${activeTab === tab ? "text-white" : "text-[#040404]"}`}>
                  {tab === "norte" ? "Monoloft NORTE" : "Monoloft SUR"}
                </span>
              </div>
            </button>
          ))}
        </div>
        {/* Floor plan */}
        <Grafico planSrc={planSrc} fraction={activeDot} totalFractions={TOTAL_DOTS} onFractionChange={setActiveDot} />
        {/* Slider — click dots to select fraction */}
        <div ref={sliderTrackRef} className="content-stretch flex isolate items-center relative shrink-0 w-full z-[1] px-[8px] mb-8" data-name="Slider">
          {Array.from({ length: TOTAL_DOTS }).flatMap((_, i) => {
            const isSelected = i === activeDot;
            const isBefore = i <= activeDot;
            const items: React.ReactElement[] = [];
            if (i > 0) {
              // Line between dot i-1 and dot i: painted if dot i is at or before selected
              items.push(
                <div key={`d-${i}`} className={`flex-[1_0_0] h-[2px] min-h-px min-w-px transition-colors duration-300 ${isBefore ? "bg-[#040404]" : "bg-[#c4c4c4]"}`} />
              );
            }
            items.push(
              <button
                key={`b-${i}`}
                type="button"
                onClick={() => setActiveDot(i)}
                className="relative cursor-pointer flex items-center justify-center shrink-0 p-[4px]"
                aria-label={`${i}/${TOTAL_FRACTIONS} fracciones`}
              >
                {isSelected ? (
                  <div className="bg-[#040404] rounded-[9999px] size-[14px] relative transition-transform duration-300 scale-100">
                    <p className="absolute font-['Helvetica:Bold',sans-serif] font-bold text-[#040404] text-[16px] tracking-[-0.16px] leading-[1.2] top-[20px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                      {`${i}/${TOTAL_FRACTIONS}`}
                    </p>
                  </div>
                ) : (
                  <div className={`rounded-[9999px] size-[14px] border-2 transition-all duration-300 ${isBefore ? "bg-[#040404] border-[#040404]" : "bg-white border-[#c4c4c4]"}`} />
                )}
              </button>
            );
            return items;
          })}
        </div>
      </div>
      {/* Right: dynamic investment table */}
      <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.2] min-h-px lg:min-w-px not-italic py-[20px] lg:py-[40px] relative border-t border-[rgba(0,0,0,0.1)] lg:border-none lg:self-stretch" data-gsap="fade-right">
        {/* TU INVERSIÓN */}
        <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] w-full">
          <p className="relative shrink-0">TU INVERSIÓN</p>
          <p key={investment} className="relative shrink-0 text-right animate-[numberPop_0.3s_ease-out]">U$D {fmt(investment)}</p>
        </div>
        {/* RENTA DE ESPERA */}
        <div className="content-stretch flex items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center min-w-0">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[14px] lg:text-[22px] tracking-[-0.22px]">RENTA DE ESPERA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] lg:text-[15px] tracking-[-0.15px] opacity-70">(5% anual)</p>
          </div>
          <div className="flex items-end justify-end shrink-0">
            <p key={rentaEspera} className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] animate-[numberPop_0.3s_ease-out]">+U$D {fmt(rentaEspera)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[11px] lg:text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        {/* RENTA HOTELERA */}
        <div className="content-stretch flex items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center min-w-0">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[14px] lg:text-[22px] tracking-[-0.22px]">RENTA HOTELERA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] lg:text-[15px] tracking-[-0.15px] opacity-70">(5% anual)</p>
          </div>
          <div className="flex items-end justify-end shrink-0">
            <p key={rentaHotelera} className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] animate-[numberPop_0.3s_ease-out]">+U$D {fmt(rentaHotelera)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[11px] lg:text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        {/* RENTA ASEGURADA */}
        <div className="content-stretch flex items-start justify-between py-[12px] lg:py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center min-w-0">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[14px] lg:text-[22px] tracking-[-0.22px]">RENTA ASEGURADA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] lg:text-[15px] tracking-[-0.15px] opacity-70">(5% anual)</p>
          </div>
          <div className="flex items-end justify-end shrink-0">
            <p key={rentaAsegurada} className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[16px] lg:text-[22px] tracking-[-0.22px] animate-[numberPop_0.3s_ease-out]">+U$D {fmt(rentaAsegurada)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[11px] lg:text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        <p className="font-['Helvetica:Regular',sans-serif] opacity-70 text-[#040404] text-[12px] lg:text-[13px] tracking-[-0.13px] w-full lg:w-[393px] whitespace-pre-wrap">* Los valores son estimados. La renta hotelera (RH) puede variar según ocupación y tarifa.</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[32px] relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function ValueSection() {
  return (
    <div id="proyecto" className="relative shrink-0 w-full overflow-hidden" data-name="Value Section">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pb-[32px] lg:pb-[80px] px-[16px] lg:px-[32px] relative w-full">
          <FractionViewerInteractive />
        </div>
      </div>
    </div>
  );
}

function Number() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 data-gsap-title className="block leading-[1.2]">El proyecto</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number />
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header" data-gsap="fade-up">
      <Title2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[22px] lg:text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">USD 22.500</p>
      <div className="h-0 relative shrink-0 w-full lg:w-[235px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 1">
            <path d="M0 0.5H235" id="Vector 12" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:check">
          <path d={svgPaths.p39131100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Feature Item">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px]">Llave en mano</p>
    </div>
  );
}

function LinkButon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Buton">
      <MaterialSymbolsCheck />
      <FeatureItem />
    </div>
  );
}

function MaterialSymbolsCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:check">
          <path d={svgPaths.p39131100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Feature Item">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px]">Apto explotación hotelera</p>
    </div>
  );
}

function LinkButon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Buton">
      <MaterialSymbolsCheck1 />
      <FeatureItem1 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Features Container">
      <LinkButon />
      <LinkButon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] lg:gap-[59px] items-start relative shrink-0 w-full lg:w-[235px]" data-name="Container">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[18px] lg:text-[22px] text-white tracking-[-0.22px] w-[min-content] whitespace-pre-wrap">desde</p>
      <Content6 />
      <FeaturesContainer />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="hidden lg:flex absolute bg-[#ff5a63] bottom-[-40px] content-stretch h-auto items-center p-[30px] right-[98px] w-[295px] z-10" data-name="Content Wrapper">
      <Container3 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[72.49px] top-[72px]">
      <div className="absolute bottom-[571px] h-[9.985px] left-[72.49px] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 9.98461">
          <path d={svgPaths.p1c176180} fill="var(--fill-0, #FF5A63)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[16.641px] left-[72.49px] top-[72px] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 16.6407">
          <path d={svgPaths.p2ba960f0} fill="var(--fill-0, #FF5A63)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[84.21%] left-[72.49px] top-[13.41%] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 16.6407">
          <path d={svgPaths.p390a5a00} fill="var(--fill-0, #FF5A63)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Portada() {
  return (
    <div className="bg-[#0d3477] flex-[1_0_0] min-h-px min-w-px relative w-full overflow-visible" data-name="Portada" data-gsap="scale-in" data-parallax="slow">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute aspect-[592/665] bottom-[20px] lg:bottom-[40px] mix-blend-screen opacity-84 right-[16px] lg:right-[62px] top-[20px] lg:top-[35px] animate-[float_6s_ease-in-out_infinite]" data-name="image 5457">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Edificio La Barceloneta" loading="lazy" className="absolute h-[114.29%] left-[-0.05%] max-w-none top-[-14.29%] w-[100.11%]" src={imgImage5457} />
        </div>
      </div>
      <ContentWrapper />
      <div className="absolute h-[50px] lg:h-[82px] left-[16px] lg:left-[72px] top-[16px] lg:top-[35px] w-[200px] lg:w-[334px]" data-name="logo feel free">
        <img alt="La Barceloneta Feel Free" loading="lazy" className="absolute inset-0 max-w-none object-contain object-left pointer-events-none size-full" src={imgLogoFeelFree} />
      </div>
      <div className="absolute font-['Barlow_Condensed:Medium',sans-serif] left-[16px] lg:left-[5.84%] bottom-[16px] lg:bottom-auto lg:top-[40.04%] right-[16px] lg:right-[12.41%] leading-none not-italic text-[#ff5a63] text-[24px] sm:text-[40px] lg:text-[101.098px] tracking-[-1px] sm:tracking-[-3px] lg:tracking-[-8.7698px] uppercase whitespace-pre-wrap">
        <p className="mb-0">La Barceloneta</p>
        <p>buenos aires</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[15px] tracking-[-0.15px] w-full" data-name="Row 1">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">Entrega estimada</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center relative shrink-0 text-[#575757] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Segundo semestre 2026</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[11.328px] left-[36.24px] top-[31.92px] w-[44.419px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.419 11.3282">
        <g id="Group">
          <path d={svgPaths.p2f323bc0} fill="var(--fill-0, #1D1D1B)" id="Vector" />
          <path d={svgPaths.p26798a80} fill="var(--fill-0, #1D1D1B)" id="Vector_2" />
          <path d={svgPaths.p35449700} fill="var(--fill-0, #1D1D1B)" id="Vector_3" />
          <path d={svgPaths.p242e3300} fill="var(--fill-0, #1D1D1B)" id="Vector_4" />
          <path d={svgPaths.p21db3cf0} fill="var(--fill-0, #1D1D1B)" id="Vector_5" />
          <path d={svgPaths.p188202a0} fill="var(--fill-0, #1D1D1B)" id="Vector_6" />
          <path d={svgPaths.p124e8680} fill="var(--fill-0, #1D1D1B)" id="Vector_7" />
          <path d={svgPaths.p2d509e00} fill="var(--fill-0, #1D1D1B)" id="Vector_8" />
          <path d={svgPaths.p311f9600} fill="var(--fill-0, #1D1D1B)" id="Vector_9" />
          <path d={svgPaths.p2090ce90} fill="var(--fill-0, #1D1D1B)" id="Vector_10" />
          <path d={svgPaths.pbca4d00} fill="var(--fill-0, #1D1D1B)" id="Vector_11" />
          <path d={svgPaths.p1836fe00} fill="var(--fill-0, #1D1D1B)" id="Vector_12" />
          <path d={svgPaths.p3df8b800} fill="var(--fill-0, #1D1D1B)" id="Vector_13" />
          <path d={svgPaths.p6f4e180} fill="var(--fill-0, #1D1D1B)" id="Vector_14" />
          <path d={svgPaths.p1f2b1700} fill="var(--fill-0, #1D1D1B)" id="Vector_15" />
          <path d={svgPaths.p19ce7400} fill="var(--fill-0, #1D1D1B)" id="Vector_16" />
          <path d={svgPaths.p3915b100} fill="var(--fill-0, #1D1D1B)" id="Vector_17" />
          <path d={svgPaths.p34f60180} fill="var(--fill-0, #1D1D1B)" id="Vector_18" />
          <path d={svgPaths.p1ff90600} fill="var(--fill-0, #1D1D1B)" id="Vector_19" />
          <path d={svgPaths.p85b300} fill="var(--fill-0, #1D1D1B)" id="Vector_20" />
          <path d={svgPaths.p10fa33a0} fill="var(--fill-0, #1D1D1B)" id="Vector_21" />
          <path d={svgPaths.p2484f80} fill="var(--fill-0, #1D1D1B)" id="Vector_22" />
          <path d={svgPaths.p29bdee70} fill="var(--fill-0, #1D1D1B)" id="Vector_23" />
          <path d={svgPaths.p28c0ed00} fill="var(--fill-0, #1D1D1B)" id="Vector_24" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[36.24px] top-[31.92px]" data-name="Group">
      <Group5 />
    </div>
  );
}

function LogoOchaColor1() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[84px]" data-name="logo-ocha-color 2">
      <div className="absolute h-[38.228px] left-[12.56px] top-[9.02px] w-[20.355px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3553 38.2282">
          <path d={svgPaths.p3a601780} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[2.389px] left-[36.45px] top-[26.94px] w-[44.198px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.198 2.38908">
          <path d={svgPaths.p1ece3970} fill="var(--fill-0, #1D1D1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[10.658px] left-[36.63px] top-[14.14px] w-[11.517px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5167 10.6583">
          <path d={svgPaths.p2cec2200} fill="var(--fill-0, #1D1D1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[10.353px] left-[58.35px] top-[14.4px] w-[9.556px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.55633 10.3527">
          <path d={svgPaths.p3d498900} fill="var(--fill-0, #1D1D1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[9.762px] left-[3px] top-[29.33px] w-[21.9px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8999 9.76164">
          <path d={svgPaths.p3ab88700} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[9.74px] left-[3px] top-[17.2px] w-[21.9px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8999 9.74004">
          <path d={svgPaths.p180e5800} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[10.367px] left-[68.7px] top-[14.39px] w-[11.547px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5472 10.3666">
          <path d={svgPaths.p13367200} fill="var(--fill-0, #1D1D1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[10.722px] left-[49.02px] top-[14.16px] w-[8.132px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.13168 10.7217">
          <path d={svgPaths.p39dbb480} fill="var(--fill-0, #1D1D1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute left-[40.39px] size-[3.922px] top-[17.6px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.92208 3.92208">
          <path d={svgPaths.p305204f0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group4 />
      <div className="absolute h-[3.554px] left-[73.45px] top-[17.57px] w-[1.893px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.89335 3.55376">
          <path d={svgPaths.p386f4800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
        <p className="leading-[1.2] whitespace-pre-wrap">Construye</p>
      </div>
      <LogoOchaColor1 />
    </div>
  );
}

function LogoOwnHotelsContraste1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[74.667px]" data-name="logo-own-hotels contraste 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.6667 56">
        <g id="logo-own-hotels contraste 1">
          <path d={svgPaths.p327dff80} fill="var(--fill-0, #8B97A5)" id="Vector" />
          <path d={svgPaths.p97355c0} fill="var(--fill-0, #8B97A5)" id="Vector_2" />
          <path d={svgPaths.p1a5be180} fill="var(--fill-0, #8B97A5)" id="Vector_3" />
          <path d={svgPaths.p1258e980} fill="var(--fill-0, #8B97A5)" id="Vector_4" />
          <path d={svgPaths.p28fd6ff0} fill="var(--fill-0, #8B97A5)" id="Vector_5" />
          <path d={svgPaths.p2deaf000} fill="var(--fill-0, #8B97A5)" id="Vector_6" />
          <path d={svgPaths.paeced80} fill="var(--fill-0, #8B97A5)" id="Vector_7" />
          <path d={svgPaths.p140ca778} fill="var(--fill-0, #8B97A5)" id="Vector_8" />
          <path d={svgPaths.p28d29400} fill="var(--fill-0, #8B97A5)" id="Vector_9" />
          <path d={svgPaths.p3b14d080} fill="var(--fill-0, #8B97A5)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 3">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
        <p className="leading-[1.2] whitespace-pre-wrap">Opera</p>
      </div>
      <LogoOwnHotelsContraste1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.93%_3.73%_20.52%_6.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.0001 39.5103">
        <g id="Group">
          <path d={svgPaths.pc0ea900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p237e6000} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2c7c2200} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfc9140} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.pcd69900} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p18d94380} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p3e8bd600} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p16d17980} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p9de4370} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p2152c040} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p33668a00} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p20fea700} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p32a03080} fill="var(--fill-0, #DF9F2A)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[86.5%_14.02%_8.37%_17.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3705 2.87">
        <g id="Group">
          <path d={svgPaths.pe28eb00} fill="var(--fill-0, #1D1D1B)" id="Vector" />
          <path d={svgPaths.p20010100} fill="var(--fill-0, #1D1D1B)" id="Vector_2" />
          <path d={svgPaths.p1cc44a80} fill="var(--fill-0, #1D1D1B)" id="Vector_3" />
          <path d={svgPaths.p8351200} fill="var(--fill-0, #1D1D1B)" id="Vector_4" />
          <path d={svgPaths.p39a6c100} fill="var(--fill-0, #1D1D1B)" id="Vector_5" />
          <path d={svgPaths.p6db5700} fill="var(--fill-0, #1D1D1B)" id="Vector_6" />
          <path d={svgPaths.p13587c00} fill="var(--fill-0, #1D1D1B)" id="Vector_7" />
          <path d={svgPaths.pcd8ea00} fill="var(--fill-0, #1D1D1B)" id="Vector_8" />
          <path d={svgPaths.p2faee800} fill="var(--fill-0, #1D1D1B)" id="Vector_9" />
          <path d={svgPaths.p24def1c0} fill="var(--fill-0, #1D1D1B)" id="Vector_10" />
          <path d={svgPaths.p23b9fa00} fill="var(--fill-0, #1D1D1B)" id="Vector_11" />
          <path d={svgPaths.p1c49e980} fill="var(--fill-0, #1D1D1B)" id="Vector_12" />
          <path d={svgPaths.p385c0600} fill="var(--fill-0, #1D1D1B)" id="Vector_13" />
          <path d={svgPaths.p25eac400} fill="var(--fill-0, #1D1D1B)" id="Vector_14" />
          <path d={svgPaths.p36777080} fill="var(--fill-0, #1D1D1B)" id="Vector_15" />
          <path d={svgPaths.p2b398800} fill="var(--fill-0, #1D1D1B)" id="Vector_16" />
          <path d={svgPaths.p1f4c85b2} fill="var(--fill-0, #1D1D1B)" id="Vector_17" />
          <path d={svgPaths.p1fb99580} fill="var(--fill-0, #1D1D1B)" id="Vector_18" />
          <path d={svgPaths.p22e06100} fill="var(--fill-0, #1D1D1B)" id="Vector_19" />
          <path d={svgPaths.p1958dc80} fill="var(--fill-0, #1D1D1B)" id="Vector_20" />
          <path d={svgPaths.p38c21800} fill="var(--fill-0, #1D1D1B)" id="Vector_21" />
          <path d={svgPaths.p1fe74c80} fill="var(--fill-0, #1D1D1B)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function LogoGm1() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[99.604px]" data-name="logo gm 1">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
        <p className="leading-[1.2] whitespace-pre-wrap">Desarrolla</p>
      </div>
      <LogoGm1 />
    </div>
  );
}

function Examples() {
  return (
    <div className="w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative" data-name="Examples">
      <div className="flex flex-col justify-center w-full lg:size-full">
        <div className="content-stretch flex flex-col gap-[16px] lg:gap-[40px] items-start justify-start lg:justify-center px-0 lg:px-[80px] relative w-full">
          <Row />
          <Row1 />
          <Row2 />
          <Row3 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] text-black tracking-[-0.22px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Content">
      <SectionHeader />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">La Barceloneta Buenos Aires es un desarrollo donde cada unidad se divide en 8 fracciones (1/8), permitiendo invertir desde USD 22.500 con escritura pública y rentabilidad en dólares. Somos la única empresa en CABA que comercializa departamentos fraccionados bajo este formato.</p>
      </div>
      <div className="hidden lg:block aspect-[860/500] relative shrink-0 w-full max-h-[400px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden rounded-[8px] pointer-events-none">
          <img alt="Sección mostrando octavos" loading="lazy" className="absolute inset-0 max-w-none object-cover size-full" src={imgSeccionOctavos} />
        </div>
      </div>
    </div>
  );
}

function ToneAndVoice() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start lg:items-center py-[24px] relative shrink-0 w-full" data-name="Tone and voice" data-gsap="fade-up">
      <Examples />
      <Content7 />
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex gap-0 items-start relative shrink-0 w-full" data-name="Title and subtitle">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[30px] text-black tracking-[-0.6px]">
        <p className="leading-[1.2] whitespace-normal">Prestaciones selectas</p>
      </div>
    </div>
  );
}

function ArrowRight7() {
  return (
    <div className="relative size-[40px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d={svgPaths.p156c7e80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d={svgPaths.p156c7e80} id="Vector" stroke="var(--stroke-0, #575757)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowRight7 />
        </div>
      </div>
      <ArrowRight />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <img alt="" loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArrowRight02} />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative size-[104px]" data-name="arrow-right-02">
      <img alt="" loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArrowRight3} />
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" loading="lazy" className="absolute max-w-none object-cover size-full" src={imgArrowRight4} />
        <div className="absolute bg-gradient-to-r from-[rgba(251,247,244,0)] inset-0 to-[#fbf7f4]" />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ArrowRight1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowRight2 />
        </div>
      </div>
      <ArrowRight3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame26 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full max-w-[207px] whitespace-pre-wrap">50m2 de pileta + solarium</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0" data-name="Container">
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function MeetingPointsContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[24px] lg:gap-[100px] items-start justify-center not-italic relative shrink-0 text-black w-full" data-name="Meeting Points Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[15px] tracking-[-0.15px]">
        <span className="leading-[1.2]">01</span>
        <span className="leading-[1.2] text-[#575757]">/03</span>
      </p>
      <p className="leading-[1.1] min-w-full relative shrink-0 text-[36px] lg:text-[60px] text-right tracking-[-0.6px] w-[min-content] whitespace-pre-wrap">ROOFTOP</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
      <Container5 />
      <MeetingPointsContainer />
    </div>
  );
}

function Container4() {
  const [tab, setTab] = useState(0);
  const GALLERY_TABS = [
    { label: "ROOFTOP", desc: "Pileta + solarium con vista panorámica", image: imgRooftop },
    { label: "GALERÍA DE ARTE", desc: "Galería de arte integrada al hotel", image: imgGaleriaArte },
    { label: "BAR DE JAZZ Y TANGO", desc: "Bar temático de jazz y tango", image: imgBarJazz },
    { label: "RECREATION ROOM", desc: "Sala de recreación y entretenimiento", image: imgRecreationRoom },
    { label: "ÁREA DE BIENESTAR", desc: "Espacio zen y wellness", image: imgAreaBienestar },
  ];
  const current = GALLERY_TABS[tab];
  const total = GALLERY_TABS.length;

  return (
    <div className="content-stretch flex flex-col-reverse lg:flex-row gap-[24px] lg:gap-[32px] h-auto lg:h-[552px] items-center relative shrink-0 w-full" data-name="Container">
      {/* Left content: navigation + counter + title */}
      <div className="content-stretch flex w-full flex-none lg:flex-[1_0_0] flex-col h-[200px] lg:h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
        {/* Arrow navigation + description */}
        <div className="relative lg:absolute bottom-auto lg:bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <button
              type="button"
              onClick={() => setTab(t => (t - 1 + total) % total)}
              className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Anterior"
            >
              <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                <path d="M31.6667 20H8.33337M8.33337 20L18.3334 10M8.33337 20L18.3334 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setTab(t => (t + 1) % total)}
              className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Siguiente"
            >
              <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                <path d="M8.33337 20H31.6667M31.6667 20L21.6667 10M31.6667 20L21.6667 30" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            {/* Tab indicators */}
            <div className="flex gap-[6px] items-center">
              {GALLERY_TABS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`rounded-full transition-all duration-200 cursor-pointer p-[10px] -m-[10px] box-content bg-clip-content ${i === tab ? "w-[20px] h-[8px] bg-black" : "size-[8px] bg-[#c4c4c4]"}`}
                  aria-label={GALLERY_TABS[i].label}
                />
              ))}
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full max-w-[207px] whitespace-pre-wrap">{current.desc}</p>
          </div>
        </div>
        {/* Counter + section title */}
        <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[24px] lg:gap-[100px] items-start justify-center not-italic relative shrink-0 text-black w-full" data-name="Meeting Points Container">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[15px] tracking-[-0.15px]">
            <span className="leading-[1.2]">{String(tab + 1).padStart(2, "0")}</span>
            <span className="leading-[1.2] text-[#575757]">/{String(total).padStart(2, "0")}</span>
          </p>
          <p key={tab} className="leading-[1.1] min-w-full relative shrink-0 text-[36px] lg:text-[60px] text-left lg:text-right tracking-[-0.6px] w-[min-content] whitespace-pre-wrap animate-[fadeSlideIn_0.4s_ease-out]">{current.label}</p>
        </div>
      </div>
      {/* Gallery image */}
      <div aria-hidden="true" className="w-full h-[300px] lg:h-[552px] flex-none lg:flex-[1_0_0] min-h-px min-w-px relative overflow-hidden" data-name="Image" role="presentation">
        <img key={tab} alt={current.label} loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full animate-[fadeSlideIn_0.5s_ease-out]" src={current.image} />
      </div>
    </div>
  );
}

function TitleAndSubtitle1() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row font-['Helvetica:Regular',sans-serif] gap-[12px] lg:gap-[32px] items-start lg:items-center leading-[0] not-italic relative shrink-0 w-full" data-name="Title and subtitle">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <p className="leading-[1.2] whitespace-pre-wrap">Avance de obra</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px]">
        <p className="leading-[1.2] whitespace-pre-wrap">A medida que la obra avanza, bajamos el ticket.</p>
      </div>
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative size-[40px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d={svgPaths.p156c7e80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="arrow-right-02">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right-02">
          <path d={svgPaths.p156c7e80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowRight4 />
        </div>
      </div>
      <ArrowRight5 />
    </div>
  );
}

function ArrowRight6() {
  return (
    <div className="relative size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />
        <img alt="" loading="lazy" className="absolute max-w-none object-cover size-full" src={imgArrowRight5} />
      </div>
    </div>
  );
}

function ArrowRight8() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(159,159,159,0.8)] inset-0" />
        <img alt="" loading="lazy" className="absolute max-w-none object-cover size-full" src={imgArrowRight6} />
      </div>
    </div>
  );
}

function ArrowRight9() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" loading="lazy" className="absolute max-w-none object-cover size-full" src={imgArrowRight6} />
        <div className="absolute bg-gradient-to-r from-[rgba(251,247,244,0)] inset-0 to-[#fbf7f4]" />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowRight6 />
        </div>
      </div>
      <ArrowRight8 />
      <ArrowRight9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0 w-full max-w-[335px]" data-name="Container">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.6] not-italic opacity-70 relative shrink-0 text-[20px] text-black tracking-[-0.5px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] items-end justify-end leading-[1.4] not-italic relative shrink-0 uppercase w-full">
      <p className="relative shrink-0 text-[#3fbc21] text-[20px]">65%</p>
      <p className="relative shrink-0 text-[24px] text-black">Terminaciones</p>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame24 />
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.6] not-italic opacity-70 relative shrink-0 text-[20px] text-black tracking-[-0.5px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] items-end justify-end leading-[1.4] not-italic relative shrink-0 uppercase w-full">
      <p className="relative shrink-0 text-[#3fbc21] text-[20px]">65%</p>
      <p className="relative shrink-0 text-[24px] text-black">Terminaciones</p>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.6] not-italic opacity-70 relative shrink-0 text-[20px] text-black tracking-[-0.5px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] items-end justify-end leading-[1.4] not-italic relative shrink-0 uppercase w-full">
      <p className="relative shrink-0 text-[#3fbc21] text-[20px]">65%</p>
      <p className="relative shrink-0 text-[24px] text-black">Terminaciones</p>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.6] not-italic opacity-70 relative shrink-0 text-[20px] text-black tracking-[-0.5px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] items-end justify-end leading-[1.4] not-italic relative shrink-0 uppercase w-full">
      <p className="relative shrink-0 text-[#3fbc21] text-[20px]">65%</p>
      <p className="relative shrink-0 text-[24px] text-black">Terminaciones</p>
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-end justify-end leading-[1.2] not-italic relative shrink-0 text-[22px] tracking-[-0.22px] w-full">
      <p className="relative shrink-0 text-[#3fbc21]">65%</p>
      <p className="relative shrink-0 text-black">Terminaciones</p>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px]">{`NOVIEMBRE '25`}</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-end justify-end leading-[1.2] not-italic relative shrink-0 text-[22px] tracking-[-0.22px] w-full">
      <p className="relative shrink-0 text-[#3fbc21]">65%</p>
      <p className="relative shrink-0 text-black">Terminaciones</p>
    </div>
  );
}

function Header12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full max-w-[306px]" data-name="Header">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-start justify-end left-[16px] lg:left-[65px] top-[21px] w-[calc(100%-32px)] lg:w-[375px]">
      <Header7 />
      <Header8 />
      <Header9 />
      <Header10 />
      <Header11 />
      <Header12 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[5px] relative shrink-0 w-[170px]">
      <div className="absolute inset-[0_-0.59%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 5">
          <g id="Frame 2085668452">
            <mask fill="white" id="path-1-inside-1_1_4653">
              <path d={svgPaths.p130e00} />
            </mask>
            <path d={svgPaths.p2eac9580} fill="var(--stroke-0, #A3A3A3)" mask="url(#path-1-inside-1_1_4653)" />
            <line id="Line 19" stroke="var(--stroke-0, #A3A3A3)" x1="0.5" x2="0.5" y1="2.18558e-08" y2="5" />
            <line id="Line 20" stroke="var(--stroke-0, #A3A3A3)" x1="10.5" x2="10.5" y1="2.18558e-08" y2="5" />
            <line id="Line 25" stroke="var(--stroke-0, #A3A3A3)" x1="20.5" x2="20.5" y1="2.18558e-08" y2="5" />
            <line id="Line 26" stroke="var(--stroke-0, #A3A3A3)" x1="30.5" x2="30.5" y1="2.18558e-08" y2="5" />
            <line id="Line 27" stroke="var(--stroke-0, #A3A3A3)" x1="40.5" x2="40.5" y1="2.18558e-08" y2="5" />
            <line id="Line 28" stroke="var(--stroke-0, #A3A3A3)" x1="50.5" x2="50.5" y1="2.18558e-08" y2="5" />
            <line id="Line 29" stroke="var(--stroke-0, #A3A3A3)" x1="60.5" x2="60.5" y1="2.18558e-08" y2="5" />
            <line id="Line 30" stroke="var(--stroke-0, #A3A3A3)" x1="70.5" x2="70.5" y1="2.18558e-08" y2="5" />
            <line id="Line 31" stroke="var(--stroke-0, #A3A3A3)" x1="80.5" x2="80.5" y1="2.18558e-08" y2="5" />
            <line id="Line 32" stroke="var(--stroke-0, #A3A3A3)" x1="90.5" x2="90.5" y1="2.18558e-08" y2="5" />
            <line id="Line 33" stroke="var(--stroke-0, #A3A3A3)" x1="100.5" x2="100.5" y1="2.18558e-08" y2="5" />
            <line id="Line 34" stroke="var(--stroke-0, #A3A3A3)" x1="110.5" x2="110.5" y1="2.18558e-08" y2="5" />
            <line id="Line 35" stroke="var(--stroke-0, #A3A3A3)" x1="120.5" x2="120.5" y1="2.18558e-08" y2="5" />
            <line id="Line 36" stroke="var(--stroke-0, #A3A3A3)" x1="130.5" x2="130.5" y1="2.18558e-08" y2="5" />
            <line id="Line 21" stroke="var(--stroke-0, #A3A3A3)" x1="140.5" x2="140.5" y1="2.18558e-08" y2="5" />
            <line id="Line 22" stroke="var(--stroke-0, #A3A3A3)" x1="150.5" x2="150.5" y1="2.18558e-08" y2="5" />
            <line id="Line 23" stroke="var(--stroke-0, #A3A3A3)" x1="160.5" x2="160.5" y1="2.18558e-08" y2="5" />
            <line id="Line 24" stroke="var(--stroke-0, #A3A3A3)" x1="170.5" x2="170.5" y1="2.18558e-08" y2="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[44px] relative shrink-0 w-[230px]">
      <div className="absolute inset-[0_-0.43%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 44">
          <g id="Frame 2085668453">
            <mask fill="white" id="path-1-inside-1_1_4420">
              <path d={svgPaths.p294f0f80} />
            </mask>
            <path d={svgPaths.p7dd6cf2} fill="var(--stroke-0, #A3A3A3)" mask="url(#path-1-inside-1_1_4420)" />
            <line id="Line 1" stroke="var(--stroke-0, #A3A3A3)" x1="0.500002" x2="0.5" y1="2.18558e-08" y2="44" />
            <line id="Line 2" stroke="var(--stroke-0, #A3A3A3)" x1="10.5" x2="10.5" y1="2.18558e-08" y2="5" />
            <line id="Line 3" stroke="var(--stroke-0, #A3A3A3)" x1="20.5" x2="20.5" y1="2.18558e-08" y2="5" />
            <line id="Line 4" stroke="var(--stroke-0, #A3A3A3)" x1="30.5" x2="30.5" y1="2.18558e-08" y2="5" />
            <line id="Line 5" stroke="var(--stroke-0, #A3A3A3)" x1="40.5" x2="40.5" y1="2.18558e-08" y2="5" />
            <line id="Line 6" stroke="var(--stroke-0, #A3A3A3)" x1="50.5" x2="50.5" y1="2.18558e-08" y2="5" />
            <line id="Line 7" stroke="var(--stroke-0, #A3A3A3)" x1="60.5" x2="60.5" y1="2.18558e-08" y2="5" />
            <line id="Line 8" stroke="var(--stroke-0, #A3A3A3)" x1="70.5" x2="70.5" y1="2.18558e-08" y2="5" />
            <line id="Line 9" stroke="var(--stroke-0, #A3A3A3)" x1="80.5" x2="80.5" y1="2.18558e-08" y2="5" />
            <line id="Line 10" stroke="var(--stroke-0, #A3A3A3)" x1="90.5" x2="90.5" y1="2.18558e-08" y2="5" />
            <line id="Line 11" stroke="var(--stroke-0, #A3A3A3)" x1="100.5" x2="100.5" y1="2.18558e-08" y2="5" />
            <line id="Line 12" stroke="var(--stroke-0, #A3A3A3)" x1="110.5" x2="110.5" y1="2.18558e-08" y2="5" />
            <line id="Line 13" stroke="var(--stroke-0, #A3A3A3)" x1="120.5" x2="120.5" y1="2.18558e-08" y2="5" />
            <line id="Line 14" stroke="var(--stroke-0, #A3A3A3)" x1="130.5" x2="130.5" y1="2.18558e-08" y2="5" />
            <line id="Line 15" stroke="var(--stroke-0, #A3A3A3)" x1="140.5" x2="140.5" y1="2.18558e-08" y2="5" />
            <line id="Line 16" stroke="var(--stroke-0, #A3A3A3)" x1="150.5" x2="150.5" y1="2.18558e-08" y2="5" />
            <line id="Line 17" stroke="var(--stroke-0, #A3A3A3)" x1="160.5" x2="160.5" y1="2.18558e-08" y2="5" />
            <line id="Line 18" stroke="var(--stroke-0, #A3A3A3)" x1="170.5" x2="170.5" y1="2.18558e-08" y2="5" />
            <line id="Line 19" stroke="var(--stroke-0, #A3A3A3)" x1="180.5" x2="180.5" y1="2.18558e-08" y2="5" />
            <line id="Line 20" stroke="var(--stroke-0, #A3A3A3)" x1="190.5" x2="190.5" y1="2.18558e-08" y2="5" />
            <line id="Line 21" stroke="var(--stroke-0, #A3A3A3)" x1="200.5" x2="200.5" y1="2.18558e-08" y2="5" />
            <line id="Line 22" stroke="var(--stroke-0, #A3A3A3)" x1="210.5" x2="210.5" y1="2.18558e-08" y2="5" />
            <line id="Line 23" stroke="var(--stroke-0, #A3A3A3)" x1="220.5" x2="220.5" y1="2.18558e-08" y2="5" />
            <line id="Line 24" stroke="var(--stroke-0, #A3A3A3)" x1="230.5" x2="230.5" y1="2.18558e-08" y2="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[10px] relative shrink-0 w-[230px]">
      <div className="absolute inset-[0_-0.43%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 10">
          <g id="Frame 2085668454">
            <mask fill="white" id="path-1-inside-1_1_4358">
              <path d="M0 0H230V10H0V0Z" />
            </mask>
            <path d="M0 0V1H230V0V-1H0V0Z" fill="var(--stroke-0, #A3A3A3)" mask="url(#path-1-inside-1_1_4358)" />
            <line id="Line 1" stroke="var(--stroke-0, #A3A3A3)" x1="0.5" x2="0.5" y1="2.18558e-08" y2="10" />
            <line id="Line 2" stroke="var(--stroke-0, #A3A3A3)" x1="10.5" x2="10.5" y1="2.18558e-08" y2="5" />
            <line id="Line 3" stroke="var(--stroke-0, #A3A3A3)" x1="20.5" x2="20.5" y1="2.18558e-08" y2="5" />
            <line id="Line 4" stroke="var(--stroke-0, #A3A3A3)" x1="30.5" x2="30.5" y1="2.18558e-08" y2="5" />
            <line id="Line 5" stroke="var(--stroke-0, #A3A3A3)" x1="40.5" x2="40.5" y1="2.18558e-08" y2="5" />
            <line id="Line 6" stroke="var(--stroke-0, #A3A3A3)" x1="50.5" x2="50.5" y1="2.18558e-08" y2="5" />
            <line id="Line 7" stroke="var(--stroke-0, #A3A3A3)" x1="60.5" x2="60.5" y1="2.18558e-08" y2="5" />
            <line id="Line 8" stroke="var(--stroke-0, #A3A3A3)" x1="70.5" x2="70.5" y1="2.18558e-08" y2="5" />
            <line id="Line 9" stroke="var(--stroke-0, #A3A3A3)" x1="80.5" x2="80.5" y1="2.18558e-08" y2="5" />
            <line id="Line 10" stroke="var(--stroke-0, #A3A3A3)" x1="90.5" x2="90.5" y1="2.18558e-08" y2="5" />
            <line id="Line 11" stroke="var(--stroke-0, #A3A3A3)" x1="100.5" x2="100.5" y1="2.18558e-08" y2="5" />
            <line id="Line 12" stroke="var(--stroke-0, #A3A3A3)" x1="110.5" x2="110.5" y1="2.18558e-08" y2="5" />
            <line id="Line 13" stroke="var(--stroke-0, #A3A3A3)" x1="120.5" x2="120.5" y1="2.18558e-08" y2="5" />
            <line id="Line 14" stroke="var(--stroke-0, #A3A3A3)" x1="130.5" x2="130.5" y1="2.18558e-08" y2="5" />
            <line id="Line 15" stroke="var(--stroke-0, #A3A3A3)" x1="140.5" x2="140.5" y1="2.18558e-08" y2="5" />
            <line id="Line 16" stroke="var(--stroke-0, #A3A3A3)" x1="150.5" x2="150.5" y1="2.18558e-08" y2="5" />
            <line id="Line 17" stroke="var(--stroke-0, #A3A3A3)" x1="160.5" x2="160.5" y1="2.18558e-08" y2="5" />
            <line id="Line 18" stroke="var(--stroke-0, #A3A3A3)" x1="170.5" x2="170.5" y1="2.18558e-08" y2="5" />
            <line id="Line 19" stroke="var(--stroke-0, #A3A3A3)" x1="180.5" x2="180.5" y1="2.18558e-08" y2="5" />
            <line id="Line 20" stroke="var(--stroke-0, #A3A3A3)" x1="190.5" x2="190.5" y1="2.18558e-08" y2="5" />
            <line id="Line 21" stroke="var(--stroke-0, #A3A3A3)" x1="200.5" x2="200.5" y1="2.18558e-08" y2="5" />
            <line id="Line 22" stroke="var(--stroke-0, #A3A3A3)" x1="210.5" x2="210.5" y1="2.18558e-08" y2="5" />
            <line id="Line 23" stroke="var(--stroke-0, #A3A3A3)" x1="220.5" x2="220.5" y1="2.18558e-08" y2="5" />
            <line id="Line 24" stroke="var(--stroke-0, #A3A3A3)" x1="230.5" x2="230.5" y1="2.18558e-08" y2="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex items-start left-[-44px] right-0 top-0">
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex content-stretch flex-col gap-[8px] h-[95px] items-start overflow-clip relative shrink-0 w-full min-w-[800px] lg:min-w-0">
      <Frame23 />
      <Frame49 />
      <div className="absolute h-[95px] right-0 top-0 w-[43px]" style={{ backgroundImage: "linear-gradient(269.462deg, rgb(255, 255, 255) 1.0158%, rgba(255, 255, 255, 0) 111.65%)" }} />
      <div className="absolute h-[95px] left-0 top-0 w-[34px]" style={{ backgroundImage: "linear-gradient(-89.8041deg, rgba(255, 255, 255, 0) 0.47317%, rgb(255, 255, 255) 87.562%)" }} />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex w-full flex-none lg:flex-[1_0_0] flex-col h-auto lg:h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
      <div className="w-full relative overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-[20px] lg:pt-0">
        <div className="min-w-[800px] lg:min-w-0 w-full h-[150px] lg:h-full relative flex flex-col justify-end lg:justify-between pb-[20px] lg:pb-0">
          <div className="relative w-full h-full lg:h-auto">
            <Container7 />
          </div>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <ConstructionTimeline imageSrc={imgImage1} />
    </div>
  );
}

function Header13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.2] font-bold">Ubicación</p>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div
      className="w-full flex-none lg:flex-[1_0_0] h-[300px] lg:h-[573px] max-w-[800px] min-h-px min-w-px overflow-clip relative cursor-zoom-in group" data-name="Map"
      onMouseMove={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (!img) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(1.5)";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "";
      }}
    >
      <img alt="Mapa ubicación" loading="lazy" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-out" src={imgImage5477} />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] lg:text-[30px] text-center lg:text-right tracking-[-0.3px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Desarrollo La Barceloneta Feel Free{"\n"}Buenos Aires – Argentina{"\n"}Obra en construcción: Venezuela 2475, C1096ABQ – CABA{"\n"}Oficina comercial: Ángel Justiniano Carranza 1470 C1414 – Ciudad Autónoma de Buenos Aires</h3>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px py-[32px] relative" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col lg:flex-row items-center size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[60px] items-center pr-0 lg:pr-[40px] relative w-full">
          <Map />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function PersonalitySection() {
  return (
    <div aria-label="Section 2 out of 6" className="relative shrink-0 w-full" data-name="Personality Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <Header6 />
        <div className="content-stretch flex flex-col h-[280px] sm:h-[400px] md:h-[550px] lg:h-[763px] items-start pb-0 lg:pb-[64px] relative shrink-0 w-full overflow-hidden" data-name="Portada / Bs As">
          <Portada />
        </div>
        <ToneAndVoice />
        <section className="content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center py-[40px] lg:py-[80px] relative shrink-0 w-full" data-name="Galería de fotos" data-gsap="fade-left">
          <TitleAndSubtitle />
          <Container4 />
        </section>
        <section id="avance" className="bg-white content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center py-[40px] lg:py-[80px] relative shrink-0 w-full" data-name="Avance de obra" data-gsap="fade-right">
          <TitleAndSubtitle1 />
          <Container6 />
        </section>
        <section className="bg-white content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center py-[40px] lg:py-[80px] relative shrink-0 w-full" data-name="Ubicación" data-gsap="fade-left">
          <Header13 />
          <Container8 />
        </section>
      </div>
    </div>
  );
}

function Banner1() {
  return (
    <section id="banner" className="relative shrink-0 w-full" data-name="Banner" data-gsap="scale-in">
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] lg:p-[32px] relative w-full">
          <div className="aspect-[2320/264] relative shrink-0 w-full overflow-hidden rounded-[8px]" data-name="image 5483">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Vista aérea del proyecto" loading="lazy" className="absolute h-[341.63%] left-[-3.84%] max-w-none top-[-119.94%] w-[131.21%]" src={imgImage5484} />
            </div>
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className=" font-['Helvetica:Bold',sans-serif] font-bold text-white text-[18px] sm:text-[24px] lg:text-[36px] tracking-[4px] lg:tracking-[8px] uppercase">Próximamente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Number1() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
        <h2 data-gsap-title className="block leading-[1.2]">El próximo capítulo (Neuquén)</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number1 />
      </div>
    </div>
  );
}

function Header14() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[24px] pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[22px] lg:text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">{`Energy & Business Tower`}</p>
      <div className="h-0 relative shrink-0 w-full lg:w-[235px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 1">
            <path d="M0 0.5H235" id="Vector 12" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:check">
          <path d={svgPaths.p39131100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Feature Item">
      <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-white tracking-[-0.15px] whitespace-pre-wrap">Modelo 1/8 en formato condo-hotel</p>
    </div>
  );
}

function LinkButon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Link Buton">
      <MaterialSymbolsCheck2 />
      <FeatureItem2 />
    </div>
  );
}

function MaterialSymbolsCheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:check">
          <path d={svgPaths.p39131100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Feature Item">
      <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-white tracking-[-0.15px] whitespace-pre-wrap">Foco corporativo y energético</p>
    </div>
  );
}

function LinkButon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Link Buton">
      <MaterialSymbolsCheck3 />
      <FeatureItem3 />
    </div>
  );
}

function MaterialSymbolsCheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:check">
          <path d={svgPaths.p39131100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Feature Item">
      <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-white tracking-[-0.15px] whitespace-pre-wrap">Torre de 17 pisos</p>
    </div>
  );
}

function LinkButon4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Link Buton">
      <MaterialSymbolsCheck4 />
      <FeatureItem4 />
    </div>
  );
}

function FeaturesContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Features Container">
      <LinkButon2 />
      <LinkButon3 />
      <LinkButon4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[235px]" data-name="Container">
      <Content10 />
      <FeaturesContainer1 />
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="hidden lg:flex absolute bg-[#040404] bottom-[-40px] content-stretch h-auto items-center p-[30px] right-[98px] w-[295px] z-10" data-name="Content Wrapper">
      <Container10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[72.49px] top-[72px]">
      <div className="absolute bottom-[571px] h-[9.985px] left-[72.49px] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 9.98461">
          <path d={svgPaths.p1c176180} fill="var(--fill-0, #7ECBE2)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[16.641px] left-[72.49px] top-[72px] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 16.6407">
          <path d={svgPaths.p2ba960f0} fill="var(--fill-0, #7ECBE2)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[84.21%] left-[72.49px] top-[13.41%] w-[28.941px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9408 16.6407">
          <path d={svgPaths.p390a5a00} fill="var(--fill-0, #7ECBE2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Portada1() {
  return (
    <div className="bg-[#1e3d59] flex-[1_0_0] min-h-px min-w-px relative w-full overflow-visible" data-name="Portada" data-gsap="scale-in" data-parallax="slow">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute aspect-[592/665] bottom-[20px] lg:bottom-[40px] mix-blend-screen right-[16px] lg:right-[62px] top-[20px] lg:top-[35px] animate-[float_7s_ease-in-out_infinite]" data-name="image 5458">
        <img alt="Edificio La Barceloneta Neuquén" loading="lazy" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5458} />
      </div>
      <ContentWrapper1 />
      <div className="absolute h-[82px] left-[72px] top-[545px] w-[250px] hidden lg:block" data-name="logo neuquen">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 7">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#e8ebef] text-[10px] tracking-[-0.2px] w-[min-content]">
        <p className="text-[14px] text-[#75808a] leading-[1.8] whitespace-pre-wrap">Desarrolla</p>
      </div>
            <div className="pl-2 scale-150" data-name="logo gm 1">
      <LogoGm />
      </div>
    </div>
      </div>
      
      <div className="absolute h-[50px] lg:h-[82px] left-[16px] lg:left-[72px] top-[16px] lg:top-[35px] w-[200px] lg:w-[334px]" data-name="logo neuquen celeste">
        <img alt="La Barceloneta Neuquén" loading="lazy" className="absolute inset-0 max-w-none object-contain object-left pointer-events-none size-full" src={imgLogoNeuquen} />
      </div>
      <div className="absolute font-['Barlow_Condensed:Medium',sans-serif] leading-none left-[16px] lg:left-[72px] bottom-[16px] lg:bottom-auto lg:top-[40.04%] right-[16px] lg:right-auto not-italic text-[#7ecbe2] text-[24px] sm:text-[40px] lg:text-[101.098px] tracking-[-1px] sm:tracking-[-3px] lg:tracking-[-8.7698px] uppercase whitespace-pre-wrap">
        <p className="mb-0">La Barceloneta</p>
        <p>NEUQUÉN</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[15px] tracking-[-0.15px] w-full" data-name="Row 1">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">Entrega estimada</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center relative shrink-0 text-[#575757] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Segundo semestre 2026</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[15px] tracking-[-0.15px] w-full" data-name="Row 5">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">Ubicación</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center relative shrink-0 text-[#575757] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Neuquén Capital</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.93%_3.73%_20.52%_6.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.0001 39.5103">
        <g id="Group">
          <path d={svgPaths.pc0ea900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p237e6000} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2c7c2200} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfc9140} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.pcd69900} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p18d94380} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p3e8bd600} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p16d17980} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p9de4370} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p2152c040} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p33668a00} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p20fea700} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p32a03080} fill="var(--fill-0, #DF9F2A)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[86.5%_14.02%_8.37%_17.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3705 2.87">
        <g id="Group">
          <path d={svgPaths.pe28eb00} fill="var(--fill-0, #1D1D1B)" id="Vector" />
          <path d={svgPaths.p20010100} fill="var(--fill-0, #1D1D1B)" id="Vector_2" />
          <path d={svgPaths.p1cc44a80} fill="var(--fill-0, #1D1D1B)" id="Vector_3" />
          <path d={svgPaths.p8351200} fill="var(--fill-0, #1D1D1B)" id="Vector_4" />
          <path d={svgPaths.p39a6c100} fill="var(--fill-0, #1D1D1B)" id="Vector_5" />
          <path d={svgPaths.p6db5700} fill="var(--fill-0, #1D1D1B)" id="Vector_6" />
          <path d={svgPaths.p13587c00} fill="var(--fill-0, #1D1D1B)" id="Vector_7" />
          <path d={svgPaths.pcd8ea00} fill="var(--fill-0, #1D1D1B)" id="Vector_8" />
          <path d={svgPaths.p2faee800} fill="var(--fill-0, #1D1D1B)" id="Vector_9" />
          <path d={svgPaths.p24def1c0} fill="var(--fill-0, #1D1D1B)" id="Vector_10" />
          <path d={svgPaths.p23b9fa00} fill="var(--fill-0, #1D1D1B)" id="Vector_11" />
          <path d={svgPaths.p1c49e980} fill="var(--fill-0, #1D1D1B)" id="Vector_12" />
          <path d={svgPaths.p385c0600} fill="var(--fill-0, #1D1D1B)" id="Vector_13" />
          <path d={svgPaths.p25eac400} fill="var(--fill-0, #1D1D1B)" id="Vector_14" />
          <path d={svgPaths.p36777080} fill="var(--fill-0, #1D1D1B)" id="Vector_15" />
          <path d={svgPaths.p2b398800} fill="var(--fill-0, #1D1D1B)" id="Vector_16" />
          <path d={svgPaths.p1f4c85b2} fill="var(--fill-0, #1D1D1B)" id="Vector_17" />
          <path d={svgPaths.p1fb99580} fill="var(--fill-0, #1D1D1B)" id="Vector_18" />
          <path d={svgPaths.p22e06100} fill="var(--fill-0, #1D1D1B)" id="Vector_19" />
          <path d={svgPaths.p1958dc80} fill="var(--fill-0, #1D1D1B)" id="Vector_20" />
          <path d={svgPaths.p38c21800} fill="var(--fill-0, #1D1D1B)" id="Vector_21" />
          <path d={svgPaths.p1fe74c80} fill="var(--fill-0, #1D1D1B)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function LogoGm2() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[99.604px]" data-name="logo gm 1">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[min-content]">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">Desarrolla</p>
      </div>
      <LogoGm2 />
    </div>
  );
}

function Examples1() {
  return (
    <div className="w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative" data-name="Examples">
      <div className="flex flex-col justify-center lg:size-full">
        <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start justify-center px-0 lg:px-[80px] relative w-full">
          <Row7 />
          <Row8 />
          <Row9 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.3px]">
        <h3 className="font-bold block leading-[1.2] whitespace-pre-wrap">Lo que nació en Buenos Aires, ahora se expande al país</h3>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex w-full lg:flex-[1_0_0] flex-col gap-[24px] lg:gap-[32px] items-start lg:min-h-px lg:min-w-px relative" data-name="Content">
      <SectionHeader1 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] lg:text-[18px] tracking-[-0.18px] w-full">
        <p className="leading-[1.6] whitespace-pre-wrap">La Barceloneta llega a Neuquén con una torre de 17 pisos diseñada para el nuevo polo energético y corporativo de la región. Un proyecto que replica el modelo condo-hotel fraccionado con foco en hotelería, negocios y crecimiento federal.</p>
      </div>
      <div className="aspect-[860/888] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="La Barceloneta Neuquén" loading="lazy" className="absolute inset-0 max-w-none object-cover size-full" src={imgNeuquenExpansion} />
        </div>
      </div>
    </div>
  );
}

function ToneAndVoice1() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start py-[32px] relative shrink-0 w-full" data-name="Tone and voice">
      <Examples1 />
      <Content11 />
    </div>
  );
}

function PersonalitySection1() {
  return (
    <div id="neuquen" aria-label="Section 2 out of 6" className="relative shrink-0 w-full" data-name="Personality Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] lg:gap-[30px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <Header14 />
        <div className="content-stretch flex flex-col h-[280px] sm:h-[400px] md:h-[550px] lg:h-[763px] items-start pb-0 lg:pb-[64px] relative shrink-0 w-full overflow-hidden" data-name="Portada / Neuquen">
          <Portada1 />
        </div>
        <ToneAndVoice1 />
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px] w-full lg:w-[454px]">
        <h2 data-gsap-title className="block leading-[1.2] whitespace-pre-wrap">Experiencias reales de quienes ya están invirtiendo</h2>
      </div>
    </div>
  );
}

function Cards1() {
  return <div className="flex-[1_0_0] min-h-px min-w-px" data-name="Cards" />;
}

function DragScrollContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollLeftStart.current = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const dx = e.pageX - startX.current;
      el.scrollLeft = scrollLeftStart.current - dx;
    };
    const onUp = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div ref={ref} className={`${className} cursor-grab`}>
      {children}
    </div>
  );
}

const TESTIMONIALS_DATA = [
  {
    name: "Marco Tomas Alvarez",
    subtitle: "★★★★★",
    quote: "Invertí en el Crowdfunding hace un año y un éxito todo, un contrato super claro y me dejó muy tranquilo. Hoy recibí mi inversión más el retorno. ¡Aumenté mi capital!",
  },
  {
    name: "AP",
    subtitle: "★★★★★ · Inversora desde Puerto Rico",
    quote: "Llegué a La Barceloneta por redes sociales y sin dudarlo empezamos las gestiones para invertir desde el exterior. Llevo 5 meses y estoy conforme con cada paso. ¡Recomendados al 1000%!",
  },
  {
    name: "Sandra Melendi",
    subtitle: "★★★★★",
    quote: "Como jubilada, mi prioridad es la seguridad. Hoy mi inversión se traduce en una renta mensual que complementa mis ingresos. Ver cómo mi patrimonio crece mes a mes me da una tranquilidad enorme.",
  },
  {
    name: "Cesar Martin Lopez",
    subtitle: "★★★★★",
    quote: "Esta semana cerré la operación y ya soy parte de este hermoso proyecto. ¡Ya soy un Barceloneta más! Gracias por la calidad en el trato y por abrirme las puertas.",
  },
  {
    name: "Lo Mejor de mi",
    subtitle: "★★★★★",
    quote: "Excelente experiencia invirtiendo en La Barceloneta. El modelo de condohotel es muy sólido y la atención es impecable. Nos dieron muchísima confianza y tranquilidad en cada paso. ¡Totalmente recomendados!",
  },
  {
    name: "Miguel Angel Rivera",
    subtitle: "★★★★★ · Local Guide",
    quote: "Muy profesionales, atentos y agradables.",
  },
  {
    name: "Horacio Blanco",
    subtitle: "★★★★★",
    quote: "La mejor inversión que hice.",
  },
];

function TestimonialCard({ name, subtitle, quote }: { name: string; subtitle: string; quote: string }) {
  const cardRef = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="flex flex-col gap-[6px] shrink-0 w-[240px] lg:w-[280px] snap-start relative pr-[16px] transition-transform duration-300 ease-out cursor-default"
    >
      <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]" />
      <p className="font-['Helvetica:Bold',sans-serif] font-bold text-[16px] lg:text-[20px] text-[#141414] tracking-[-0.3px] leading-[1.2]">{name}</p>
      <span className="font-['Helvetica:Regular',sans-serif] text-[12px] lg:text-[13px] text-[#575757] tracking-[-0.13px] leading-[1.4]">{subtitle}</span>
      <p className="font-['Helvetica:Regular',sans-serif] text-[14px] lg:text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.5] mt-[8px]">"{quote}"</p>
    </article>
  );
}

function Header15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Header">
      <Title4 />
      <div className="hidden lg:block flex-[1_0_0] min-h-px min-w-px" />
    </div>
  );
}

function InfiniteTestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Wait for layout to settle so scrollWidth is accurate
    const halfWidth = el.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        scrollPos.current += speed;
        if (scrollPos.current >= halfWidth) {
          scrollPos.current -= halfWidth;
        }
        el.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // Duplicate items for seamless loop
  const items = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <div
      ref={scrollRef}
      className="mt-[32px] lg:mt-[48px] flex gap-[16px] overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {items.map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  );
}

function StrategySection1() {
  return (
    <section className="relative shrink-0 w-full" id="testimonios" data-name="Strategy section" data-gsap="scale-in">
      <div className="content-stretch flex flex-col items-start pl-[16px] lg:pl-[32px] pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-[80px] relative w-full">
        {/* Header: title left + empty spacer right (Figma original layout) */}
        <Header15 />
        {/* Infinite scrolling testimonial carousel */}
        <div className="relative w-full">
          <InfiniteTestimonialCarousel />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </section>
  );
}


function Number2() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.2]">¿Cómo invertir?</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number2 />
      </div>
    </div>
  );
}

function Header17() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title6 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[-0.22px] w-full lg:w-[325px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Examples2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-h-px min-w-px py-[32px] relative" data-name="Examples">
      <Header17 />
      <SectionHeader2 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap leading-[1.2]">
          <span className="text-[#f45f00]">1</span>
          {"  "}Definimos tu ticket de inversión
        </h2>
      </div>
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Elegís cuántas fracciones querés (1/8, 2/8, 3/8…) y la tipología (Norte o Sur).</h3>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-white flex-[1_0_0] h-auto lg:h-[790px] min-h-px min-w-px relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Title7 />
        <SectionHeader3 />
      </div>
    </div>
  );
}

function PersonalitySection2() {
  return (
    <div aria-label="Paso 1 de 5: Elegí tu fracción" className="h-auto lg:h-[960px] shrink-0 lg:sticky top-0 w-full" data-name="Personality Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[30px] items-start px-[16px] lg:px-0 lg:pl-[32px] relative w-full lg:size-full">
        <Examples2 />
        <Content13 />
      </div>
    </div>
  );
}

function Number3() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] lg:text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.1]">¿Cómo invertir?</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number3 />
      </div>
    </div>
  );
}

function Header18() {
  return (
    <div className="content-stretch hidden lg:flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title8 />
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch hidden lg:flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full lg:w-[325px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Examples3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-h-px min-w-px py-[32px] relative" data-name="Examples">
      <Header18 />
      <SectionHeader4 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap leading-[1.2]">
          <span className="text-[#f45f00]">2</span>
          {"  "}Anticipo + cuotas
        </h2>
      </div>
    </div>
  );
}

function SectionHeader5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[1.2] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px] whitespace-pre-wrap">
        <h3 className="block mb-0">Anticipo sugerido: USD 10.000.</h3>
        <h3 className="block">El resto se completa con cuotas accesibles hasta la entrega.</h3>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white flex-[1_0_0] h-auto lg:h-[790px] min-h-px min-w-px relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Title9 />
        <SectionHeader5 />
      </div>
    </div>
  );
}

function PersonalitySection3() {
  return (
    <div aria-label="Paso 2 de 5: Anticipo y cuotas" className="h-auto lg:h-[960px] shrink-0 lg:sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[30px] items-start lg:items-end px-[16px] lg:px-0 lg:pl-[32px] relative w-full lg:size-full">
          <Examples3 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Number4() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] lg:text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.1]">¿Cómo invertir?</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number4 />
      </div>
    </div>
  );
}

function Header19() {
  return (
    <div className="content-stretch hidden lg:flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title10 />
    </div>
  );
}

function SectionHeader6() {
  return (
    <div className="content-stretch hidden lg:flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full lg:w-[325px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Examples4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-h-px min-w-px py-[32px] relative" data-name="Examples">
      <Header19 />
      <SectionHeader6 />
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap leading-[1.2]">
          <span className="text-[#f45f00]">3</span>
          {"  "}Escritura pública
        </h2>
      </div>
    </div>
  );
}

function SectionHeader7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Tu participación queda respaldada legalmente mediante escritura pública y título de propiedad.</h3>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-white flex-[1_0_0] h-auto lg:h-[620px] min-h-px min-w-px relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Title11 />
        <SectionHeader7 />
      </div>
    </div>
  );
}

function PersonalitySection4() {
  return (
    <div aria-label="Paso 3 de 5: Escritura y renta" className="h-auto lg:h-[960px] shrink-0 lg:sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[30px] items-start lg:items-end px-[16px] lg:px-0 lg:pl-[32px] relative w-full lg:size-full">
          <Examples4 />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Number5() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] lg:text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.1]">¿Cómo invertir?</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number5 />
      </div>
    </div>
  );
}

function Header20() {
  return (
    <div className="content-stretch hidden lg:flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title12 />
    </div>
  );
}

function SectionHeader8() {
  return (
    <div className="content-stretch hidden lg:flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full lg:w-[325px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Examples5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-h-px min-w-px py-[32px] relative" data-name="Examples">
      <Header20 />
      <SectionHeader8 />
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap leading-[1.2]">
          <span className="text-[#f45f00]">4</span>
          {"  "}Operación hotelera
        </h2>
      </div>
    </div>
  );
}

function SectionHeader9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Una vez entregado, el edificio pasa a operar bajo Own Hotels, dentro del pool de renta.</h3>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-white flex-[1_0_0] h-auto lg:h-[450px] min-h-px min-w-px relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Title13 />
        <SectionHeader9 />
      </div>
    </div>
  );
}

function PersonalitySection5() {
  return (
    <div aria-label="Paso 4 de 5: Rentabilidad" className="h-auto lg:h-[960px] shrink-0 lg:sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[30px] items-start lg:items-end px-[16px] lg:px-0 lg:pl-[32px] relative w-full lg:size-full">
          <Examples5 />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Number6() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] lg:text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.1]">¿Cómo invertir?</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number6 />
      </div>
    </div>
  );
}

function Header21() {
  return (
    <div className="content-stretch hidden lg:flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title14 />
    </div>
  );
}

function SectionHeader10() {
  return (
    <div className="content-stretch hidden lg:flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] w-full lg:w-[325px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Nuestro desarrollo insignia en CABA bajo el modelo condo-hotel fraccionado</h3>
      </div>
    </div>
  );
}

function Examples6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-h-px min-w-px py-[32px] relative" data-name="Examples">
      <Header21 />
      <SectionHeader10 />
    </div>
  );
}

function Title15() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[22px] lg:text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap leading-[1.2]">
          <span className="text-[#f45f00]">5</span>
          {"  "}Cobro de rentas en USD
        </h2>
      </div>
    </div>
  );
}

function SectionHeader11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px] whitespace-pre-wrap">
        <h3 className="block leading-[1.2] mb-0">Recibís tus ingresos según el modelo elegido:</h3>
        <h3 className="block leading-[1.2] mb-0">&nbsp;</h3>
        <ul className="list-disc">
          <li className="mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Renta de Espera (durante la obra)</span>
          </li>
          <li className="mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Renta Hotelera (hotel operativo)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-white flex-[1_0_0] h-auto lg:h-[280px] min-h-px min-w-px relative" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Title15 />
        <SectionHeader11 />
      </div>
    </div>
  );
}

function PersonalitySection6() {
  return (
    <div aria-label="Paso 5 de 5: Salida o reinversión" className="h-auto lg:h-[960px] shrink-0 lg:sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[30px] items-start lg:items-end px-[16px] lg:px-0 lg:pl-[32px] relative w-full lg:size-full">
          <Examples6 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

const COMO_INVERTIR_STEPS = [
  {
    num: "1",
    title: "Definimos tu ticket de inversión",
    desc: "Elegís cuántas fracciones querés (1/8, 2/8, 3/8…) y la tipología (Norte o Sur).",
  },
  {
    num: "2",
    title: "Anticipo + cuotas",
    desc: "Anticipo sugerido: USD 10.000. El resto se completa con cuotas accesibles hasta la entrega.",
  },
  {
    num: "3",
    title: "Escritura pública",
    desc: "Tu participación queda respaldada legalmente mediante escritura pública y título de propiedad.",
  },
  {
    num: "4",
    title: "Operación hotelera",
    desc: "Una vez entregado, el edificio pasa a operar bajo Own Hotels, dentro del pool de renta.",
  },
  {
    num: "5",
    title: "Cobro de rentas en USD",
    desc: "Recibís tus ingresos según el modelo elegido: Renta de Espera (durante la obra) o Renta Hotelera (hotel operativo).",
  },
];

function Frame59() {
  return (
    <div id="como-invertir" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* Mobile: clean stacked steps */}
      <div className="lg:hidden w-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[60px] relative w-full">
          <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] lg:text-[40px] text-black tracking-[-0.6px]">
              <h2 className="block leading-[1.2]">¿Cómo invertir?</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            {COMO_INVERTIR_STEPS.map((step) => (
              <div key={step.num} className="flex gap-[16px] items-start w-full">
                <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[28px] text-[#f45f00] tracking-[-0.6px] leading-[1] shrink-0 w-[28px] text-right">{step.num}</span>
                <div className="flex flex-col gap-[6px] pt-[2px]">
                  <h3 className="font-['Helvetica:Bold',sans-serif] font-bold text-[18px] text-black tracking-[-0.3px] leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="font-['Helvetica:Regular',sans-serif] text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.4]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop: original sticky scroll sections */}
      <div className="hidden lg:flex flex-col w-full">
        <PersonalitySection2 />
        <PersonalitySection3 />
        <PersonalitySection4 />
        <PersonalitySection5 />
        <PersonalitySection6 />
      </div>
    </div>
  );
}


function Main1() {
  return (
    <main id="main" className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Main" tabIndex={-1}>
      <HeroSection />
      <Images />
      <Banner />
      <ComoGano />
      <RentaCards />
      <StrategySection />
      <ValueSection />
      <PersonalitySection />
      <Banner1 />
      <PersonalitySection1 />
      <StrategySection1 />
      <PressSection />
      <Frame59 />
      <div id="contacto" className="bg-white relative shrink-0 w-full" data-name="Form" data-gsap="scale-in">
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
            <ContactHeader />
            <ContactSection />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </main>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[97.507px] left-0 top-0 w-[50.391px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.3922 97.5088">
        <g id="Icon">
          <path d={svgPaths.p1e5a0000} fill="var(--fill-0, #86CCD3)" id="Vector" />
          <path d={svgPaths.p1e312f80} fill="var(--fill-0, #FBC471)" id="Vector_2" />
          <path d={svgPaths.pe06a900} fill="var(--fill-0, #E73577)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[59.621px] left-[66.07px] top-[38.47px] w-[139.174px]" data-name="Text">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.174 59.6245">
        <g id="Text">
          <path d={svgPaths.p10452300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3a9dab80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p34f03b80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p9b8dbb0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pa5d7c80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1f1e3df0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p24a67a00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3c0f7300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p350ede00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3af2c500} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p118f0680} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2a3dae00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1ada9700} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p81f1400} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.pc8e9410} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3aa55e00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p16324200} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p22356f00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p275b1400} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p310b08c0} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p2dac1700} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p3858ab00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p37293a80} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p6d7b800} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p20cd6980} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p1823b400} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p3f561b80} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p24c24b20} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.pfd83380} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p35764800} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p18d56900} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p3e1a6d00} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.pcd5c490} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p26c7cf80} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.pf96100} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p3a424180} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p2738bf00} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p2bc60400} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p2bfda480} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p221d4600} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p772ca00} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p14fb1b00} fill="var(--fill-0, white)" id="Vector_42" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[98.092px] relative shrink-0 w-[205.243px]" data-name="Logo">
      <img alt="La Barceloneta" loading="lazy" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoLB} />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[280px]" data-name="Text">
      <Logo />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Text7 />
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="flex gap-[32px] items-center w-full" data-name="Social Icon">
      <a href="https://www.facebook.com/labarcelonetafeelfree" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
        <FbIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://www.instagram.com/labarceloneta.bsas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
        <IgIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://www.linkedin.com/company/la-barceloneta-feel-free/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#767676] hover:text-[#141414] hover:scale-125 hover:-translate-y-1 transition-all duration-300">
        <LiIcon size={24} strokeWidth={1.5} />
      </a>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-[257px]" data-name="Social Icons">
      <SocialIcon1 />
    </div>
  );
}

function Content18() {
  return (
    <div className="w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative shrink-0 lg:self-stretch" data-name="Content">
      <div className="content-stretch flex flex-col gap-[56px] items-start relative w-full">
        <Text6 />
        <SocialIcons />
      </div>
    </div>
  );
}

function Header23() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[1.2]">Secciones</p>
      </div>
    </div>
  );
}

function Column() {
  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors text-inherit cursor-pointer text-left bg-transparent border-none p-0";
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[calc(50%-12px)] sm:w-[160px]" data-name="Column 1">
      <Header23 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("como-gano")} className={linkCls}>¿Cómo gano?</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("fracciones")} className={linkCls}>Elegí tu fracción</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("proyecto")} className={linkCls}>El proyecto (Buenos Aires)</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("avance")} className={linkCls}>Avance de obra</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("neuquen")} className={linkCls}>{`El próximo capítulo (Neuquén) `}</button>
      </div>
    </nav>
  );
}

function Header24() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[1.2]">Info</p>
      </div>
    </div>
  );
}

function Column1() {
  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors text-inherit cursor-pointer text-left bg-transparent border-none p-0";
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[calc(50%-12px)] sm:w-[160px]" data-name="Column 2">
      <Header24 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("como-invertir")} className={linkCls}>¿Cómo invertir?</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("testimonios")} className={linkCls}>Testimonios</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("prensa")} className={linkCls}>Prensa</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("vista360")} className={linkCls}>Vista 360</button>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <button type="button" onClick={() => scrollTo("contacto")} className={linkCls}>Contacto</button>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-row flex-wrap gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-auto" data-name="Nav">
      <Column />
      <Column1 />
    </div>
  );
}

function Container13() {
  return (
    <footer className="bg-[#040404] relative shrink-0 w-full" data-name="Container" data-gsap="fade-up">
      <div aria-hidden="true" className="absolute border-[#575757] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[120px] items-start px-[16px] lg:px-[32px] py-[40px] lg:py-[80px] relative w-full">
        <Content18 />
        <Nav />
      </div>
    </footer>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Main">
      <div className="content-stretch flex flex-col items-start relative rounded-[inherit] w-full">
        <Main1 />
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Logo1() {
  return (
    <div className="hidden lg:block absolute h-[57.813px] left-[81px] top-[45px] w-[153.304px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.304 57.8134">
        <g id="Logo">
          <path d={svgPaths.p1d2e3c70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p11f73500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p24e6f800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p15782980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pd779080} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p41e6f00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p17957900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2f505d80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1d972000} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p358cfc00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p33cc7900} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2a06280} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p23923800} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Iso() {
  return (
    <div className="hidden lg:block absolute h-[71.316px] left-[32px] top-[32px] w-[33.027px]" data-name="Iso">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0271 71.3157">
        <g id="Iso">
          <path d={svgPaths.p2a437a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2a2f1780} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p285a7280} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout menuThumbnails={[imgArrowRight4, imgArrowRight3, imgArrowRight5]} dataName="Home">
      <Main />
      <Logo1 />
      <Iso />
    </Layout>
  );
}