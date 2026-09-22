import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Mail,
  GraduationCap,
  Code2,
  Instagram,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Sparkles,
  X,
  CheckCircle2,
  Linkedin,
  Building2,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "C-Entrepreneurs (C Entrepreneurs) | Best Software Company & Digital Marketing Agency in Karur, Tamil Nadu",
      },
      {
        name: "description",
        content:
          "Looking for the best software company or top digital marketing agency in Karur? C-Entrepreneurs (C Entrepreneurs) builds custom softwares, textile ERPs, POS billing systems, Android apps, and delivers high-ROI Local SEO & digital marketing.",
      },
      {
        name: "keywords",
        content:
          "c entrepreneurs, c entrepreneur, c-entrepreneurs, c-entrepreneur, centrepreneurs, software company in karur, digital marketing in karur, best software company in karur, best digital marketing in karur, custom softwares in Karur, software company Karur, digital marketing agency Karur, web development company Karur, billing software Karur, POS software Karur, Android app development Karur, SEO services Karur, IT company in Karur, C-Entrepreneurs Karur",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Karur, Tamil Nadu, India" },
      { name: "geo.position", content: "10.9601;78.0766" },
      { name: "ICBM", content: "10.9601, 78.0766" },
      { property: "og:site_name", content: "C-Entrepreneurs (C Entrepreneurs)" },
      {
        property: "og:title",
        content: "C-Entrepreneurs (C Entrepreneurs) | Best Software Company & Digital Marketing in Karur",
      },
      {
        property: "og:description",
        content:
          "C-Entrepreneurs (C Entrepreneurs) is Karur's premier custom software development company and digital marketing agency. We build, revive, and execute real companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c-entrepreneur.vercel.app/" },
      { property: "og:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "C-Entrepreneurs (C Entrepreneurs) | Best Software Company & Digital Marketing in Karur",
      },
      {
        name: "twitter:description",
        content:
          "Custom softwares, POS billing systems, web development & digital marketing agency in Karur, Tamil Nadu.",
      },
      { name: "twitter:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      {
        name: "google-site-verification",
        content: "VbvJ4F6jQNC4GD6ESCZnav91MS-nWC1kbEij4emY8-8",
      },
    ],
    links: [{ rel: "canonical", href: "https://c-entrepreneur.vercel.app/" }],
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

// ─── Projects data ───────────────────────────────────────────────────────────
type DeviceType = "pc" | "android";

const projects: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  device: DeviceType;
  image: string;
  accentHex: string; // hex for inline style compatibility
}[] = [
    {
      id: "gymflow",
      title: "GymFlow",
      subtitle: "Gym Management Platform",
      description:
        "A full-featured gym management system with NFC-powered check-ins, real-time member tracking, payment dues alerts, biometric attendance, and live financial analytics — built for gym owners.",
      tags: ["Web App", "NFC Check-in", "Real-time", "Analytics"],
      device: "pc",
      image: "/projects/Screenshot 2026-09-11 120911.png",
      accentHex: "#3b6fd4",
    },
    {
      id: "clouddine",
      title: "CloudDine",
      subtitle: "Restaurant Order Management",
      description:
        "A smart restaurant dashboard managing live orders, table assignments, waiter calls, revenue analytics, and kitchen workflow — all in a single elegant interface.",
      tags: ["Restaurant Tech", "Live Orders", "QR Menu", "Dashboard"],
      device: "pc",
      image: "/projects/Screenshot 2026-09-11 121730.png",
      accentHex: "#c07a2a",
    },
    {
      id: "engineers-kitchen-desktop",
      title: "Engineers Kitchen",
      subtitle: "Café POS & Billing — Web",
      description:
        "A lightweight desktop POS for a café featuring category-based menu, cart management, bill generation with customer details, and seamless order tracking.",
      tags: ["POS", "Web Billing", "Café", "Offline-Ready"],
      device: "pc",
      image: "/projects/Screenshot 2026-09-11 121900.png",
      accentHex: "#4a8c4a",
    },
    {
      id: "engineers-kitchen-mobile",
      title: "Engineers Kitchen",
      subtitle: "Café POS & Billing — Mobile",
      description:
        "The mobile version of Engineers Kitchen POS — optimized for phones with a thumb-friendly cart, smart search, category filter tabs, and one-tap bill save.",
      tags: ["POS", "Mobile", "Café", "Android"],
      device: "android",
      image: "/projects/Screenshot 2026-09-11 124951.png",
      accentHex: "#4a8c4a",
    },
    {
      id: "cafe-bistro",
      title: "Cafe Bistro",
      subtitle: "Offline Café Billing POS",
      description:
        "A fully offline-capable café billing system supporting Dine-In & Parcel, Veg/Non-Veg filtering, category menus, bill printing, UPI/Cash/Card payments, and multi-item cart.",
      tags: ["Offline POS", "Web Billing", "Print", "Multi-Payment"],
      device: "pc",
      image: "/projects/Screenshot 2026-09-11 124446.png",
      accentHex: "#1e7a5a",
    },
    {
      id: "royal-car-wash",
      title: "Royal Car Wash",
      subtitle: "Automotive Detailing Platform",
      description:
        "Karur's premier automotive detailing centre — with snow foam wash, 9H ceramic nano-coating, real-time vehicle tracking, slot booking, and WhatsApp service updates.",
      tags: ["Mobile Web", "Booking", "Automotive", "Tracking"],
      device: "android",
      image: "/projects/Screenshot 2026-09-11 122225.png",
      accentHex: "#c0392b",
    },
    {
      id: "happy-events",
      title: "Happy Events",
      subtitle: "Event Planning & Management",
      description:
        "From elegant weddings to grand corporate events — Happy Events is a mobile-first event planning platform showcasing premium packages, service galleries, and a seamless inquiry flow.",
      tags: ["Mobile Web", "Events", "Wedding", "Corporate"],
      device: "android",
      image: "/projects/Screenshot 2026-09-11 124739.png",
      accentHex: "#b8860b",
    },
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroSplash />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex min-w-0 items-center gap-2 cursor-pointer">
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
          <nav className="hidden items-center gap-5 text-sm font-medium text-navy lg:flex lg:gap-7">
            <Link to="/software-company-in-karur" className="text-royal font-semibold hover:text-navy transition-colors">
              Software Company
            </Link>
            <Link to="/digital-marketing-in-karur" className="text-royal font-semibold hover:text-navy transition-colors">
              Digital Marketing
            </Link>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-royal transition-colors cursor-pointer">Services</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="hover:text-royal transition-colors cursor-pointer">Projects</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="hover:text-royal transition-colors cursor-pointer">FAQ</a>
            <a href="#why" onClick={(e) => scrollToSection(e, "why")} className="hover:text-royal transition-colors cursor-pointer">Why Us</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-royal transition-colors cursor-pointer">Contact</a>
          </nav>
          <a
            href="#apply"
            onClick={(e) => scrollToSection(e, "apply")}
            className="shrink-0 rounded-full bg-royal px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
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
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/90 px-3.5 py-1 text-[11px] font-bold tracking-wider text-navy shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MapPin className="h-3 w-3 text-royal" />
              <span>Karur, Tamil Nadu · C-Entrepreneurs (C Entrepreneurs)</span>
            </div>
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-royal sm:mb-3 sm:text-sm">WELCOME TO</p>
            <h1 className="font-display whitespace-nowrap text-[clamp(1.4rem,8.5vw,5.25rem)] font-black leading-[0.95] text-navy">
              <span className="sr-only">C-Entrepreneurs (C Entrepreneurs) — Best Software Company & Digital Marketing Agency in Karur | </span>
              C-ENTRE<span className="text-royal">PRENEURS</span>
            </h1>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 sm:text-sm sm:tracking-[0.25em]">
              C-Entrepreneurs (C Entrepreneurs) · Best Digital Marketing & Software Company in Karur
            </p>

            <p className="font-script mt-2 text-3xl text-navy sm:text-4xl">Build. Learn. Grow.</p>


            <div className="mt-6 inline-flex flex-wrap items-center gap-3 bg-navy px-4 py-2.5 text-[11px] font-bold tracking-[0.25em] text-primary-foreground sm:mt-8 sm:gap-4 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.3em]">
              BUILT <span className="text-royal-light">|</span> REVIVE <span className="text-royal-light">|</span> EXECUTE
            </div>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">
              Karur&apos;s premier hub for custom software development, POS billing solutions, and high-ROI digital marketing. Turning ideas into real, functioning companies with{" "}
              <span className="font-semibold text-royal">C-Entrepreneurs (also known as C Entrepreneurs).</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#internship"
                onClick={(e) => scrollToSection(e, "internship")}
                className="group inline-flex items-center gap-2 rounded-sm bg-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-7 sm:py-3.5 cursor-pointer"
              >
                Explore Roles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#apply"
                onClick={(e) => scrollToSection(e, "apply")}
                className="inline-flex items-center gap-2 rounded-sm border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-primary-foreground sm:px-7 sm:py-3.5 cursor-pointer"
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
                  className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-[background-color,border-color,box-shadow,transform,grid-column] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-6 ${isActive
                      ? "col-span-2 border-royal bg-navy text-primary-foreground shadow-2xl shadow-navy/30 sm:col-span-4"
                      : "border-border bg-card text-navy hover:border-royal/40 hover:-translate-y-0.5"
                    }`}
                >
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors sm:h-14 sm:w-14 ${isActive ? "bg-royal text-primary-foreground" : "bg-navy text-primary-foreground"
                        }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <span
                      className={`font-display text-3xl font-black transition-colors sm:text-4xl ${isActive ? "text-royal-light" : "text-navy/15"
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
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
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

      {/* PROJECTS SHOWCASE */}
      <ProjectShowcase />

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

      {/* CORE SERVICES IN KARUR */}
      <ServicesSection />

      {/* KARUR TECH & COMMERCIAL HUB (SEO AUTHORITY) */}
      <KarurHubSection />

      {/* FAQ SECTION (AEO & GEO) */}
      <FAQSection />

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
            href="mailto:centrepreneursb2c@gmail.com?subject=Internship%20Application%20%E2%80%94%20C-Entrepreneurs&body=Hi%20C-Entrepreneurs%20Team%2C%0A%0AI%20am%20interested%20in%20applying%20for%20an%20internship%20at%20C-Entrepreneurs.%0A%0AName%3A%20%0APhone%3A%20%0APreferred%20Role%3A%20%0AResume%20%2F%20Portfolio%20Link%3A%20"
            className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-bold text-navy shadow-2xl transition hover:bg-royal hover:text-primary-foreground sm:px-8 sm:py-4 sm:text-base cursor-pointer"
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="font-medium text-foreground/90">
              © {new Date().getFullYear()} C-Entrepreneurs (C Entrepreneurs). Solutions that work. Relationships that last.
            </p>
            <p className="mt-1 flex flex-wrap items-center justify-center gap-1.5 sm:justify-start text-[11px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-royal shrink-0" />
              <span>Karur Town, Karur, Tamil Nadu 639001, India</span>
              <span className="text-muted-foreground/40">·</span>
              <a href="tel:+919025360572" className="text-navy hover:text-royal transition font-semibold">
                +91 90253 60572
              </a>
            </p>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 sm:justify-start text-xs font-semibold text-royal">
              <Link to="/software-company-in-karur" className="hover:text-navy transition">
                Software Company in Karur
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/digital-marketing-in-karur" className="hover:text-navy transition">
                Digital Marketing in Karur
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/c__entrepreneurs__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="C-Entrepreneurs Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/20 bg-background text-navy transition hover:border-royal hover:bg-royal hover:text-white"
                title="Follow on Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://in.linkedin.com/in/c-entrepreneurs-758a0341b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="C-Entrepreneurs LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/20 bg-background text-navy transition hover:border-royal hover:bg-royal hover:text-white"
                title="Connect on LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
            <span className="hidden sm:inline text-muted-foreground/40">·</span>
            <a
              href="mailto:centrepreneursb2c@gmail.com"
              className="font-medium text-navy hover:text-royal transition-colors"
            >
              centrepreneursb2c@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground/40">·</span>
            <p className="tracking-[0.25em]">BUILT · REVIVE · EXECUTE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── PC Monitor Frame (Premium Matte Black Edition) ─────────────────────────
function PCFrame({
  src,
  alt,
  compact = false,
}: {
  src: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <div
      className="w-full select-none"
      style={{
        maxWidth: compact ? "280px" : "780px",
        margin: "0 auto",
      }}
    >
      {/* PC Monitor Screen Bezel - Sleek Obsidian Black */}
      <div
        style={{
          background: "#090a0f",
          border: compact ? "3.5px solid #1c1f26" : "7px solid #1c1f26",
          borderBottom: "none",
          borderRadius: compact ? "6px 6px 0 0" : "12px 12px 0 0",
          overflow: "hidden",
          lineHeight: 0,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
          draggable={false}
        />
      </div>

      {/* Monitor bottom bezel / chin - Brushed Matte Black */}
      <div
        style={{
          background: "linear-gradient(180deg, #272a34 0%, #1c1f26 45%, #111317 100%)",
          borderRadius: compact ? "0 0 5px 5px" : "0 0 8px 8px",
          height: compact ? "10px" : "16px",
          border: compact ? "1px solid #111317" : "2px solid #111317",
          borderTop: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            width: compact ? "14px" : "24px",
            height: "2px",
            background: "#4b5563",
            borderRadius: "1px",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Monitor stand neck and base plate - Matte Space Black */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: compact ? "26px" : "44px",
            height: compact ? "9px" : "16px",
            background: "linear-gradient(90deg, #111317 0%, #272a34 35%, #374151 50%, #272a34 75%, #111317 100%)",
            border: "1px solid #111317",
            borderTop: "none",
          }}
        />
        <div
          style={{
            width: compact ? "80px" : "140px",
            height: compact ? "4px" : "7px",
            background: "linear-gradient(180deg, #272a34 0%, #1c1f26 60%, #0f1115 100%)",
            borderRadius: "2px 2px 0 0",
            border: "1px solid #111317",
            borderTop: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

// ─── Mobile Phone Frame (Ultra-Thin Bezel) ──────────────────────────────────
function AndroidFrame({
  src,
  alt,
  compact = false,
}: {
  src: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(160deg, #2a3142 0%, #151922 100%)",
        borderRadius: compact ? "14px" : "26px",
        padding: compact ? "3px 2.5px 3.5px" : "5.5px 5px 6.5px",
        boxShadow: compact
          ? "0 0 0 1px #3d4659, 0 0 0 2px #0f1218, 0 8px 20px rgba(0,0,0,0.55)"
          : "0 0 0 1.5px #3d4659, 0 0 0 2.5px #0f1218, 0 16px 36px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: compact ? "2px" : "4px",
        width: "100%",
        maxWidth: compact ? "92px" : "240px",
        margin: "0 auto",
      }}
    >
      {/* Top minimal punch-hole camera dot (Thin bezel style) */}
      <div
        style={{
          width: compact ? "4px" : "6px",
          height: compact ? "4px" : "6px",
          borderRadius: "50%",
          background: "#08090c",
          border: "0.8px solid #363d4e",
        }}
      />

      {/* Screen container: razor-thin borders, uses natural image height, NO crop */}
      <div
        style={{
          width: "100%",
          borderRadius: compact ? "11px" : "21px",
          overflow: "hidden",
          background: "#000",
          lineHeight: 0,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
          draggable={false}
        />
      </div>

      {/* Android bottom gesture pill */}
      <div
        style={{
          width: compact ? "24px" : "42px",
          height: compact ? "1.5px" : "2.5px",
          borderRadius: "2px",
          background: "#3e4556",
        }}
      />
    </div>
  );
}

// ─── Project Detail Overlay ───────────────────────────────────────────────────
function ProjectDetail({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  // Lock body scroll while open & support Escape key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      id="project-detail-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        animation: "detail-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-white/95 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <button
            id="project-detail-back"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/5 px-3.5 py-1.5 text-xs font-bold text-navy transition hover:bg-navy/10 sm:px-4 sm:py-2 sm:text-sm"
            aria-label="Back to projects"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-royal sm:text-xs">
              Project Showcase
            </p>
            <h2 className="truncate text-base font-black text-navy sm:text-xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy sm:inline-flex">
            {project.device === "pc" ? "Web App" : "Android App"}
          </span>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 bg-navy/5 text-navy transition hover:bg-navy hover:text-white sm:h-9 sm:w-9"
            aria-label="Close project view"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto bg-slate-50/70 px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          {/* Device Mockup */}
          <div
            className="w-full flex justify-center py-4 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${project.accentHex}15 0%, transparent 65%)`,
            }}
          >
            {project.device === "pc" ? (
              <div className="w-full max-w-3xl">
                <PCFrame src={project.image} alt={project.title} />
              </div>
            ) : (
              <div className="w-full max-w-[240px]">
                <AndroidFrame src={project.image} alt={project.title} />
              </div>
            )}
          </div>

          {/* Project Details Card */}
          <div className="w-full rounded-2xl border border-border bg-white p-5 shadow-xl sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 bg-navy/5 text-navy">
                  {project.device === "pc" ? <Monitor className="h-6 w-6" /> : <Smartphone className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy sm:text-2xl">{project.title}</h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">{project.subtitle}</p>
                </div>
              </div>

              <span className="rounded-full bg-navy px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                {project.device === "pc" ? "PC / Desktop" : "Android Mobile"}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">Overview</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">Tags & Technologies</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-xs font-bold text-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-bold text-primary-foreground shadow-lg shadow-navy/20 transition hover:bg-royal sm:text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Discuss Similar Project</span>
              </a>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-bold text-navy transition hover:bg-navy/5 sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Projects Showcase Section ────────────────────────────────────────────────
function ProjectShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedProject = projects.find((p) => p.id === selected) ?? null;

  // Push history state when opening, handle hardware & browser back navigation
  useEffect(() => {
    if (selected) {
      window.history.pushState({ projectOpen: selected }, "");
    }
  }, [selected]);

  useEffect(() => {
    const onPop = () => {
      setSelected(null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleClose = () => {
    if (window.history.state?.projectOpen) {
      window.history.back();
    } else {
      setSelected(null);
    }
  };

  const openProject = (id: string) => {
    setSelected(id);
  };

  const infiniteProjects = [
    ...projects.map((p, i) => ({ ...p, loopKey: `${p.id}-l0-${i}` })),
    ...projects.map((p, i) => ({ ...p, loopKey: `${p.id}-l1-${i}` })),
    ...projects.map((p, i) => ({ ...p, loopKey: `${p.id}-l2-${i}` })),
  ];

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const hasMoved = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const cachedWidthRef = useRef(0);

  // Measure singleSetWidth once and update on window resize (avoids layout thrashing in RAF)
  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        cachedWidthRef.current = scrollRef.current.scrollWidth / 3;
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // IntersectionObserver: Pause RAF animation completely when projects section is offscreen
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Position at the middle set on mount
  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;
    const timer = setTimeout(() => {
      if (track) {
        const width = cachedWidthRef.current || track.scrollWidth / 3;
        track.scrollLeft = width;
        cachedWidthRef.current = width;
      }
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // Continuous gentle infinite auto-glide (runs ONLY when in view, stops CPU usage offscreen)
  useEffect(() => {
    if (!isInView || isPaused) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      if (!isDown.current && scrollRef.current) {
        const track = scrollRef.current;
        const singleSetWidth = cachedWidthRef.current;

        track.scrollLeft += 0.04 * delta;

        if (singleSetWidth > 0 && track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isInView, isPaused]);

  // Seamless infinite loop when manually scrolling
  const onScroll = () => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const singleSetWidth = cachedWidthRef.current;
    if (singleSetWidth <= 0) return;

    if (track.scrollLeft >= singleSetWidth * 2) {
      track.scrollLeft -= singleSetWidth;
    } else if (track.scrollLeft <= 5) {
      track.scrollLeft += singleSetWidth;
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    hasMoved.current = false;
    setIsPaused(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    setIsPaused(false);
  };

  const onMouseUp = () => {
    isDown.current = false;
    setIsPaused(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 6) {
      hasMoved.current = true;
    }
    const track = scrollRef.current;
    track.scrollLeft = scrollLeftPos.current - walk;

    const singleSetWidth = cachedWidthRef.current;
    if (singleSetWidth > 0) {
      if (track.scrollLeft >= singleSetWidth * 2) {
        track.scrollLeft -= singleSetWidth;
        scrollLeftPos.current -= singleSetWidth;
      } else if (track.scrollLeft <= 5) {
        track.scrollLeft += singleSetWidth;
        scrollLeftPos.current += singleSetWidth;
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={handleClose} />}

      <section ref={sectionRef} id="projects" className="bg-background pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section header badge */}
          <div className="mb-6 flex items-center justify-center sm:mb-8">
            <div className="h-px flex-1 bg-navy/20" />
            <div className="mx-3 bg-navy px-5 py-2.5 text-center text-[11px] font-bold tracking-[0.2em] text-primary-foreground sm:mx-4 sm:px-10 sm:py-3 sm:text-sm sm:tracking-[0.3em]">
              OUR PROJECTS
            </div>
            <div className="h-px flex-1 bg-navy/20" />
          </div>

          <div className="mb-6 flex flex-col items-center justify-between gap-4 text-center sm:mb-8 sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-black text-navy sm:text-3xl">
                Featured Client Work
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Real software & apps built and launched by our team — swipe, drag or click any project for details.
              </p>
            </div>

            {/* Desktop Carousel Arrows */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={scrollLeft}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-background text-navy shadow-sm transition hover:bg-navy hover:text-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-background text-navy shadow-sm transition hover:bg-navy hover:text-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll track with seamless infinite scrolling */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "20px",
              paddingTop: "8px",
              paddingLeft: "4px",
              paddingRight: "4px",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              cursor: "grab",
            }}
            className="projects-scroll select-none active:cursor-grabbing"
          >
            {infiniteProjects.map((project) => (
              <button
                key={project.loopKey}
                id={`project-card-${project.loopKey}`}
                onClick={() => {
                  if (!hasMoved.current) {
                    openProject(project.id);
                  }
                }}
                style={{
                  flexShrink: 0,
                  width: "clamp(260px, 80vw, 320px)",
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card */}
                <div
                  className="project-card group flex h-full w-full flex-col overflow-hidden rounded-2xl border"
                  style={{
                    backgroundColor: "oklch(0.12 0.02 260)",
                    backgroundImage:
                      "radial-gradient(circle at 18% 18%, oklch(0.26 0.12 265) 0%, transparent 60%), radial-gradient(circle at 82% 82%, oklch(0.2 0.09 265) 0%, transparent 60%), linear-gradient(150deg, #111728 0%, #0a0d15 100%)",
                    borderColor: "oklch(0.35 0.12 265 / 0.45)",
                    transition:
                      "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, border-color 0.3s",
                    boxShadow: "0 8px 24px rgba(5, 10, 25, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.52 0.22 265 / 0.85)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 18px 42px rgba(8, 15, 40, 0.5), 0 0 24px oklch(0.45 0.22 265 / 0.3), 0 0 0 1px ${project.accentHex}88`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.35 0.12 265 / 0.45)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(5, 10, 25, 0.4)";
                  }}
                >
                  {/* Preview area with balanced height and refined framing */}
                  <div
                    style={{
                      height: "225px",
                      padding: project.device === "pc" ? "16px 14px 10px" : "10px 14px 8px",
                      background: `radial-gradient(circle at 50% 35%, ${project.accentHex}25 0%, transparent 68%), radial-gradient(circle at 50% 85%, oklch(0.25 0.1 265 / 0.35) 0%, transparent 60%)`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {project.device === "pc" ? (
                      <div style={{ width: "100%", maxWidth: "235px" }}>
                        <PCFrame src={project.image} alt={project.title} compact />
                      </div>
                    ) : (
                      <div style={{ width: "92px" }}>
                        <AndroidFrame src={project.image} alt={project.title} compact />
                      </div>
                    )}
                  </div>

                  {/* Card info */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="mb-2.5 flex items-center justify-between">
                        <span
                          style={{
                            background: `${project.accentHex}25`,
                            border: `1px solid ${project.accentHex}60`,
                            color: project.accentHex,
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        >
                          {project.device === "pc" ? <Monitor className="h-3 w-3" /> : <Smartphone className="h-3 w-3" />}
                          {project.device === "pc" ? "Web App" : "Android App"}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-royal-light/60 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                      </div>

                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/70">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-royal/25 pt-3">
                      <span className="text-[11px] font-medium text-white/50">
                        Tap to view details
                      </span>
                      <span
                        style={{ color: project.accentHex }}
                        className="text-xs font-bold transition-transform group-hover:translate-x-0.5"
                      >
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Live Infinite Showcase Footer with Pause / Resume toggle */}
          <div className="mt-4 flex items-center justify-between px-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"
                }`}
              />
              <span className="hidden sm:inline">
                {isPaused
                  ? "Paused — swipe or click any project to view details"
                  : "Infinite auto-scrolling showcase — hover to pause"}
              </span>
              <span className="sm:hidden text-[11px]">
                {isPaused ? "Paused" : "Infinite live showcase"}
              </span>
            </span>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3 py-1 text-[11px] font-bold text-navy shadow-sm transition hover:bg-navy hover:text-white"
            >
              {isPaused ? "▶ Resume Flow" : "⏸ Pause"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesSection() {
  const services = [
    {
      id: "software",
      title: "Custom Software & ERP",
      subtitle: "Enterprise & Business Automation",
      icon: Code2,
      desc: "Tailor-made software, automated workflows, and production tracking systems engineered specifically for Karur textile manufacturers, exporters, transport businesses, and commercial enterprises.",
      tags: ["ERP Systems", "Textile Inventory", "Custom Databases", "Local Karur Support"],
    },
    {
      id: "marketing",
      title: "Best Digital Marketing",
      subtitle: "High-ROI Lead Generation & SEO",
      icon: Megaphone,
      desc: "Dominating search results in Karur, Tamil Nadu. We run high-conversion Meta (Instagram/Facebook) and Google PPC campaigns, alongside Local Map Pack SEO to flood your business with paying inquiries.",
      tags: ["Local Google SEO", "Instagram Ads", "Google Search Ads", "Brand Growth"],
    },
    {
      id: "billing",
      title: "POS Billing Software",
      subtitle: "Retail, Textile & Restaurant Systems",
      icon: BarChart3,
      desc: "Lightning-fast offline-ready and cloud-connected POS billing software for supermarkets, textile retail showrooms, and restaurants in Karur with thermal barcode billing and GST tax compliance.",
      tags: ["GST Invoicing", "Barcode Scanning", "Thermal Printing", "Inventory Sync"],
    },
    {
      id: "web-mobile",
      title: "Web & Android Apps",
      subtitle: "Modern Responsive Tech Solutions",
      icon: Smartphone,
      desc: "High-performance websites built with React and Next.js, paired with native Android and iOS mobile application development for superior user engagement and lightning speed.",
      tags: ["React & Next.js", "Android Apps", "Fast Cloud Speed", "Modern UI/UX"],
    },
  ];

  return (
    <section id="services" className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-royal/25 bg-royal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-royal">
            <MapPin className="h-3.5 w-3.5" />
            <span>Commercial Solutions · Karur & Worldwide</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-black text-navy sm:text-4xl md:text-5xl">
            Our Core <span className="italic text-royal">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/75 sm:text-base">
            Empowering businesses across Karur, Tamil Nadu with custom software engineering, POS systems, and market-dominating digital advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-royal/50 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal transition group-hover:bg-royal group-hover:text-white sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                    Karur Verified
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-black text-navy sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-royal">
                  {s.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted/60 px-2.5 py-1 text-[11px] font-semibold text-navy/85"
                    >
                      ✓ {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal transition group-hover:text-navy cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`https://wa.me/919025360572?text=${encodeURIComponent(
                      `Hi C-Entrepreneurs, I am interested in your ${s.title} in Karur.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-emerald-600/30 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white cursor-pointer"
                  >
                    <MessageCircle className="h-3 w-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KarurHubSection() {
  return (
    <section id="karur-hub" className="border-t border-border bg-slate-50/80 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-royal/30 bg-royal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-royal">
            <MapPin className="h-3.5 w-3.5" />
            <span>Karur Commercial & Technology Hub</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-black text-navy sm:text-4xl md:text-5xl">
            Powering Businesses Across <span className="text-royal">Karur, Tamil Nadu</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            C-Entrepreneurs (also widely known as C Entrepreneurs) is the local technology partner that Karur textile exporters, retail showrooms, supermarkets, and service brands rely on for commercial software and market-dominating advertising.
          </p>
        </div>

        {/* Two Featured Spotlight Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: Software Company */}
          <div className="group flex flex-col justify-between rounded-3xl border border-navy/15 bg-card p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-2xl sm:p-9">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-navy px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Technology & Software
                </span>
                <span className="text-xs font-semibold text-royal">
                  Local Karur Support
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-black text-navy sm:text-3xl">
                Best Software Company in Karur
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                Say goodbye to spreadsheet chaos. We build custom ERP systems for Karur textile looms and yarn stocks, offline-ready POS billing systems with thermal barcode printing for retail shops, and high-performance Android mobile apps.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs font-semibold text-navy/85 sm:text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0" />
                  <span>Textile Loom, Dyeing & Yarn Stock ERP</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0" />
                  <span>Fast POS Billing Software with GST Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0" />
                  <span>Custom Android Apps & React/Next.js Web Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0" />
                  <span>Zero Recurring License Traps · 100% Data Ownership</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                to="/software-company-in-karur"
                className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-navy sm:text-sm"
              >
                <span>Explore Software in Karur</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Digital Marketing */}
          <div className="group flex flex-col justify-between rounded-3xl border border-navy/15 bg-card p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-2xl sm:p-9">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-royal px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Marketing & Revenue
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  Proven High ROI
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-black text-navy sm:text-3xl">
                Best Digital Marketing Agency in Karur
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                Flood your business with paying inquiries. We rank your brand #1 in Google Maps (Karur Map Pack), manage laser-targeted Meta (Instagram/Facebook) ad campaigns, and drive verified B2B leads for Karur exporters.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs font-semibold text-navy/85 sm:text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>#1 Google Maps (Map Pack) Local SEO Ranking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Targeted Instagram & Meta Ad Campaigns with High CTR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Google Search Ads (PPC) Delivering Direct Call Leads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Bi-Lingual Copywriting in Tamil (தமிழ்) & English</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                to="/digital-marketing-in-karur"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-royal sm:text-sm"
              >
                <span>Explore Digital Marketing in Karur</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Local Area Coverage Banner */}
        <div className="mt-10 rounded-2xl border border-navy/15 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-royal">
                Local Presence Across Karur District
              </p>
              <p className="mt-1 text-sm text-foreground/85">
                Serving businesses in <strong>Karur Town (639001)</strong>, Kovai Road, Jawahar Bazaar, Thanthonimalai, Pasupathypuram, Vengamedu, Gandhigramam, and nearby cities (Trichy, Erode, Coimbatore).
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919025360572"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-xs font-bold text-navy transition hover:bg-navy hover:text-white sm:text-sm"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20want%20to%20grow%20my%20Karur%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:text-sm"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is C Entrepreneurs (C-Entrepreneurs)?",
      a: "C-Entrepreneurs (also known as C Entrepreneurs or C-Entrepreneur) is Karur's premier custom software company and full-service digital marketing agency based in Karur, Tamil Nadu. Operating under the motto 'BUILT | REVIVE | EXECUTE', the company builds enterprise software, POS billing solutions, mobile apps, and leads high-ROI digital marketing campaigns.",
    },
    {
      q: "Which is the best software company in Karur?",
      a: "C-Entrepreneurs (C Entrepreneurs) is recognized as the best software company in Karur, Tamil Nadu. We specialize in custom software development, web applications, Android apps, and automated POS billing software designed specifically for local businesses, textile manufacturers, and growing startups.",
    },
    {
      q: "Which agency provides the best digital marketing in Karur?",
      a: "C-Entrepreneurs (C Entrepreneurs) offers the best digital marketing services in Karur, Tamil Nadu. Our expertise spans Local SEO, Google Business Profile optimization, Meta & Instagram Ads, Google PPC campaigns, and targeted lead generation to grow local businesses and export companies.",
    },
    {
      q: "Where can I get custom software and billing software in Karur?",
      a: "You can get customized business software, ERP systems, and modern POS billing software in Karur directly from C-Entrepreneurs (C Entrepreneurs). We build secure, reliable software with local Karur support. Contact +91 90253 60572 or email centrepreneursb2c@gmail.com for a free consultation.",
    },
    {
      q: "Does C-Entrepreneurs provide website development and mobile apps in Karur?",
      a: "Yes, C-Entrepreneurs (C Entrepreneurs) provides complete web development (React, Next.js, full-stack) and native Android/iOS mobile application development in Karur, Tamil Nadu with modern UI/UX design, cloud scalability, and continuous maintenance.",
    },
    {
      q: "How can businesses and students get started with C-Entrepreneurs in Karur?",
      a: "Businesses in Karur can reach out via call at +91 90253 60572, WhatsApp, or through the contact form on our website. Students and fresh graduates can apply for hands-on startup internships in Software Engineering, Digital Marketing, and Business Development.",
    },
  ];

  return (
    <section id="faq" className="border-t border-border bg-card/60 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-royal/25 bg-royal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-royal">
            <MapPin className="h-3.5 w-3.5" />
            <span>Karur & Global Clients · FAQ</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-black text-navy sm:text-4xl md:text-5xl">
            Frequently Asked <span className="italic text-royal">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-foreground/75 sm:text-base">
            Discover why businesses across Karur, Tamil Nadu choose C-Entrepreneurs for custom software, POS billing systems, and high-ROI digital marketing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border/90 bg-background shadow-sm transition hover:border-royal/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition sm:p-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-navy sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-200 ${
                      isOpen ? "rotate-180 border-royal/40 bg-royal/10 text-royal" : "text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 bg-muted/20 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 animate-in fade-in-50 duration-200">
                    <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                      {faq.a}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-royal">
                      <span>✓ Karur Local Support</span>
                      <span>·</span>
                      <span>✓ Modern Tech Stack</span>
                      <span>·</span>
                      <a
                        href="tel:+919025360572"
                        className="underline decoration-royal/40 underline-offset-2 hover:text-navy"
                      >
                        Call +91 90253 60572
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", product: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.product.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    const clientName = form.name;
    const mailtoFallback = `mailto:centrepreneursb2c@gmail.com?subject=${encodeURIComponent(
      `New Project Inquiry from ${form.name} — C-Entrepreneurs`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject / Idea Details:\n${form.product}`
    )}`;

    try {
      const res = await fetch("https://formsubmit.co/ajax/centrepreneursb2c@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.product,
          "Product Details": form.product,
          _subject: `New inquiry from ${form.name} — C-Entrepreneurs`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || (data && data.success === "false")) {
        // Transparently trigger user email client if form backend encounters any issue
        window.location.href = mailtoFallback;
      }

      setStatus("sent");
      setSubmittedName(clientName);
      setShowPopup(true);
      setForm({ name: "", email: "", product: "" });
    } catch {
      // If adblocker or network issues block FormSubmit, fall back to native mailto directly
      window.location.href = mailtoFallback;
      setStatus("sent");
      setSubmittedName(clientName);
      setShowPopup(true);
      setForm({ name: "", email: "", product: "" });
    }
  };

  return (
    <>
      {showPopup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/65 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-navy/20 bg-card p-6 text-center shadow-2xl shadow-navy/30 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glow decoration */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-72 rounded-full bg-royal/20 blur-3xl"
            />

            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-navy/10 hover:text-navy cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Success Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-royal/10 text-royal ring-8 ring-royal/5">
              <CheckCircle2 className="h-9 w-9 text-royal animate-in zoom-in-50 duration-300" strokeWidth={2.2} />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-royal">
              C-Entrepreneurs · Connected
            </p>

            <h3 className="mt-1.5 font-display text-2xl font-black text-navy sm:text-3xl">
              Message Sent!
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
              Thank you, <span className="font-semibold text-navy">{submittedName || "there"}</span>! Your project details have been successfully received. Our team will review your inquiry and connect with you shortly.
            </p>

            {/* Tagline Ribbon */}
            <div className="my-5 inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-navy">
              BUILT <span className="text-royal">|</span> REVIVE <span className="text-royal">|</span> EXECUTE
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full rounded-full bg-navy px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-navy/20 transition hover:bg-royal hover:shadow-royal/30 cursor-pointer"
            >
              Got it, Thank You!
            </button>

            {/* Secondary Quick Actions */}
            <div className="mt-5 border-t border-border/80 pt-4 text-xs text-muted-foreground">
              <p className="mb-2.5 text-[11px] font-medium text-navy/70">Connect with us directly:</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <a
                  href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20just%20submitted%20a%20project%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50/80 px-2.5 py-2 text-[11px] font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white cursor-pointer"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919025360572"
                  className="flex items-center justify-center gap-1.5 rounded-full border border-navy/20 bg-background px-2.5 py-2 text-[11px] font-bold text-navy transition hover:bg-navy hover:text-white cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href="https://www.instagram.com/c__entrepreneurs__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-50/80 px-2.5 py-2 text-[11px] font-bold text-pink-700 transition hover:bg-pink-600 hover:text-white cursor-pointer"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://in.linkedin.com/in/c-entrepreneurs-758a0341b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-full border border-sky-600/30 bg-sky-50/80 px-2.5 py-2 text-[11px] font-bold text-sky-800 transition hover:bg-sky-600 hover:text-white cursor-pointer"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <span className="font-semibold text-royal">✓ Message sent — we'll be in touch shortly!</span>
              )}
              {status === "error" && (
                <span className="font-semibold text-red-600">{errorMsg}</span>
              )}
            </div>
            <div className="flex w-full flex-wrap items-center justify-between gap-2 sm:w-auto sm:gap-3">
              <a
                href="mailto:centrepreneursb2c@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20C-Entrepreneurs"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-navy px-3 py-2 text-xs font-bold text-navy transition hover:bg-navy hover:text-primary-foreground sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-3 py-2 text-xs font-bold transition sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919025360572"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-navy px-3 py-2 text-xs font-bold text-navy transition hover:bg-navy hover:text-primary-foreground sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Call</span>
              </a>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-royal disabled:opacity-60 sm:px-7 sm:py-2.5 sm:text-sm cursor-pointer"
              >
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {status === "sending" ? "Sending..." : "Send Form"}
              </button>
            </div>
          </div>
        </form>
      </div>
      </section>
    </>
  );
}
