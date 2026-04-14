import type { UbicacionBlok } from '../storyblok/types'
import { resolveImage } from '../storyblok/image'

interface Props { blok: UbicacionBlok }

export default function UbicacionBlock({ blok }: Props) {
  const imgSrc = resolveImage(blok.image)

  return (
    <section className="bg-white content-stretch flex flex-col gap-[32px] lg:gap-[64px] items-start justify-center py-[40px] lg:py-[80px] relative shrink-0 w-full" data-name="Ubicación" data-gsap="fade-left">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
          <p className="leading-[1.2] font-bold">{blok.title}</p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col lg:flex-row items-center size-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[60px] items-center pr-0 lg:pr-[40px] relative w-full">
            <a
              href={blok.map_coordinates}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ubicación de ${blok.title} en Google Maps`}
              className="w-full flex-none lg:flex-[1_0_0] h-[300px] lg:h-[573px] max-w-[800px] min-h-px min-w-px overflow-clip relative cursor-pointer group block"
              data-name="Map"
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
              <img alt="Mapa ubicación" loading="lazy" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-out" src={imgSrc} />
            </a>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px py-[32px] relative" data-name="Container">
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Text">
                <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] lg:text-[30px] text-center lg:text-right tracking-[-0.3px] w-full">
                  <h3 className="block leading-[1.2] whitespace-pre-wrap">{blok.subtitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
