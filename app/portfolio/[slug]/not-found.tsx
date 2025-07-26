import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 pt-24">
      <div className="container mx-auto max-w-2xl px-4 py-24 text-center">
        <FileX className="h-24 w-24 text-gray-400 mx-auto mb-8" />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Project Not Found
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>

        <div className="space-y-4">
          <Button
            asChild
            className="bg-[#a0ff4a] text-black hover:bg-[#8ee639]"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div>
            <Button
              variant="ghost"
              asChild
              className="text-gray-400 hover:text-white"
            >
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
