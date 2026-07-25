"use client";

export default function SeccionHero() {
  return (
    <div className="lg:col-span-9 flex flex-col gap-10">

      {/* FILA PRINCIPAL 1: Dos historias destacadas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">

        <article className="md:col-span-5 flex flex-col md:border-r md:border-zinc-200 md:pr-8">
          <div className="aspect-[4/3] w-full mb-3 relative overflow-hidden rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-400" />
          <h2 className="font-sans text-2xl md:text-3xl font-black leading-tight tracking-tight text-zinc-950 hover:text-blue-700 cursor-pointer">
            El crédito en mora amenaza el próximo motor de crecimiento regional
          </h2>
        </article>

        <article className="md:col-span-7 flex flex-col">
          <div className="aspect-[4/3] w-full mb-3 relative overflow-hidden rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-400" />
          <h2 className="font-sans text-2xl md:text-3xl font-black leading-tight tracking-tight text-zinc-950 hover:text-blue-700 cursor-pointer">
            El banco central mantiene la tasa mientras la tensión geopolítica presiona la inflación
          </h2>
        </article>

      </div>

      {/* FILA PRINCIPAL 3: La Gran Historia */}
      <div className="border-b border-zinc-200 pb-10">
        <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-6 flex flex-col border border-zinc-250 rounded-md overflow-hidden">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-zinc-300 to-zinc-500" />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center py-2">
            <span className="text-[11px] font-black uppercase text-zinc-500 tracking-wider">
              La Gran Historia
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-black leading-tight text-zinc-950 hover:text-blue-700 cursor-pointer mt-1">
              El acuerdo comercial más inesperado de la década
            </h3>
            <p className="text-sm text-zinc-650 mt-3 leading-relaxed">
              Dos bloques históricamente enfrentados encuentran en la necesidad
              económica una razón para reescribir sus términos de cooperación.
            </p>
          </div>
        </article>
      </div>

      {/* FILA PRINCIPAL 4: 3 Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Perú y México reabren la puerta al diálogo tras la disputa política
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Un fondo se apresura a comprar la participación de un socio minoritario
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Se relajan los controles de exportación, abriendo la puerta a nuevos chips
          </h4>
        </article>
      </div>

      {/* FILA PRINCIPAL 5: 3 Columnas adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Los precios de los combustibles impulsan la inflación regional
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            Una minera evalúa dividir sus activos entre accionistas
          </h4>
        </article>

        <article className="flex flex-col">
          <div className="aspect-video w-full mb-3 border border-zinc-200 relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-200 to-zinc-350" />
          <h4 className="text-sm font-bold leading-snug text-black hover:text-blue-600 cursor-pointer">
            El banco central reafirma su compromiso con la estabilidad de precios
          </h4>
        </article>
      </div>

    </div>
  );
}
