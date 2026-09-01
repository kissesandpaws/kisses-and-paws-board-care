import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";
import logoAsset from "@/assets/logo.png.asset.json";

const PHONE_DISPLAY = "+1 786-670-0164";
const WHATSAPP_BASE = "https://wa.me/17866700164?text=";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Servicio no encontrado — Kisses and Paws" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.service.title} — Kisses and Paws Board and Care`;
    const description = loaderData.service.description[0]!.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: `/servicios/${loaderData.service.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: ServiceNotFound,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const whatsapp = `${WHATSAPP_BASE}${encodeURIComponent(
    `Hola, quiero reservar el servicio ${service.title} para mi perrito. ¿Me ayudan con una cita?`
  )}`;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo de Kisses and Paws Board and Care"
              width={822}
              height={661}
              className="h-16 w-auto"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose">
              Board &amp; Care
            </p>
          </Link>
          <a
            href={`tel:+17866700164`}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-crimson sm:inline-flex"
          >
            <span className="size-2 rounded-full bg-rose" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <nav className="py-6 text-sm text-muted-foreground">
          <Link to="/" className="font-semibold text-primary hover:text-crimson">
            Inicio
          </Link>
          <span className="mx-2 text-ash">/</span>
          <span>Servicios</span>
          <span className="mx-2 text-ash">/</span>
          <span className="font-semibold text-foreground">{service.title}</span>
        </nav>

        <section className="pb-14">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Servicio
              </p>
              <h1 className="font-display text-4xl leading-tight md:text-5xl">{service.title}</h1>
              <p className="mt-3 font-display text-xl italic text-rose">{service.tagline}</p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Reservar {service.title}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  ← Volver al inicio
                </Link>
              </div>
            </div>

            <aside className="space-y-5 md:col-span-5">
              <div className="rounded-3xl bg-ink p-6 text-background">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose">Duración</p>
                <p className="mt-1 font-display text-2xl">{service.duration}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-rose">
                  Ideal para
                </p>
                <p className="mt-1 text-sm text-background/80">{service.ideal}</p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Qué incluye
                </p>
                <ul className="space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-crimson" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Galería
              </p>
              <h2 className="font-display text-3xl">Momentos de {service.title}</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((g) =>
              g.src ? (
                <figure
                  key={g.label}
                  className="overflow-hidden rounded-3xl border border-border bg-card"
                >
                  {g.type === "video" ? (
                    <video
                      src={g.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="aspect-square w-full object-cover"
                      aria-label={`${service.title} — ${g.label} en Kisses and Paws`}
                    />
                  ) : (
                    <img
                      src={g.src}
                      alt={`${service.title} — ${g.label} en Kisses and Paws`}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  )}
                  <figcaption className="px-4 py-3 font-display text-base text-crimson">
                    {g.label}
                  </figcaption>
                </figure>
              ) : (
                <div
                  key={g.label}
                  className={`flex aspect-[4/5] flex-col items-center justify-center rounded-3xl border border-border p-6 text-center ${
                    g.tone === "blush"
                      ? "bg-blush"
                      : g.tone === "muted"
                        ? "bg-muted"
                        : "bg-secondary"
                  }`}
                >
                  <span className="mb-3 text-4xl" aria-hidden="true">
                    🐾
                  </span>
                  <p className="font-display text-lg text-crimson">{g.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Foto próximamente</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="border-t border-border py-14">
          <h2 className="mb-6 font-display text-2xl">Otros servicios</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-display text-lg group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                <p className="mt-4 text-sm font-bold text-primary">Ver servicio →</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ash sm:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Kisses and Paws"
              width={822}
              height={661}
              className="h-9 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
              Board &amp; Care
            </p>
          </div>
          <p>© 2026 · West Miami, Florida · Hecho con amor para perritos</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceNotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-center text-foreground">
      <div>
        <h1 className="font-display text-4xl">Servicio no encontrado</h1>
        <p className="mt-3 text-muted-foreground">Este servicio no existe o fue movido.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-crimson"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
