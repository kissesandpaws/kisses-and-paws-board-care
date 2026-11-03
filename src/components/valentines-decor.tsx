import type { CSSProperties } from "react";

// Decoracion temporal de San Valentin (del 1 al 15 de febrero). Es solo visual:
// no lleva enlaces y la capa fija no recibe clics.
// Se muestra unicamente en las fechas de San Valentin del calendario de temas
// (src/lib/site.ts).

// Corazones repartidos con una formula fija (no aleatoria) para que el servidor
// y el navegador pinten lo mismo.
const hearts = Array.from({ length: 10 }, (_, i) => ({
  "--x": `${(i * 41 + 5) % 100}%`,
  "--size": `${14 + ((i * 7) % 16)}px`,
  "--rise": `${14 + ((i * 5) % 9)}s`,
  "--delay": `${-((i * 17) % 23)}s`,
  "--drift": `${((i * 13) % 50) - 25}px`,
})) as CSSProperties[];

function Heart({ style }: { style: CSSProperties }) {
  return (
    <svg
      className="vd-heart"
      style={style}
      viewBox="0 0 24 22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.6 10.3 20C4.2 14.5 0 10.7 0 6.1 0 2.6 2.7 0 6.2 0c2 0 3.9.9 5.8 2.4C13.9.9 15.8 0 17.8 0 21.3 0 24 2.6 24 6.1c0 4.6-4.2 8.4-10.3 13.9L12 21.6Z" />
    </svg>
  );
}

export function ValentinesDecor() {
  return (
    <>
      <div className="vd-ribbon">
        <span aria-hidden="true">💕 </span>
        Happy Valentine&rsquo;s Day from Kisses and Paws
        <span aria-hidden="true"> 🐾</span>
      </div>
      <div className="vd-sky" aria-hidden="true">
        {hearts.map((style, i) => (
          <Heart key={i} style={style} />
        ))}
      </div>
    </>
  );
}
