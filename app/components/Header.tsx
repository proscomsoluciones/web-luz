"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mediaRef.current && !mediaRef.current.contains(event.target as Node)) {
        setMediaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-[88px]">
      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black text-white font-sans py-4">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-4">

          {/* Left Menu Button and Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Logo Space */}
            <div className="w-28 h-8 border border-dashed border-zinc-700 rounded flex items-center justify-center text-[9px] font-black uppercase text-zinc-500 tracking-wider">
              Logo Space
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white"
              aria-label="Menu"
            >
              <div className="h-0.5 w-5 bg-white" />
              <div className="h-0.5 w-5 bg-white" />
              <div className="h-0.5 w-5 bg-white" />
            </button>

            {/* Main Menu Links with user pages and dropdown */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
              <Link href="/opinion" className="hover:text-white transition-colors">Opinión</Link>

              {/* Dropdown Media menu */}
              <div ref={mediaRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMediaOpen(!mediaOpen)}
                  className="flex items-center gap-1 hover:text-white transition-colors uppercase font-bold text-xs"
                >
                  Media
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 20 20">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>

                {/* Submenu Dropdown */}
                {mediaOpen && (
                  <div className="absolute left-0 mt-3 w-48 bg-zinc-950 border border-zinc-800 text-zinc-300 py-2 shadow-xl z-50 rounded-xs">
                    <Link href="/media#originales" onClick={() => setMediaOpen(false)} className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-bold uppercase">Originales</Link>
                    <Link href="/podcast" onClick={() => setMediaOpen(false)} className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-bold uppercase">Podcast</Link>
                    <Link href="/newsletter" onClick={() => setMediaOpen(false)} className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-bold uppercase">Newsletter</Link>
                    <Link href="/revista-digital" onClick={() => setMediaOpen(false)} className="block px-4 py-2 hover:bg-zinc-900 hover:text-white text-xs font-bold uppercase">Revista Digital</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>



          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">

            <button className="bg-white hover:bg-zinc-200 text-black px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-none">
              Subscribe
            </button>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 text-zinc-400 hover:text-white"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-black px-6 py-6 text-sm font-bold uppercase tracking-wider text-zinc-300">
            <ul className="flex flex-col gap-4">
              <li><Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-white">Home</Link></li>
              <li><Link href="/nosotros" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-white">Nosotros</Link></li>
              <li><Link href="/opinion" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-white">Opinión</Link></li>
              <li className="border-t border-zinc-850 pt-2">
                <span className="text-[10px] text-zinc-500 font-bold block mb-2">Media</span>
                <ul className="flex flex-col gap-2 pl-4">
                  <li><Link href="/media#originales" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">Originales</Link></li>
                  <li><Link href="/podcast" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">Podcast</Link></li>
                  <li><Link href="/newsletter" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">Newsletter</Link></li>
                  <li><Link href="/revista-digital" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">Revista Digital</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        )}

        {searchOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-3">
            <div className="mx-auto max-w-xl">
              <input
                type="text"
                placeholder="Search news, markets, companies..."
                className="w-full bg-zinc-900 px-4 py-2 text-sm text-white placeholder-zinc-505 outline-none focus:ring-1 focus:ring-zinc-700"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
