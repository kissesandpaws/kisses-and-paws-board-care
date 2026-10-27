// Decoracion temporal de Halloween. Es solo visual: no lleva enlaces ni
// contenido que Google deba leer, y la capa fija no recibe clics.
// Se muestra unicamente cuando HALLOWEEN esta encendido (src/lib/site.ts).

function Web({ className }: { className: string }) {
  return (
    <svg
      className={`hw-web ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M0 0 L118 0 M0 0 L110 42 M0 0 L84 84 M0 0 L42 110 M0 0 L0 118" />
      <path d="M28 0 Q22 22 0 28 M56 0 Q42 42 0 56 M86 0 Q62 62 0 86 M116 0 Q80 80 0 116" />
    </svg>
  );
}

function Bat() {
  return (
    <svg className="hw-bat" viewBox="0 0 64 32" fill="currentColor" aria-hidden="true">
      <path d="M32 6c-2 0-3 2-4 5-4-4-11-6-20-3 4 3 5 7 4 11 3-3 7-3 10 0 2 1 3 4 4 8 1-4 2-7 4-8 3-3 7-3 10 0-1-4 0-8 4-11-9-3-16-1-20 3-1-3-2-5-4-5z" />
    </svg>
  );
}

export function HalloweenDecor() {
  return (
    <>
      <div className="hw-ribbon">
        <span aria-hidden="true">🎃 </span>
        Happy Halloween from Kisses and Paws
        <span aria-hidden="true"> 🦇</span>
        <Web className="hw-web-left" />
      </div>
      <div className="hw-sky" aria-hidden="true">
        <Bat />
        <Bat />
        <Bat />
        <svg className="hw-spider" viewBox="0 0 28 90" aria-hidden="true">
          <line x1="14" y1="0" x2="14" y2="62" stroke="oklch(0.85 0.02 300 / 0.6)" strokeWidth="1" />
          <g fill="currentColor" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="14" cy="70" r="7" />
            <path
              d="M8 66 L1 60 M7 71 L0 72 M8 75 L2 83 M20 66 L27 60 M21 71 L28 72 M20 75 L26 83"
              fill="none"
            />
          </g>
        </svg>
        <span className="hw-pumpkin">🎃</span>
        <span className="hw-pumpkin">🎃</span>
        <span className="hw-pumpkin">🎃</span>
      </div>
    </>
  );
}
