export interface VideoItem {
  imageSrc: string;
  duration: string;
  title: string;
}

interface VideoSectionProps {
  title: string;
  videos: VideoItem[];
}

export function VideoSection({ title, videos }: VideoSectionProps) {
  return (
    <div className="border-t border-zinc-200 mt-10 pt-8">
      <h3 className="font-sans text-lg font-black uppercase text-zinc-900 mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative aspect-video w-full bg-zinc-900 rounded-md overflow-hidden mb-2">
              <img
                src={video.imageSrc}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                alt={video.title}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-850 opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] font-black text-white px-2 py-0.5 rounded-none flex items-center gap-1.5">
                ▶ {video.duration}
              </span>
            </div>
            <h4 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600">
              {video.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
