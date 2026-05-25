import { useEffect, useRef } from 'react';

interface City { name: string; lat: number; lng: number; }
interface Connection { from: number; to: number; }
interface Packet { connectionIdx: number; progress: number; speed: number; size: number; }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; }

const CITIES: City[] = [
  ['Kigali', -1.94, 30.06], ['Nairobi', -1.29, 36.82],
  ['Johannesburg', -26.2, 28.04], ['Lagos', 6.52, 3.38],
  ['Cairo', 30.04, 31.24], ['Addis Ababa', 9.03, 38.74],
  ['Accra', 5.6, -0.19], ['Casablanca', 33.57, -7.59],
  ['Dar es Salaam', -6.79, 39.22], ['Kampala', 0.35, 32.58],
].map(([name, lat, lng]) => ({ name, lat, lng } as City));

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1 }, { from: 0, to: 9 }, { from: 0, to: 8 },
  { from: 0, to: 5 }, { from: 0, to: 2 }, { from: 1, to: 9 },
  { from: 1, to: 8 }, { from: 1, to: 5 }, { from: 3, to: 6 },
  { from: 3, to: 2 }, { from: 3, to: 4 }, { from: 4, to: 7 },
  { from: 4, to: 2 }, { from: 4, to: 5 }, { from: 2, to: 8 },
  { from: 6, to: 3 }, { from: 5, to: 1 },
];

const SMOOTH = 0.15;

function smoothOutline(pts: [number, number][]): [number, number][] {
  if (pts.length < 4) return pts;
  const out: [number, number][] = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const prev = pts[i - 1], curr = pts[i], next = pts[i + 1];
    out.push([
      curr[0] + SMOOTH * (prev[0] + next[0] - 2 * curr[0]),
      curr[1] + SMOOTH * (prev[1] + next[1] - 2 * curr[1]),
    ]);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

const RAW_AFRICA: [number, number][] = [
  [-6, 36], [-5, 36], [-3, 36], [-2, 36], [0, 36], [2, 37],
  [4, 37], [7, 37], [9, 36], [10, 35], [10, 34], [11, 33],
  [12, 33], [14, 33], [15, 32], [17, 32], [18, 31], [20, 32],
  [22, 32], [24, 32], [25, 31], [26, 31], [28, 31], [30, 31],
  [31, 31], [33, 31], [34, 32], [33, 33], [34, 31], [34, 29],
  [35, 27], [36, 25], [36, 24], [35, 22], [34, 22], [34, 20],
  [35, 20], [36, 19], [37, 19], [38, 19], [39, 20], [40, 18],
  [41, 18], [42, 17], [43, 17], [44, 16], [45, 15], [46, 14],
  [47, 13], [48, 12], [49, 11], [50, 10], [51, 9], [50, 8],
  [48, 7], [47, 6], [46, 5], [44, 3], [43, 2], [42, 1],
  [42, 0], [41, -1], [41, -3], [40, -4], [40, -6], [39, -7],
  [40, -9], [40, -11], [40, -13], [40, -15], [39, -17], [38, -19],
  [36, -21], [35, -23], [34, -25], [33, -27], [32, -28], [31, -30],
  [29, -31], [28, -33], [26, -34], [23, -35], [21, -34], [20, -34],
  [18, -34], [18, -33], [17, -31], [17, -29], [16, -28], [15, -27],
  [14, -25], [14, -23], [13, -21], [13, -19], [13, -17], [13, -15],
  [13, -13], [12, -11], [12, -9], [12, -7], [12, -6], [11, -5],
  [9, -5], [9, -3], [9, -1], [9, 1], [9, 3], [9, 4],
  [8, 5], [6, 5], [5, 6], [4, 6], [3, 5], [1, 5],
  [-1, 5], [-3, 5], [-5, 5], [-7, 5], [-9, 5], [-11, 5],
  [-13, 5], [-14, 5], [-16, 5], [-17, 6], [-17, 8], [-17, 10],
  [-17, 12], [-17, 14], [-17, 16], [-16, 18], [-16, 20], [-15, 22],
  [-14, 24], [-13, 26], [-11, 28], [-9, 30], [-8, 32],
];

const MADAGASCAR: [number, number][] = [
  [47, -18], [48, -19], [48, -20], [47, -21], [47, -22],
  [47, -23], [47, -24], [46, -25], [44, -25], [43, -24],
  [43, -23], [43, -22], [44, -20], [44, -19], [45, -18],
];

const AFRICA_OUTLINE = smoothOutline(RAW_AFRICA);

function project(lat: number, lng: number, w: number, h: number, pad: number) {
  const minLng = -20, maxLng = 55, minLat = -38, maxLat = 38;
  return {
    x: ((lng - minLng) / (maxLng - minLng)) * (w - 2 * pad) + pad,
    y: ((maxLat - lat) / (maxLat - minLat)) * (h - 2 * pad) + pad,
  };
}

function drawSmoothPath(ctx: CanvasRenderingContext2D, pts: { x: number; y: number }[]) {
  if (pts.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i].x + pts[i + 1].x) / 2;
    const yc = (pts[i].y + pts[i + 1].y) / 2;
    ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
  }
  const last = pts[pts.length - 1];
  ctx.lineTo(last.x, last.y);
}

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let packets: Packet[] = [];
    let particles: Particle[] = [];
    let time = 0;

    const initPackets = () => {
      packets = CONNECTIONS.map((_, i) => ({
        connectionIdx: i,
        progress: Math.random(),
        speed: 0.15 + Math.random() * 0.25,
        size: 1.5 + Math.random() * 2,
      }));
    };
    initPackets();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const getPos = (lat: number, lng: number) =>
      project(lat, lng, window.innerWidth, window.innerHeight, 80);

    const drawOutline = (alpha: number, t: number) => {
      const pts = AFRICA_OUTLINE.map(([lng, lat]) => getPos(lat, lng));

      drawSmoothPath(ctx, pts);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 242, 255, ${alpha * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = `rgba(0, 242, 255, ${alpha * 0.015})`;
      ctx.fill();

      const glowPulse = Math.sin(t * 0.8) * 0.3 + 0.7;
      drawSmoothPath(ctx, pts);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 242, 255, ${alpha * 0.06 * glowPulse})`;
      ctx.lineWidth = 4;
      ctx.stroke();

      const mg = MADAGASCAR.map(([lng, lat]) => getPos(lat, lng));
      drawSmoothPath(ctx, mg);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 242, 255, ${alpha * 0.15})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.fillStyle = `rgba(0, 242, 255, ${alpha * 0.01})`;
      ctx.fill();
    };

    const drawConnections = (alpha: number, dt: number) => {
      for (const conn of CONNECTIONS) {
        const from = CITIES[conn.from], to = CITIES[conn.to];
        const p1 = getPos(from.lat, from.lng), p2 = getPos(to.lat, to.lng);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 242, 255, ${alpha * 0.06})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (const packet of packets) {
        const conn = CONNECTIONS[packet.connectionIdx];
        const from = CITIES[conn.from], to = CITIES[conn.to];
        const p1 = getPos(from.lat, from.lng), p2 = getPos(to.lat, to.lng);

        packet.progress += packet.speed * dt;
        if (packet.progress > 1) {
          packet.progress = 0;
          packet.speed = 0.15 + Math.random() * 0.25;
        }

        const t = packet.progress;
        const x = p1.x + (p2.x - p1.x) * t;
        const y = p1.y + (p2.y - p1.y) * t;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, packet.size * 5);
        grad.addColorStop(0, `rgba(0, 242, 255, ${alpha * 0.95})`);
        grad.addColorStop(0.3, `rgba(0, 242, 255, ${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(0, 242, 255, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, packet.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
        ctx.fill();
      }
    };

    const drawNodes = (alpha: number, t: number) => {
      for (let i = 0; i < CITIES.length; i++) {
        const city = CITIES[i];
        const pos = getPos(city.lat, city.lng);
        const pulse = Math.sin(t * 2 + i * 1.5) * 0.3 + 0.7;

        const glowSize = 25 + Math.sin(t * 1.5 + i * 2) * 10;
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowSize);
        grad.addColorStop(0, `rgba(0, 242, 255, ${alpha * 0.2 * pulse})`);
        grad.addColorStop(0.4, `rgba(0, 242, 255, ${alpha * 0.08 * pulse})`);
        grad.addColorStop(1, `rgba(0, 242, 255, 0)`);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 255, ${alpha * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * pulse})`;
        ctx.fill();
      }
    };

    const spawnParticle = () => {
      const w = window.innerWidth, h = window.innerHeight;
      const x = Math.random() * w, y = Math.random() * h;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.4;
      return {
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 0, maxLife: 150 + Math.random() * 350, size: 0.5 + Math.random() * 1.5,
      };
    };

    const drawParticles = (alpha: number) => {
      while (particles.length < 100) particles.push(spawnParticle());
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life++;
        const lifeRatio = p.life / p.maxLife;
        const opacity = alpha * (1 - lifeRatio) * 0.4;
        if (lifeRatio >= 1) { particles[i] = spawnParticle(); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 255, ${opacity})`;
        ctx.fill();
      }
    };

    const drawRadar = (alpha: number, t: number) => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const radius = Math.max(window.innerWidth, window.innerHeight) * 0.6;
      const angle = t * 0.12;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.4, angle);
      ctx.closePath();
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, `rgba(0, 242, 255, ${alpha * 0.025})`);
      grad.addColorStop(1, `rgba(0, 242, 255, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 242, 255, ${alpha * 0.03})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.65, 0, Math.PI * 2);
      ctx.stroke();
    };

    const draw = (timestamp: number) => {
      const dt = Math.min((timestamp - time) / 1000, 0.05);
      time = timestamp;
      const t = timestamp / 1000;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const viewAlpha = 0.7 + 0.3 * Math.min(1, Math.max(0, 1 - window.scrollY / 200));

      drawRadar(viewAlpha, t);
      drawOutline(viewAlpha, t);
      drawConnections(viewAlpha, dt);
      drawNodes(viewAlpha, t);
      drawParticles(viewAlpha);

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
};
