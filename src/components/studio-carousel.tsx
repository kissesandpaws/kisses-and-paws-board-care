import { useEffect, useRef, useState } from "react";

// Fotos del local. Para cambiarlas basta con editar esta lista: los archivos
// viven en public/media/studio/. Se muestran en horizontal y en tamano
// contenido para no comerse la pantalla.
const photos = [
  { src: "/media/studio/studio-reception.jpeg", alt: "Reception area at Kisses and Paws Board and Care in West Miami" },
  { src: "/media/studio/studio-grooming-room.jpeg", alt: "Grooming room with professional tables and bathing tub" },
  { src: "/media/studio/studio-play-room.jpeg", alt: "Indoor play room with toys and comfortable seating" },
  { src: "/media/studio/studio-playpen.jpeg", alt: "Puppy in a clean playpen with a bed and toys" },
  { src: "/media/studio/studio-backyard.jpeg", alt: "Fenced backyard with shade and open grass for dogs to run" },
];

export function StudioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    // Al montar, las imagenes todavia no han cargado y el ancho real del carrete
    // aun no existe: sin esto la flecha derecha aparece desactivada.
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    for (const img of el.querySelectorAll("img")) observer.observe(img);
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollByCards = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    // Avanza aproximadamente el ancho visible, dejando una foto de referencia.
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" });
  };

  return (
    <section aria-label="Inside our studio" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Inside our studio
        </p>

        <div className="relative">
          {/* Sin la clase scroll-smooth a proposito: el scroll-behavior de CSS
              bloquea el desplazamiento programatico. El suavizado lo pone el
              scrollBy de scrollByCards. */}
          <div
            ref={trackRef}
            onScroll={sync}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((p) => (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-40 w-auto shrink-0 snap-start rounded-2xl border border-border object-cover md:h-48"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={atStart}
            aria-label="See previous photos"
            className="absolute top-1/2 -left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-foreground shadow-[var(--shadow-soft)] transition-opacity hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="size-5">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={atEnd}
            aria-label="See more photos"
            className="absolute top-1/2 -right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-foreground shadow-[var(--shadow-soft)] transition-opacity hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="size-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
