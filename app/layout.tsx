import type { Metadata } from "next";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const title = "Sagar Kumar — Full Stack Developer (MERN & Next.js)";
const description =
  "Sagar Kumar is a Full Stack Developer in Noida building MERN and Next.js products: real-time systems, AI voice agents, role-based CRM/ERP and video calling.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "profile", url: "/" },
};
const ld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sagar Kumar",
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: "Digital Night Owl" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/sagarkumar656",
    "https://github.com/SagarSharma656",
  ],
  knowsAbout: [
    "MERN stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "WebRTC",
    "Socket.io",
    "AI integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,300;1,9..144,500&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <div id="pre" aria-hidden="true">
          <b style={{ marginBottom: 50 }}>SK</b>
          <i />
        </div>
        <div id="bar" />
        <nav aria-label="Primary">
          <a href="#top">Sagar Kumar</a>
          <div>
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <canvas id="gl" aria-hidden="true" />
        {children}
        <footer>
          <p className="k">© 2026 Sagar Kumar · Open to Work</p>
        </footer>
      </body>
    </html>
  );
}
