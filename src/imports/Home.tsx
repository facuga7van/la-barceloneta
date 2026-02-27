import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { Link } from "react-router";
import { Facebook as FbIcon, Instagram as IgIcon, Linkedin as LiIcon, Twitter as TwIcon } from "lucide-react";
import ConstructionTimeline from "../components/ConstructionTimeline";
import svgPaths from "./svg-1a10080iez";
import imgImage5483 from "figma:asset/5fa2811ceac5459ca22dc90ff1434b4271d95280.png";
import imgImage5472 from "figma:asset/e3b035696adca0a791535c23f307956a1eceb398.png";
import imgImage5457 from "figma:asset/a1e4300735e617601eb68cb252aab3a81e0488cb.png";
import imgImage5476 from "figma:asset/da05dcec391a72e13d0510a716c619ab3f3e73f9.png";
import imgImage from "figma:asset/40faea4885d8eb28c843a386f0e7f9ed377070c9.png";
import imgArrowRight02 from "figma:asset/742d27d63a4c2ac7129e534a9d89fd15a13a1a99.png";
import imgArrowRight3 from "figma:asset/4f6aa36958afd713bc1c8acb59b4994a3636420d.png";
import imgArrowRight4 from "figma:asset/ee42972642d8fa9e5f8cda6dbdda134bd59958d1.png";
import imgArrowRight5 from "figma:asset/e7b02b83f7d79cd443a54c11301740ab75dd548e.png";
import imgArrowRight6 from "figma:asset/6af0a074825e112e70f7ac339572847d568610c2.png";
import imgImage1 from "figma:asset/aecf8491a4aed42a021d65d003982cb10eaa27bb.png";
import imgImage5477 from "figma:asset/f57b3df53eecbd1024de251092ca13b5ba9f2c7f.png";
import imgImage5484 from "figma:asset/c2f24df4b6ca0039f037d93862af8ddfbae7000b.png";
import imgImage5458 from "figma:asset/914b7a18cc94a82207d92425d5761fe22525c121.png";
import imgImage5479 from "figma:asset/34c316585b4495cb74c6d6857f6aa9f55d2009e5.png";
import imgImage2 from "figma:asset/131468d8c4d8bf18178f60f9e863d932cb3990d2.png";
import imgImagen from "figma:asset/7694e423852a974cdbc6d9264be6bf9dd34a1208.png";

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
    <button type="button" className="bg-black cursor-pointer h-[64px] relative shrink-0 w-full" data-name="Button" onClick={onClick} aria-label="Abrir menú">
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
    <div className="bg-white content-stretch flex flex-col flex-1 items-center overflow-clip relative w-[56px]" data-name="Nav Menu">
      <Button onClick={onMenuClick} />
    </div>
  );
}

function Button1() {
  return (
    <a href="#vista360" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[1.2]">Vista 360</p>
      </div>
    </a>
  );
}

function Button2() {
  return (
    <Link to="/about" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[1.2]">Nosotros</p>
      </div>
    </Link>
  );
}

function Button3() {
  return (
    <a href="#brochure" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[1.2]">Brochure</p>
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
    <a href="#como-invertir" className="bg-[#f20909] relative shrink-0 w-full block no-underline text-inherit cursor-pointer" data-name="Button">
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
    <button className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[18px] right-[8px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick} aria-label="Cerrar video">
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
    <button type="button" className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center left-[8px] overflow-clip px-[18px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick} aria-label="Pantalla completa">
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

function Button7({ onClick, isMuted }: { onClick?: () => void; isMuted?: boolean }) {
  return (
    <button type="button" className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] bottom-[8px] content-stretch cursor-pointer flex items-center justify-center left-[8px] overflow-clip px-[18px] rounded-[12px] size-[48px]" data-name="Button" onClick={onClick} aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
      {isMuted ? (
        <OcticonMute />
      ) : (
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
            <path d="M2 5.5h2.5L8 2.5v11L4.5 10.5H2v-5ZM10.5 5.5c.8.5 1.5 1.3 1.5 2.5s-.7 2-1.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </button>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="bg-[#fbf7f4] flex-[1_0_0] h-[4px] min-h-px min-w-px" data-name="Divider" />
      <div className="flex flex-col font-['Barlow_Condensed:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[88px] text-white tracking-[-4px] uppercase whitespace-nowrap">
        <span className="block leading-none text-[88px]">{` Creamos rentabilidad`}</span>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Barlow_Condensed:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[88px] text-white tracking-[-4px] uppercase w-full">
        <h1 className="block leading-none whitespace-pre-wrap">No vendemos metros</h1>
      </div>
      <Frame40 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative" data-name="Text">
      <Frame42 />
      <div className="flex flex-col font-['Barlow_Semi_Condensed:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white tracking-[-2px] uppercase w-full">
        <p className="leading-[0.9] whitespace-pre-wrap">El real estate volvió a ser negocio.</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[548px]">
      <Text />
    </div>
  );
}

function PrimaryButton() {
  return (
    <a href="#contacto" className="bg-white content-stretch flex h-[48px] items-center justify-center px-[25px] py-[12px] relative rounded-[999px] shrink-0 w-[265px] no-underline cursor-pointer" data-name="Primary button">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#141414] text-[15px] text-center text-ellipsis tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Quiero invertir</p>
      </div>
    </a>
  );
}

function SecondaryButton() {
  return (
    <a href="#como-gano" className="content-stretch flex h-[48px] items-center justify-center px-[25px] py-[12px] relative rounded-[999px] shrink-0 w-[265px] no-underline cursor-pointer" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-center text-ellipsis text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Conoce el modelo</p>
      </div>
    </a>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] items-start relative shrink-0 w-full" data-name="Buttons">
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
    <section className="absolute bottom-0 content-stretch flex flex-col items-start justify-end left-0 p-[32px] right-0" data-name="Intro section">
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

function LogoGm() {
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
        <p className="leading-[1.2] whitespace-pre-wrap">Desarrolla</p>
      </div>
      <LogoGm />
    </div>
  );
}

function Logos() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[32px] top-[136px] w-[113px]" data-name="Logos">
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="Hero" id="inicio">
      <video aria-label="Logo on colored background" autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop muted playsInline>
        <source src={`${import.meta.env.BASE_URL}videos/2bd5ae44656fe5e0504e38223d283ffeb8c6d21e.mp4`} type="video/mp4" />
      </video>
      <IntroSection />
      <Logos />
    </div>
  );
}

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
  return (
    <div className="w-full overflow-hidden bg-black shrink-0" data-name="Images">
      <div className="flex gap-[16px] p-[16px] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {GRID_IMAGES.map((img, i) => (
          <div key={i} className="flex-none w-[305px] h-[410px] snap-start overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Banner() {
  return (
    <section id="brochure" className="relative shrink-0 w-full" data-name="Banner">
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <div className="aspect-[2320/264] relative shrink-0 w-full" data-name="image 5483">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5483} />
        </div>
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[562px]" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.6px]">
        <h2 className="block leading-[1.2] whitespace-pre-wrap">¿Cómo gano con este modelo?</h2>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[265px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Nos ajustamos a tus posibilidades de inversión otorgando beneficios desde el principio. Para que más que invertir en un inmueble inviertas en una experiencia.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Title />
      <Content1 />
    </div>
  );
}

function ComoGano() {
  return (
    <section id="como-gano" className="relative shrink-0 w-full" data-name="Como gano">
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

function Frame54() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame54 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">{`+6% `}</p>
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#575757] text-[30px] tracking-[-0.6px]">Por 24 meses</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[8px] items-start leading-[1.2] not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px] w-full">RENTA ASEGURADA</p>
      <p className="opacity-80 relative shrink-0 text-[15px] tracking-[-0.15px] w-full">Renta fija garantizada por contrato (opcional)</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon />
      <Frame32 />
      <Container />
    </div>
  );
}

function IcOutlinePlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:outline-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:outline-plus">
          <path d={svgPaths.p3fb2bc00} fill="var(--fill-0, black)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <button className="absolute content-stretch cursor-pointer flex items-center justify-center p-[14px] right-[16px] rounded-[26px] size-[40px] top-[16px]" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}><IcOutlinePlus /></div>
    </button>
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

function Frame55() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame55 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">+8–12%</p>
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#575757] text-[30px] tracking-[-0.6px]">Anual</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[8px] items-start leading-[1.2] not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px] w-full">RENTA HOTELERA</p>
      <p className="opacity-80 relative shrink-0 text-[15px] tracking-[-0.15px] w-full">Ganancia luego, con hotel (variable, mayor).</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon2 />
      <Frame33 />
      <Container1 />
    </div>
  );
}

function IcOutlinePlus1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:outline-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:outline-plus">
          <path d={svgPaths.p3fb2bc00} fill="var(--fill-0, black)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button9({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <button className="absolute content-stretch cursor-pointer flex items-center justify-center p-[14px] right-[16px] rounded-[26px] size-[40px] top-[16px]" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}><IcOutlinePlus1 /></div>
    </button>
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

function Frame56() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px py-[16px] relative w-full">
      <Frame56 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1e3d59] text-[60px] tracking-[-0.6px]">+5%</p>
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#575757] text-[30px] tracking-[-0.6px]">Anual</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[8px] items-start leading-[1.2] not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="relative shrink-0 text-[30px] tracking-[-0.6px] w-full">RENTA DE ESPERA</p>
      <p className="opacity-80 relative shrink-0 text-[15px] tracking-[-0.15px] w-full">Ganancia durante obra (segura, baja).</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Content">
      <Icon4 />
      <Frame34 />
      <Container2 />
    </div>
  );
}

function IcOutlinePlus2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:outline-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:outline-plus">
          <path d={svgPaths.p3fb2bc00} fill="var(--fill-0, black)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <button className="absolute content-stretch cursor-pointer flex items-center justify-center p-[14px] right-[16px] rounded-[26px] size-[40px] top-[16px]" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}><IcOutlinePlus2 /></div>
    </button>
  );
}

const CARD_DATA = [
  {
    metric: "+6%",
    period: "Por 24 meses",
    title: "RENTA ASEGURADA",
    subtitle: "Renta fija garantizada por contrato (opcional)",
    detail: "Renta Asegurada (RA)\nEs una modalidad opcional que te permite cobrar una renta fija, estable y garantizada por contrato durante los primeros 24 meses.\nNo depende de la ocupación del hotel ni de la variabilidad del mercado, por lo que es ideal si buscás previsibilidad desde el primer día.",
    bgColor: "#141414",
  },
  {
    metric: "+8–12%",
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

function Cards() {
  return (
    <div className="content-stretch flex items-stretch relative shrink-0 w-full" data-name="Cards">
      {CARD_DATA.map((card, i) => (
        <div
          key={i}
          data-name={`Card${i + 1}`}
          className={`group flex-[1_0_0] min-h-[540px] min-w-[340px] relative flex flex-col p-[40px] transition-colors duration-300 border-t border-b border-[rgba(0,0,0,0.1)] ${i < 2 ? "border-r border-[rgba(0,0,0,0.1)]" : ""}`}
          style={{ "--card-bg": card.bgColor } as React.CSSProperties}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = card.bgColor; }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = ""; }}
        >
          {/* Default state: metric + title/subtitle */}
          <div className="flex flex-col flex-1 justify-end gap-[32px] group-hover:hidden">
            <div className="flex flex-col gap-[8px]">
              <span className="font-['Helvetica:Regular',sans-serif] leading-[1] text-[60px] tracking-[-0.6px] text-[#1e3d59]">
                {card.metric}
              </span>
              <span className="font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[30px] tracking-[-0.6px] text-[#575757]">
                {card.period}
              </span>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[30px] tracking-[-0.6px] text-black">
                {card.title}
              </p>
              <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] text-[18px] tracking-[-0.18px] text-black opacity-80">
                {card.subtitle}
              </p>
            </div>
          </div>

          {/* Hover state: title + detail */}
          <div className="hidden group-hover:flex flex-col gap-[16px] flex-1 pt-[8px]">
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
      ))}
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[562px]" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.6px]">
        <h2 className="block leading-[1.2] whitespace-pre-wrap">Elegí tu fracción</h2>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[265px]" data-name="Content">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">Accedé a una unidad desde USD 20.000 y hacé que tu ladrillo trabaje por vos.</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Title1 />
      <Content5 />
    </div>
  );
}

function StrategySection() {
  return (
    <section id="fracciones" className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[32px] relative w-full">
        <Header1 />
      </div>
    </section>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative rounded-[99px] shrink-0 w-[542px] z-[3]">
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
    <div className="absolute bg-[rgba(0,0,0,0.1)] h-[434px] left-0 right-[604px] top-[28px] z-[2]">
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

  const overlayPct = ((fraction + 1) / totalFractions) * 100;

  return (
    <div
      ref={containerRef}
      className="content-stretch flex flex-[1_0_0] isolate items-center justify-center min-h-px min-w-px relative w-full z-[2] select-none cursor-ew-resize"
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
      <div className="flex h-[422px] items-center justify-center relative shrink-0 w-[597.609px] z-[1]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[597.609px] relative w-[422px]" data-name="image 5472">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={planSrc} />
          </div>
        </div>
      </div>
      {/* Draggable overlay — grows left→right as fraction increases */}
      <div
        className="absolute top-0 left-0 h-full bg-[rgba(0,0,0,0.08)] z-[2] pointer-events-none"
        style={{ width: `${overlayPct}%` }}
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
      <p className="-translate-x-full absolute font-['Helvetica:Bold',sans-serif] leading-[1.2] left-[28px] not-italic text-[#040404] text-[22px] text-right top-[29px] tracking-[-0.22px]">1/8</p>
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
    <div className="content-stretch flex flex-col gap-[24px] h-[544px] isolate items-center relative shrink-0 w-[713px]">
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
      <p className="relative shrink-0 text-right">U$D 20.000</p>
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
      <p className="font-['Helvetica:Regular',sans-serif] opacity-70 relative shrink-0 text-[#040404] text-[13px] tracking-[-0.13px] w-[393px] whitespace-pre-wrap">* Los valores son estimados. La renta hotelera (RH) puede variar según ocupación y tarifa.</p>
    </div>
  );
}

function FractionViewerInteractive() {
  const [activeTab, setActiveTab] = useState<"norte" | "sur">("norte");
  const [activeDot, setActiveDot] = useState(0);

  const TOTAL_DOTS = 8;
  const BASE = 20000;
  const fractions = activeDot + 1;
  const investment = BASE * fractions;
  const rentaEspera   = Math.round(investment * 0.05  / 12);
  const rentaHotelera = Math.round(investment * 0.10  / 12);
  const rentaAsegurada = Math.round(investment * 0.06 / 12);

  const fmt = (n: number) => n.toLocaleString("es-AR");

  const planSrc = imgImage5472;

  const sliderItems = Array.from({ length: TOTAL_DOTS }).flatMap((_, i) => {
    const isSelected = i === activeDot;
    const isBefore   = i < activeDot;
    const items: JSX.Element[] = [];
    if (i > 0) {
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
        aria-label={`${i + 1}/${TOTAL_DOTS} fracciones`}
      >
        {isSelected ? (
          <div className="bg-[#040404] rounded-[9999px] size-[14px] relative">
            <p className="absolute font-['Helvetica:Bold',sans-serif] font-bold text-[#040404] text-[16px] tracking-[-0.16px] leading-[1.2] top-[20px] left-1/2 -translate-x-1/2 whitespace-nowrap">
              {`${i + 1}/${TOTAL_DOTS}`}
            </p>
          </div>
        ) : (
          <div className={`rounded-[9999px] size-[14px] border-2 transition-colors duration-300 ${isBefore ? "bg-[#040404] border-[#040404]" : "bg-white border-[#c4c4c4]"}`} />
        )}
      </button>
    );
    return items;
  });

  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[32px] relative shrink-0 w-full">
      {/* Left: tabs + floor plan + slider */}
      <div className="content-stretch flex flex-col gap-[24px] h-[544px] isolate items-center relative shrink-0 w-[713px]">
        {/* Norte/Sur tabs */}
        <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative rounded-[99px] shrink-0 w-[542px] z-[3]">
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
        {/* Slider — click dot to select fraction, table updates */}
        <div className="content-stretch flex isolate items-center relative shrink-0 w-full z-[1] px-[8px]" data-name="Slider">
          {sliderItems}
        </div>
      </div>
      {/* Right: dynamic investment table */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.2] min-h-px min-w-px not-italic py-[40px] relative self-stretch">
        {/* TU INVERSIÓN */}
        <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] items-start justify-between py-[16px] relative shrink-0 text-[#040404] text-[22px] tracking-[-0.22px] w-full">
          <p className="relative shrink-0">TU INVERSIÓN</p>
          <p className="relative shrink-0 text-right transition-all duration-300">U$D {fmt(investment)}</p>
        </div>
        {/* RENTA DE ESPERA */}
        <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px]">RENTA DE ESPERA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[15px] tracking-[-0.15px] opacity-70">(5% anual)</p>
          </div>
          <div className="flex flex-[1_0_0] items-end justify-end">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px] transition-all duration-300">+U$D {fmt(rentaEspera)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        {/* RENTA HOTELERA */}
        <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px]">RENTA HOTELERA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[15px] tracking-[-0.15px] opacity-70">(8–12% anual est.)</p>
          </div>
          <div className="flex flex-[1_0_0] items-end justify-end">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px] transition-all duration-300">+U$D {fmt(rentaHotelera)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        {/* RENTA ASEGURADA */}
        <div className="content-stretch flex items-start justify-between py-[16px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-[1_0_0] flex-col items-start justify-center">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px]">RENTA ASEGURADA</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[15px] tracking-[-0.15px] opacity-70">(6% anual, opcional)</p>
          </div>
          <div className="flex flex-[1_0_0] items-end justify-end">
            <p className="font-['Helvetica:Bold',sans-serif] text-[#040404] text-[22px] tracking-[-0.22px] transition-all duration-300">+U$D {fmt(rentaAsegurada)}</p>
            <p className="font-['Helvetica:Regular',sans-serif] text-[#a3a3a3] text-[13px] tracking-[-0.13px]">/MES</p>
          </div>
        </div>
        <p className="font-['Helvetica:Regular',sans-serif] opacity-70 text-[#040404] text-[13px] tracking-[-0.13px] w-[393px] whitespace-pre-wrap">* Los valores son estimados. La renta hotelera (RH) puede variar según ocupación y tarifa.</p>
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
    <div id="proyecto" className="relative shrink-0 w-full" data-name="Value Section">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pb-[120px] px-[32px] relative w-full">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.2]">El proyecto</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number />
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">USD 20.000</p>
      <div className="h-0 relative shrink-0 w-[235px]">
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
    <div className="content-stretch flex flex-col gap-[59px] items-start relative shrink-0 w-[235px]" data-name="Container">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[-0.22px] w-[min-content] whitespace-pre-wrap">desde</p>
      <Content6 />
      <FeaturesContainer />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="absolute bg-[#ff5a63] bottom-[-63px] content-stretch flex h-[350px] items-center p-[30px] right-[98px] w-[295px]" data-name="Content Wrapper">
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
    <div className="bg-[#0d3477] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Portada">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute aspect-[592/665] bottom-[40px] mix-blend-screen opacity-84 right-[62px] top-[35px]" data-name="image 5457">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.29%] left-[-0.05%] max-w-none top-[-14.29%] w-[100.11%]" src={imgImage5457} />
        </div>
      </div>
      <ContentWrapper />
      <div className="absolute h-[82px] left-[72px] top-[545px] w-[334px]" data-name="image 5476">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5476} />
      </div>
      <Group10 />
      <div className="absolute font-['Barlow_Condensed:Medium',sans-serif] inset-[40.04%_12.41%_31.06%_5.84%] leading-none not-italic text-[#ff5a63] text-[101.098px] tracking-[-8.7698px] uppercase whitespace-pre-wrap">
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
        <p className="leading-[1.2] whitespace-pre-wrap">Entrega estimada</p>
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Examples">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center px-[80px] relative w-full">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Content">
      <SectionHeader />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <p className="leading-[1.2] whitespace-pre-wrap">La Barceloneta Buenos Aires es un desarrollo donde cada unidad se divide en 8 fracciones (1/8), permitiendo invertir desde USD 20.000 con escritura pública y rentabilidad en dólares. Somos la única empresa en CABA que comercializa departamentos fraccionados bajo este formato.</p>
      </div>
      <div className="aspect-[860/888] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Person with iPad" className="absolute h-[100.02%] left-[-5.78%] max-w-none top-[-0.01%] w-[105.78%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function ToneAndVoice() {
  return (
    <div className="content-stretch flex gap-[32px] items-start py-[32px] relative shrink-0 w-full" data-name="Tone and voice">
      <Examples />
      <Content7 />
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex gap-[531px] items-start relative shrink-0 w-full" data-name="Title and subtitle">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.2]">Prestaciones selectas</p>
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
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArrowRight02} />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative size-[104px]" data-name="arrow-right-02">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArrowRight3} />
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgArrowRight4} />
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
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[207px] whitespace-pre-wrap">50m2 de pileta + solarium</p>
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
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[100px] items-start justify-center not-italic relative shrink-0 text-black w-full" data-name="Meeting Points Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[15px] tracking-[-0.15px]">
        <span className="leading-[1.2]">01</span>
        <span className="leading-[1.2] text-[#575757]">/03</span>
      </p>
      <p className="leading-[1.1] min-w-full relative shrink-0 text-[60px] text-right tracking-[-0.6px] w-[min-content] whitespace-pre-wrap">ROOFTOP</p>
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
    { label: "ROOFTOP", desc: "50m² de pileta + solarium", image: imgArrowRight3 },
    { label: "SPA", desc: "Spa y wellness de alta gama", image: imgArrowRight4 },
    { label: "ART GALLERY", desc: "Galería de arte integrada al hotel", image: imgArrowRight5 },
  ];
  const current = GALLERY_TABS[tab];
  const total = GALLERY_TABS.length;

  return (
    <div className="content-stretch flex gap-[32px] h-[552px] items-center relative shrink-0 w-full" data-name="Container">
      {/* Left content: navigation + counter + title */}
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
        {/* Arrow navigation + description */}
        <div className="absolute bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0" data-name="Container">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <button
              type="button"
              onClick={() => setTab(t => (t - 1 + total) % total)}
              className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 transition-opacity"
              aria-label="Anterior"
            >
              <svg className="size-[40px]" fill="none" viewBox="0 0 40 40">
                <path d="M31.6667 20H8.33337M8.33337 20L18.3334 10M8.33337 20L18.3334 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setTab(t => (t + 1) % total)}
              className="flex items-center justify-center size-[40px] cursor-pointer hover:opacity-60 transition-opacity"
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
                  className={`rounded-full transition-all duration-200 cursor-pointer ${i === tab ? "w-[20px] h-[8px] bg-black" : "size-[8px] bg-[#c4c4c4]"}`}
                  aria-label={GALLERY_TABS[i].label}
                />
              ))}
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-[207px] whitespace-pre-wrap">{current.desc}</p>
          </div>
        </div>
        {/* Counter + section title */}
        <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[100px] items-start justify-center not-italic relative shrink-0 text-black w-full" data-name="Meeting Points Container">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[15px] tracking-[-0.15px]">
            <span className="leading-[1.2]">{String(tab + 1).padStart(2, "0")}</span>
            <span className="leading-[1.2] text-[#575757]">/{String(total).padStart(2, "0")}</span>
          </p>
          <p className="leading-[1.1] min-w-full relative shrink-0 text-[60px] text-right tracking-[-0.6px] w-[min-content] whitespace-pre-wrap">{current.label}</p>
        </div>
      </div>
      {/* Gallery image */}
      <div aria-hidden="true" className="flex-[1_0_0] h-[552px] min-h-px min-w-px relative overflow-hidden" data-name="Image" role="presentation">
        <img key={tab} alt={current.label} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={current.image} />
      </div>
    </div>
  );
}

function TitleAndSubtitle1() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] gap-[32px] items-center leading-[0] not-italic relative shrink-0 w-full" data-name="Title and subtitle">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[30px] text-black tracking-[-0.6px]">
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
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgArrowRight5} />
      </div>
    </div>
  );
}

function ArrowRight8() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(159,159,159,0.8)] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgArrowRight6} />
      </div>
    </div>
  );
}

function ArrowRight9() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="arrow-right-02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgArrowRight6} />
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
    <div className="absolute bottom-[0.29px] content-stretch flex flex-col gap-[8px] items-end justify-center left-0 w-[335px]" data-name="Container">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[306px]" data-name="Header">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[306px]" data-name="Header">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[306px]" data-name="Header">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[306px]" data-name="Header">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[306px]" data-name="Header">
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
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[306px]" data-name="Header">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-start justify-end left-[65px] top-[21px] w-[375px]">
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
    <div className="content-stretch flex flex-col gap-[8px] h-[95px] items-start overflow-clip relative shrink-0 w-full">
      <Frame23 />
      <Frame49 />
      <div className="absolute h-[95px] right-0 top-0 w-[43px]" style={{ backgroundImage: "linear-gradient(269.462deg, rgb(255, 255, 255) 1.0158%, rgba(255, 255, 255, 0) 111.65%)" }} />
      <div className="absolute h-[95px] left-0 top-0 w-[34px]" style={{ backgroundImage: "linear-gradient(-89.8041deg, rgba(255, 255, 255, 0) 0.47317%, rgb(255, 255, 255) 87.562%)" }} />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
      <Container7 />
      <Frame30 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[32px] h-[552px] items-center relative shrink-0 w-full" data-name="Container">
      <Content9 />
      <div aria-hidden="true" className="flex-[1_0_0] h-[552px] max-w-[1000px] min-h-px min-w-px relative" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Header13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.2]">Ubicación</p>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="flex-[1_0_0] h-[573px] max-w-[800px] min-h-px min-w-px overflow-clip relative" data-name="Map">
      <div className="absolute h-[886px] left-[-399px] top-[-153px] w-[1066px]" data-name="image 5476">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5477} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[30px] text-right tracking-[-0.3px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Venezuela 2475, C1096ABQ Cdad. Autónoma de Buenos Aires</h3>
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
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[121px] items-center pr-[100px] relative w-full">
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
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[32px] py-[120px] relative w-full">
        <Header6 />
        <div className="content-stretch flex flex-col h-[763px] items-start pb-[64px] relative shrink-0 w-full" data-name="Portada / Bs As">
          <Portada />
        </div>
        <ToneAndVoice />
        <section className="content-stretch flex flex-col gap-[64px] items-start justify-center py-[80px] relative shrink-0 w-full" data-name="Galería de fotos">
          <TitleAndSubtitle />
          <Container4 />
        </section>
        <section id="avance" className="bg-white content-stretch flex flex-col gap-[64px] items-start justify-center py-[80px] relative shrink-0 w-full" data-name="Avance de obra">
          <TitleAndSubtitle1 />
          <Container6 />
        </section>
        <section className="aspect-[1160/812] bg-white content-stretch flex flex-col gap-[64px] items-start justify-center py-[80px] relative shrink-0 w-full" data-name="Ubicación">
          <Header13 />
          <Container8 />
        </section>
      </div>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <a href="#contacto" className="-translate-y-1/2 absolute bg-[#ff41b6] content-stretch cursor-pointer flex h-[48px] items-center justify-center px-[25px] py-[12px] right-[150px] rounded-[999px] top-[calc(50%-0.36px)] w-[265px] no-underline hover:bg-[#e03aa3] transition-colors" data-name="Primary button">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[15px] text-center text-ellipsis text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Ir a la plataforma</p>
      </div>
    </a>
  );
}

function Banner1() {
  return (
    <section className="relative shrink-0 w-full" data-name="Banner">
      <div aria-hidden="true" className="absolute border-[#eae9e8] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start justify-center p-[32px] relative w-full">
          <div className="aspect-[2320/264] relative shrink-0 w-full" data-name="image 5483">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[341.63%] left-[-3.84%] max-w-none top-[-119.94%] w-[131.21%]" src={imgImage5484} />
            </div>
          </div>
          <PrimaryButton1 />
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.2]">El próximo capítulo (Neuquén)</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number1 />
      </div>
    </div>
  );
}

function Header14() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[30px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">{`Energy & Business Tower`}</p>
      <div className="h-0 relative shrink-0 w-[235px]">
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
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[235px]" data-name="Container">
      <Content10 />
      <FeaturesContainer1 />
    </div>
  );
}

function ContentWrapper1() {
  return (
    <div className="absolute bg-[#040404] bottom-[-63px] content-stretch flex h-[350px] items-center p-[30px] right-[98px] w-[295px]" data-name="Content Wrapper">
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
    <div className="bg-[#1e3d59] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Portada">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute aspect-[592/665] bottom-[40px] mix-blend-screen right-[62px] top-[35px]" data-name="image 5458">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5458} />
      </div>
      <ContentWrapper1 />
      <div className="absolute h-[82px] left-[72px] top-[545px] w-[100px]" data-name="image 5479">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5479} />
      </div>
      <Group11 />
      <div className="absolute bottom-[31.06%] font-['Barlow_Condensed:Medium',sans-serif] leading-none left-[72px] not-italic text-[#7ecbe2] text-[101.098px] top-[40.04%] tracking-[-8.7698px] uppercase w-[895.984px] whitespace-pre-wrap">
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
        <p className="leading-[1.2] whitespace-pre-wrap">Entrega estimada</p>
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
        <p className="leading-[1.2] whitespace-pre-wrap">Ubicación</p>
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
        <p className="leading-[1.2] whitespace-pre-wrap">Desarrolla</p>
      </div>
      <LogoGm2 />
    </div>
  );
}

function Examples1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Examples">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center px-[80px] relative w-full">
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
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.3px]">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Lo que nació en Buenos Aires, ahora se expande al país</h3>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Content">
      <SectionHeader1 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[18px] tracking-[-0.18px] w-full">
        <p className="leading-[1.6] whitespace-pre-wrap">La Barceloneta llega a Neuquén con una torre de 17 pisos diseñada para el nuevo polo energético y corporativo de la región. Un proyecto que replica el modelo condo-hotel fraccionado con foco en hotelería, negocios y crecimiento federal.</p>
      </div>
      <div className="aspect-[860/888] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Person with iPad" className="absolute h-[100.02%] left-[-5.78%] max-w-none top-[-0.01%] w-[105.78%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function ToneAndVoice1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start py-[32px] relative shrink-0 w-full" data-name="Tone and voice">
      <Examples1 />
      <Content11 />
    </div>
  );
}

function PersonalitySection1() {
  return (
    <div id="neuquen" aria-label="Section 2 out of 6" className="relative shrink-0 w-full" data-name="Personality Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[30px] items-start px-[32px] py-[120px] relative w-full">
        <Header14 />
        <div className="content-stretch flex flex-col h-[763px] items-start pb-[64px] relative shrink-0 w-full" data-name="Portada / Neuquen">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[454px]">
        <h2 className="block leading-[1.2] whitespace-pre-wrap">Experiencias reales de quienes ya están invirtiendo</h2>
      </div>
    </div>
  );
}

function Cards1() {
  return <div className="flex-[1_0_0] min-h-px min-w-px" data-name="Cards" />;
}

const TESTIMONIALS_DATA = [
  {
    name: "Martín R.",
    subtitle: "2 fracciones MonoLoft Norte",
    quote: "La fracción me permitió entrar al real estate sin tener que comprar un departamento completo. Desde el primer mes ya estaba cobrando renta.",
  },
  {
    name: "Valeria S.",
    subtitle: "1 fracción MonoLoft Sur",
    quote: "Lo que más me convenció fue la escritura pública. Tenés la seguridad de un inmueble pero con la liquidez de una inversión más accesible.",
  },
  {
    name: "Federico L.",
    subtitle: "3 fracciones MonoLoft Norte",
    quote: "Empecé con una fracción para ver cómo funcionaba. Hoy tengo tres y planeo sumar más cuando abran el proyecto de Neuquén.",
  },
  {
    name: "Carolina M.",
    subtitle: "2 fracciones MonoLoft Sur",
    quote: "El modelo de renta de espera me permitió generar ingresos desde el inicio de la obra. Una alternativa inteligente frente al plazo fijo.",
  },
  {
    name: "Sebastián D.",
    subtitle: "1 fracción MonoLoft Norte",
    quote: "Nunca pensé que podía invertir en hotelería con USD 20.000. La transparencia del proceso y la escritura pública me dieron mucha confianza.",
  },
  {
    name: "Luciana P.",
    subtitle: "2 fracciones MonoLoft Sur",
    quote: "Excelente equipo y muy buen producto. La renta hotelera ya supera lo que me daba el plazo fijo y el dólar mep juntos.",
  },
];

function TestimonialCard({ name, subtitle, quote }: { name: string; subtitle: string; quote: string }) {
  return (
    <article className="flex flex-col gap-[8px] shrink-0 w-[256px] snap-start relative pr-[16px]">
      {/* vertical right border */}
      <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]" />
      {/* Avatar */}
      <img
        src={`${import.meta.env.BASE_URL}images/12a1d1f9a76a86ace883f4af20883e44a6eda988.png`}
        alt={name}
        className="size-[56px] rounded-full object-cover mb-[8px] shrink-0"
      />
      {/* Name */}
      <p className="font-['Helvetica:Regular',sans-serif] text-[30px] text-[#141414] tracking-[-0.6px] leading-[1.2]">{name}</p>
      {/* Subtitle */}
      <span className="font-['Helvetica:Regular',sans-serif] text-[13px] text-[#575757] tracking-[-0.13px] leading-[1.4]">{subtitle}</span>
      {/* Quote — 22px bold */}
      <p className="font-['Helvetica:Bold',sans-serif] font-bold text-[22px] text-[#141414] tracking-[-0.22px] leading-[1.3] mt-[8px]">"{quote}"</p>
    </article>
  );
}

function Header15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Header">
      <Title4 />
      <Cards1 />
    </div>
  );
}

function StrategySection1() {
  return (
    <section className="relative shrink-0 w-full" id="testimonios" data-name="Strategy section">
      <div className="content-stretch flex flex-col items-start pl-[32px] pt-[120px] pb-[80px] relative w-full">
        {/* Header: title left + empty spacer right (Figma original layout) */}
        <Header15 />
        {/* Scroll track of testimonial cards */}
        <div className="mt-[48px] flex gap-[16px] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
          {TESTIMONIALS_DATA.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </section>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[562px]" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.6px]">
        <h2 className="block leading-[1.2] whitespace-pre-wrap">Prensa</h2>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[265px]" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.5px] w-full">
        <p className="leading-[1.6] whitespace-pre-wrap">Los medios hablan del modelo de inversión en fracciones y de La Barceloneta.</p>
      </div>
    </div>
  );
}

function Header16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Title5 />
      <Content12 />
    </div>
  );
}

function StrategySection2() {
  return (
    <section className="relative shrink-0 w-full" data-name="Strategy section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[32px] relative w-full">
        <Header16 />
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Image">
      <div className="h-[64.044px] relative shrink-0 w-[256.176px]" data-name="Logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256.176 64.0439">
          <path d={svgPaths.pda034c0} fill="var(--fill-0, white)" id="Logo" />
        </svg>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Forbes Argentina</h5>
      </div>
      <p className="flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">Forbes Argentina destacó el crecimiento del formato 1/8 en CABA y el rol de La Barceloneta como referencia dentro del segmento condo-hotel.</p>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white w-full overflow-hidden max-h-0 group-hover:max-h-[230px] transition-[max-height] duration-500 ease-in-out shrink-0" data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text2 />
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">
          <a href="#" target="_blank" rel="noopener noreferrer" className="leading-[1.2] whitespace-pre-wrap no-underline text-inherit hover:text-[#f20909] transition-colors cursor-pointer">Ver nota completa→</a>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full overflow-hidden" data-name="Image">
      <div className="h-[180.396px] relative shrink-0 w-[322.5px]" data-name="Imagen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.53%] left-[-2.79%] max-w-none top-[-3.77%] w-[106.05%] transition-transform duration-500 group-hover:scale-105" src={imgImagen} />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Perfil</h5>
      </div>
      <p className="flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">El medio analizó la propuesta del modelo fraccionado y su impacto en el mercado inmobiliario actual.</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-white w-full overflow-hidden max-h-0 group-hover:max-h-[230px] transition-[max-height] duration-500 ease-in-out shrink-0" data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text3 />
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">
          <a href="#" target="_blank" rel="noopener noreferrer" className="leading-[1.2] whitespace-pre-wrap no-underline text-inherit hover:text-[#f20909] transition-colors cursor-pointer">Ver nota completa→</a>
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#f45f00] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Image">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[60px] text-center text-white tracking-[-0.6px] w-[302px] whitespace-pre-wrap">Próximamente</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Medio de Inversiones</h5>
      </div>
      <p className="flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[#575757] text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap">Un análisis del mecanismo de renta (RE, RH, RA) y por qué está creciendo entre inversores jóvenes y conservadores por igual.</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="bg-white w-full overflow-hidden max-h-0 group-hover:max-h-[230px] transition-[max-height] duration-500 ease-in-out shrink-0" data-name="Body">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-start not-italic p-[24px] relative w-full">
        <Text4 />
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">
          <a href="#" target="_blank" rel="noopener noreferrer" className="leading-[1.2] whitespace-pre-wrap no-underline text-inherit hover:text-[#f20909] transition-colors cursor-pointer">Ver nota completa→</a>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <article className="bg-white flex-[1_0_0] h-[540px] min-h-px min-w-px relative group overflow-hidden" data-name="Prensa 1">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Image />
          <Body />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </article>
      <article className="bg-white flex-[1_0_0] h-[540px] min-h-px min-w-px relative group overflow-hidden" data-name="Prensa 2">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Image1 />
          <Body1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </article>
      <article className="bg-white flex-[1_0_0] h-[540px] min-h-px min-w-px relative group overflow-hidden" data-name="Prensa 3">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Image2 />
          <Body2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </article>
    </div>
  );
}

function Frame58() {
  return (
    <div id="prensa" className="content-stretch flex flex-col items-start pb-[120px] relative shrink-0 w-full">
      <StrategySection2 />
      <Frame53 />
    </div>
  );
}

function Number2() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
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
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[-0.22px] w-[325px]">
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
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap">
          <span className="leading-[1.2] text-[#f45f00]">{`1 `}</span>
          <span className="leading-[1.2]">{` Definimos tu ticket de inversión`}</span>
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
    <div className="bg-white flex-[1_0_0] h-[4799px] min-h-px min-w-px relative" data-name="Content">
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
    <div aria-label="Section 2 out of 6" className="h-[960px] shrink-0 sticky top-0 w-full" data-name="Personality Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[30px] items-start pl-[32px] relative size-full">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
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
    <div className="content-stretch flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title8 />
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[325px]">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2>
          <span className="leading-[1.2] text-[#f45f00]">2</span>
          <span className="leading-[1.2]">{`  `}</span>
          <span className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[1.2]">Anticipo + cuotas</span>
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
    <div className="bg-white flex-[1_0_0] h-[790px] min-h-px min-w-px relative" data-name="Content">
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
    <div aria-label="Section 2 out of 6" className="h-[960px] shrink-0 sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[30px] items-end pl-[32px] relative size-full">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
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
    <div className="content-stretch flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title10 />
    </div>
  );
}

function SectionHeader6() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[325px]">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2>
          <span className="leading-[1.2] text-[#f45f00]">3</span>
          <span className="leading-[1.2]">{`  `}</span>
          <span className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[1.2]">Escritura pública</span>
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
    <div className="bg-white flex-[1_0_0] h-[620px] min-h-px min-w-px relative" data-name="Content">
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
    <div aria-label="Section 2 out of 6" className="h-[960px] shrink-0 sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[30px] items-end pl-[32px] relative size-full">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
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
    <div className="content-stretch flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title12 />
    </div>
  );
}

function SectionHeader8() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[325px]">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2>
          <span className="leading-[1.2] text-[#f45f00]">4</span>
          <span className="leading-[1.2]">{`  Operación hotelera`}</span>
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
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-px min-w-px relative" data-name="Content">
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
    <div aria-label="Section 2 out of 6" className="h-[960px] shrink-0 sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[30px] items-end pl-[32px] relative size-full">
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
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-black tracking-[-0.6px] whitespace-nowrap">
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
    <div className="content-stretch flex items-start opacity-0 pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title14 />
    </div>
  );
}

function SectionHeader10() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[325px]">
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
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[30px] text-black tracking-[-0.6px]">
        <h2 className="whitespace-pre-wrap">
          <span className="leading-[1.2] text-[#f45f00]">5</span>
          <span className="leading-[1.2]">{`  Cobro de rentas en USD`}</span>
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
          <li className="ms-[22.5px]">
            <span className="leading-[1.2]">Renta Asegurada (renta asegurada, opcional)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[280px] min-h-px min-w-px relative" data-name="Content">
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
    <div aria-label="Section 2 out of 6" className="h-[960px] shrink-0 sticky top-0 w-full" data-name="Personality Section">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[30px] items-end pl-[32px] relative size-full">
          <Examples6 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div id="como-invertir" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <PersonalitySection2 />
      <PersonalitySection3 />
      <PersonalitySection4 />
      <PersonalitySection5 />
      <PersonalitySection6 />
    </div>
  );
}

function Number7() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.2]">Calcula tu inversión</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number7 />
      </div>
    </div>
  );
}

function Header22() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title16 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[1.2]">Juan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Nombre completo</p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[1.2]">García</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Apellido completo</p>
      <Frame1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Container">
      <Input />
      <Input1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[1.2]">ejemplo@correo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Correo electrónico</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[1.2]">(11) 1234-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Número de teléfono</p>
      <Frame3 />
    </div>
  );
}

function AntDesignCaretDownFilled() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ant-design:caret-down-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ant-design:caret-down-filled">
          <path d={svgPaths.pb02e800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
            <p className="leading-[1.2] whitespace-pre-wrap">USD $ 20.000 - $ 30.000</p>
          </div>
          <AntDesignCaretDownFilled />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Rango de inversión deseado</p>
      <Frame4 />
    </div>
  );
}

function AntDesignCaretDownFilled1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ant-design:caret-down-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ant-design:caret-down-filled">
          <path d={svgPaths.pb02e800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
            <p className="leading-[1.2] whitespace-pre-wrap">Monoloft Norte</p>
          </div>
          <AntDesignCaretDownFilled1 />
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Proyecto de interés</p>
      <Frame5 />
    </div>
  );
}

function AntDesignCaretDownFilled2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ant-design:caret-down-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ant-design:caret-down-filled">
          <path d={svgPaths.pb02e800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
            <p className="leading-[1.2] whitespace-pre-wrap">Inversor</p>
          </div>
          <AntDesignCaretDownFilled2 />
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Perfil del usuario</p>
      <Frame6 />
    </div>
  );
}

function AntDesignCaretDownFilled3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ant-design:caret-down-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ant-design:caret-down-filled">
          <path d={svgPaths.pb02e800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#575757] text-[15px] tracking-[-0.15px]">
            <p className="leading-[1.2] whitespace-pre-wrap">1</p>
          </div>
          <AntDesignCaretDownFilled3 />
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Cantidad de fracciones</p>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[105px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[24px] py-[15px] relative size-full">
        <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px]">Escribe tu mensaje</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">Tu mensaje aquí</p>
      <Frame8 />
    </div>
  );
}

function ContentWrapper2() {
  const [formData, setFormData] = useState({
    nombre: "", apellido: "", email: "", telefono: "",
    rango: "", proyecto: "", perfil: "", fracciones: "1", mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const labelCls = "font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full";
  const inputCls = "w-full h-[48px] border border-[rgba(0,0,0,0.1)] px-[24px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] placeholder:text-[#575757] focus:outline-none focus:border-[rgba(0,0,0,0.5)] transition-colors bg-transparent";
  const selectCls = "w-full h-[48px] border border-[rgba(0,0,0,0.1)] px-[24px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] focus:outline-none focus:border-[rgba(0,0,0,0.5)] transition-colors bg-transparent appearance-none cursor-pointer";
  const fieldCls = "content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full";

  if (submitted) {
    return (
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative py-[40px]">
        <div className="size-[48px] rounded-full bg-[#039360] flex items-center justify-center shrink-0">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-['Helvetica:Bold',sans-serif] text-[22px] text-[#040404] tracking-[-0.22px] leading-[1.2]">¡Gracias por tu consulta!</h3>
        <p className="font-['Helvetica:Regular',sans-serif] text-[15px] text-[#575757] tracking-[-0.15px] leading-[1.5] max-w-[400px]">
          Nos pondremos en contacto a la brevedad para acompañarte en tu proceso de inversión.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] underline cursor-pointer hover:opacity-70 transition-opacity">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content Wrapper">
      {/* Nombre + Apellido */}
      <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
          <label className={labelCls}>Nombre completo</label>
          <input name="nombre" type="text" value={formData.nombre} onChange={handleChange} placeholder="Juan" className={inputCls} required />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
          <label className={labelCls}>Apellido completo</label>
          <input name="apellido" type="text" value={formData.apellido} onChange={handleChange} placeholder="García" className={inputCls} required />
        </div>
      </div>
      {/* Email */}
      <div className={fieldCls}>
        <label className={labelCls}>Correo electrónico</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@correo.com" className={inputCls} required />
      </div>
      {/* Teléfono */}
      <div className={fieldCls}>
        <label className={labelCls}>Número de teléfono</label>
        <input name="telefono" type="tel" value={formData.telefono} onChange={handleChange} placeholder="(11) 1234-5678" className={inputCls} required />
      </div>
      {/* Rango de inversión */}
      <div className={fieldCls}>
        <label className={labelCls}>Rango de inversión deseado</label>
        <div className="relative w-full">
          <select name="rango" value={formData.rango} onChange={handleChange} className={selectCls} required>
            <option value="">Seleccionar rango</option>
            <option value="20-30">USD $ 20.000 - $ 30.000</option>
            <option value="30-50">USD $ 30.000 - $ 50.000</option>
            <option value="50-100">USD $ 50.000 - $ 100.000</option>
            <option value="100+">USD $ 100.000+</option>
          </select>
          <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" fill="black" /></svg>
          </div>
        </div>
      </div>
      {/* Proyecto */}
      <div className={fieldCls}>
        <label className={labelCls}>Proyecto de interés</label>
        <div className="relative w-full">
          <select name="proyecto" value={formData.proyecto} onChange={handleChange} className={selectCls} required>
            <option value="">Seleccionar proyecto</option>
            <option value="norte">Monoloft Norte</option>
            <option value="sur">Monoloft Sur</option>
            <option value="neuquen">La Barceloneta Neuquén</option>
          </select>
          <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" fill="black" /></svg>
          </div>
        </div>
      </div>
      {/* Perfil */}
      <div className={fieldCls}>
        <label className={labelCls}>Perfil del usuario</label>
        <div className="relative w-full">
          <select name="perfil" value={formData.perfil} onChange={handleChange} className={selectCls} required>
            <option value="">Seleccionar perfil</option>
            <option value="inversor">Inversor</option>
            <option value="propietario">Propietario</option>
            <option value="agente">Agente inmobiliario</option>
          </select>
          <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" fill="black" /></svg>
          </div>
        </div>
      </div>
      {/* Fracciones */}
      <div className={fieldCls}>
        <label className={labelCls}>Cantidad de fracciones</label>
        <div className="relative w-full">
          <select name="fracciones" value={formData.fracciones} onChange={handleChange} className={selectCls}>
            {[1,2,3,4,5,6,7,8].map(n => (
              <option key={n} value={String(n)}>{n}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" fill="black" /></svg>
          </div>
        </div>
      </div>
      {/* Mensaje */}
      <div className={fieldCls}>
        <label className={labelCls}>Tu mensaje aquí</label>
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje" rows={4} className="w-full border border-[rgba(0,0,0,0.1)] px-[24px] py-[15px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] placeholder:text-[#575757] focus:outline-none focus:border-[rgba(0,0,0,0.5)] transition-colors bg-transparent resize-none" />
      </div>
      {/* Submit */}
      <button type="submit" className="bg-black content-stretch flex items-center justify-center px-[20px] py-[14px] relative rounded-[40px] shrink-0 w-[212px] cursor-pointer hover:bg-[#1d1d1b] transition-colors">
        <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px]">Enviar mensaje</p>
      </button>
    </form>
  );
}

function ContactForm() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Contact Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative w-full">
          <ContentWrapper2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MailOpen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mail-open">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mail-open">
          <path d={svgPaths.p11cd8400} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d="M5 11.9331V2H19V11.9331" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d="M9 9.94664H15M9 5.97339H15" id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p11e458c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0">
      <MailOpen />
      <a href="mailto:contacto@labarceloneta.com" className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] no-underline hover:text-[#f20909] transition-colors">contacto@labarceloneta.com</a>
    </div>
  );
}

function SmartPhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="smart-phone-01">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="smart-phone-01">
          <path d="M19 2H5V22H19V2Z" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d="M10.5 19H13.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d="M9 2L10 5H14L15 2" id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0">
      <SmartPhone />
      <a href="tel:+541155530104" className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] no-underline hover:text-[#f20909] transition-colors">(11) 5553-0104</a>
    </div>
  );
}

function Location() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location-05">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location-05">
          <path d={svgPaths.p1ca11a80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.peb14980} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p37ffa600} id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full">
      <Location />
      <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.3px] whitespace-pre-wrap">Ángel Justiniano Carranza 1470 – Palermo Hollywood</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Info">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[20px] items-start leading-[1.2] not-italic relative shrink-0 w-full" data-name="Text">
      <p className="relative shrink-0 text-[30px] text-black tracking-[-0.6px]">Conocenos más</p>
      <p className="min-w-full opacity-80 relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-[min-content] whitespace-pre-wrap">Síguenos en nuestras redes sociales para conocer nuestro proceso de desarrollo inmobiliario. Comenzamos con una consulta para entender tus necesidades y ofrecerte soluciones innovadoras. ¡Mantente al tanto de nuestras novedades!</p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="flex gap-[32px] items-center" data-name="Social Icon">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-black hover:opacity-60 transition-opacity">
        <FbIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-black hover:opacity-60 transition-opacity">
        <TwIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:opacity-60 transition-opacity">
        <IgIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:opacity-60 transition-opacity">
        <LiIcon size={24} strokeWidth={1.5} />
      </a>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-full" data-name="Left">
      <Text5 />
      <SocialIcon />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[665px] items-start justify-between min-h-px min-w-px relative">
      <Info />
      <Left />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <ContactForm />
      <Frame12 />
    </div>
  );
}

function Main1() {
  return (
    <main className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <Hero />
      <Images />
      <Banner />
      <ComoGano />
      <Cards />
      <StrategySection />
      <ValueSection />
      <PersonalitySection />
      <Banner1 />
      <PersonalitySection1 />
      <StrategySection1 />
      <Frame58 />
      <Frame59 />
      <div id="contacto" className="bg-white relative shrink-0 w-full" data-name="Form">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[30px] items-start px-[32px] py-[120px] relative w-full">
            <Header22 />
            <Container11 />
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
      <Icon6 />
      <Text8 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Text">
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
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[257px]" data-name="Social Icons">
      <SocialIcon1 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative self-stretch" data-name="Content">
      <Text6 />
      <SocialIcons />
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
  const linkCls = "leading-[1.2] whitespace-pre-wrap hover:text-white transition-colors no-underline text-inherit";
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header23 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#como-gano" className={linkCls}>¿Cómo gano?</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#fracciones" className={linkCls}>Elegí tu fracción</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#proyecto" className={linkCls}>El proyecto (Buenos Aires)</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#avance" className={linkCls}>Avance de obra</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#neuquen" className={linkCls}>{`El próximo capítulo (Neuquén) `}</a>
      </div>
    </nav>
  );
}

function Header24() {
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
      <Header24 />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#como-invertir" className={linkCls}>¿Cómo invertir?</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#testimonios" className={linkCls}>Testimonios</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#prensa" className={linkCls}>Prensa</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#vista360" className={linkCls}>Vista 360</a>
      </div>
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-full">
        <a href="#contacto" className={linkCls}>Contacto</a>
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

function Container13() {
  return (
    <div className="bg-[#040404] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#575757] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[120px] items-start px-[32px] py-[80px] relative w-full">
        <Content18 />
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
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute h-[57.813px] left-[81px] top-[45px] w-[153.304px]" data-name="Logo">
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
    <div className="absolute h-[71.316px] left-[32px] top-[32px] w-[33.027px]" data-name="Iso">
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

const MENU_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Cómo gano?", href: "#como-gano" },
  { label: "Elegí tu fracción", href: "#fracciones" },
  { label: "El proyecto (Buenos Aires)", href: "#proyecto" },
  { label: "¿Cómo invertir?", href: "#como-invertir" },
  { label: "Contacto", href: "#contacto" },
];

export default function Home() {
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
    <div className="bg-white content-stretch flex items-start justify-end pr-[56px] relative size-full" data-name="Home">
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
          {MENU_LINKS.map((item) => (
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
        <div id="vista360" className="fixed bottom-[16px] left-[16px] z-[100] h-[325px] overflow-clip rounded-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] w-[200px]" data-name="Video">
          <video ref={videoRef} src={`${import.meta.env.BASE_URL}videos/2d3bf204646db6c10443dbfebd36299d3a2dbf23.mov`} autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop muted={videoMuted} playsInline />
          <Button5 onClick={() => setVideoVisible(false)} />
          <Button6 onClick={handleFullscreen} />
          <Button7 onClick={handleToggleMute} isMuted={videoMuted} />
        </div>
      )}
      <Main />
      <Logo1 />
      <Iso />
    </div>
  );
}