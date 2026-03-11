'use client';

import { useEffect, useState } from 'react';

interface BackgroundCirclesProps {
  visible: boolean;
}

// Color base: #8558cc = rgb(133, 88, 204)
const C = (o: number) => `rgba(133, 88, 204, ${o})`;

// Top circles — visible on mobile + desktop
const topCircles = [
  { id: 't1', size: 72,  color: C(0.22), pos: { top: '3%',  left: '18%'  }, exit: { x: -60,  y: -240 }, floatDuration: '8s',  floatDelay: '0.3s',  exitDelay: '0s',    entranceDelay: '0.15s' },
  { id: 't2', size: 44,  color: C(0.18), pos: { top: '10%', left: '55%'  }, exit: { x: 30,   y: -200 }, floatDuration: '6s',  floatDelay: '1.8s',  exitDelay: '0.05s', entranceDelay: '0.28s' },
  { id: 't3', size: 95,  color: C(0.15), pos: { top: '2%',  right: '14%' }, exit: { x: 80,   y: -260 }, floatDuration: '10s', floatDelay: '0.9s',  exitDelay: '0.08s', entranceDelay: '0.05s' },
  { id: 't4', size: 38,  color: C(0.24), pos: { top: '15%', right: '38%' }, exit: { x: -30,  y: -180 }, floatDuration: '7s',  floatDelay: '2.2s',  exitDelay: '0.03s', entranceDelay: '0.32s' },
];

// Bottom circles — visible on mobile + desktop
const bottomCircles = [
  { id: 'b1', size: 81,  color: C(0.20), pos: { bottom: '4%',  left: '10%'  }, exit: { x: -70, y: 240 }, floatDuration: '9s',  floatDelay: '0.6s',  exitDelay: '0.02s', entranceDelay: '0.1s'  },
  { id: 'b2', size: 55,  color: C(0.16), pos: { bottom: '13%', left: '44%'  }, exit: { x: 25,  y: 200 }, floatDuration: '7s',  floatDelay: '1.4s',  exitDelay: '0.07s', entranceDelay: '0.22s' },
  { id: 'b3', size: 110, color: C(0.18), pos: { bottom: '2%',  right: '16%' }, exit: { x: 90,  y: 260 }, floatDuration: '11s', floatDelay: '2.8s',  exitDelay: '0.04s', entranceDelay: '0.08s' },
  { id: 'b4', size: 42,  color: C(0.22), pos: { bottom: '17%', right: '50%' }, exit: { x: -40, y: 180 }, floatDuration: '8s',  floatDelay: '0.2s',  exitDelay: '0.1s',  entranceDelay: '0.3s'  },
];

// Left circles — desktop only
const leftCircles = [
  { id: 'l1', size: 68,  color: C(0.18), pos: { top: '29%', left: '1%'   }, exit: { x: -220, y: -30 }, floatDuration: '9s',  floatDelay: '1.1s',  exitDelay: '0.02s', entranceDelay: '0.12s' },
  { id: 'l2', size: 88,  color: C(0.15), pos: { top: '52%', left: '0.5%' }, exit: { x: -250, y: 20  }, floatDuration: '12s', floatDelay: '3.0s',  exitDelay: '0.06s', entranceDelay: '0.22s' },
  { id: 'l3', size: 50,  color: C(0.22), pos: { top: '41%', left: '3%'   }, exit: { x: -200, y: -50 }, floatDuration: '7s',  floatDelay: '0.4s',  exitDelay: '0.09s', entranceDelay: '0s'    },
  { id: 'l4', size: 76,  color: C(0.16), pos: { top: '67%', left: '1.5%' }, exit: { x: -230, y: 60  }, floatDuration: '10s', floatDelay: '2.0s',  exitDelay: '0.01s', entranceDelay: '0.18s' },
];

// Right circles — desktop only
const rightCircles = [
  { id: 'r1', size: 35,  color: C(0.20), pos: { top: '24%', right: '1%'   }, exit: { x: 220, y: -40 }, floatDuration: '8s',  floatDelay: '1.6s',  exitDelay: '0.03s', entranceDelay: '0.2s'  },
  { id: 'r2', size: 92,  color: C(0.17), pos: { top: '47%', right: '0.5%' }, exit: { x: 260, y: 10  }, floatDuration: '11s', floatDelay: '0.7s',  exitDelay: '0.07s', entranceDelay: '0.1s'  },
  { id: 'r3', size: 62,  color: C(0.22), pos: { top: '36%', right: '2%'   }, exit: { x: 240, y: -60 }, floatDuration: '6s',  floatDelay: '2.4s',  exitDelay: '0.05s', entranceDelay: '0.05s' },
  { id: 'r4', size: 48,  color: C(0.15), pos: { top: '63%', right: '1.5%' }, exit: { x: 210, y: 70  }, floatDuration: '9s',  floatDelay: '3.8s',  exitDelay: '0.01s', entranceDelay: '0.25s' },
];

interface CircleData {
  id: string;
  size: number;
  color: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  exit: { x: number; y: number };
  floatDuration: string;
  floatDelay: string;
  exitDelay: string;
  entranceDelay: string;
}

function Circle({
  circle,
  visible,
  mounted,
}: {
  circle: CircleData;
  visible: boolean;
  mounted: boolean;
}) {
  const delay = visible ? circle.entranceDelay : circle.exitDelay;
  return (
    <div
      style={{
        position: 'absolute',
        width: circle.size,
        height: circle.size,
        ...circle.pos,
        transform: visible
          ? 'translate(0px, 0px) scale(1)'
          : `translate(${circle.exit.x}px, ${circle.exit.y}px) scale(0.6)`,
        opacity: visible ? 1 : 0,
        transition: mounted
          ? `transform 1.1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}, opacity 0.85s ease ${delay}`
          : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: circle.color,
          animation: `circleFloat ${circle.floatDuration} ${circle.floatDelay} infinite ease-in-out`,
        }}
      />
    </div>
  );
}

export function BackgroundCircles({ visible }: BackgroundCirclesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0" aria-hidden="true">
      {/* Top — all screens */}
      {topCircles.map((c) => (
        <Circle key={c.id} circle={c} visible={visible} mounted={mounted} />
      ))}

      {/* Bottom — all screens */}
      {bottomCircles.map((c) => (
        <Circle key={c.id} circle={c} visible={visible} mounted={mounted} />
      ))}

      {/* Left — desktop only */}
      <div className="hidden lg:contents">
        {leftCircles.map((c) => (
          <Circle key={c.id} circle={c} visible={visible} mounted={mounted} />
        ))}
      </div>

      {/* Right — desktop only */}
      <div className="hidden lg:contents">
        {rightCircles.map((c) => (
          <Circle key={c.id} circle={c} visible={visible} mounted={mounted} />
        ))}
      </div>
    </div>
  );
}
