import type { CSSProperties } from "react";

// Decoracion temporal de Navidad (del 1 de diciembre al 6 de enero). Es solo
// visual: no lleva enlaces y la capa fija no recibe clics.
// Se muestra unicamente en las fechas de Navidad del calendario de temas
// (src/lib/site.ts).

const BULBS = 24;

// Copos repartidos con una formula fija (no aleatoria) para que el servidor y el
// navegador pinten lo mismo.
const flakes = Array.from({ length: 28 }, (_, i) => ({
  "--x": `${(i * 37 + 3) % 100}%`,
  "--size": `${4 + ((i * 5) % 6)}px`,
  "--fall": `${11 + ((i * 7) % 10)}s`,
  "--delay": `${-((i * 13) % 21)}s`,
  "--drift": `${((i * 11) % 40) - 20}px`,
})) as CSSProperties[];

export function ChristmasDecor() {
  return (
    <>
      <div className="xm-ribbon">
        <span aria-hidden="true">🎄 </span>
        Happy Holidays from Kisses and Paws
        <span aria-hidden="true"> ❄️</span>
        <div className="xm-lights" aria-hidden="true">
          {Array.from({ length: BULBS }, (_, i) => (
            <span key={i} className="xm-bulb" />
          ))}
        </div>
      </div>
      <div className="xm-sky" aria-hidden="true">
        {flakes.map((style, i) => (
          <span key={i} className="xm-flake" style={style} />
        ))}
      </div>
    </>
  );
}
