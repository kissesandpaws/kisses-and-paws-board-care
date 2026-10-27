// Seccion del equipo. Cada foto lleva nombre y cargo, de izquierda a derecha.

import { Link } from "@tanstack/react-router";

const team = [
  { src: "/media/team/team-1.jpg", name: "Stefhany", role: "Head Groomer" },
  { src: "/media/team/team-2.jpg", name: "Ashley", role: "Head Driver" },
  { src: "/media/team/team-3.jpg", name: "Chris", role: "Manager" },
  { src: "/media/team/team-4.jpg", name: "Mogollon", role: "Playground Manager" },
];

export function TeamSection() {
  return (
    <section id="team" className="border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The people behind the scissors
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Meet part of the team your dog will actually remember
            </h2>
          </div>

          <div className="space-y-5 md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Our grooming team brings professional training, continuing education and thousands of
              hours of hands-on work with dogs of every size and temperament. Our Head Groomer sets
              the standard, and it always comes down to the same three things: healthy coats,
              beautiful finishing, and hands that stay gentle even when a dog is nervous.
            </p>

            {/* Un solo boton para diplomas, seminarios y primeros auxilios: abre
                /certifications con los certificados reales. */}
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-2.5 text-sm sm:rounded-full font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Professional certifications · Specialized seminars · CPR &amp; first aid
              <span aria-hidden="true" className="text-primary">→</span>
            </Link>

            <p className="text-base leading-relaxed text-muted-foreground">
              We groom with professional products from{" "}
              <strong className="font-semibold text-foreground">Hydra</strong>,{" "}
              <strong className="font-semibold text-foreground">iGroom</strong> and{" "}
              <strong className="font-semibold text-foreground">Chris Christensen</strong>, chosen
              for each dog&apos;s coat and skin rather than whatever is on the shelf.
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {team.map((member) => (
            <li key={member.src} className="text-center">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={member.src}
                  alt={`${member.name}, ${member.role} at Kisses and Paws Board and Care`}
                  width={720}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <p className="mt-3 font-display text-base font-semibold text-foreground sm:text-lg">
                {member.name}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
