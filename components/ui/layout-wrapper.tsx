"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if current path is studio
  const isStudioRoute = pathname?.startsWith("/studio");

  if (isStudioRoute) {
    // For studio routes, render only the children without navbar/footer
    return <>{children}</>;
  }

  // For all other routes, render with navbar and footer
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
