import { Link, createFileRoute } from "@tanstack/react-router";
import { SocialLinks } from "@/components/social-links";
import { StudioCarousel } from "@/components/studio-carousel";
import { BOOKING, PHONE, PHONE_DISPLAY, WHATSAPP_BASE } from "@/lib/site";
import heroSalonDogAsset from "@/assets/hero-salon-dog.jpeg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

const WHATSAPP = `${WHATSAPP_BASE}${encodeURIComponent(
  "Hi! I'd like to book grooming and boarding for my dog. Can you help me set up an appointment?"
)}`;
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=5760+SW+8th+St+Suite+300,+Miami,+FL+33144";
const MAPS_EMBED = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]}&q=5760+SW+8th+St+Suite+300,Miami,FL+33144`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dog Grooming in West Miami, FL | Kisses and Paws Board and Care" },
      {
        name: "description",
        content:
          "Boutique dog grooming and boarding in West Miami, FL 33144. Cage-free, stress-free small breed specialists. Rated 5.0 on Google with 132 reviews.",
      },
      {
        property: "og:title",
        content: "Dog Grooming in West Miami, FL | Kisses and Paws Board and Care",
      },
      {
        property: "og:description",
        content:
          "Boutique dog grooming and boarding in West Miami, FL. Small breeds, puppies, bath and haircut. Rated 5.0 on Google.",
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
          description:
            "Boutique dog grooming and boarding studio in West Miami, FL. Small breed specialists offering cage-free, stress-free grooming, puppy grooming, boarding, daycare and anesthesia-free dental cleaning.",
          telephone: PHONE_DISPLAY,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5760 SW 8th St Suite 300",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33144",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "West Miami" },
            { "@type": "City", name: "Coral Gables" },
            { "@type": "City", name: "Doral" },
            { "@type": "Place", name: "Flagami" },
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "17:00",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "132",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dog grooming and boarding services in West Miami",
            itemListElement: [
              "Full Groom",
              "Puppy Groom",
              "Bath & Tidy",
              "Boarding",
              "Daycare",
              "NATS — Dental Cleaning",
              "Bath",
              "Nails",
              "Transportation",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: "✂",
    slug: "full-groom",
    title: "Full Groom",
    text: "Bath, brush-out, haircut and a detailed finish tailored to your dog.",
    tone: "blush",
  },
  {
    icon: "🐾",
    slug: "puppy-groom",
    title: "Puppy Groom",
    text: "Gentle first baths, calm and unhurried, for puppies just starting out.",
    tone: "muted",
  },
  {
    icon: "🛁",
    slug: "bath-tidy",
    title: "Bath & Tidy",
    text: "A refreshing bath, nails, ears and a face-and-paw tidy between haircuts.",
    tone: "secondary",
  },
  {
    icon: "🌙",
    slug: "board-care",
    title: "Boarding",
    text: "Supervised boarding in a clean, safe space full of new friends.",
    tone: "dark",
  },
  {
    icon: "☀️",
    slug: "daycare",
    title: "Daycare",
    text: "A day of care, play and socialization while you are at work.",
    tone: "blush",
  },
  {
    icon: "🦷",
    slug: "nats",
    title: "NATS — Dental",
    text: "Gentle anesthesia-free teeth cleaning for a fresh, healthy smile.",
    tone: "blush",
  },
  {
    icon: "🫧",
    slug: "bath",
    title: "Bath",
    text: "A deep bath with professional products, careful drying and a full brush-out.",
    tone: "secondary",
  },
  {
    icon: "💅",
    slug: "nails",
    title: "Nails",
    text: "Nail trims and filing with gentle handling and breaks for nervous dogs.",
    tone: "muted",
  },
  {
    icon: "🚐",
    slug: "transportation",
    title: "Transportation",
    text: "Home pickup and delivery for grooming and boarding in West Miami.",
    tone: "dark",
  },
];

const reviews = [
  {
    initial: "C",
    name: "Candela_ Miami",
    meta: "Google · 2 months ago",
    text: "I took my yorkie for a full grooming and it went beyond my expectations. They treated my baby girl with much loving care and she felt very attentive ease from the start.",
  },
  {
    initial: "C",
    name: "Cassidy C",
    meta: "Google · 3 weeks ago",
    text: "I am so grateful I found Kisses and Paws. I took my puppy there for a groom and they did an incredible job. Stefhany was so patient with Navy.",
  },
  {
    initial: "M",
    name: "Melissa Lyle",
    meta: "Google · 2 weeks ago",
    text: "I am so happy I found this place and it is great since it is close to our home! She did a great job with both of my dogs and I can tell they had a great day and felt comfortable.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 translate-y-1.5">
            <img
              src={logoAsset.url}
              alt="Kisses and Paws Board and Care logo"
              width={822}
              height={661}
              className="h-20 w-auto"
            />
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose">
                Boarding
              </p>
              <p className="hidden max-w-[280px] text-xs leading-snug text-muted-foreground sm:block">
                West Miami, Florida. Conveniently located at 5760 SW 8th Street, Suite 300, FL
                33144
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#reviews" className="transition-colors hover:text-primary">
              Reviews
            </a>
            <a href="#visit" className="transition-colors hover:text-primary">
              Visit us
            </a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={BOOKING}
              className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-crimson sm:px-5"
            >
              Book Now
            </a>
            <a
              href={`tel:${PHONE}`}
              aria-label={`Call Kisses and Paws at ${PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-background transition-colors hover:bg-crimson sm:px-5"
            >
              <span className="size-2 rounded-full bg-rose" />
              Call us
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-12 pb-10">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1.5">
                <span className="font-bold tracking-widest text-crimson">★★★★★</span>
                <span className="text-xs font-semibold text-accent-foreground">
                  5.0 · 132 reviews
                </span>
              </div>
              <h1 className="font-display text-5xl leading-[1.03] md:text-6xl">
                Gentle care and
                <br />
                beautiful <span className="italic text-primary">grooming</span>
                <br />
                for the littlest ones.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                A boutique dog grooming and boarding studio in West Miami, FL 33144. Small breed
                specialists — cage-free, stress-free and detail-obsessed, in a calm and spotless
                space.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Book grooming &amp; boarding
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  Get directions
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="size-2 rounded-full bg-rose" />
                  <span>
                    <span className="font-bold text-foreground">Monday to Saturday</span> · 9:30 -
                    17:00
                  </span>
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="text-muted-foreground">5760 SW 8th St, Miami</div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <img
                  src={heroSalonDogAsset.url}
                  alt="Happy dog after grooming at the Kisses and Paws salon in West Miami, with a pink neon sign"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                />
                <div className="absolute -right-3 top-6 rotate-3 rounded-full bg-ink px-4 py-2 text-xs font-bold text-background">
                  Small breed specialists
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-border bg-muted">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-sm font-semibold text-muted-foreground">
            <span>Puppy grooming</span>
            <span className="text-rose">·</span>
            <span>Full grooming</span>
            <span className="text-rose">·</span>
            <span>Bath &amp; tidy</span>
            <span className="text-rose">·</span>
            <span>Dog boarding</span>
            <span className="text-rose">·</span>
            <span>Small breeds</span>
          </div>
        </div>

        <StudioCarousel />

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                What we do
              </p>
              <h2 className="font-display text-3xl md:text-4xl">
                Dog grooming services in West Miami
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services/$slug"
                params={{ slug: s.slug }}
                aria-label={`See details for our ${s.title} service`}
                className={
                  s.tone === "dark"
                    ? "block rounded-3xl bg-ink p-6 text-background transition-transform hover:-translate-y-1"
                    : "block rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
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
                <p
                  className={`mt-4 text-sm font-bold ${
                    s.tone === "dark" ? "text-rose" : "text-primary"
                  }`}
                >
                  View service →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section id="reviews" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                5.0 on Google · 132 reviews
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Real words, happy tails</h2>
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

        <section id="visit" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-[2rem] bg-ink p-8 text-background">
              <div className="pt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-rose">
                  Visit the studio
                </p>
                <h2 className="font-display text-3xl leading-tight">
                  Come meet your dog&apos;s new favorite place
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
                  <span className="mt-0.5 text-rose">◆</span>Monday to Saturday · 9:30 - 17:00
                </p>
              </address>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING}
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-crimson"
                >
                  Book Now
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-background/30 px-6 py-3 font-bold transition-colors hover:border-rose hover:text-rose"
                >
                  WhatsApp
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
              <div className="col-span-2 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <iframe
                  title="Kisses and Paws Board and Care location on Google Maps"
                  src={MAPS_EMBED}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/9] w-full border-0"
                  allowFullScreen
                />
              </div>
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-between rounded-3xl border border-border bg-blush/60 p-5 transition-colors hover:border-primary/40"
              >
                <div>
                  <p className="font-display text-lg">Get directions</p>
                  <p className="text-xs text-muted-foreground">5760 SW 8th St Suite 300, Miami</p>
                </div>
                <span className="font-bold text-primary">Open Google Maps →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Book grooming or boarding on WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.939L0 24l6.335-1.652a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

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
          <SocialLinks />
          <p className="text-center sm:text-right">
            Serving West Miami, Coral Gables, Flagami, Doral and nearby Miami neighborhoods
            <br />© 2026 · West Miami, Florida · Made with love for dogs
          </p>
        </div>
      </footer>
    </div>
  );
}
