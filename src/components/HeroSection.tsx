import React from "react";
import svgPaths from "../imports/svg-1a10080iez";
import { useHeroAnimations } from "../hooks/useHeroAnimations";

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full font-['Barlow_Condensed',sans-serif] font-normal">
      <h1 data-hero-headline className="text-[48px] lg:text-[88px] text-white tracking-[-4px] uppercase leading-[1] whitespace-pre-wrap m-0 font-normal">No vendemos metros</h1>
      <h1 data-hero-headline className="text-[48px] lg:text-[88px] text-white tracking-[-4px] uppercase leading-[1] whitespace-pre-wrap m-0 font-normal">____ CREAMOS RENTABILIDAD</h1>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative" data-name="Text">
      <Frame42 />
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[22px] lg:text-[32px] text-white tracking-[-1px] uppercase w-full font-['Barlow_Semi_Condensed',sans-serif] font-normal">
        <p data-hero-subtitle className="leading-[1] whitespace-pre-wrap m-0">El real estate volvió a ser negocio.</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full lg:w-[548px]">
      <Text />
    </div>
  );
}

function PrimaryButton() {
  return (
    <a data-hero-cta href="https://wa.me/5491173646541" target="_blank" rel="noopener noreferrer" className="bg-white content-stretch flex h-[48px] items-center justify-center px-[25px] py-[12px] relative rounded-[999px] shrink-0 w-full sm:w-[265px] no-underline cursor-pointer hover:bg-gray-100 transition-colors" data-name="Primary button">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#141414] text-[15px] text-center text-ellipsis tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Quiero invertir</p>
      </div>
    </a>
  );
}

function SecondaryButton() {
  return (
    <button type="button" onClick={() => document.getElementById('como-gano')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch flex h-[48px] items-center justify-center px-[25px] py-[12px] relative rounded-[999px] shrink-0 w-full sm:w-[265px] no-underline cursor-pointer hover:bg-white/10 transition-colors" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-center text-ellipsis text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Conoce el modelo</p>
      </div>
    </button>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col sm:flex-row gap-[8px] items-start relative shrink-0 w-full" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Buttons">
      <Buttons1 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-end min-h-px min-w-px relative">
      <Frame41 />
      <Buttons />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Content">
      <Frame57 />
    </div>
  );
}

function IntroSection() {
  return (
    <section className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 p-[16px] lg:p-[32px] right-0" data-name="Intro section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <Content />
    </section>
  );
}

function Group1() {
  return (
    <div className="absolute h-[8.092px] left-[25.89px] top-[22.8px] w-[31.728px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7277 8.09157">
        <g id="Group">
          <path d={svgPaths.p37dbdf80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pf6c6c0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p21af5d80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1c342500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p285ff00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1945a380} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pd291f70} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3d8551b0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p292a4780} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p31215e80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3a203900} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1d290b00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2acffe80} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3cdf13f2} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p111a6700} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p18e9d00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p33e6bf00} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p2023b700} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.pb93e000} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p1a7ce400} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p1f22af00} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p1b76e580} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p203973c0} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p25075800} fill="var(--fill-0, white)" id="Vector_24" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[25.89px] top-[22.8px]" data-name="Group">
      <Group1 />
    </div>
  );
}

function LogoOchaColor() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[60px]" data-name="logo-ocha-color 2">
      <div className="absolute h-[27.306px] left-[8.97px] top-[6.45px] w-[14.54px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5395 27.3059">
          <path d={svgPaths.p9905400} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[1.706px] left-[26.03px] top-[19.25px] w-[31.57px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.57 1.70649">
          <path d="M31.57 0H0V1.70649H31.57V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[7.613px] left-[26.16px] top-[10.1px] w-[8.226px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.2262 7.61307">
          <path d={svgPaths.p35221400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[7.395px] left-[41.68px] top-[10.29px] w-[6.826px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.82595 7.39478">
          <path d={svgPaths.p3c15ad00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[6.973px] left-[2.14px] top-[20.95px] w-[15.643px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6428 6.9726">
          <path d={svgPaths.p14075300} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[6.957px] left-[2.14px] top-[12.29px] w-[15.643px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6428 6.95717">
          <path d={svgPaths.p3d65980} fill="var(--fill-0, #F68400)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[7.405px] left-[49.07px] top-[10.28px] w-[8.248px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24802 7.40473">
          <path d={svgPaths.p358f8a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[7.658px] left-[35.01px] top-[10.11px] w-[5.808px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80835 7.65836">
          <path d={svgPaths.p8dff900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 5">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#e8ebef] text-[10px] tracking-[-0.2px] w-[min-content]">
        <p className="leading-[1.2] whitespace-pre-wrap">Construye</p>
      </div>
      <LogoOchaColor />
    </div>
  );
}

function LogoOwnHotelsContraste() {
  return (
    <div className="h-[40px] relative shrink-0 w-[53.333px]" data-name="logo-own-hotels contraste 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.3333 40">
        <g id="logo-own-hotels contraste 1">
          <path d={svgPaths.p2d082b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2961b300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p332aa000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3a9d600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pded8200} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p66e1500} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p4978c70} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p186ff700} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p14c80bf0} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p37c1e480} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 6">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#e8ebef] text-[10px] tracking-[-0.2px] w-[min-content]">
        <p className="leading-[1.2] whitespace-pre-wrap">Opera</p>
      </div>
      <LogoOwnHotelsContraste />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.93%_3.73%_20.52%_6.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.5715 28.2217">
        <g id="Group">
          <path d={svgPaths.p2d763900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p54e3780} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3f8b9000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1b2e8900} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p8b95480} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p252f140} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p13129d00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pb9f6330} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p25a8f600} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p4a26300} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1df96300} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.paee1600} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2ee59500} fill="var(--fill-0, #DF9F2A)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[86.5%_14.02%_8.37%_17.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8363 2.04988">
        <g id="Group">
          <path d={svgPaths.p2e648ff0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p197aa600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p388c0400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc4c1d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p26d0f00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p359dd300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p26af5900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2931b00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p7e9bb00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1a3e1f70} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p8fd7d00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p31774a20} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2f120e70} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3face00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p31e42500} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p19fe2a00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p33ad8d80} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p1334ae00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p83dfd00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p2cfbed00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p31491800} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p1aa51000} fill="var(--fill-0, white)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

export function LogoGm() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[71.146px]" data-name="logo gm 1">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row 7">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#e8ebef] text-[10px] tracking-[-0.2px] w-[min-content]">
        <p className="leading-[1.2] font-bold whitespace-pre-wrap">Desarrolla</p>
      </div>
      <LogoGm />
    </div>
  );
}

function Logos() {
  return (
    <div data-hero-logo className="hidden lg:flex absolute content-stretch flex-col gap-[16px] items-start left-[32px] top-[136px] w-[113px]" data-name="Logos">
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useHeroAnimations();
  return (
    <div ref={heroRef as React.RefObject<HTMLDivElement>} className="h-[100svh] overflow-clip relative shrink-0 w-full" data-name="Hero" id="inicio">
      <video data-hero-bg aria-label="Logo on colored background" autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop muted playsInline poster={`${import.meta.env.BASE_URL}images/hero-poster.jpg`} preload="metadata">
        <source src={`${import.meta.env.BASE_URL}videos/2bd5ae44656fe5e0504e38223d283ffeb8c6d21e.mp4`} type="video/mp4" />
      </video>
      <IntroSection />
      <Logos />
    </div>
  );
}
