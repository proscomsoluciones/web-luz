export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400 py-8">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Bottom branding and terms */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-lg font-black uppercase tracking-[0.1em] text-white">
              Proyecto Luz
            </span>
            <p className="text-[10px] text-zinc-500">
              © 2026 Proyecto Luz L.P. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-zinc-500">
            <a href="#" className="hover:text-white">Términos de Servicio</a>
            <span className="text-zinc-800">|</span>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <span className="text-zinc-800">|</span>
            <a href="#" className="hover:text-white">Soporte Técnico</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

