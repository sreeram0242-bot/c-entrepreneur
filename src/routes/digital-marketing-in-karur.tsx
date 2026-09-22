import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Megaphone,
  TrendingUp,
  Search,
  Target,
  BarChart,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  Instagram,
  Sparkles,
  Award,
  Globe2,
  Users2,
} from "lucide-react";

export const Route = createFileRoute("/digital-marketing-in-karur")({
  head: () => ({
    meta: [
      {
        title:
          "Best Digital Marketing Agency in Karur | Local SEO & Ads — C-Entrepreneurs (C Entrepreneurs)",
      },
      {
        name: "description",
        content:
          "Looking for the best digital marketing in Karur? C-Entrepreneurs (C Entrepreneurs) delivers high-ROI Local SEO, Google Business Profile ranking, Instagram/Meta Ads, and Google PPC campaigns that drive paying customers.",
      },
      {
        name: "keywords",
        content:
          "digital marketing in karur, best digital marketing in karur, digital marketing agency in karur, digital marketing company in karur, SEO services in karur, local SEO karur, google ads agency karur, social media marketing karur, instagram ads agency karur, c entrepreneurs karur, c-entrepreneurs digital marketing",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Karur, Tamil Nadu, India" },
      { name: "geo.position", content: "10.9601;78.0766" },
      { name: "ICBM", content: "10.9601, 78.0766" },
      { property: "og:site_name", content: "C-Entrepreneurs (C Entrepreneurs)" },
      {
        property: "og:title",
        content:
          "Best Digital Marketing Agency in Karur — SEO, Meta Ads & Growth | C-Entrepreneurs",
      },
      {
        property: "og:description",
        content:
          "Dominate search results and social feeds in Karur, Tamil Nadu. High-converting Local SEO, Google Ads, and Meta advertising by C-Entrepreneurs.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://c-entrepreneur.vercel.app/digital-marketing-in-karur",
      },
      { property: "og:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Best Digital Marketing in Karur | C-Entrepreneurs (C Entrepreneurs)",
      },
      {
        name: "twitter:description",
        content:
          "Top-rated digital marketing agency in Karur. We generate genuine customer inquiries through Local SEO, Google Ads, and Instagram performance marketing.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://c-entrepreneur.vercel.app/digital-marketing-in-karur",
      },
    ],
  }),
  component: DigitalMarketingPage,
});

function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", businessType: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailto = `mailto:centrepreneursb2c@gmail.com?subject=${encodeURIComponent(
      `Marketing Inquiry from ${form.name} — Karur`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nBusiness:\n${form.businessType}`
    )}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", businessType: "" });
    }, 800);
  };

  const marketingServices = [
    {
      icon: Search,
      title: "Local SEO & Google Maps Ranking (Karur)",
      desc: "Get your business into the top 3 Google Map Pack for high-intent searches like 'near me' and 'in Karur'. We optimize your Google Business Profile, citations, and local reviews.",
      tags: ["#1 Google Map Pack", "Local Citations", "Review Growth Strategy", "Keyword Domination"],
    },
    {
      icon: Instagram,
      title: "Meta Ads (Instagram & Facebook) Performance",
      desc: "Hyper-targeted visual ad campaigns that capture Karur, Trichy, Coimbatore, and Tamil Nadu buyers. Designed specifically for retail showrooms, restaurants, jewelry, and textiles.",
      tags: ["High-CTR Video Creatives", "Pinpoint Demographic Targeting", "Direct WhatsApp Leads", "Lowest Cost-Per-Lead"],
    },
    {
      icon: Target,
      title: "Google Search Ads (PPC High-Intent Leads)",
      desc: "Capture ready-to-buy customers at the precise moment they search for your services. Zero ad spend waste with laser-targeted negative keywords and geo-fencing.",
      tags: ["High Commercial Intent", "Immediate Inquiries", "Transparent Weekly Reports", "Google Certified Setup"],
    },
    {
      icon: TrendingUp,
      title: "Export & B2B Lead Generation for Karur Textiles",
      desc: "Strategic international and domestic lead generation funnels engineered for Karur home textile manufacturers, garment exporters, and yarn distributors.",
      tags: ["B2B Buyer Prospecting", "LinkedIn Outreach", "Export Funnels", "Global Brand Presence"],
    },
  ];

  const faqs = [
    {
      q: "Which agency provides the best digital marketing in Karur?",
      a: "C-Entrepreneurs (also known as C Entrepreneurs) is widely recognized as the premier digital marketing agency in Karur, Tamil Nadu. We specialize in Local Google SEO, Google Business Profile ranking, Instagram/Meta Ads, and Google PPC lead generation tailored for Karur businesses.",
    },
    {
      q: "How does Local SEO help my Karur business get more walk-in customers?",
      a: "When people in Karur search on Google or Google Maps for products or services near them, Google highlights the top 3 local businesses. C-Entrepreneurs optimizes your local citations, photos, address signals, and keywords so your business consistently appears at the top.",
    },
    {
      q: "How fast can I see results from digital marketing in Karur?",
      a: "Paid advertising (Meta/Instagram Ads and Google PPC) starts generating phone calls and WhatsApp inquiries within 24 to 48 hours of campaign launch. Organic Local SEO typically yields compounding top rankings within 3 to 8 weeks.",
    },
    {
      q: "Do you handle social media management and ad creative design?",
      a: "Yes! Our in-house creative team designs high-impact posters, motion graphics, video reels, and ad copy specifically tailored to Karur's demographic and language preferences (Tamil and English).",
    },
    {
      q: "How can I start digital marketing with C-Entrepreneurs in Karur?",
      a: "Simply call or WhatsApp us at +91 90253 60572 or email centrepreneursb2c@gmail.com. We will run a free audit of your current online presence and propose an actionable marketing strategy.",
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
                DIGITAL MARKETING KARUR
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-navy md:flex">
            <Link to="/" className="transition hover:text-royal">Home</Link>
            <Link to="/software-company-in-karur" className="transition hover:text-royal">
              Software Company
            </Link>
            <a href="#services" className="transition hover:text-royal">Services</a>
            <a href="#results" className="transition hover:text-royal">Results</a>
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
              <span>Karur, Tamil Nadu · #1 Digital Marketing & Local SEO Agency</span>
            </div>

            <h1 className="font-display text-3xl font-black leading-tight text-navy sm:text-5xl md:text-6xl">
              Best Digital Marketing Agency in <span className="text-royal">Karur</span>
            </h1>

            <p className="mt-4 text-base font-medium text-navy/80 sm:text-lg">
              C-Entrepreneurs (C Entrepreneurs) fuels revenue growth for Karur businesses with high-converting Local SEO, Google Map Pack dominance, Meta (Instagram/Facebook) Ads, and targeted lead generation.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold sm:gap-4 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>#1 Google Map Pack Rankings</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Targeted WhatsApp & Call Leads</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Local Karur Market Knowledge</span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-bold text-white shadow-lg shadow-royal/30 transition hover:bg-navy sm:px-8 sm:py-3.5"
              >
                <span>Request Free Marketing Strategy</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20want%20to%20grow%20my%20business%20in%20Karur%20with%20digital%20marketing."
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

      {/* Services Grid */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-royal">
              Results-Driven Growth Services
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-navy sm:text-4xl">
              Turn Karur Searchers & Social Users into Paying Customers
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              No vanity metrics or empty follower promises. We run data-driven campaigns engineered to generate real phone calls, store visits, and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {marketingServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-royal/50 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy sm:text-2xl">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {srv.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4">
                    {srv.tags.map((t) => (
                      <span key={t} className="rounded-full bg-muted/60 px-3 py-1 text-xs font-semibold text-navy">
                        ✓ {t}
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
      <section id="results" className="border-t border-border bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
                <Sparkles className="h-3 w-3" />
                <span>The Karur Market Difference</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">
                Why Karur Businesses Choose C-Entrepreneurs for Digital Marketing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                Karur has a unique commercial landscape: global home textile exporters alongside bustling local retail shops on Jawahar Bazaar and Kovai Road. C-Entrepreneurs knows how to speak to both local Tamil shoppers and national/international B2B buyers.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Hyper-Local Karur Geo-Targeting</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      We target exact pin codes (639001, 639002, 639004) and surrounding towns (Trichy, Erode, Dindigul) to maximize local footfall.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Direct WhatsApp & Call Inquiries</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Campaigns optimized to deliver ready-to-buy inquiries straight into your WhatsApp inbox and phone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                    <Globe2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Bi-Lingual Creative Mastery</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Engaging ad copywriting and video visuals in both Tamil (தமிழ்) and English to convert your exact audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-navy/20 bg-navy p-6 text-white shadow-2xl sm:p-10">
              <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
                Ready to Dominate Search & Social in Karur?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Stop losing customers to your competitors. Partner with C-Entrepreneurs and claim the #1 spot in Karur today.
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
                  href="https://wa.me/919025360572?text=Hi%20C-Entrepreneurs%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business%20in%20Karur."
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
              Digital Marketing in Karur FAQ
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
              Get Your Free Karur Marketing Growth Plan
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Share details about your business and goals. We will perform a free competitive analysis and outline your fastest path to leads.
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
              <label className="mb-1.5 block text-xs font-bold uppercase text-navy">Business & Marketing Goals</label>
              <textarea
                required
                rows={4}
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-royal"
                placeholder="e.g. Retail shop on Kovai Road wanting Google Map visits, or Textile Manufacturer needing export leads..."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              {status === "sent" ? (
                <span className="text-xs font-bold text-emerald-600">✓ Marketing request sent!</span>
              ) : (
                <span className="text-xs text-muted-foreground">Free audit & consultation within 2 hours.</span>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-royal disabled:opacity-60 cursor-pointer"
              >
                <span>Request Growth Plan</span>
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
              © {new Date().getFullYear()} C-Entrepreneurs (C Entrepreneurs). Best Digital Marketing Agency in Karur.
            </p>
            <p className="mt-1 flex items-center justify-center gap-1.5 sm:justify-start text-[11px]">
              <MapPin className="h-3 w-3 text-royal" />
              <span>Karur Town, Tamil Nadu 639001 · Phone: +91 90253 60572</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-navy">
            <Link to="/" className="hover:text-royal transition">Home</Link>
            <Link to="/software-company-in-karur" className="hover:text-royal transition">Software Company in Karur</Link>
            <a href="mailto:centrepreneursb2c@gmail.com" className="hover:text-royal transition">Email Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
