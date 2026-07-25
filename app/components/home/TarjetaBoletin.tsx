"use client";

import { useState } from "react";

export default function TarjetaBoletin() {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);

  return (
    <div className="border border-zinc-200 p-4 bg-white rounded-md shadow-2xs">
      
      {/* Fila Superior: Miniatura del Mapa a la izquierda + Badge y Texto a la derecha */}
      <div className="flex items-start gap-3.5 mb-3.5">
        {/* Imagen del Mapa */}
        <div className="w-20 h-20 bg-black rounded-xs overflow-hidden flex-shrink-0 border border-zinc-200">
          <img 
            src="/newsletter_map_grid.png" 
            className="w-full h-full object-cover" 
            alt="Economics Daily Map" 
          />
        </div>

        {/* Bloque de Texto Derecho */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          <span className="bg-zinc-100 text-zinc-700 font-bold text-[9px] px-1.5 py-0.5 rounded-xs uppercase tracking-wider mb-1.5 inline-block">
            SUBSCRIBER ONLY
          </span>
          
          <h4 className="text-sm font-black text-black leading-snug">
            Recibe el newsletter Economía Diaria.
          </h4>

          <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
            Descubre qué mueve la economía global y qué implica para responsables de política e inversionistas.
          </p>
          
          <a href="#" className="text-xs text-zinc-700 underline font-medium mt-1.5 block hover:text-black">
            Preview
          </a>
        </div>
      </div>

      {/* Casilla de Verificación */}
      <label className="flex gap-2 items-start text-[11px] text-zinc-600 mb-3.5 cursor-pointer select-none">
        <input 
          type="checkbox" 
          checked={newsletterCheckbox}
          onChange={(e) => setNewsletterCheckbox(e.target.checked)}
          className="mt-0.5 rounded-xs border-zinc-300 text-black focus:ring-0" 
        />
        <span>Segunda Derivada puede enviarme ofertas y promociones.</span>
      </label>

      {/* Botón de Suscripción */}
      <button
        onClick={() => setSubscribed(!subscribed)}
        className="w-full bg-black text-white hover:bg-zinc-800 font-black text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-xs"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C9.24 2 7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5zm-3 5c0-1.66 1.34-3 3-3s3 1.34 3 3v3H9V7zm3 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
        {subscribed ? "¡Suscrito!" : "Suscribirme"}
      </button>

      <p className="text-[10px] text-zinc-400 mt-2.5 leading-tight">
        Al continuar, acepto la <a href="#" className="underline hover:text-zinc-600">Política de Privacidad</a> y los <a href="#" className="underline hover:text-zinc-600">Términos de Servicio</a>.
      </p>
    </div>
  );
}
