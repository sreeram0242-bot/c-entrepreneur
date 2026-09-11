import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "C-Entrepreneurs | Best Software Company & Digital Marketing Agency in Karur, Tamil Nadu",
      },
      {
        name: "description",
        content:
          "C-Entrepreneurs is the premier software company and digital marketing agency in Karur, Tamil Nadu. We build custom softwares, POS billing systems, web applications, Android apps, and drive high-ROI SEO & digital marketing.",
      },
      {
        name: "keywords",
        content:
          "software company in Karur, best digital marketing in Karur, custom softwares in Karur, software company Karur, digital marketing agency Karur, web development company Karur, billing software Karur, POS software Karur, Android app development Karur, SEO services Karur, IT company in Karur, C-Entrepreneurs Karur, tech startup Karur Tamil Nadu",
      },
      { name: "author", content: "C-Entrepreneurs" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      // GEO Meta Tags for Karur, Tamil Nadu
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Karur, Tamil Nadu, India" },
      { name: "geo.position", content: "10.9601;78.0766" },
      { name: "ICBM", content: "10.9601, 78.0766" },
      { name: "city", content: "Karur" },
      { name: "state", content: "Tamil Nadu" },
      { name: "country", content: "India" },
      { name: "target-location", content: "Karur, Tamil Nadu, India" },
      { name: "coverage", content: "Karur, Tamil Nadu, India, Global" },
      { property: "og:site_name", content: "C-Entrepreneurs" },
      {
        property: "og:title",
        content: "C-Entrepreneurs | Best Software Company & Digital Marketing in Karur",
      },
      {
        property: "og:description",
        content:
          "Leading software development company and digital marketing agency in Karur, Tamil Nadu. Custom softwares, POS billing systems, web design, and high-impact digital marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c-entrepreneur.vercel.app/" },
      { property: "og:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      {
        property: "og:image:secure_url",
        content: "https://c-entrepreneur.vercel.app/clogo.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      {
        property: "og:image:alt",
        content:
          "C-Entrepreneurs - Best Software Company & Digital Marketing Agency in Karur, Tamil Nadu",
      },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "C-Entrepreneurs | Best Software Company & Digital Marketing in Karur",
      },
      {
        name: "twitter:description",
        content:
          "Custom softwares, POS billing systems, web development & digital marketing agency in Karur, Tamil Nadu.",
      },
      {
        name: "google-site-verification",
        content: "VbvJ4F6jQNC4GD6ESCZnav91MS-nWC1kbEij4emY8-8",
      },
      { name: "twitter:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://c-entrepreneur.vercel.app/" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/clogo.png?v=2", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/clogo.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;900&family=Great+Vibes&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
        "@id": "https://c-entrepreneur.vercel.app/#localbusiness",
        name: "C-Entrepreneurs",
        alternateName: [
          "C-Entrepreneurs Karur",
          "C Entrepreneurs",
          "Best Digital Marketing in Karur",
          "Software Company in Karur",
          "Custom Softwares in Karur",
        ],
        url: "https://c-entrepreneur.vercel.app",
        sameAs: [
          "https://www.instagram.com/c__entrepreneurs__",
          "https://in.linkedin.com/in/c-entrepreneurs-758a0341b",
        ],
        logo: "https://c-entrepreneur.vercel.app/clogo.png",
        image: "https://c-entrepreneur.vercel.app/clogo.png",
        description:
          "C-Entrepreneurs is the premier software company and digital marketing agency in Karur, Tamil Nadu. We specialize in custom software development, POS billing systems, web applications, Android mobile apps, SEO, and social media marketing.",
        email: "centrepreneursb2c@gmail.com",
        telephone: "+91-90253-60572",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-90253-60572",
            contactType: "customer service",
            email: "centrepreneursb2c@gmail.com",
            areaServed: "IN",
            availableLanguage: ["English", "Tamil"],
          },
        ],
        priceRange: "₹₹",
        currenciesAccepted: "INR, USD",
        paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Karur Town",
          addressLocality: "Karur",
          addressRegion: "Tamil Nadu",
          postalCode: "639001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.9601,
          longitude: 78.0766,
        },
        hasMap: "https://maps.google.com/?q=Karur,+Tamil+Nadu",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Karur" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Tiruchirappalli" },
          { "@type": "City", name: "Coimbatore" },
          { "@type": "City", name: "Erode" },
          { "@type": "City", name: "Dindigul" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development in Karur",
              description:
                "Enterprise software solutions, inventory systems, textile workflow software, and custom business tools in Karur, Tamil Nadu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Best Digital Marketing in Karur",
              description:
                "Full-service digital marketing, Local SEO, Google Business Profile ranking, Meta and Google Ads, and brand growth in Karur.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "POS Billing Software Karur",
              description:
                "Fast, reliable cloud and offline POS billing software for retail shops, textile outlets, and restaurants in Karur.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web and Mobile App Development",
              description:
                "Modern high-speed React/Next.js websites and Android application development tailored for commercial success.",
            },
          },
        ],
        knowsAbout: [
          "Custom Software Development",
          "Digital Marketing",
          "POS Billing Software",
          "SEO & Local Search Engine Optimization",
          "Web Application Development",
          "Android Mobile App Development",
          "Social Media Marketing",
          "Startup Incubation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://c-entrepreneur.vercel.app/#website",
        url: "https://c-entrepreneur.vercel.app",
        name: "C-Entrepreneurs",
        description: "Best Digital Marketing & Custom Software Company in Karur, Tamil Nadu.",
        publisher: {
          "@id": "https://c-entrepreneur.vercel.app/#localbusiness",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://c-entrepreneur.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best software company in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "C-Entrepreneurs is recognized as the best software company in Karur, Tamil Nadu. We specialize in custom software development, web applications, Android apps, and automated POS billing software designed specifically for local businesses, textile manufacturers, and growing startups.",
            },
          },
          {
            "@type": "Question",
            name: "Which agency provides the best digital marketing in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "C-Entrepreneurs offers the best digital marketing services in Karur, Tamil Nadu. Our expertise spans Local SEO, Google Business Profile optimization, Meta & Instagram Ads, Google PPC campaigns, and targeted lead generation to grow local businesses and export companies.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I get custom software and billing software in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can get customized business software, ERP systems, and modern POS billing software in Karur directly from C-Entrepreneurs. We build secure, reliable software with local Karur support. Contact +91 90253 60572 or email centrepreneursb2c@gmail.com.",
            },
          },
          {
            "@type": "Question",
            name: "Does C-Entrepreneurs provide website development and mobile apps in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, C-Entrepreneurs provides complete web development (React, Next.js, full-stack) and native Android/iOS mobile application development in Karur, Tamil Nadu with modern UI/UX design, cloud scalability, and continuous maintenance.",
            },
          },
          {
            "@type": "Question",
            name: "How can businesses and students get started with C-Entrepreneurs in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Businesses in Karur can reach out via call at +91 90253 60572, WhatsApp, or through the contact form on our website. Students and fresh graduates can apply for hands-on startup internships in Software Engineering, Digital Marketing, and Business Development.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="VbvJ4F6jQNC4GD6ESCZnav91MS-nWC1kbEij4emY8-8"
        />
        <link rel="icon" type="image/png" href="/clogo.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/clogo.png?v=2" />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
