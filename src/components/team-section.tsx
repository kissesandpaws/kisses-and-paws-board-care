// Seccion del equipo. Fotos sin nombres por ahora: cuando lleguen los nombres
// y las certificaciones, se anaden aqui.

const team = ["/media/team/team-1.jpg", "/media/team/team-2.jpg", "/media/team/team-3.jpg"];

const credentials = ["Professional certifications", "Specialized seminars", "CPR & first aid"];

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

            <ul className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>

            <p className="text-base leading-relaxed text-muted-foreground">
              We groom with professional products from{" "}
              <strong className="font-semibold text-foreground">Hydra</strong>,{" "}
              <strong className="font-semibold text-foreground">iGroom</strong> and{" "}
              <strong className="font-semibold text-foreground">Chris Christensen</strong>, chosen
              for each dog&apos;s coat and skin rather than whatever is on the shelf.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((src) => (
            <li
              key={src}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <img
                src={src}
                alt="Kisses and Paws Board and Care team member"
                width={720}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
