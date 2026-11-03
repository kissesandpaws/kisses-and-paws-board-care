import type { CSSProperties } from "react";

// Decoracion temporal del 4 de julio (tema ligero: no cambia los colores de la
// web). Es solo visual: no lleva enlaces y la capa fija no recibe clics.
// Se muestra unicamente en las fechas del 4 de julio del calendario de temas
// (src/lib/site.ts). Estrellas que titilan en vez de fuegos artificiales: el
// mensaje es justamente un lugar tranquilo para los perros.

// Estrellas repartidas con una formula fija (no aleatoria) para que el servidor
// y el navegador pinten lo mismo.
const stars = Array.from({ length: 12 }, (_, i) => ({
  "--x": `${(i * 43 + 4) % 100}%`,
  "--y": `${12 + ((i * 29) % 76)}%`,
  "--size": `${10 + ((i * 7) % 10)}px`,
  "--delay": `${-((i * 7) % 30) / 10}s`,
})) as CSSProperties[];

export function July4Decor() {
  return (
    <>
      <div className="j4-ribbon">
        <span aria-hidden="true">🇺🇸 </span>
        Happy 4th of July from Kisses and Paws · A calm, cage-free stay while the fireworks go off
        <span aria-hidden="true"> ⭐</span>
      </div>
      <div className="j4-sky" aria-hidden="true">
        {stars.map((style, i) => (
          <svg key={i} className="j4-star" style={style} viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 1.5 3.1 6.9 7.4.7-5.6 5 1.6 7.4L12 17.7l-6.5 3.8 1.6-7.4-5.6-5 7.4-.7L12 1.5Z" />
          </svg>
        ))}
      </div>
    </>
  );
}
