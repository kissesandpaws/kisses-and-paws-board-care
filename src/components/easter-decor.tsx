// Decoracion temporal de Pascua (tema ligero: no cambia los colores de la web).
// Es solo visual: no lleva enlaces y la capa fija no recibe clics.
// Se muestra unicamente en la semana de Pascua del calendario de temas
// (src/lib/site.ts); coincide con el spring break de Miami-Dade.

const eggs = ["ea-egg-pink", "ea-egg-mint", "ea-egg-lilac"];

export function EasterDecor() {
  return (
    <>
      <div className="ea-ribbon">
        <span aria-hidden="true">🐣 </span>
        Happy Easter from Kisses and Paws · Spring break boarding fills up fast, book early
        <span aria-hidden="true"> 🌷</span>
      </div>
      <div className="ea-sky" aria-hidden="true">
        {eggs.map((color) => (
          <svg key={color} className={`ea-egg ${color}`} viewBox="0 0 40 52" aria-hidden="true">
            <path
              d="M20 1C9.5 1 1 17 1 30.5 1 42.4 9.5 51 20 51s19-8.6 19-20.5C39 17 30.5 1 20 1Z"
              fill="currentColor"
            />
            <path
              d="M2.5 26 9 21l6 5 5-5 5 5 6-5 6.5 5M3 35l6-4 6 4 5-4 5 4 6-4 6 4"
              fill="none"
              stroke="oklch(1 0 0 / 0.85)"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </>
  );
}
