import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const monaSans = localFont({
  src: "./fonts/MonaSans-Variable.woff2",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "200 900",
});

export const metadata: Metadata = {
  title: {
    default: "DevEleven - Independent Engineering Studio",
    template: "%s - DevEleven",
  },
  description:
    "Websites, software, and games built to work beautifully. We turn complex challenges into reliable digital products - from first sketch to the next release.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={monaSans.variable}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var theme=t==="dark"?"dark":"light";document.documentElement.setAttribute("data-theme",theme);if(theme==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}var m=document.querySelector('meta[name="color-scheme"]');if(m)m.content=theme;}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-dv-bg text-dv-text antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
