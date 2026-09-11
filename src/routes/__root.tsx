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
      { title: "C-Entrepreneurs | Software Development & Marketing Agency" },
      {
        name: "description",
        content:
          "C-Entrepreneurs is a modern software development and marketing agency. We build custom web apps, Android applications, POS systems, and empower emerging talent through real startup internships.",
      },
      {
        name: "keywords",
        content:
          "C-Entrepreneurs, C Entrepreneurs, software development agency, web app development, Android app development, POS billing software, startup accelerator, tech internship, marketing agency",
      },
      { name: "author", content: "C-Entrepreneurs" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "C-Entrepreneurs" },
      { property: "og:title", content: "C-Entrepreneurs | Build. Learn. Grow." },
      {
        property: "og:description",
        content:
          "Custom Web & Android app development, POS solutions, and high-impact startup internships. We turn bold ideas into real, functioning companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c-entrepreneur.vercel.app/" },
      { property: "og:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "C-Entrepreneurs | Build. Learn. Grow." },
      {
        name: "twitter:description",
        content:
          "Custom Web & Android app development, POS solutions, and high-impact startup internships.",
      },
      { name: "twitter:image", content: "https://c-entrepreneur.vercel.app/clogo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://c-entrepreneur.vercel.app/" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/clogo.png", type: "image/png" },
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
        "@type": "Organization",
        "@id": "https://c-entrepreneur.vercel.app/#organization",
        name: "C-Entrepreneurs",
        url: "https://c-entrepreneur.vercel.app",
        logo: "https://c-entrepreneur.vercel.app/clogo.png",
        image: "https://c-entrepreneur.vercel.app/clogo.png",
        description:
          "Entrepreneurs Service Provider & Software Development Agency. We build, revive, and execute real companies.",
        email: "hello@c-entrepreneurs.com",
        knowsAbout: [
          "Web Development",
          "Mobile App Development",
          "Business Development",
          "Marketing",
          "Startup Incubation",
          "Student Internships",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://c-entrepreneur.vercel.app/#website",
        url: "https://c-entrepreneur.vercel.app",
        name: "C-Entrepreneurs",
        description: "Build. Learn. Grow. Solutions that work, relationships that last.",
        publisher: {
          "@id": "https://c-entrepreneur.vercel.app/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://c-entrepreneur.vercel.app/#service",
        name: "C-Entrepreneurs Software & Startup Services",
        url: "https://c-entrepreneur.vercel.app",
        parentOrganization: {
          "@id": "https://c-entrepreneur.vercel.app/#organization",
        },
        priceRange: "$$",
        areaServed: "Global",
        serviceType: [
          "Web Application Development",
          "Android Application Development",
          "POS and Billing Systems",
          "Startup Incubation & Internships",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
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
