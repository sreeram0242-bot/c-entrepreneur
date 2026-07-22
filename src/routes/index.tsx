import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  Megaphone,
  Handshake,
  UserCheck,
  Users,
  Briefcase,
  BarChart3,
  Award,
  Rocket,
  Send,
  Phone,
  GraduationCap,
  Code2,
  Instagram,
  MessageCircle,
  ArrowRight,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C-Entrepreneurs | Build. Learn. Grow." },
      {
        name: "description",
        content:
          "C-Entrepreneurs helps emerging talent build real companies through business development, marketing, sales, and development roles.",
      },
      { property: "og:title", content: "C-Entrepreneurs | Build. Learn. Grow." },
      {
        property: "og:description",
        content:
          "Explore C-Entrepreneurs roles in business development, marketing, sales, and web and app development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const roles = [
  {
    id: "bdr",
    num: "01",
    title: "Business Development",
    subtitle: "Representative",
    icon: TrendingUp,
    objectives: [
      "Learn client acquisition strategies",
      "Understand lead generation techniques",
      "Develop communication and negotiation skills",
      "Gain practical experience identifying & approaching potential clients",
    ],
  },
  {
    id: "mkt",
    num: "02",
    title: "Marketing",
    subtitle: "Brand & Growth",
    icon: Megaphone,
    objectives: [
      "Learn traditional and digital marketing strategies",
      "Understand social media marketing and branding",
      "Create marketing campaigns and promotional content",
      "Analyze market trends and customer behavior",
    ],
  },
  {
    id: "sales",
    num: "03",
    title: "Sales",
    subtitle: "Revenue & Relationships",
    icon: Handshake,
    objectives: [
      "Understand how the market works",
      "Learn to create effective sales pitches",
      "Build customer relationship and negotiation skills",
      "Gain hands-on experience selling products and services",
    ],
  },
  {
    id: "dev",
    num: "04",
    title: "Web & App Development",
    subtitle: "Engineering & Product",
    icon: Code2,
    objectives: [
      "Build responsive websites and mobile applications",
      "Learn modern frameworks like React, Next.js and React Native",
      "Understand UI/UX principles and design-to-code workflows",
      "Collaborate on real client projects and ship production code",
    ],
  },
];


const perks = [
  { icon: UserCheck, label: "Hands-On Industry Experience" },
  { icon: Users, label: "Professional Mentorship" },
  { icon: Briefcase, label: "Real Business Projects" },
  { icon: BarChart3, label: "Skill Development" },
  { icon: Award, label: "Internship Certificate" },
  { icon: Rocket, label: "Career Growth Opportunities" },
];

function IntroSplash() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 3300);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <div
      aria-hidden
      className="intro-overlay fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #ffffff 0%, #e8ecf3 70%, #d4dae6 100%)",
      }}
    >
      {/* swirling arcs */}
      <svg
        className="intro-arcs absolute h-[70vmin] w-[70vmin]"
        viewBox="0 0 200 200"
        fill="none"
      >
        {[90, 78, 66, 54, 42, 30].map((r, i) => {
          const start = i * 40;
          const end = start + 220 + i * 15;
          const s = (start * Math.PI) / 180;
          const e = (end * Math.PI) / 180;
          const x1 = 100 + r * Math.cos(s);
          const y1 = 100 + r * Math.sin(s);
          const x2 = 100 + r * Math.cos(e);
          const y2 = 100 + r * Math.sin(e);
          const large = end - start > 180 ? 1 : 0;
          return (
            <path
              key={i}
              className="intro-arc-path"
              d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
              stroke="oklch(0.28 0.14 265)"
              strokeWidth={1.2 + i * 0.15}
              strokeLinecap="round"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          );
        })}
      </svg>

      {/* Logo reveal */}
      <div className="relative flex items-center">
        <span
          className="intro-c font-display font-black leading-none text-navy"
          style={{
            fontSize: "clamp(6rem, 22vmin, 14rem)",
            textShadow: "0 20px 40px rgba(15,20,50,0.25)",
          }}
        >
          C
        </span>
        <span
          className="intro-text font-display font-black leading-none text-navy"
          style={{
            fontSize: "clamp(1.4rem, 6vmin, 3.5rem)",
            marginLeft: "-0.15em",
            letterSpacing: "0.02em",
          }}
        >
          ENTREPRENEURS
        </span>
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState<string>(roles[0].id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroSplash />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="flex min-w-0 items-center gap-2">
            <img
              src="/clogo.png"
              alt="C-Entrepreneurs Logo"
              className="h-11 w-11 rounded-full border border-navy/20 shadow-md object-cover shrink-0"
            />
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-[11px] font-bold tracking-[0.15em] text-navy sm:text-[13px]">C-ENTREPRENEURS</span>
              <span className="hidden text-[9px] tracking-[0.2em] text-muted-foreground sm:block">SOLUTIONS · RELATIONSHIPS</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-navy lg:flex lg:gap-8">
            <a href="#concept" className="hover:text-royal transition-colors">The Concept</a>
            <a href="#internship" className="hover:text-royal transition-colors">Internship</a>
            <a href="#why" className="hover:text-royal transition-colors">Why Us</a>
            <a href="#apply" className="hover:text-royal transition-colors">Apply</a>
          </nav>
          <a
            href="#apply"
            className="shrink-0 rounded-full bg-royal px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Partner
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 top-4 h-16 w-16 opacity-40 sm:left-8 sm:top-8 sm:h-24 sm:w-24"
          style={{
            backgroundImage: "radial-gradient(var(--royal) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Animated floating icons background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Rocket className="icon-float-a absolute top-[12%] left-[8%] h-8 w-8 text-royal/15 sm:h-12 sm:w-12" strokeWidth={1.5} />
          <TrendingUp className="icon-float-b absolute top-[65%] left-[6%] h-7 w-7 text-navy/10 sm:h-11 sm:w-11" strokeWidth={1.5} />
          <Megaphone className="icon-float-c absolute top-[35%] right-[18%] h-6 w-6 text-royal-light/20 sm:h-10 sm:w-10" strokeWidth={1.5} />
          <Code2 className="icon-float-a absolute bottom-[15%] right-[30%] h-7 w-7 text-navy/10 sm:h-11 sm:w-11" strokeWidth={1.5} style={{ animationDelay: "-4s" }} />
          <Briefcase className="icon-float-b absolute top-[20%] left-[38%] h-6 w-6 text-royal/10 sm:h-9 sm:w-9" strokeWidth={1.5} style={{ animationDelay: "-8s" }} />
          <BarChart3 className="icon-float-c absolute bottom-[25%] left-[22%] h-7 w-7 text-royal/15 sm:h-10 sm:w-10" strokeWidth={1.5} style={{ animationDelay: "-3s" }} />
          <Award className="icon-float-a absolute top-[50%] left-[48%] h-6 w-6 text-navy/10 sm:h-9 sm:w-9" strokeWidth={1.5} style={{ animationDelay: "-6s" }} />
          <Instagram className="icon-float-b absolute top-[8%] right-[18%] h-7 w-7 text-royal/15 sm:h-11 sm:w-11" strokeWidth={1.5} style={{ animationDelay: "-5s" }} />
          <MessageCircle className="icon-float-c absolute bottom-[8%] right-[12%] h-7 w-7 text-royal-light/20 sm:h-11 sm:w-11" strokeWidth={1.5} style={{ animationDelay: "-7s" }} />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 px-4 pt-8 pb-10 sm:px-6 md:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.5fr)] md:gap-10 md:pt-10">
          <div className="relative min-w-0">
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-royal sm:mb-3 sm:text-sm">WELCOME TO</p>
            <h1 className="font-display whitespace-nowrap text-[clamp(1.4rem,8.5vw,5.25rem)] font-black leading-[0.95] text-navy">
              C-ENTRE<span className="text-royal">PRENEURS</span>
            </h1>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 sm:text-sm sm:tracking-[0.25em]">
              Marketing and Software Company
            </p>

            <p className="font-script mt-2 text-3xl text-navy sm:text-4xl">Build. Learn. Grow.</p>


            <div className="mt-6 inline-flex flex-wrap items-center gap-3 bg-navy px-4 py-2.5 text-[11px] font-bold tracking-[0.25em] text-primary-foreground sm:mt-8 sm:gap-4 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.3em]">
              BUILT <span className="text-royal-light">|</span> REVIVE <span className="text-royal-light">|</span> EXECUTE
            </div>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">
              Turning ideas into real, functioning companies. Gain real-world experience,
              learn from experts and kickstart your career with{" "}
              <span className="font-semibold text-royal">C-Entrepreneurs.</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#internship"
                className="group inline-flex items-center gap-2 rounded-sm bg-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-7 sm:py-3.5"
              >
                Explore Roles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-primary-foreground sm:px-7 sm:py-3.5"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* About us — point-by-point panel */}
          <div className="relative hidden min-h-[260px] md:block md:min-h-0">
            <div className="absolute inset-0">
              <div
                className="relative flex h-full flex-col justify-center overflow-hidden bg-navy pl-10 pr-6 py-6 shadow-2xl shadow-navy/40 sm:pl-16 sm:pr-8 sm:py-8"
                style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 85%, 0 15%)" }}
              >
                <p className="mb-2 text-[10px] font-bold tracking-[0.25em] text-royal-light sm:text-[11px]">WHO WE ARE</p>
                <h3 className="font-display mb-3 text-xl font-black leading-tight text-primary-foreground sm:mb-4 sm:text-2xl">
                  Turning bold ideas into <span className="text-royal-light">real companies.</span>
                </h3>
                <ul className="space-y-2 text-sm text-primary-foreground/90 sm:space-y-2.5 sm:text-[15px]">
                  {[
                    "Build & scale startups from concept to launch.",
                    "Mentorship from founders and industry experts.",
                    "Real projects, real clients, real impact.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal-light" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <GraduationCap className="absolute -top-3 -left-3 z-10 h-10 w-10 rotate-[-12deg] text-navy sm:-top-4 sm:-left-4 sm:h-14 sm:w-14" strokeWidth={1.5} />
            <Rocket className="absolute -bottom-3 -left-6 z-10 h-10 w-10 rotate-[-20deg] text-navy sm:-bottom-4 sm:-left-8 sm:h-14 sm:w-14" strokeWidth={1.5} />
          </div>

        </div>
      </section>


      {/* SECTION HEADER STRIP */}
      <section id="internship" className="bg-background pt-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-center sm:mb-14">
            <div className="h-px flex-1 bg-navy/20" />
            <div className="mx-3 bg-navy px-5 py-2.5 text-center text-[11px] font-bold tracking-[0.2em] text-primary-foreground sm:mx-4 sm:px-10 sm:py-3 sm:text-sm sm:tracking-[0.3em]">
              SERVICES WE PROVIDE
            </div>
            <div className="h-px flex-1 bg-navy/20" />
          </div>

          {/* EXPANDING TABS */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {roles.map((r) => {
              const Icon = r.icon;
              const isActive = active === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(isActive ? "" : r.id)}
                  className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-[background-color,border-color,box-shadow,transform,grid-column] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-6 ${
                    isActive
                      ? "col-span-2 border-royal bg-navy text-primary-foreground shadow-2xl shadow-navy/30 sm:col-span-4"
                      : "border-border bg-card text-navy hover:border-royal/40 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors sm:h-14 sm:w-14 ${
                        isActive ? "bg-royal text-primary-foreground" : "bg-navy text-primary-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <span
                      className={`font-display text-3xl font-black transition-colors sm:text-4xl ${
                        isActive ? "text-royal-light" : "text-navy/15"
                      }`}
                    >
                      {r.num}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase leading-tight tracking-wide sm:mt-5 sm:text-lg">{r.title}</h3>
                  <p className={`text-xs leading-tight sm:text-sm ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {r.subtitle}
                  </p>

                  {/* Expanding info panel */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="h-px w-16 bg-royal-light" />
                      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-royal-light">
                        Objectives
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                        {r.objectives.map((obj) => (
                          <li
                            key={obj}
                            className="flex items-start gap-3 text-xs leading-relaxed text-primary-foreground/85 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-royal-light" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY INTERN */}
      <section id="why" className="bg-background pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-14"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, oklch(0.25 0.1 265) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.2 0.08 265) 0%, transparent 50%)",
            }}
          >
            <div className="mb-8 flex justify-center sm:mb-10">
              <div className="rounded-full bg-royal px-5 py-2 text-[11px] font-bold tracking-[0.25em] text-primary-foreground sm:px-8 sm:py-2.5 sm:text-sm sm:tracking-[0.3em]">
                WHY INTERN WITH US?
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-8">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-royal-light/40 text-royal-light sm:mb-3 sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <p className="text-[10px] font-bold uppercase leading-tight tracking-wider text-primary-foreground sm:text-[11px]">
                      {p.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section id="concept" className="border-t border-border bg-secondary py-4 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:gap-10">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-royal">THE CONCEPT</p>
            <h2 className="mt-3 font-display text-2xl font-black leading-tight text-navy sm:text-5xl md:text-6xl">
              We Build. <br />
              We Revive. <br />
              <span className="text-royal">We Execute.</span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-xs leading-relaxed text-foreground/80 sm:text-lg">
              Turning ideas into real, functioning companies. We handle the{" "}
              <span className="font-semibold text-navy">hands-on execution</span>, management, and
              operations — so founders can focus on vision, and interns can learn from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />

      {/* APPLY / CTA */}
      <section id="apply" className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(var(--royal-light) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-royal-light sm:text-sm">
              Be part of something bigger.
            </p>
            <h3 className="mt-2 font-display text-3xl font-black text-primary-foreground sm:text-4xl md:text-5xl">
              Be part of <span className="italic text-royal-light">C-Entrepreneurs!</span>
            </h3>
          </div>
          <a
            href="mailto:hello@c-entrepreneurs.com"
            className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-bold text-navy shadow-2xl transition hover:bg-royal hover:text-primary-foreground sm:px-8 sm:py-4 sm:text-base"
          >
            <Send className="h-5 w-5 shrink-0" />
            <span>
              APPLY NOW
              <span className="ml-3 text-xs font-medium tracking-wide opacity-70">
                Start your journey today
              </span>
            </span>
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:gap-4 sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} C-Entrepreneurs. Solutions that work. Relationships that last.</p>
          <p className="tracking-[0.25em]">BUILT · REVIVE · EXECUTE</p>
        </div>
      </footer>
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", product: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.product.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/centrepreneursb2c@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          "Product Details": form.product,
          _subject: `New inquiry from ${form.name} — C-Entrepreneurs`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", product: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Could not send. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-black text-navy sm:text-4xl md:text-5xl">
            Get in <span className="italic text-royal">touch</span>
          </h2>
          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            Tell us about your product or idea — we'll get back to you shortly.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div>
              <label htmlFor="c-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">
                Name
              </label>
              <input
                id="c-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="c-product" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">
              Product Details
            </label>
            <textarea
              id="c-product"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              required
              rows={3}
              className="min-h-[90px] w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20 sm:min-h-[180px]"
              placeholder="Describe your product, idea, or what you'd like to discuss..."
            />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="text-xs">
              {status === "sent" && (
                <span className="font-semibold text-royal">✓ Message sent — we'll be in touch.</span>
              )}
              {status === "error" && (
                <span className="font-semibold text-red-600">{errorMsg}</span>
              )}
            </div>
            <div className="flex w-full flex-row items-center justify-between gap-2 sm:w-auto sm:gap-3">
              <a
                href="tel:+919025360572"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-navy px-3 py-2 text-xs font-bold text-navy transition hover:bg-navy hover:text-primary-foreground sm:px-7 sm:py-3 sm:text-sm"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">Call +91 90253 60572</span>
              </a>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-bold text-primary-foreground transition hover:bg-royal disabled:opacity-60 sm:px-8 sm:py-3 sm:text-sm"
              >
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {status === "sending" ? "Sending..." : "Send"}
              </button>

            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

