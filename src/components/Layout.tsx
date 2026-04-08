import React, { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import "../lib/gsap-setup";
import { useGSAPAnimations } from "../hooks/useGSAPAnimations";
import { useNavbarAnimation } from "../hooks/useNavbarAnimation";
import { usePageTransition } from "../hooks/usePageTransition";
import svgPaths from "../imports/svg-1a10080iez";

// ── Menu data (shared across all pages) ──

const MENU_LINKS = [
  { label: "Inicio", anchor: "inicio" },
  { label: "¿Cómo gano?", anchor: "como-gano" },
  { label: "Elegí tu fracción", anchor: "fracciones" },
  { label: "El proyecto (Buenos Aires)", anchor: "proyecto" },
  { label: "Avance de obra", anchor: "avance" },
  { label: "El próximo capítulo (Neuquén)", anchor: "neuquen" },
  { label: "¿Cómo invertir?", anchor: "como-invertir" },
  { label: "Testimonios", anchor: "testimonios" },
  { label: "Prensa", anchor: "prensa" },
];

const MENU_CARDS = [
  { label: "Nosotros", route: "/about", bg: "bg-[#3d5a80]" },
  { label: "Agendá una reunión", anchor: "contacto", bg: "bg-[#5c7a99]" },
  { label: "Contactános", href: "https://wa.me/5491173646541", bg: "bg-[#f45f00]" },
];

// ── Icon components ──

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

// ── Video control buttons ──

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[18px] right-[8px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick} aria-label="Cerrar video">
      <PhXLight />
    </button>
  );
}

function ExpandButton({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch cursor-pointer flex items-center justify-center left-[8px] overflow-clip px-[18px] rounded-[12px] size-[48px] top-[8px]" data-name="Button" onClick={onClick} aria-label="Pantalla completa">
      <SystemUiconsExpand />
    </button>
  );
}

function MuteButton({ onClick, isMuted }: { onClick?: () => void; isMuted?: boolean }) {
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

// ── Sidebar nav components ──

function SidebarMenuButton({ onClick }: { onClick?: () => void }) {
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

function SidebarButton1() {
  return (
    <a href="https://data.sentiovr.com/spaces/54685/space_1700064741/vtour/tour.html" target="_blank" rel="noopener noreferrer" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap hover:text-[#f20909] transition-colors">
        <span className="leading-[1.2]">Vista 360</span>
      </div>
    </a>
  );
}

function SidebarButton2({ isActive }: { isActive?: boolean }) {
  return (
    <Link to="/about" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className={`flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors ${isActive ? 'text-[#f20909] font-bold' : 'text-[#141414] hover:text-[#f20909]'}`}>
        <span className="leading-[1.2]">Nosotros</span>
      </div>
    </Link>
  );
}

function SidebarButton3() {
  return (
    <a href="https://drive.google.com/file/d/1-NlHPsM-R_g7Uc5tK72hWYvNuhRM20gR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="content-stretch flex items-center relative no-underline text-inherit cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap hover:text-[#f20909] transition-colors">
        <span className="leading-[1.2]">Brochure</span>
      </div>
    </a>
  );
}

function MenuItems({ isAboutPage }: { isAboutPage?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-end py-[40px] relative shrink-0" data-name="Menu Items">
      <div className="flex h-[60px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SidebarButton1 />
        </div>
      </div>
      <div className="flex h-[58px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SidebarButton2 isActive={isAboutPage} />
        </div>
      </div>
      <div className="flex h-[59px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SidebarButton3 />
        </div>
      </div>
    </div>
  );
}

function InvertirButton() {
  return (
    <a href="https://wa.me/5491173646541" target="_blank" rel="noopener noreferrer" className="bg-[#f20909] relative shrink-0 w-full block no-underline text-inherit cursor-pointer hover:bg-[#d00808] transition-colors" data-name="Button">
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

function NavMenuTop({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col flex-1 items-center overflow-clip relative w-[56px]" data-name="Nav Menu">
      <SidebarMenuButton onClick={onMenuClick} />
    </div>
  );
}

function NavMenuBottom({ isAboutPage }: { isAboutPage?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip shrink-0 w-[56px]" data-name="Nav Menu">
      <MenuItems isAboutPage={isAboutPage} />
      <InvertirButton />
    </div>
  );
}

// ── Types ──

interface LayoutProps {
  children: ReactNode;
  /** Optional thumbnail images for the menu panel */
  menuThumbnails?: string[];
  /** data-name attribute on root div */
  dataName?: string;
}

// ── Main Layout component ──

export default function Layout({ children, menuThumbnails, dataName = "Page" }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useGSAPAnimations();
  const navRef = useNavbarAnimation();
  const contentRef = usePageTransition();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const handleToggleMute = () => {
    setVideoMuted(prev => {
      const newMuted = !prev;
      if (videoRef.current) videoRef.current.muted = newMuted;
      return newMuted;
    });
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = videoMuted;
  }, [videoMuted, videoVisible]);

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen?.().catch(() => {});
  };

  const isHome = location.pathname === "/";

  // Navigate to an anchor, handling cross-page navigation with hash router
  const navigateToAnchor = useCallback((anchor: string) => {
    setMenuOpen(false);
    if (isHome) {
      // Same page — just scroll
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Different page — navigate to home, then scroll after render
      navigate("/");
      // Use a timeout to wait for the home page to render
      const tryScroll = (retries = 10) => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (retries > 0) {
          setTimeout(() => tryScroll(retries - 1), 100);
        }
      };
      tryScroll();
    }
  }, [isHome, navigate]);

  return (
    <div className="bg-white content-stretch flex items-start justify-end lg:pr-[56px] relative size-full" data-name={dataName}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:text-sm">
        Ir al contenido principal
      </a>
      {/* Overlay del menú */}
      <div
        className={`fixed inset-0 bg-black/45 z-[199] transition-opacity duration-350 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Panel del menú */}
      <div
        className={`fixed top-0 right-0 w-[520px] max-w-full h-[100dvh] bg-white z-[200] flex flex-col overflow-y-auto transition-transform duration-400 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#eae9e8] transition-colors z-10"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <PhXLight fill="#141414" />
        </button>
        {/* Links de navegación */}
        <div className="flex flex-col gap-1 px-6 pt-10 pb-4">
          {MENU_LINKS.map((item) => (
            <button
              key={item.label}
              type="button"
              className="font-['Helvetica:Regular',sans-serif] text-[14px] text-[#141414] hover:text-[#f20909] transition-colors no-underline text-left bg-transparent border-none cursor-pointer p-0 min-h-[44px] flex items-center"
              onClick={() => navigateToAnchor(item.anchor)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Cards de acción */}
        <div className="flex flex-col">
          {MENU_CARDS.map((card) => {
            const cardContent = (
              <>
                <span className="font-['Helvetica:Regular',sans-serif] text-[20px] text-white tracking-[-0.5px] leading-[1.2]">{card.label}</span>
                <svg className="size-[28px] shrink-0 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5v12M19.5 4.5h-12" />
                </svg>
              </>
            );
            const cls = `${card.bg} flex items-end justify-between px-6 py-4 min-h-[72px] no-underline group`;
            if (card.route) {
              return (
                <Link key={card.label} to={card.route} className={cls} onClick={() => setMenuOpen(false)}>
                  {cardContent}
                </Link>
              );
            }
            if (card.anchor) {
              return (
                <button key={card.label} type="button" className={cls + " border-none cursor-pointer"} onClick={() => navigateToAnchor(card.anchor)}>
                  {cardContent}
                </button>
              );
            }
            if (card.href) {
              return (
                <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={() => setMenuOpen(false)}>
                  {cardContent}
                </a>
              );
            }
            return null;
          })}
        </div>
        {/* Thumbnails de imágenes */}
        {menuThumbnails && menuThumbnails.length > 0 && (
          <div className="flex gap-3 px-6 py-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuThumbnails.map((src, i) => (
              <div key={i} className="flex-none w-[140px] h-[100px] overflow-hidden rounded-[4px]">
                <img alt="" loading="lazy" src={src} className="size-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Fixed right sidebar — hidden on mobile */}
      <div ref={navRef as React.Ref<HTMLDivElement>} className="hidden lg:flex fixed top-0 right-0 h-screen z-[150] flex-col" data-name="SidebarNav">
        <NavMenuTop onMenuClick={() => setMenuOpen(true)} />
        <NavMenuBottom isAboutPage={!isHome} />
      </div>
      {/* Mobile hamburger */}
      <button
        type="button"
        className="lg:hidden fixed top-3 right-3 z-[150] bg-black size-[48px] flex items-center justify-center rounded-full shadow-lg cursor-pointer"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <IconamoonMenuBurgerHorizontalLight />
      </button>
      {videoVisible && (
        <div id="vista360" className="fixed bottom-[12px] left-[12px] sm:bottom-[16px] sm:left-[16px] z-[100] h-[180px] w-[120px] sm:h-[250px] sm:w-[160px] lg:h-[325px] lg:w-[200px] overflow-clip rounded-[12px] lg:rounded-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]" data-name="Video">
          <video ref={videoRef} src={`${import.meta.env.BASE_URL}videos/2d3bf204646db6c10443dbfebd36299d3a2dbf23.mp4`} autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop muted playsInline poster={`${import.meta.env.BASE_URL}images/video-flotante-poster.jpg`} />
          <CloseButton onClick={() => setVideoVisible(false)} />
          <ExpandButton onClick={handleFullscreen} />
          <MuteButton onClick={handleToggleMute} isMuted={videoMuted} />
        </div>
      )}
      {/* Mini button to reopen video when closed */}
      {!videoVisible && (
        <button
          type="button"
          onClick={() => setVideoVisible(true)}
          className="fixed bottom-[12px] left-[12px] sm:bottom-[16px] sm:left-[16px] z-[100] size-[40px] sm:size-[44px] bg-black/80 hover:bg-black rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-200 cursor-pointer hover:scale-110"
          aria-label="Reabrir video"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7L8 5z" fill="white" />
          </svg>
        </button>
      )}
      <div ref={contentRef}>
        {children}
      </div>
      <button
        type="button"
        className={`fixed bottom-4 right-4 lg:right-[72px] z-[100] bg-black/80 text-white size-[44px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
