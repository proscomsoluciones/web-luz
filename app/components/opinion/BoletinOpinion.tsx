"use client";

import { useState } from "react";

export default function BoletinOpinion() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [offersCheckbox, setOffersCheckbox] = useState(false);

  return (
    <div className="border border-zinc-200 p-5 bg-white rounded-md shadow-2xs">
      {/* Icono e información superior */}
      <div className="flex items-start gap-3.5 mb-3">
        <div className="w-14 h-14 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-100">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-black text-black leading-snug">
            Get the Opinion newsletter bundle
          </h4>
          <p className="text-[11px] text-zinc-500 mt-1 leading-tight">
            Matt Levine&apos;s Money Stuff, John Authers&apos; Points of Return and Jessica Karl&apos;s Opinion Today.
          </p>
        </div>
      </div>

      {/* Input Email */}
      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border-b border-zinc-300 py-1.5 text-xs text-black placeholder-zinc-400 outline-none focus:border-black"
        />
      </div>

      {/* Checkbox */}
      <label className="flex gap-2 items-start text-[11px] text-zinc-600 mb-4 cursor-pointer select-none">
        <input 
          type="checkbox"
          checked={offersCheckbox}
          onChange={(e) => setOffersCheckbox(e.target.checked)}
          className="mt-0.5 rounded-xs border-zinc-300 text-black focus:ring-0" 
        />
        <span>Segunda Derivada may send me offers and promotions.</span>
      </label>

      {/* Botón Sign Up */}
      <button
        onClick={() => setSubscribed(!subscribed)}
        className="w-full bg-black text-white hover:bg-zinc-800 font-bold text-xs py-2 px-4 rounded-full flex items-center justify-center gap-1 transition-colors"
      >
        <span>+</span> {subscribed ? "Signed Up!" : "Sign Up"}
      </button>

      <p className="text-[10px] text-zinc-400 mt-3 leading-tight">
        By continuing, I agree to the <a href="#" className="underline hover:text-zinc-600">Privacy Policy</a> and <a href="#" className="underline hover:text-zinc-600">Terms of Service</a>.
      </p>
    </div>
  );
}
