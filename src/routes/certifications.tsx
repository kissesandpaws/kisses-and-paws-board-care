import { Link, createFileRoute } from "@tanstack/react-router";
import { SocialLinks } from "@/components/social-links";
import { BOOKING, PHONE_DISPLAY, SITE_URL } from "@/lib/site";
import logoAsset from "@/assets/logo.png.asset.json";

// Diplomas, seminarios y primeros auxilios del equipo. Los certificados se ven
// enteros (sin recorte); las fotos del evento van en formato vertical como las
// del equipo.

interface Credential {
  src: string;
  label: string;
  detail: string;
  photo?: boolean;
}

const groups: { title: string; intro: string; items: Credential[] }[] = [
  {
    title: "Professional certifications",
    intro:
      "Formal grooming training with hundreds of supervised, hands-on hours before ever working on your dog.",
    items: [
      {
        src: "/media/certifications/hey-groomer-diploma-2024.jpeg",
        label: "Dog Grooming Diploma",
        detail: "Hey Groomer · 360 hands-on hours · Stefhany A. Valero · March 2024",
      },
    ],
  },
  {
    title: "Specialized seminars",
    intro:
      "Our Head Groomer keeps training with recognized educators in face work, Asian Fusion styling and advanced finishing.",
    items: [
      {
        src: "/media/certifications/woof-gang-asian-fusion-cute-faces-2023.jpeg",
        label: "Asian Fusion and Cute Faces",
        detail: "Woof Gang Academy of Grooming · Olga Zabelinskaya · September 2023",
      },
      {
        src: "/media/certifications/woof-gang-seminar-2023.jpeg",
        label: "Hands-on with Olga Zabelinskaya",
        detail: "Woof Gang Academy of Grooming · September 2023",
        photo: true,
      },
      {
        src: "/media/certifications/groomers-camp-2024.jpeg",
        label: "Groomers Camp Seminar 2024",
        detail: "2Hands Art · Fabio Gomez · November 2024",
      },
      {
        src: "/media/certifications/groomers-camp-2024-stefhany-fabio-gomez.jpeg",
        label: "With Fabio Gomez",
        detail: "Groomers Camp Seminar · November 2024",
        photo: true,
      },
      {
        src: "/media/certifications/groomers-camp-2025.jpeg",
        label: "Groomers Camp Seminar 2025",
        detail: "2Hands Art · Fabio Gomez · September 2025",
      },
      {
        src: "/media/certifications/cute-faces-diana-paiva-2026.jpeg",
        label: "Cute Faces by Diana Paiva",
        detail: "4Paws by Thamy · Facial alignment and round faces · March 2026",
      },
      {
        src: "/media/certifications/cute-faces-seminar-2026.jpeg",
        label: "Cute Faces seminar class",
        detail: "4Paws by Thamy · March 2026",
        photo: true,
      },
    ],
  },
  {
    title: "Pet CPR & first aid",
    intro:
      "The team is trained to recognize and respond to an emergency while your dog is in our care.",
    items: [
      {
        src: "/media/certifications/pet-cpr-first-aid-stefhany.jpeg",
        label: "Pet First Aid & CPR",
        detail: "Bites & Paws · ProPetHero · Stefhany Valero",
      },
      {
        src: "/media/certifications/pet-cpr-first-aid-christian.jpeg",
        label: "Pet First Aid & CPR",
        detail: "Bites & Paws · ProPetHero · Christian Torrente",
      },
    ],
  },
];

const TITLE = "Groomer Certifications & Pet CPR | Kisses and Paws Board and Care";
const DESCRIPTION =
  "Diplomas, specialized grooming seminars and pet first aid & CPR training of the Kisses and Paws team in West Miami, FL.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/certifications` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/certifications` }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Kisses and Paws Board and Care logo"
              width={900}
              height={671}
              className="h-16 w-auto"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose">
              Board &amp; Care
            </p>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={BOOKING}
              className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-crimson sm:px-5"
            >
              Book Now
            </a>
            <a
              href={`tel:+17866700164`}
              aria-label={`Call Kisses and Paws at ${PHONE_DISPLAY}`}
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-crimson sm:inline-flex"
            >
              <span className="size-2 rounded-full bg-rose" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <nav className="py-6 text-sm text-muted-foreground">
          <Link to="/" className="font-semibold text-primary hover:text-crimson">
            Home
          </Link>
          <span className="mx-2 text-ash">/</span>
          <span className="font-semibold text-foreground">Certifications</span>
        </nav>

        <section className="pb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The people behind the scissors
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Certifications, seminars &amp; pet CPR
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Professional certifications, specialized seminars and CPR &amp; first aid training
            from our grooming team in West Miami. These are the real diplomas and certificates
            behind the care your dog gets at Kisses and Paws.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BOOKING}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-crimson"
            >
              Book a groom
            </a>
            <Link
              to="/"
              hash="team"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-bold transition-colors hover:border-primary hover:text-primary"
            >
              ← Back to the team
            </Link>
          </div>
        </section>

        {groups.map((group) => (
          <section key={group.title} className="border-t border-border py-14">
            <div className="mb-8 max-w-3xl">
              <h2 className="font-display text-3xl">{group.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{group.intro}</p>
            </div>
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img
                    src={item.src}
                    alt={`${item.label} — ${item.detail} — Kisses and Paws in West Miami`}
                    loading="lazy"
                    className={
                      item.photo ? "aspect-[4/5] w-full object-cover object-top" : "w-full"
                    }
                  />
                  <figcaption className="px-4 py-3">
                    <p className="font-display text-base text-crimson">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ash sm:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Kisses and Paws"
              width={900}
              height={671}
              className="h-9 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
              Board &amp; Care
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-semibold hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/sms-terms" className="font-semibold hover:text-primary">
              SMS Terms
            </Link>
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
