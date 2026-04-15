import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tom Walsh | Solutions Engineer",
  description:
    "Experienced Solutions Architect with 6+ years in software sales, data analysis, payments, fraud, and cryptocurrency.",
  metadataBase: new URL("https://www.tomwalsh.xyz"),
  openGraph: {
    title: "Tom Walsh | Solutions Engineer",
    description:
      "Experienced Solutions Architect with 6+ years in software sales, data analysis, payments, fraud, and cryptocurrency.",
    url: "https://www.tomwalsh.xyz",
    siteName: "Tom Walsh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Walsh | Solutions Engineer",
    description:
      "Experienced Solutions Architect with 6+ years in software sales, data analysis, payments, fraud, and cryptocurrency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased",
          geistSans.variable,
          geistMono.variable,
          "font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
