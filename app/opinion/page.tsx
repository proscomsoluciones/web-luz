"use client";

import SubEncabezadoOpinion from "../components/opinion/SubEncabezadoOpinion";
import HistoriaPrincipalOpinion from "../components/opinion/HistoriaPrincipalOpinion";
import HistoriasColumnistas from "../components/opinion/HistoriasColumnistas";
import SeccionEditoriales from "../components/opinion/SeccionEditoriales";
import SeccionVideosOpinion from "../components/opinion/SeccionVideosOpinion";
import SeccionBoletinesOpinion from "../components/opinion/SeccionBoletinesOpinion";
import BarraLateralOpinion from "../components/opinion/BarraLateralOpinion";
import BannerPublicidad from "../components/home/BannerPublicidad";
import SeccionArticulos from "../components/home/SeccionArticulos";

export default function OpinionPage() {
  return (
    <div className="flex flex-col bg-white text-black font-sans min-h-screen">
      {/* Sub Encabezado con Categorías */}
      <SubEncabezadoOpinion />

      {/* Contenido Principal */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-6">

        {/* Grilla Principal (Noticias/Columnistas + Barra Lateral) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">

          {/* Área Izquierda de Noticias (8 Columnas) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <HistoriaPrincipalOpinion />
            <HistoriasColumnistas />
          </div>

          {/* Barra Lateral Derecha (4 Columnas) */}
          <BarraLateralOpinion />
        </div>

        {/* Sección de Editoriales */}
        <SeccionEditoriales />

        {/* Sección de Videos de Opinión */}
        <SeccionVideosOpinion />

        {/* Sección de Boletines */}
        <SeccionBoletinesOpinion />

        {/*Banner de Publicidad*/}
        <BannerPublicidad />

        {/*Seccion de Articulos de Opinion*/}

        <SeccionArticulos />

      </main>
    </div>
  );
}
