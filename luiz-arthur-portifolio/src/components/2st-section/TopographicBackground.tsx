import { useEffect, useRef } from "react";

export default function TopographicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    //@ts-ignore
    const ctx = canvas.getContext("2d");
    //@ts-ignore
    canvas.width = window.innerWidth;
    //@ts-ignore
    canvas.height = window.innerHeight;

    //@ts-ignore
    const W = canvas.width;
    //@ts-ignore
    const H = canvas.height;

    ctx.fillStyle = "#0e1117";
    ctx.fillRect(0, 0, W, H);

    //@ts-ignore
    function noise(x, y, seed) {
      const s1 = Math.sin(x * 0.003 + seed) * Math.cos(y * 0.004 + seed * 0.7) * 80;
      const s2 = Math.sin(x * 0.007 + y * 0.005 + seed * 1.3) * 40;
      const s3 = Math.cos(x * 0.012 + seed * 2.1) * Math.sin(y * 0.009 + seed) * 25;
      const s4 = Math.sin((x + y) * 0.006 + seed * 0.5) * 30;
      return s1 + s2 + s3 + s4;
    }

    // Camada 1
    ctx.strokeStyle = "rgba(0, 200, 160, 0.18)";
    ctx.lineWidth = 1;

    for (let lvl = 0; lvl < 28; lvl++) {
      const threshold = lvl * 8 - 112;
      ctx.beginPath();
      let moved = false;

      for (let x = 0; x <= W; x += 3) {
        for (let y = 0; y <= H; y += 3) {
          const v = noise(x, y, 3.7);
          const vRight = noise(x + 3, y, 3.7);
          const vDown = noise(x, y + 3, 3.7);

          if ((v - threshold) * (vRight - threshold) < 0) {
            const t = (threshold - v) / (vRight - v);
            const px = x + t * 3;
            if (!moved) { ctx.moveTo(px, y); moved = true; }
            else ctx.lineTo(px, y);
          }
          if ((v - threshold) * (vDown - threshold) < 0) {
            const t = (threshold - v) / (vDown - v);
            const py = y + t * 3;
            if (!moved) { ctx.moveTo(x, py); moved = true; }
            else ctx.lineTo(x, py);
          }
        }
      }
      ctx.stroke();
    }

    // Camada 2
    ctx.strokeStyle = "rgba(0, 180, 140, 0.10)";
    ctx.lineWidth = 0.7;

    for (let lvl = 0; lvl < 18; lvl++) {
      const threshold = lvl * 12 - 100;
      ctx.beginPath();
      let moved = false;

      for (let x = 0; x <= W; x += 4) {
        for (let y = 0; y <= H; y += 4) {
          const v = noise(x, y, 9.1);
          const vRight = noise(x + 4, y, 9.1);
          const vDown = noise(x, y + 4, 9.1);

          if ((v - threshold) * (vRight - threshold) < 0) {
            const t = (threshold - v) / (vRight - v);
            const px = x + t * 4;
            if (!moved) { ctx.moveTo(px, y); moved = true; }
            else ctx.lineTo(px, y);
          }
          if ((v - threshold) * (vDown - threshold) < 0) {
            const t = (threshold - v) / (vDown - v);
            const py = y + t * 4;
            if (!moved) { ctx.moveTo(x, py); moved = true; }
            else ctx.lineTo(x, py);
          }
        }
      }
      ctx.stroke();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}