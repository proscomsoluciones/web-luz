export default function Thumb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`shrink-0 rounded-md bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 ${className}`}
      aria-hidden="true"
    />
  );
}
