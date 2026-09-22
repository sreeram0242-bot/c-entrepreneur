import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Code2,
  Cpu,
  Database,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  Layers,
  ShieldCheck,
  Zap,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/software-company-in-karur")({
  head: () => ({
    meta: [
      {
        title:
          "Best Software Company in Karur | Custom ERP, POS & Apps — C-Entrepreneurs (C Entrepreneurs)",
      },
      {
        name: "description",
        content:
          "Looking for the best software company in Karur? C-Entrepreneurs (C Entrepreneurs) builds custom business software, textile ERP systems, retail POS billing software, web applications, and Android apps with local Karur support.",
      },
      {
        name: "keywords",
        content:
          "software company in karur, best software company in karur, software companies in karur, custom software development karur, textile erp software karur, billing software karur, pos software in karur, android app development karur, web development company in karur, IT company karur, c entrepreneurs karur, c-entrepreneurs karur",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Karur, Tamil Nadu, India" },
      { name: "geo.position", content: "10.9601;78.0766" },
      { name: "ICBM", content: "10.9601, 78.0766" },
      { property: "og:site_name", content: "C-Entrepreneurs (C Entrepreneurs)" },
      {
        property: "og:title",
        content:
          "Best Software Company in Karur — Custom Software & POS Billing | C-Entrepreneurs",
      },
      {
        property: "og:description",
        content:
          "Top-rated software development company in Karur, Tamil Nadu. Custom ERP, billing software, web & mobile applications built for high performance and local business growth.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://c-entrepreneur.vercel.app/software-company-in-karur",
      },
      { property: "og:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Best Software Company in Karur | C-Entrepreneurs (C Entrepreneurs)",
      },
      {
        name: "twitter:description",
        content:
          "Karur premier custom software company. ERP solutions, POS billing software, and mobile apps with dedicated local on-site support.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://c-entrepreneur.vercel.app/software-company-in-karur",
      },
    ],
  }),
  component: SoftwareCompanyPage,
});

function SoftwareCompanyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailto = `mailto:centrepreneursb2c@gmail.com?subject=${encodeURIComponent(
      `Software Requirement from ${form.name} — Karur`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nRequirement:\n${form.requirement}`
    )}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", requirement: "" });
    }, 800);
  };

  const softwareSolutions = [
    {
      icon: Building2,
      title: "Textile & Manufacturing ERP in Karur",
      desc: "Custom production tracking, yarn and fabric inventory, loom assignment, dye lot registers, and export shipment documentation tailored for Karur's home textile exporters.",
      features: ["Loom & Weaving Flow Tracking", "Yarn Stock & Loss Control", "Export Packing Lists", "GST Invoicing"],
    },
    {
      icon: BarChart3,
      title: "POS Billing Software & Retail Systems",
      desc: "Fast offline-capable and cloud-synced POS billing systems for retail stores, supermarkets, textile showrooms, and cafés in Karur with thermal receipt and barcode printing.",
      features: ["Thermal Barcode Generation", "Instant GST Tax Bills", "Offline-Ready Cache", "Multi-Counter Sync"],
    },
    {
      icon: Smartphone,
      title: "Custom Android & iOS Mobile Applications",
      desc: "Native and cross-platform mobile apps for field sales representatives, order booking, real-time inventory checks, and customer loyalty management in Karur.",
      features: ["Field Force Tracking", "Thumb-Friendly Order Booking", "Push Notification Campaigns", "Local Offline Mode"],
    },
    {
      icon: Cpu,
      title: "Web Platforms & Cloud Portals",
      desc: "Ultra-fast modern React & Next.js web applications, customer portals, online product catalogs, and automated B2B booking systems designed for speed and high conversion.",
      features: ["Sub-Second Load Times", "Secure Role-Based Access", "API Integrations", "Mobile Responsive"],
    },
  ];

  const faqs = [
    {
      q: "Which is the best software company in Karur?",
      a: "C-Entrepreneurs (also known as C Entrepreneurs) is widely recognized as the best software company in Karur, Tamil Nadu. We specialize in custom business software, textile ERP systems, retail POS billing software, and mobile applications with dedicated on-site support across Karur.",
    },
    {
      q: "Why should Karur textile and export businesses choose custom software over generic off-the-shelf tools?",
      a: "Generic software doesn't fit Karur's specialized weaving, dyeing, yarn tracking, and export workflows. C-Entrepreneurs builds tailor-made ERPs that match your exact commercial process, eliminating spreadsheet errors and speeding up production without expensive recurring licenses.",
    },
    {
      q: "Do you provide POS billing software for shops and restaurants in Karur?",
      a: "Yes! We build lightning-fast POS billing software specifically for Karur cafés, supermarkets, restaurants, and retail showrooms. It supports thermal receipt printers, barcode scanners, multi-payment options (UPI, Cash, Card), and works offline even if the internet goes down.",
    },
    {
      q: "Where is C-Entrepreneurs located and do you provide local on-site software support in Karur?",
      a: "We are located right in Karur Town (PIN: 639001). Our engineers provide prompt on-site setup, staff training, hardware connection, and continuous local support across Jawahar Bazaar, Kovai Road, Thanthonimalai, Pasupathypuram, Vengamedu, and surrounding industrial hubs.",
    },
    {
      q: "How can I get a quotation for custom software development in Karur?",
      a: "You can call or WhatsApp our technical team directly at +91 90253 60572, email centrepreneursb2c@gmail.com, or fill out the quotation request form on this page. We provide free software requirement analysis and transparent pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/clogo.png"
              alt="C-Entrepreneurs Logo"
              className="h-10 w-10 rounded-full border border-navy/20 object-cover shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-black tracking-widest text-navy sm:text-sm">
                C-ENTREPRENEURS
              </span>
              <span className="text-[10px] tracking-wider text-muted-foreground">
                KARUR SOFTWARE HUB
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-navy md:flex">
            <Link to="/" className="transition hover:text-royal">Home</Link>
            <a href="#services" className="transition hover:text-royal">Solutions</a>
            <a href="#why-us" className="transition hover:text-royal">Why Us</a>
            <Link to="/digital-marketing-in-karur" className="transition hover:text-royal">
              Digital Marketing
            </Link>
            <a href="#faq" className="transition hover:text-royal">FAQ</a>
            <a href="#contact" className="transition hover:text-royal">Contact</a>
          </nav>

          <a
            href="tel:+919025360572"
            className="inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-navy sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+91 90253 60572</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-royal/5 via-background to-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal/30 bg-royal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-royal">
              <MapPin className="h-3.5 w-3.5" />
              <span>Karur, Tamil Nadu · Premier Software Development Hub</span>
            </div>

            <h1 className="font-display text-3xl font-black leading-tight text-navy sm:text-5xl md:text-6xl">
              Best Software Company in <span className="text-royal">Karur</span>
            </h1>

            <p className="mt-4 text-base font-medium text-navy/80 sm:text-lg">
              C-Entrepreneurs (C Entrepreneurs) builds high-performance custom ERP systems, POS billing software, Android mobile apps, and scalable web solutions engineered for Karur businesses.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold sm:gap-4 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Textile ERP Specialists</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Fast POS Billing Systems</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Local Karur On-Site Support</span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-bold text-white shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-8 sm:py-3.5"
              >
                <span>Get Free Software Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20am%20looking%20for%20a%20software%20solution%20in%20Karur."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-600 bg-white px-6 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-royal">
              Engineered For Karur Businesses
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-navy sm:text-4xl">
              Software Solutions Designed for Real Commercial Scale
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              From textile production tracking across Karur loom sheds to high-traffic retail POS billing, we craft software tailored to your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {softwareSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-royal/50 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy sm:text-2xl">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {sol.desc}
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-2 border-t border-border/70 pt-4 sm:grid-cols-2">
                    {sol.features.map((f) => (
                      <span key={f} className="flex items-center gap-1.5 text-xs font-semibold text-navy/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-royal" />
                        <span>{f}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-us" className="border-t border-border bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
                <Sparkles className="h-3 w-3" />
                <span>The C-Entrepreneurs Advantage</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">
                Why Karur Enterprises Trust C-Entrepreneurs for Software Development
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                Unlike distant software vendors who never visit your workplace, C-Entrepreneurs is rooted right in Karur. We sit down with your managers, loom supervisors, and cashiers to build tools that eliminate headaches.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Local On-Site Support in Karur</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Immediate hands-on assistance across Karur Town, Kovai Road, Jawahar Bazaar, Thanthonimalai, and Pasupathypuram.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">100% Owned Software — Zero Traps</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      No sudden recurring software price hikes. You own your data, reports, and system logic.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Cutting-Edge Modern Tech Stack</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Built with React, Next.js, TypeScript, and high-speed databases ensuring millisecond response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-navy/20 bg-navy p-6 text-white shadow-2xl sm:p-10">
              <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
                Ready to Automate Your Business in Karur?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Contact C-Entrepreneurs today. Let’s discuss your operational bottlenecks and engineer the exact software you need.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-royal-light" />
                  <a href="tel:+919025360572" className="font-semibold hover:text-royal-light transition">
                    +91 90253 60572
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-royal-light" />
                  <a href="mailto:centrepreneursb2c@gmail.com" className="font-semibold hover:text-royal-light transition">
                    centrepreneursb2c@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-royal-light" />
                  <span>Karur Town, Karur, Tamil Nadu 639001, India</span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6">
                <a
                  href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20want%20to%20develop%20software%20for%20my%20business%20in%20Karur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-royal">
              Software Company in Karur FAQ
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-bold text-navy sm:text-lg cursor-pointer"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-royal" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="border-t border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="font-display text-2xl font-black text-navy sm:text-4xl">
              Request a Custom Software Proposal
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Share your business requirements and our team in Karur will prepare a detailed technical roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-navy">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-royal"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-navy">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-royal"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-bold uppercase text-navy">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-royal"
                placeholder="yourcompany@example.com"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-bold uppercase text-navy">Software Requirements</label>
              <textarea
                required
                rows={4}
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-royal"
                placeholder="Describe your business, required features (e.g. Textile ERP, POS billing, Android App)..."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              {status === "sent" ? (
                <span className="text-xs font-bold text-emerald-600">✓ Inquiry sent successfully!</span>
              ) : (
                <span className="text-xs text-muted-foreground">Local Karur response within 2 hours.</span>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-royal disabled:opacity-60 cursor-pointer"
              >
                <span>Submit Software Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="font-semibold text-navy">
              © {new Date().getFullYear()} C-Entrepreneurs (C Entrepreneurs). Best Software Company in Karur.
            </p>
            <p className="mt-1 flex items-center justify-center gap-1.5 sm:justify-start text-[11px]">
              <MapPin className="h-3 w-3 text-royal" />
              <span>Karur Town, Tamil Nadu 639001 · Phone: +91 90253 60572</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-navy">
            <Link to="/" className="hover:text-royal transition">Home</Link>
            <Link to="/digital-marketing-in-karur" className="hover:text-royal transition">Digital Marketing in Karur</Link>
            <a href="mailto:centrepreneursb2c@gmail.com" className="hover:text-royal transition">Email Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
