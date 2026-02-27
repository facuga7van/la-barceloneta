import { useState, useEffect, useRef } from "react";
import { Facebook as FbIcon, Instagram as IgIcon, Linkedin as LiIcon, Twitter as TwIcon } from "lucide-react";
import svgPaths from "./svg-36x96stg2x";
import imgImage5475 from "figma:asset/a8c798b5c8be4c06e14d3f2ec3849a7ee96cbec3.png";
import imgImage5474 from "figma:asset/28f87cdf85d8b9d691305432cfcd710646570202.png";
import imgImage29 from "figma:asset/88f2a57d9ab1cb3b48181d8cec2a6a175d8ed5e1.png";
import imgImage31 from "figma:asset/4372b663ba895d65a00e831afef24a66e96a387c.png";
import imgImage32 from "figma:asset/1ed83031c13ff3e657b9319ce25234a8b5d42b68.png";

function IconamoonMenuBurgerHorizontalLight() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="iconamoon:menu-burger-horizontal-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="iconamoon:menu-burger-horizontal-light">
          <path d={svgPaths.p20066280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button className="bg-black cursor-pointer h-[64px] relative shrink-0 w-full" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] relative size-full">
          <IconamoonMenuBurgerHorizontalLight />
        </div>
      </div>
    </button>
  );
}

function NavMenu({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col flex-1 items-center overflow-clip relative shrink-0 w-[56px]" data-name="Nav Menu">
      <Button onClick={onMenuClick} />
    </div>
  );
}

function Button1() {
  return (
    <a href="/#vista360" className="content-stretch flex items-center relative no-underline cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap hover:text-[#f20909] transition-colors">
        <span className="leading-[1.2]">Vista 360</span>
      </div>
    </a>
  );
}

function Button2() {
  return (
    <a href="#nosotros" className="content-stretch flex items-center relative no-underline cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap hover:text-[#f20909] transition-colors">
        <span className="leading-[1.2]">Nosotros</span>
      </div>
    </a>
  );
}

function Button3() {
  return (
    <a href="/#brochure" className="content-stretch flex items-center relative no-underline cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap hover:text-[#f20909] transition-colors">
        <span className="leading-[1.2]">Brochure</span>
      </div>
    </a>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-end py-[40px] relative shrink-0" data-name="Menu Items">
      <div className="flex h-[60px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Button1 />
        </div>
      </div>
      <div className="flex h-[58px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Button2 />
        </div>
      </div>
      <div className="flex h-[59px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function PhArrowUpRightLight() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="ph:arrow-up-right-light">
      <div className="absolute bottom-[-0.41px] right-[-0.41px] size-[28.407px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4071 28.4071">
          <path d={svgPaths.p2e1c7470} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <a href="/#contacto" className="bg-[#f20909] relative shrink-0 w-full no-underline block cursor-pointer hover:bg-[#d00808] transition-colors" data-name="Button">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-end pb-[16px] pt-[24px] px-[8px] relative w-full">
          <div className="flex h-[74px] items-center justify-center relative shrink-0 w-[26px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative text-[22px] text-white tracking-[-0.22px]">Invertir</p>
            </div>
          </div>
          <PhArrowUpRightLight />
        </div>
      </div>
    </a>
  );
}

function NavMenu1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip shrink-0 w-[56px]" data-name="Nav Menu">
      <MenuItems />
      <Button4 />
    </div>
  );
}

function PhXLight({ fill = "white" }: { fill?: string }) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ph:x-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ph:x-light">
          <path d={svgPaths.p19eaba00} fill={fill} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <button className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[18px] right-[8px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick}>
      <PhXLight />
    </button>
  );
}

function SystemUiconsExpand() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system-uicons:expand">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="system-uicons:expand">
          <path d={svgPaths.p10ee28e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.952381" />
        </g>
      </svg>
    </div>
  );
}

function Button6({ onClick }: { onClick?: () => void }) {
  return (
    <button className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center left-[8px] overflow-clip px-[18px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick}>
      <SystemUiconsExpand />
    </button>
  );
}

function OcticonMute() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="octicon:mute-24">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="octicon:mute-24">
          <path d={svgPaths.pb778f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7({ onClick }: { onClick?: () => void }) {
  return (
    <button className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] bottom-[8px] content-stretch cursor-pointer flex items-center justify-center left-[8px] overflow-clip px-[18px] rounded-[12px] size-[48px]" data-name="Button" onClick={onClick}>
      <OcticonMute />
    </button>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.93%_3.73%_20.52%_6.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.302 164.391">
        <g id="Group">
          <path d={svgPaths.p1645adf0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p17731d40} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2d5cc700} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pa0bca00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p3fe79300} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p35baa700} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p18d5d400} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p6800800} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p7826d80} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p9852180} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p317d1780} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p1e557500} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p3fb63200} fill="var(--fill-0, #DF9F2A)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[86.5%_14.02%_8.37%_17.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284.469 11.9405">
        <g id="Group">
          <path d={svgPaths.p3ae2b5f2} fill="var(--fill-0, #1D1D1B)" id="Vector" />
          <path d={svgPaths.p1fa29a80} fill="var(--fill-0, #1D1D1B)" id="Vector_2" />
          <path d={svgPaths.p1b759080} fill="var(--fill-0, #1D1D1B)" id="Vector_3" />
          <path d={svgPaths.p17f91800} fill="var(--fill-0, #1D1D1B)" id="Vector_4" />
          <path d={svgPaths.p12114900} fill="var(--fill-0, #1D1D1B)" id="Vector_5" />
          <path d={svgPaths.p1f107480} fill="var(--fill-0, #1D1D1B)" id="Vector_6" />
          <path d={svgPaths.p696ef80} fill="var(--fill-0, #1D1D1B)" id="Vector_7" />
          <path d={svgPaths.p8ef2300} fill="var(--fill-0, #1D1D1B)" id="Vector_8" />
          <path d={svgPaths.p1f9be8d0} fill="var(--fill-0, #1D1D1B)" id="Vector_9" />
          <path d={svgPaths.p15d5a31} fill="var(--fill-0, #1D1D1B)" id="Vector_10" />
          <path d={svgPaths.pdf34800} fill="var(--fill-0, #1D1D1B)" id="Vector_11" />
          <path d={svgPaths.p19db4d00} fill="var(--fill-0, #1D1D1B)" id="Vector_12" />
          <path d={svgPaths.p16bd0700} fill="var(--fill-0, #1D1D1B)" id="Vector_13" />
          <path d={svgPaths.p3427ef00} fill="var(--fill-0, #1D1D1B)" id="Vector_14" />
          <path d={svgPaths.p654bf80} fill="var(--fill-0, #1D1D1B)" id="Vector_15" />
          <path d={svgPaths.p2c02f800} fill="var(--fill-0, #1D1D1B)" id="Vector_16" />
          <path d={svgPaths.p4630500} fill="var(--fill-0, #1D1D1B)" id="Vector_17" />
          <path d={svgPaths.p2474d480} fill="var(--fill-0, #1D1D1B)" id="Vector_18" />
          <path d={svgPaths.p3e9a3280} fill="var(--fill-0, #1D1D1B)" id="Vector_19" />
          <path d={svgPaths.pedffd00} fill="var(--fill-0, #1D1D1B)" id="Vector_20" />
          <path d={svgPaths.p2c2d0e80} fill="var(--fill-0, #1D1D1B)" id="Vector_21" />
          <path d={svgPaths.p255c0100} fill="var(--fill-0, #1D1D1B)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function LogoGm() {
  return (
    <div className="h-[233px] overflow-clip relative shrink-0 w-[414.424px]" data-name="logo gm 1">
      <Group />
      <Group1 />
    </div>
  );
}

function MaterialSymbolsArrowInsert() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:arrow-insert">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:arrow-insert">
          <path d={svgPaths.p390f1e00} fill="var(--fill-0, #F45F00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButon() {
  return (
    <a href="https://grupomarting.com" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[4px] items-center relative shrink-0 no-underline cursor-pointer group" data-name="Link Buton">
      <span className="[text-decoration-skip-ink:none] decoration-solid font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f45f00] text-[15px] tracking-[-0.3px] underline group-hover:text-[#d04e00] transition-colors">Visita nuestro sitio web</span>
      <MaterialSymbolsArrowInsert />
    </a>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[415px]">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-[372px]">
        <p className="leading-[1.2] whitespace-pre-wrap">25 años de trayectoria. Una nueva generación que transforma el real estate en Argentina.</p>
      </div>
      <LinkButon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[120px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Content">
      <LogoGm />
      <Frame15 />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-white h-[690px] overflow-clip relative shrink-0 w-[600px]" data-name="Image">
      <div className="-translate-y-1/2 absolute aspect-[581/765] left-0 right-px top-[calc(50%+83px)]" data-name="image 5475">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5475} />
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section id="nosotros" className="relative shrink-0 w-full" data-name="Intro section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[30px] items-start pb-[80px] pt-[32px] px-[32px] relative w-full">
        <Content />
        <Image />
      </div>
    </section>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start leading-[1.2] relative shrink-0 text-[#555] text-[15px] tracking-[-0.15px] w-[600px] whitespace-pre-wrap" data-name="Text">
      <p className="relative shrink-0 w-full">Grupo Marting nació hace más de 25 años de la mano de Marcelino Piñeiro, con la misión de brindar un servicio inmobiliario transparente y profesional.</p>
      <p className="relative shrink-0 w-full">{` Hoy, bajo la dirección de Alan Piñeiro, la empresa se consolida como una desarrolladora integral con visión federal y enfoque 100 % digital.`}</p>
      <p className="relative shrink-0 w-full">Nuestro propósito: transformar la experiencia de invertir, vivir y trabajar en el Real Estate argentino, combinando innovación, tecnología y modelos propios como el condo hotel fraccionado, representado por nuestra marca insignia La Barceloneta.</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] items-start justify-between not-italic relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">Nuestra historia</p>
      </div>
      <Text />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#e6e6e6] h-[578px] overflow-clip relative shrink-0 w-[347.27px]" data-name="Image">
      <div className="-translate-x-1/2 absolute aspect-[1148/1526] bottom-0 left-[calc(50%+0.37px)] top-0" data-name="image 5474">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5474} />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[740px] overflow-clip relative shrink-0 w-[676px]" data-name="Image">
      <div className="absolute bottom-0 h-[489px] right-0 w-[734px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[740px] items-start justify-between relative shrink-0 w-full">
      <Image1 />
      <Image2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Title />
      <Frame13 />
    </div>
  );
}

function StrategySection() {
  return (
    <section id="historia" className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[32px] relative w-full">
        <Frame12 />
      </div>
    </section>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#040404]">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">4.8%</p>
      <p className="opacity-60 relative shrink-0 text-[15px] tracking-[-0.15px]">Reseñas Positivas</p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Stats">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#040404]">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">300+</p>
      <p className="opacity-60 relative shrink-0 text-[15px] tracking-[-0.15px]">Clientes Satisfechos</p>
    </div>
  );
}

function Stats1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Stats">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#040404]">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">100+</p>
      <p className="opacity-60 relative shrink-0 text-[15px] tracking-[-0.15px]">Agentes Expertos</p>
    </div>
  );
}

function Stats2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Stats">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#040404]">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">620+</p>
      <p className="opacity-60 relative shrink-0 text-[15px] tracking-[-0.15px]">Proyectos Completados</p>
    </div>
  );
}

function Stats3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Stats">
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <Stats />
      <Stats1 />
      <Stats2 />
      <Stats3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px] w-[220px] whitespace-pre-wrap">Nuestras estadísticas destacadas en 2025</p>
      <div className="h-[81px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 81">
            <path d="M0.5 0V81" id="Vector 14" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function StrategySection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[80px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </section>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[562px]" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[60px] text-black tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre-wrap">Nuestros valores</h2>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[265px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Creando espacios visionarios con precisión y arte. Eleva tu arquitectura con diseño y innovación de vanguardia.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Title1 />
      <Content1 />
    </div>
  );
}

function StrategySection2() {
  return (
    <section id="valores" className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[32px] relative w-full">
        <Header />
      </div>
    </section>
  );
}

function Icon1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Icon">
      <div className="bg-[#48749e] col-1 h-[80px] ml-[34.67px] mt-0 row-1 w-[10.667px]" data-name="Icon Part" />
      <div className="col-1 flex items-center justify-center ml-[7.94px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex h-[10.667px] items-center justify-center ml-0 mt-[34.67px] relative row-1 w-[80px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[7.95px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-135">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-10 place-items-start relative shrink-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">Transparencia</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full whitespace-pre-wrap">Ética y confianza</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon />
      <Frame6 />
      <Container />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[426px] min-w-[340px] relative shrink-0 w-[612px]" data-name="Card1">
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <Content2 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-r border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Icon">
      <div className="bg-[#48749e] col-1 h-[80px] ml-[34.67px] mt-0 row-1 w-[10.667px]" data-name="Icon Part" />
      <div className="col-1 flex items-center justify-center ml-[7.94px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex h-[10.667px] items-center justify-center ml-0 mt-[34.67px] relative row-1 w-[80px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[7.95px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-135">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-10 place-items-start relative shrink-0" data-name="Icon">
      <Icon3 />
    </div>
  );
}

function Frame16() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame16 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">Innovación</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full whitespace-pre-wrap">Tecnología y visión digital</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon2 />
      <Frame7 />
      <Container1 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[426px] min-w-[340px] relative shrink-0 w-[612px]" data-name="Card2">
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <Content3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Icon">
      <div className="bg-[#48749e] col-1 h-[80px] ml-[34.67px] mt-0 row-1 w-[10.667px]" data-name="Icon Part" />
      <div className="col-1 flex items-center justify-center ml-[7.94px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex h-[10.667px] items-center justify-center ml-0 mt-[34.67px] relative row-1 w-[80px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[7.95px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-135">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-10 place-items-start relative shrink-0" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Frame17() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame17 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">Comunidad</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full whitespace-pre-wrap">Crecimiento conjunto</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon4 />
      <Frame8 />
      <Container2 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[425px] min-w-[340px] relative shrink-0 w-[612px]" data-name="Card3">
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <Content4 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Icon">
      <div className="bg-[#48749e] col-1 h-[80px] ml-[34.67px] mt-0 row-1 w-[10.667px]" data-name="Icon Part" />
      <div className="col-1 flex items-center justify-center ml-[7.94px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex h-[10.667px] items-center justify-center ml-0 mt-[34.67px] relative row-1 w-[80px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[7.95px] mt-[7.95px] relative row-1 size-[64.111px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-135">
          <div className="bg-[#48749e] h-[80px] w-[10.667px]" data-name="Icon Part" />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-10 place-items-start relative shrink-0" data-name="Icon">
      <Icon7 />
    </div>
  );
}

function Frame18() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame18 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">Rentabilidad</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full whitespace-pre-wrap">Productos con valor sostenido</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon6 />
      <Frame9 />
      <Container3 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[425px] min-w-[340px] relative shrink-0 w-[612px]" data-name="Card3">
      <div className="content-stretch flex items-center min-w-[inherit] overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <Content5 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="Cards">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#555] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">
        Apostamos al talento, la formación constante y la innovación.
        <br aria-hidden="true" />
        {` Nuestros talleres internos forman a los agentes en inversión, comunicación y tecnología, creando una comunidad profesional que comparte propósito y resultados.`}
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[487px]">
        <p className="leading-[1.2] whitespace-pre-wrap">Conoce a los visionarios detrás de Grupo Marting</p>
      </div>
      <Text1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#c4c4c4] h-[351px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-[-3px_-22.5px_0_-22px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.92%] left-[-57.87%] max-w-none top-[-15.48%] w-[215.73%]" src={imgImage31} />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[3px] items-start leading-[1.2] not-italic relative shrink-0 text-[#141414]" data-name="Name">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">Alan Piñeiro</p>
      <p className="opacity-80 relative shrink-0 text-[13px] tracking-[-0.13px]">Director ejecutivo</p>
    </div>
  );
}

function Linkedin2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="linkedin-01">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="linkedin-01">
          <path clipRule="evenodd" d={svgPaths.p39987880} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Name />
      <Linkedin2 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Card">
      <Image3 />
      <Frame4 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#c4c4c4] h-[351px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-[0_-21px_0_-19.5px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145.3%] left-[-63.5%] max-w-none top-[-16.24%] w-[215.96%]" src={imgImage32} />
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[3px] items-start leading-[1.2] not-italic relative shrink-0 text-[#141414]" data-name="Name">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px]">Marcelino Piñeiro</p>
      <p className="opacity-80 relative shrink-0 text-[13px] tracking-[-0.13px]">Fundador</p>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="linkedin-01">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="linkedin-01">
          <path clipRule="evenodd" d={svgPaths.p39987880} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Name1 />
      <Linkedin />
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Card">
      <Image4 />
      <Frame5 />
    </div>
  );
}

function Peoples() {
  return (
    <div className="content-start flex flex-wrap gap-[48px_34px] items-start relative shrink-0 w-[657px]" data-name="Peoples">
      <Card />
      <Card5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Title2 />
      <Peoples />
    </div>
  );
}

function StrategySection3() {
  return (
    <section id="equipo" className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[32px] py-[120px] relative w-full">
        <Frame14 />
      </div>
    </section>
  );
}

function Main1() {
  return (
    <main className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Main" tabIndex={-1}>
      <IntroSection />
      <StrategySection />
      <StrategySection1 />
      <StrategySection2 />
      <Cards />
      <StrategySection3 />
    </main>
  );
}

function Icon8() {
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

function Text4() {
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
      <Icon8 />
      <Text4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Text">
      <Logo />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Text3 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[257px]" data-name="Social Icons">
      <div className="flex gap-[32px] items-center w-full" data-name="Social Icon">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#a3a3a3] hover:text-[#141414] transition-colors">
          <FbIcon size={24} strokeWidth={1.5} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-[#a3a3a3] hover:text-[#141414] transition-colors">
          <TwIcon size={24} strokeWidth={1.5} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#a3a3a3] hover:text-[#141414] transition-colors">
          <IgIcon size={24} strokeWidth={1.5} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#a3a3a3] hover:text-[#141414] transition-colors">
          <LiIcon size={24} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative self-stretch" data-name="Content">
      <Text2 />
      <SocialIcons />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[1.2]">Secciones</p>
      </div>
    </div>
  );
}

function Column() {
  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors no-underline text-inherit";
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header1 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#como-gano" className={linkCls}>¿Cómo gano?</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#fracciones" className={linkCls}>Elegí tu fracción</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#proyecto" className={linkCls}>El proyecto (Buenos Aires)</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#avance" className={linkCls}>Avance de obra</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#neuquen" className={linkCls}>{`El próximo capítulo (Neuquén) `}</a>
      </div>
    </nav>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[22px] text-white tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[1.2]">Learn more</p>
      </div>
    </div>
  );
}

function Column1() {
  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors no-underline text-inherit";
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 2">
      <Header2 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#como-invertir" className={linkCls}>¿Cómo invertir?</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#testimonios" className={linkCls}>Testimonios</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#prensa" className={linkCls}>Prensa</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#vista360" className={linkCls}>Vista 360</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="/#contacto" className={linkCls}>Contacto</a>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="Nav">
      <Column />
      <Column1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#040404] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#575757] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[120px] items-start px-[32px] py-[80px] relative w-full">
        <Content6 />
        <Nav />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Main">
      <div className="content-stretch flex flex-col items-start relative rounded-[inherit] w-full">
        <Main1 />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Iso() {
  return (
    <div className="absolute h-[71.316px] left-[32px] top-[32px] w-[33.027px]" data-name="Iso">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0271 71.3157">
        <g id="Iso">
          <path d={svgPaths.p2a437a00} fill="var(--fill-0, #040404)" id="Vector" />
          <path d={svgPaths.p2a2f1780} fill="var(--fill-0, #040404)" id="Vector_2" />
          <path d={svgPaths.p285a7280} fill="var(--fill-0, #040404)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

const ABOUT_MENU_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Nuestra historia", href: "#historia" },
  { label: "Nuestros valores", href: "#valores" },
  { label: "El equipo", href: "#equipo" },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleToggleMute = () => {
    const newMuted = !videoMuted;
    setVideoMuted(newMuted);
    if (videoRef.current) videoRef.current.muted = newMuted;
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen?.().catch(() => {});
  };

  return (
    <div className="bg-white content-stretch flex items-start justify-end pr-[56px] relative size-full" data-name="About">
      {/* Overlay del menú */}
      <div
        className={`fixed inset-0 bg-black/45 z-[199] transition-opacity duration-350 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Panel del menú */}
      <div
        className={`fixed top-0 right-0 w-[520px] max-w-full h-screen bg-white z-[200] flex flex-col p-20 pt-12 overflow-y-auto transition-transform duration-400 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#eae9e8] transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <PhXLight fill="#141414" />
        </button>
        <div className="flex flex-col gap-5 mt-8">
          {ABOUT_MENU_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-['Helvetica:Regular',sans-serif] text-base text-[#141414] hover:text-[#f20909] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Fixed right sidebar: hamburger (top) + nav items + Invertir (bottom) */}
      <div className="fixed top-0 right-0 h-screen z-[150] flex flex-col" data-name="SidebarNav">
        <NavMenu onMenuClick={() => setMenuOpen(true)} />
        <NavMenu1 />
      </div>
      {videoVisible && (
        <div className="fixed bottom-[16px] left-[16px] z-[100] h-[325px] overflow-clip rounded-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] w-[200px]" data-name="Video">
          <video ref={videoRef} src="/videos/2d3bf204646db6c10443dbfebd36299d3a2dbf23.mov" autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop muted={videoMuted} playsInline />
          <Button5 onClick={() => setVideoVisible(false)} />
          <Button6 onClick={handleFullscreen} />
          <Button7 onClick={handleToggleMute} />
        </div>
      )}
      <Main />
      <Iso />
    </div>
  );
}