import { Play } from "lucide-react";

export function VideoCard({
  title,
  caption,
  src,
  poster,
  aspect = "video",
}: {
  title: string;
  caption?: string;
  src: string;
  poster?: string;
  aspect?: "video" | "square";
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface-2 to-background">
      <div className={`relative ${aspect === "square" ? "aspect-square" : "aspect-video"}`}>
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* Play icon visible on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center">
            <Play className="h-8 w-8 text-[#17489c] fill-current" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-lg font-semibold text-white drop-shadow">{title}</p>
          {caption && <p className="mt-1 text-xs text-white/70">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
