import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // In a real app, you would fetch the post data from Sanity
  const post = blogPosts.find((post) => post.slug === slug);

  return {
    title: post ? `${post.title} | Xanitus Blog` : "Blog Post | Xanitus",
    description: post?.excerpt || "Read our latest blog post",
  };
}

// This would come from Sanity in a real implementation
const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    category: "Web Development",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "John Doe",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we move into 2024, several key trends are shaping the future of web development, offering exciting possibilities for developers and businesses alike.</p>
      
      <h2>AI Integration in Web Development</h2>
      <p>Artificial intelligence is revolutionizing web development, from automated coding assistants to intelligent user interfaces. AI-powered tools can now generate code, optimize performance, and create personalized user experiences based on behavior patterns.</p>
      <p>Machine learning algorithms are being used to analyze user data and provide insights that help developers create more intuitive and responsive websites. This trend is expected to accelerate in 2024, with AI becoming an integral part of the web development process.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain traction as they combine the best of web and mobile applications. PWAs offer offline functionality, fast loading times, and app-like experiences without requiring users to download and install an app from an app store.</p>
      <p>In 2024, we expect to see more businesses adopting PWAs as their primary mobile strategy, especially as browser support improves and development tools become more sophisticated.</p>
      
      <h2>WebAssembly and the Future of Browser-Based Applications</h2>
      <p>WebAssembly (Wasm) is transforming what's possible in browser-based applications by allowing code written in languages like C, C++, and Rust to run in the browser at near-native speed. This opens up new possibilities for web applications, including complex games, video editing tools, and scientific simulations.</p>
      <p>As WebAssembly matures, we anticipate seeing more complex applications moving to the web, blurring the line between web and desktop applications.</p>
      
      <h2>Serverless Architecture</h2>
      <p>Serverless architecture is changing how web applications are built and deployed. By abstracting away server management, developers can focus on writing code while cloud providers handle the infrastructure.</p>
      <p>This approach offers benefits like automatic scaling, reduced operational costs, and faster development cycles. In 2024, serverless will become the default choice for many web development projects, especially as the ecosystem of tools and services continues to expand.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with technologies like AI, PWAs, WebAssembly, and serverless architecture opening up new possibilities. By staying informed about these trends and incorporating them into your development strategy, you can create more powerful, efficient, and user-friendly web applications.</p>
    `,
  },
  // Add more blog posts with content here
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // In a real app, you would fetch the post data from Sanity
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="pt-24">
        <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Post Not Found</h1>
          <p className="text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-[#a0ff4a] hover:underline"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#a0ff4a] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={320}
            className="w-full h-80 object-cover"
          />
        </div>

        <Badge className="bg-[#a0ff4a] text-black mb-4">{post.category}</Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-400 mb-8">
          <div className="flex items-center mr-6">
            <Calendar className="h-5 w-5 mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center mr-6">
            <Clock className="h-5 w-5 mr-2" />
            {post.readTime}
          </div>
          <div>By {post.author}</div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}
