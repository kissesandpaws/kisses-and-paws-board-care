import { createFileRoute } from "@tanstack/react-router";
import heroDog from "@/assets/hero-dog.jpg";
import salon from "@/assets/salon.jpg";

const PHONE = "+17866700164";
const PHONE_DISPLAY = "+1 786-670-0164";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero reservar grooming y boarding para mi perrito. ¿Me ayudan con una cita?"
);
const WHATSAPP = `https://wa.me/17866700164?text=${WHATSAPP_MESSAGE}`;
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=5760+SW+8th+St+Suite+300,+Miami,+FL+33144";
const MAPS_EMBED = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]}&q=5760+SW+8th+St+Suite+300,Miami,FL+33144`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kisses and Paws Board and Care — Grooming en West Miami" },
      {
        name: "description",
        content:
          "Grooming boutique y hospedaje para perros en West Miami, FL. Razas pequeñas, cachorros, baño y corte. 5.0 en Google con 132 reseñas.",
      },
      {
        property: "og:title",
        content: "Kisses and Paws Board and Care — Grooming en West Miami",
      },
      {
        property: "og:description",
        content:
          "Grooming boutique y hospedaje para perros en West Miami, FL. Razas pequeñas, cachorros, baño y corte.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PetStore",
          name: "Kisses and Paws Board and Care",
          telephone: PHONE_DISPLAY,
          address: {
            "@type": "PostalAddress",
            streetAddress: "5760 SW 8th St Suite 300",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33144",
            addressCountry: "US",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "132",
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: "✂",
    title: "Full Groom",
    text: "Baño, cepillado, corte de pelo y acabado detallado a la medida de tu perrito.",
    tone: "blush",
  },
  {
    icon: "🐾",
    title: "Puppy Groom",
    text: "Primeros baños con paciencia y calma para cachorros que apenas empiezan.",
    tone: "muted",
  },
  {
    icon: "🛁",
    title: "Bath & Tidy",
    text: "Baño refrescante, uñas, oídos y retoque de cara y patas entre cortes.",
    tone: "secondary",
  },
  {
    icon: "🌙",
    title: "Board & Care",
    text: "Hospedaje supervisado en un espacio limpio, seguro y lleno de amigos nuevos.",
    tone: "dark",
  },
];

const reviews = [
  {
    initial: "C",
    name: "Candela_ Miami",
    meta: "Google · hace 2 meses",
    text: "Llevé a mi yorkie a un grooming completo y superó mis expectativas. Trataron a mi bebé con muchísimo cariño y se sintió tranquila todo el tiempo.",
  },
  {
    initial: "C",
    name: "Cassidy C",
    meta: "Google · hace 3 semanas",
    text: "Estoy muy agradecida de haber encontrado Kisses and Paws. Hicieron un trabajo increíble con mi cachorro y Stefhany fue súper paciente con Navy.",
  },
  {
    initial: "M",
    name: "Melissa Lyle",
    meta: "Google · hace 2 semanas",
    text: "Muy feliz de haber encontrado este lugar cerca de casa. Hizo un gran trabajo con mis dos perros y se notaba que la pasaron increíble.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              K
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg">Kisses &amp; Paws</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-rose">Board &amp; Care</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-primary">
              Servicios
            </a>
            <a href="#resenas" className="transition-colors hover:text-primary">
              Reseñas
            </a>
            <a href="#visitanos" className="transition-colors hover:text-primary">
              Visítanos
            </a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-crimson sm:inline-flex"
          >
            <span className="size-2 rounded-full bg-rose" />
            Llámanos
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-12 pb-10">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1.5">
                <span className="font-bold tracking-widest text-crimson">★★★★★</span>
                <span className="text-xs font-semibold text-accent-foreground">
                  5.0 · 132 reseñas
                </span>
              </div>
              <h1 className="font-display text-5xl leading-[1.03] md:text-6xl">
                Cuidado gentil y
                <br />
                <span className="italic text-primary">grooming</span> hermoso
                <br />
                para los más pequeños.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Un estudio boutique de grooming y hospedaje en West Miami. Especialistas en razas
                pequeñas, cachorros y un trato detallista en un espacio limpio y tranquilo.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  Cómo llegar
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="size-2 rounded-full bg-rose" />
                  <span>
                    <span className="font-bold text-foreground">Abre 9:30</span> · hoy
                  </span>
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="text-muted-foreground">5760 SW 8th St, Miami</div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <img
                  src={heroDog}
                  alt="Yorkie recién bañado y peinado con un lazo rosa en el salón de grooming"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                />
                <div className="absolute -bottom-6 -left-4 max-w-[240px] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] md:-left-8">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="grid size-8 place-items-center rounded-full bg-blush font-display text-sm text-crimson">
                      C
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs font-bold">Candela_ Miami</p>
                      <p className="text-[11px] font-semibold text-rose">★★★★★ · 2 meses</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    “Trataron a mi bebé con muchísimo cariño. Superó mis expectativas.”
                  </p>
                </div>
                <div className="absolute -right-3 top-6 rotate-3 rounded-full bg-ink px-4 py-2 text-xs font-bold text-background">
                  Expertas en razas pequeñas
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-border bg-muted">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-sm font-semibold text-muted-foreground">
            <span>Puppy grooming</span>
            <span className="text-rose">·</span>
            <span>Grooming completo</span>
            <span className="text-rose">·</span>
            <span>Bath &amp; tidy</span>
            <span className="text-rose">·</span>
            <span>Hospedaje</span>
            <span className="text-rose">·</span>
            <span>Razas pequeñas</span>
          </div>
        </div>

        <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Lo que hacemos
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Servicios con mucho amor</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className={
                  s.tone === "dark"
                    ? "rounded-3xl bg-ink p-6 text-background"
                    : "rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                }
              >
                <div
                  className={`mb-5 grid size-12 place-items-center rounded-2xl text-xl ${
                    s.tone === "dark"
                      ? "bg-crimson/40"
                      : s.tone === "blush"
                        ? "bg-blush text-crimson"
                        : s.tone === "muted"
                          ? "bg-muted text-rose"
                          : "bg-secondary text-crimson"
                  }`}
                >
                  <span aria-hidden="true">{s.icon}</span>
                </div>
                <h3 className="font-display text-lg">{s.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    s.tone === "dark" ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="resenas" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                5.0 en Google · 132 reseñas
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Palabras reales, colitas felices</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-3xl border border-border bg-card p-6">
                  <div className="mb-3 font-bold tracking-widest text-crimson">★★★★★</div>
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-full bg-blush font-display text-crimson">
                      {r.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{r.name}</p>
                      <p className="text-[11px] text-ash">{r.meta}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="visitanos" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-[2rem] bg-ink p-8 text-background">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-rose">
                  Visita el estudio
                </p>
                <h2 className="font-display text-3xl leading-tight">
                  Ven a conocer el nuevo lugar favorito de tu perrito
                </h2>
              </div>
              <address className="mt-8 space-y-3 text-sm not-italic text-background/80">
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-rose">◆</span>5760 SW 8th St, Suite 300, Miami, FL
                  33144
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-rose">◆</span>
                  <a href={`tel:${PHONE}`} className="hover:text-rose">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-rose">◆</span>Abre a las 9:30 · West Miami
                </p>
              </address>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Escríbenos
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-background/30 px-6 py-3 font-bold transition-colors hover:border-rose hover:text-rose"
                >
                  Google Maps
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={salon}
                alt="Sala de espera del salón de grooming con cojines rosas y grises"
                width={1280}
                height={720}
                loading="lazy"
                className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover"
              />
              <div className="col-span-2 flex items-center justify-between rounded-3xl border border-border bg-blush/60 p-5">
                <div>
                  <p className="font-display text-lg">@kissesandpaws</p>
                  <p className="text-xs text-muted-foreground">Instagram · TikTok</p>
                </div>
                <span className="font-bold text-primary">Síguenos →</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ash sm:flex-row">
          <p className="font-display text-foreground">
            Kisses &amp; Paws <span className="text-primary">Board &amp; Care</span>
          </p>
          <p>© 2026 · West Miami, Florida · Hecho con amor para perritos</p>
        </div>
      </footer>
    </div>
  );
}
