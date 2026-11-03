// Decoracion temporal del National Dog Day (26 de agosto; tema ligero: no
// cambia los colores de la web). Es solo visual: no lleva enlaces y la capa
// fija no recibe clics. Se muestra unicamente en la semana del Dog Day del
// calendario de temas (src/lib/site.ts).

const PAWS = 8;

function Paw() {
  return (
    <svg className="dd-paw" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <ellipse cx="16" cy="22" rx="7.5" ry="6.5" />
      <ellipse cx="6.5" cy="13" rx="3.2" ry="4" />
      <ellipse cx="12.5" cy="7.5" rx="3.2" ry="4.2" />
      <ellipse cx="19.5" cy="7.5" rx="3.2" ry="4.2" />
      <ellipse cx="25.5" cy="13" rx="3.2" ry="4" />
    </svg>
  );
}

export function DogDayDecor() {
  return (
    <>
      <div className="dd-ribbon">
        <span aria-hidden="true">🐾 </span>
        Happy National Dog Day, August 26 · Treat your best friend to a fresh groom
        <span aria-hidden="true"> 🐶</span>
      </div>
      <div className="dd-sky" aria-hidden="true">
        <div className="dd-trail">
          {Array.from({ length: PAWS }, (_, i) => (
            <Paw key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
