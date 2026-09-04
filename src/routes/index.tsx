import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Download,
  ExternalLink,
  FileBadge,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ContactForm } from "@/components/portfolio/ContactForm";
import {
  ACHIEVEMENTS,
  CERT_PROVIDERS,
  EXPERIENCE,
  INTERESTS,
  LEADERSHIP,
  LEADERSHIP_QUALITIES,
  LINKS,
  PROJECTS,
  SKILLS,
} from "@/components/portfolio/data";

const TITLE = "Suwetha K | AI/ML Engineer & Software Developer";
const DESCRIPTION =
  "Portfolio of Suwetha K — final-year B.E. CSE (AI & ML) student building LLM, computer vision, and full-stack projects, with published research and hackathon wins.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suwetha K",
          jobTitle: "AI/ML Engineer | Software Developer",
          email: `mailto:${LINKS.email}`,
          telephone: LINKS.phone,
          alumniOf: "Sri Sairam Engineering College, Chennai",
          sameAs: [LINKS.github, LINKS.linkedin],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Section({
  id,
  children,
  tinted = false,
}: {
  id: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-b border-border py-20 ${tinted ? "bg-surface" : ""}`}>
      <div className="section-shell">{children}</div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

function Portfolio() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <div className="min-h-screen">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative scroll-mt-24 overflow-hidden border-b border-border">
        <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
        <div className="section-shell relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" /> Open to AI/ML and software engineering roles
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl">Suwetha K</h1>
            <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
              AI/ML Engineer | Software Developer | Builder
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Final-year B.E. CSE student specializing in Artificial Intelligence and Machine Learning,
              passionate about building practical, data-driven solutions and exploring the intersection of AI,
              software engineering, and real-world impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary/90"
              >
                View My Work <ArrowRight className="size-4" />
              </a>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="size-4" /> Download Resume
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute inset-x-8 inset-y-5 rounded-xl border border-primary/20 bg-accent/60" />
            <div className="relative grid gap-3 rounded-xl border border-border bg-card p-4 shadow-lift sm:p-5">
              {[
                { icon: GraduationCap, value: "9.28", label: "CGPA", detail: "out of 10" },
                { icon: Briefcase, value: "3", label: "Internships", detail: "industry experiences" },
                { icon: Award, value: "20+", label: "Certifications", detail: "and counting" },
              ].map(({ icon: Icon, value, label, detail }) => (
                <div
                  key={label}
                  className="flex min-h-24 items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl font-semibold leading-none text-foreground">{value}</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" tinted>
        <SectionHeading
          eyebrow="About"
          title="Building practical AI, grounded in strong engineering fundamentals"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I am pursuing a B.E. in Computer Science and Engineering with a specialization in Artificial
              Intelligence and Machine Learning at Sri Sairam Engineering College, Chennai, with a CGPA of
              9.28/10.0 and expected graduation in 2027.
            </p>
            <p>
              My work spans AI/ML, software engineering, and web development — from computer vision systems for
              food-safety to Retrieval-Augmented Generation agents built with LangChain and LangGraph. I am
              especially interested in applying AI to healthcare and other high-impact domains.
            </p>
            <p>
              I enjoy shipping practical applications end to end and regularly take part in technical
              competitions and hackathons, where I lead teams and turn ideas into working products under tight
              deadlines.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {INTERESTS.map((i) => (
                <Chip key={i}>{i}</Chip>
              ))}
            </div>
          </div>
          <dl className="grid gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
            {[
              [GraduationCap, "Degree", "B.E. CSE (Artificial Intelligence and Machine Learning)"],
              [MapPin, "Institution", "Sri Sairam Engineering College, Chennai"],
              [BadgeCheck, "CGPA", "9.28 / 10.0"],
              [BookOpen, "Expected graduation", "2027"],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof GraduationCap;
              return (
                <div key={label as string} className="flex gap-3">
                  <I className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label as string}
                    </dt>
                    <dd className="text-sm font-medium">{value as string}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Internships and industry programs"
          intro="Hands-on work across LLM application development, full-stack engineering, and data analysis."
        />
        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {EXPERIENCE.map((job) => (
            <li key={job.org} className="relative">
              <span className="absolute -left-[calc(1.5rem+5px)] top-2 size-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]" />
              <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.org}</h3>
                    <p className="text-sm font-medium text-primary">{job.role}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" tinted>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          intro="Each project framed as problem, solution, technology, and impact."
        />
        <div className="mt-12 space-y-8">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className={`rounded-xl border bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-lift sm:p-8 ${
                p.featured ? "border-primary/40" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                {p.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-semibold sm:text-2xl">{p.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  ["Problem", p.problem],
                  ["Solution", p.solution],
                  ["Technology", p.technology],
                  ["Impact", p.impact],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-border bg-background p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              {p.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {l.label} <ExternalLink className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research">
        <SectionHeading
          eyebrow="Research & Innovation"
          title="Publication and intellectual property"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
            <BookOpen className="size-5 text-primary" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Research Publication
            </p>
            <h3 className="mt-2 text-lg font-semibold">“AI Powered Ingredient Detector for Allergies”</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Published at the IEEE International Conference on Computing, Communication and Technology
              (ICCCT 2025).
            </p>
            <a
              href={LINKS.paper}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View on IEEE Xplore <ExternalLink className="size-3.5" />
            </a>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
            <FileBadge className="size-5 text-primary" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Patent
            </p>
            <h3 className="mt-2 text-lg font-semibold">Indian Patent Application</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              “AI Powered Ingredient Detector for Allergies” — filed August 2025.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              Filed · August 2025
            </span>
          </article>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" tinted>
        <SectionHeading eyebrow="Achievements" title="Competitions, recognition, and learning" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a}
              className="rounded-xl border border-border bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-lift"
            >
              <Award className="size-4 text-primary" />
              <p className="mt-3 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Certifications</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                20+ certifications across leading platforms and institutes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAllCerts((v) => !v)}
              aria-expanded={showAllCerts}
              className="rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {showAllCerts ? "Hide details" : "View All"}
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {CERT_PROVIDERS.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
          {showAllCerts && (
            <ul className="mt-5 grid gap-2 border-t border-border pt-5 text-sm text-muted-foreground sm:grid-cols-2">
              <li>NPTEL – Elite + Silver, Python for Data Science (Top 5%)</li>
              <li>NPTEL Topper badges in more than four courses</li>
              <li>Coursera, LinkedIn Learning and Udemy courses in AI/ML and web development</li>
              <li>IIT Bombay, IIRS and Learnathon programs</li>
              <li className="sm:col-span-2 text-xs">
                Full certificate list available on request or via LinkedIn.
              </li>
            </ul>
          )}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Leading teams and mentoring peers"
          intro="Roles held across internships, hackathons, and student communities."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <div
              key={l.role + l.org}
              className="rounded-xl border border-border bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-lift"
            >
              <Users className="size-4 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">{l.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{l.org}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {LEADERSHIP_QUALITIES.map((q) => (
            <Chip key={q}>{q}</Chip>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" tinted>
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.group} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-2">
                <Briefcase className="size-4 text-primary" />
                <h3 className="text-sm font-semibold">{group.group}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful with technology."
          intro="Open to internships, AI/ML engineering roles, research collaborations, and hackathon teams."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-3">
            {[
              { Icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
              { Icon: Phone, label: "Phone", value: LINKS.phone, href: `tel:${LINKS.phone.replace(/\s/g, "")}` },
              { Icon: Linkedin, label: "LinkedIn", value: "suwetha-kathiresan", href: LINKS.linkedin },
              { Icon: Github, label: "GitHub", value: "suwethakathir", href: LINKS.github },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-shadow duration-200 hover:shadow-lift"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary">
                  <Icon className="size-4 text-primary" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12">
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold">Suwetha K</p>
            <p className="mt-1 text-sm text-muted-foreground">
              AI/ML Engineer | Software Developer | Builder
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                LinkedIn
              </a>
              <a href={`mailto:${LINKS.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                Email
              </a>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 Suwetha K</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
