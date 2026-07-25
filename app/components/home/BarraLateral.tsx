"use client";

import TarjetaBoletin from "./TarjetaBoletin";
import TarjetaCuestionario from "./TarjetaCuestionario";
import WidgetTransmision from "./WidgetTransmision";
import TarjetaRastreador from "./TarjetaRastreador";

export default function BarraLateral() {
  return (
    <div className="lg:col-span-3 flex flex-col gap-8 lg:border-l lg:border-zinc-200 lg:pl-6">
      <TarjetaBoletin />
      <TarjetaCuestionario />
      <WidgetTransmision />
      <TarjetaRastreador />
    </div>
  );
}
