"use client";

import SubEncabezado from "./components/home/SubEncabezado";
import SeccionHero from "./components/home/SeccionHero";
import BarraLateral from "./components/home/BarraLateral";
import SeccionPodcast from "./components/home/SeccionPodcast";
import SeccionArticulos from "./components/home/SeccionArticulos";
import SeccionEntrevistas from "./components/home/SeccionEntrevistas";
import BannerPublicidad from "./components/home/BannerPublicidad";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans min-h-screen">
      {/* Sub Encabezado con Categorías */}
      <SubEncabezado />

      {/* Contenido Principal */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-6">
        {/* Fila Hero Principal (Noticias + Barra Lateral) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-200 pb-10">
          <SeccionHero />
          <BarraLateral />
        </div>

        {/* Sección de Podcasts */}
        <SeccionPodcast />

        {/* Sección de Artículos */}
        <SeccionArticulos />

        {/* Sección de Entrevistas */}
        <SeccionEntrevistas />

        {/* Banner Publicitario */}
        <BannerPublicidad />
      </main>
    </div>
  );
}
