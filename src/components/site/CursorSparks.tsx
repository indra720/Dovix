import { useEffect, useRef } from "react";

type Spark = { x: number; y: number; vx: number; vy: number; life: number; max: number; hue: number };

export function CursorSparks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4 - 0.4,
          life: 0,
          max: 40 + Math.random() * 30,
          hue: Math.random() < 0.5 ? 188 : 260,
        });
      }
      if (sparksRef.current.length > 220) sparksRef.current.splice(0, sparksRef.current.length - 220);
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sparks = sparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.01;
        const t = s.life / s.max;
        if (t >= 1) { sparks.splice(i, 1); continue; }
        const alpha = 1 - t;
        const r = 2.2 * (1 - t) + 0.4;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 100%, 65%, ${alpha})`;
        ctx.shadowColor = `hsla(${s.hue}, 100%, 70%, ${alpha})`;
        ctx.shadowBlur = 12;
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
    />
  );
}
