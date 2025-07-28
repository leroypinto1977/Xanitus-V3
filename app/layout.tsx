import type { Metadata } from "next";
// Import Google Fonts
import { Roboto_Mono, Sora } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "../components/ui/layout-wrapper";

// Configure Roboto Mono for headings
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Configure Sora for body text
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xanitus - Digital Solutions & Technology Services",
  description:
    "Transform your business with innovative digital solutions, web development, and cutting-edge technology services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${robotoMono.variable}`}>
      <body className="antialiased font-sora">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
