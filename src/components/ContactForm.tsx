import { useState, useRef, type ChangeEvent } from "react";
import { Facebook as FbIcon, Instagram as IgIcon, Linkedin as LiIcon } from "lucide-react";
import svgPaths from "../imports/svg-1a10080iez";

function Number7() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Number" />;
}

function Title16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] lg:text-[30px] text-black tracking-[-0.6px] whitespace-nowrap">
        <h2 className="block leading-[1.2]">Calcula tu inversión</h2>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Number7 />
      </div>
    </div>
  );
}

export function ContactHeader() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full" data-name="Header">
      <Title16 />
    </div>
  );
}

function ContentWrapper2() {
  const [formData, setFormData] = useState({
    nombre: "", apellido: "", email: "", telefono: "",
    rango: "", proyecto: "", perfil: "", fracciones: "1", mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("https://n8n.quantumconsult.io/webhook/barceloneta-landing-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.nombre,
          lastName: formData.apellido,
          email: formData.email,
          phone: formData.telefono,
          rango_de_inversion: formData.rango,
          proyecto_de_interes: formData.proyecto,
          perfil_del_usuario: formData.perfil,
          cantidad_de_fracciones: parseInt(formData.fracciones, 10),
          mensaje: formData.mensaje,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    } catch {
      setSubmitError(true);
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    } finally {
      setSubmitting(false);
    }
  };

  const labelCls = "font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[15px] text-black tracking-[-0.15px] w-full";
  const inputCls = "w-full h-[48px] border border-[rgba(0,0,0,0.1)] px-[24px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] placeholder:text-[#575757] focus:outline-none focus:border-[#1e3d59] focus:shadow-[0_0_0_3px_rgba(30,61,89,0.15)] transition-all duration-300 bg-transparent rounded-lg";
  const selectCls = "w-full h-[48px] border border-[rgba(0,0,0,0.1)] px-[24px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] focus:outline-none focus:border-[#1e3d59] focus:shadow-[0_0_0_3px_rgba(30,61,89,0.15)] transition-all duration-300 bg-transparent appearance-none cursor-pointer rounded-lg";
  const fieldCls = "content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full";

  if (submitted) {
    return (
      <div ref={formRef} className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative py-[40px]">
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
    <form ref={formRef as unknown as React.RefObject<HTMLFormElement>} onSubmit={handleSubmit} className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content Wrapper">
      {/* Nombre + Apellido */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
          <label htmlFor="nombre" className={labelCls}>Nombre completo</label>
          <input id="nombre" name="nombre" type="text" value={formData.nombre} onChange={handleChange} placeholder="Juan" className={inputCls} required />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
          <label htmlFor="apellido" className={labelCls}>Apellido completo</label>
          <input id="apellido" name="apellido" type="text" value={formData.apellido} onChange={handleChange} placeholder="García" className={inputCls} required />
        </div>
      </div>
      {/* Email */}
      <div className={fieldCls}>
        <label htmlFor="email" className={labelCls}>Correo electrónico</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@correo.com" className={inputCls} required />
      </div>
      {/* Teléfono */}
      <div className={fieldCls}>
        <label htmlFor="telefono" className={labelCls}>Número de teléfono</label>
        <input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} placeholder="(11) 1234-5678" className={inputCls} required pattern="[0-9+\-() ]{7,20}" title="Ingresá un número de teléfono válido" />
      </div>
      {/* Rango de inversión */}
      <div className={fieldCls}>
        <label htmlFor="rango" className={labelCls}>Rango de inversión deseado</label>
        <div className="relative w-full">
          <select id="rango" name="rango" value={formData.rango} onChange={handleChange} className={selectCls} required>
            <option value="">Seleccionar rango</option>
            <option value="20-30">USD $ 22.500 - $ 30.000</option>
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
        <label htmlFor="proyecto" className={labelCls}>Proyecto de interés</label>
        <div className="relative w-full">
          <select id="proyecto" name="proyecto" value={formData.proyecto} onChange={handleChange} className={selectCls} required>
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
        <label htmlFor="perfil" className={labelCls}>Perfil del usuario</label>
        <div className="relative w-full">
          <select id="perfil" name="perfil" value={formData.perfil} onChange={handleChange} className={selectCls} required>
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
        <label htmlFor="fracciones" className={labelCls}>Cantidad de fracciones</label>
        <div className="relative w-full">
          <select id="fracciones" name="fracciones" value={formData.fracciones} onChange={handleChange} className={selectCls}>
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
        <label htmlFor="mensaje" className={labelCls}>Tu mensaje aquí</label>
        <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje" rows={4} className="w-full border border-[rgba(0,0,0,0.1)] px-[24px] py-[15px] font-['Helvetica:Regular',sans-serif] text-[15px] text-[#040404] tracking-[-0.15px] placeholder:text-[#575757] focus:outline-2 focus:outline-offset-2 focus:outline-[#030213] focus:border-[rgba(0,0,0,0.5)] transition-colors bg-transparent resize-none" />
      </div>
      {/* Submit */}
      {submitError && (
        <p className="font-['Helvetica:Regular',sans-serif] text-[14px] text-[#f20909] leading-[1.4]">Hubo un error al enviar. Intentá de nuevo.</p>
      )}
      <button type="submit" disabled={submitting} className="bg-black content-stretch flex items-center justify-center px-[20px] py-[14px] relative rounded-[40px] shrink-0 w-[212px] cursor-pointer hover:bg-[#333] hover:scale-[1.05] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] active:scale-[0.97] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
        <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px]">{submitting ? "Enviando..." : "Enviar mensaje"}</p>
      </button>
    </form>
  );
}

function ContactFormCard() {
  return (
    <div className="bg-white w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative" data-name="Contact Form">
      <div className="flex flex-col items-start overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex items-start p-[20px] lg:p-[32px] relative w-full">
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
      <a href="mailto:info.martingpropiedades@gmail.com" className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] no-underline hover:text-[#f20909] transition-colors">info.martingpropiedades@gmail.com</a>
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
      <a href="tel:+5491173646541" className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] no-underline hover:text-[#f20909] transition-colors">+54 9 11 7364-6541</a>
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
      <p className="flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[15px] text-black tracking-[-0.3px] whitespace-pre-wrap">Oficina comercial: Ángel Justiniano Carranza 1470 C1414 – Ciudad Autónoma de Buenos Aires</p>
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
      <p className="relative shrink-0 text-[34px] lg:text-[40px] text-black tracking-[-0.6px] font-bold">Conocenos más</p>
      <p className="min-w-full opacity-80 relative shrink-0 text-[#575757] text-[15px] tracking-[-0.15px] w-[min-content] whitespace-pre-wrap">Síguenos en nuestras redes sociales para conocer nuestro proceso de desarrollo inmobiliario. Comenzamos con una consulta para entender tus necesidades y ofrecerte soluciones innovadoras. ¡Mantente al tanto de nuestras novedades!</p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="flex gap-[32px] items-center" data-name="Social Icon">
      <a href="https://www.facebook.com/labarcelonetafeelfree" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-black hover:opacity-60 transition-opacity">
        <FbIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://www.instagram.com/labarceloneta.bsas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:opacity-60 transition-opacity">
        <IgIcon size={24} strokeWidth={1.5} />
      </a>
      <a href="https://www.linkedin.com/company/la-barceloneta-feel-free/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:opacity-60 transition-opacity">
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

function ContactInfoSidebar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-auto lg:h-[665px] gap-[40px] lg:gap-0 items-start justify-between min-h-px min-w-px relative">
      <Info />
      <Left />
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <ContactFormCard />
      <ContactInfoSidebar />
    </div>
  );
}
