export function NewsletterBox() {
  return (
    <div className="border border-zinc-200 p-5 bg-white rounded-md">
      <span className="bg-zinc-100 text-zinc-700 font-bold text-[9px] px-1.5 py-0.5 rounded-none uppercase tracking-wider">
        SUBSCRIBER ONLY
      </span>
      <h4 className="text-sm font-black text-black mt-2 leading-snug">
        Get the Economics Daily newsletter.
      </h4>
      <p className="text-xs text-zinc-500 mt-1 mb-3 leading-normal">
        Discover what&apos;s driving the global economy and what it means for policymakers and investors.
      </p>
      <a href="#" className="text-xs text-zinc-700 underline block mb-4">
        Preview
      </a>

      <label className="flex gap-2 items-start text-[11px] text-zinc-600 mb-4 cursor-pointer">
        <input type="checkbox" className="mt-0.5" />
        <span>Bloomberg may send me offers and promotions.</span>
      </label>

      <button className="w-full bg-black text-white hover:bg-zinc-800 font-black text-xs py-2 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C9.24 2 7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5zm-3 5c0-1.66 1.34-3 3-3s3 1.34 3 3v3H9V7zm3 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
        Subscribe
      </button>

      <p className="text-[10px] text-zinc-400 mt-3 leading-tight">
        By continuing, I agree to the{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>
        .
      </p>
    </div>
  );
}
