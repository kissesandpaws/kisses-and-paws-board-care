// Decoracion temporal de Thanksgiving (tema ligero: no cambia los colores de la
// web). Es solo visual: no lleva enlaces y la capa fija no recibe clics.
// Se muestra unicamente en las fechas de Thanksgiving del calendario de temas
// (src/lib/site.ts).

const leaves = ["🍂", "🍁", "🍂", "🍁", "🍂", "🍁"];

export function ThanksgivingDecor() {
  return (
    <>
      <div className="tg-ribbon">
        <span aria-hidden="true">🍂 </span>
        Happy Thanksgiving from Kisses and Paws · Holiday boarding fills up fast, book early
        <span aria-hidden="true"> 🍁</span>
      </div>
      <div className="tg-sky" aria-hidden="true">
        {leaves.map((leaf, i) => (
          <span key={i} className="tg-leaf">
            {leaf}
          </span>
        ))}
      </div>
    </>
  );
}
