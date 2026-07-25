import BannerPublicidad from "../components/home/BannerPublicidad";

const CAREER_LINKS = [
  { label: "Qué hacemos", href: "#" },
  { label: "Nuestra cultura", href: "#" },
  { label: "Primeros pasos profesionales", href: "#" },
  { label: "Profesionales con experiencia", href: "#" },
];

const VALUE_LINKS = [
  { label: "Inclusión", href: "#" },
  { label: "Comunidad", href: "#" },
  { label: "Tecnología", href: "#" },
  { label: "Sostenibilidad", href: "#" },
];

const FOCUS_AREAS = [
  "Arte y Cultura",
  "Educación",
  "Medio Ambiente",
  "Innovación Pública",
  "Salud",
];

const STORIES = [
  {
    tag: "Cultura",
    title: "Cómo formamos a la próxima generación de periodistas de datos",
    description: "Un vistazo a nuestro programa interno de mentoría, donde editores con experiencia acompañan a nuevos analistas en el manejo de fuentes primarias y verificación de datos.",
  },
  {
    tag: "Comunicado",
    title: "Nuestro compromiso con el periodismo verificado en la región",
    description: "Reafirmamos los estándares editoriales que guían cada publicación, desde la verificación de fuentes hasta la corrección transparente de errores.",
  },
  {
    tag: "Cultura",
    title: "Un programa de mentoría conecta a estudiantes con nuestro equipo editorial",
    description: "Universitarios de distintas ciudades de la región participan en un programa de acompañamiento profesional con entrevistas simuladas y guía de carrera.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans flex-1">

      {/* 1. Hero Section */}
      <section className="relative min-h-[480px] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-4 sm:px-6 py-20 flex flex-col items-start">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">
            Segunda Derivada
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-2xl mb-8 tracking-tight">
            Información que conecta a quienes toman las decisiones más importantes.
          </h1>
          <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-3.5 text-xs font-black uppercase tracking-wider rounded-none shadow-md">
            Ver Vacantes
          </button>
        </div>
      </section>

      {/* 2. Careers Section */}
      <section className="bg-black text-white border-t border-zinc-900">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-black leading-tight mb-8">
                Haz que suceda aquí: descubre a dónde te puede llevar una carrera en Segunda Derivada.
              </h3>

              <div className="flex flex-col border-t border-zinc-800 divide-y divide-zinc-800">
                {CAREER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between py-5 text-base sm:text-lg font-bold text-zinc-100 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-800 relative overflow-hidden rounded-md shadow-xl" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-black mb-6">
                Conoce nuestros valores y cómo los vivimos
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8 max-w-xl">
                Creemos que el rigor editorial y la sostenibilidad del negocio no son
                objetivos opuestos: se refuerzan mutuamente. Hacer lo correcto con
                nuestra audiencia, nuestro equipo y las comunidades donde operamos
                es también lo mejor para el futuro de Segunda Derivada.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {VALUE_LINKS.map((value) => (
                  <a
                    key={value.label}
                    href={value.href}
                    className="group flex items-center justify-between py-4 border-b border-zinc-200 text-sm sm:text-base font-black text-zinc-900 hover:text-blue-700 transition-colors"
                  >
                    <span>{value.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-200 to-zinc-400 border border-zinc-200 relative overflow-hidden rounded-md shadow-md" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Community Impact Section */}
      <section className="bg-zinc-50 border-t border-b border-zinc-200 text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

            <div className="lg:col-span-8 flex flex-col">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-black mb-6">
                Los datos importan. Actuamos con base en ellos.
              </h2>
              <p className="text-sm sm:text-base text-zinc-650 leading-relaxed mb-8 max-w-3xl">
                Todo lo que aprendimos construyendo un negocio de información lo
                aplicamos también a nuestro trabajo comunitario, apoyando causas
                que fortalecen la educación, la cultura y el acceso a la información
                en la región.
              </p>

              <div className="mt-auto pt-6 border-t-4 border-black">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-black font-black">
                  Nuestra iniciativa comunitaria llega a <span className="text-blue-700">60 ciudades, 14 países</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-start">
              <div className="border-t border-black pt-4 mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#999999] block mb-1">
                  Áreas de enfoque
                </span>
                <div className="h-0.5 w-full bg-zinc-200" />
              </div>
              <ul className="flex flex-col gap-3">
                {FOCUS_AREAS.map((area) => (
                  <li
                    key={area}
                    className="text-sm sm:text-base font-bold text-zinc-800 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Stories Section */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-black text-black mb-12 border-b border-zinc-200 pb-4">
            Nuestras historias
          </h2>

          <div className="flex flex-col gap-12 lg:gap-16">
            {STORIES.map((story, index) => (
              <article
                key={index}
                className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start pb-12 border-b border-zinc-150 last:border-b-0 last:pb-0"
              >

                <div className="md:col-span-4 lg:col-span-3">
                  <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-400 border border-zinc-200 relative overflow-hidden rounded-md shadow-xs" />
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                        {story.tag}
                      </span>
                      <div className="h-px w-8 bg-zinc-300" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-black leading-tight group-hover:text-blue-700 transition-colors mb-3">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-550 leading-relaxed mb-6 max-w-4xl">
                      {story.description}
                    </p>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/*Seccion Banner Publicidad */}

      <div className="container mx-auto mb-10 w-[70%]">
        <BannerPublicidad/>
      </div>
      

    </div>
  );
}
