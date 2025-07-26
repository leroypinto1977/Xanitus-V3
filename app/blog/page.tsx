import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Xanitus",
  description:
    "Latest insights and articles on technology, development, and digital transformation",
};

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
  },
  {
    title: "Automating Business Processes: A Complete Guide",
    slug: "automating-business-processes-guide",
    excerpt:
      "Learn how workflow automation can transform your business operations and boost productivity.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    category: "Automation",
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Jane Smith",
  },
  {
    title: "Mobile App Development: Native vs Cross-Platform",
    slug: "mobile-app-development-native-vs-cross-platform",
    excerpt:
      "Compare the pros and cons of native and cross-platform mobile app development approaches.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    category: "Mobile Development",
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Mike Johnson",
  },
  {
    title: "Cloud Migration Strategies for Enterprise Applications",
    slug: "cloud-migration-strategies-enterprise",
    excerpt:
      "Discover effective strategies for migrating enterprise applications to the cloud with minimal disruption.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
    category: "Cloud Computing",
    date: "2023-12-28",
    readTime: "7 min read",
    author: "Sarah Williams",
  },
  {
    title: "Implementing Effective DevOps Practices in Your Organization",
    slug: "implementing-effective-devops-practices",
    excerpt:
      "Learn how to implement DevOps practices that improve collaboration, efficiency, and software quality.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    category: "DevOps",
    date: "2023-12-20",
    readTime: "9 min read",
    author: "David Brown",
  },
  {
    title: "The Role of AI in Modern Software Development",
    slug: "ai-in-modern-software-development",
    excerpt:
      "Explore how artificial intelligence is transforming software development processes and outcomes.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    category: "AI & Machine Learning",
    date: "2023-12-15",
    readTime: "6 min read",
    author: "Emily Davis",
  },
  {
    title: "Designing Accessible Web Applications: Best Practices",
    slug: "designing-accessible-web-applications",
    excerpt:
      "Learn how to create web applications that are accessible to users with disabilities.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
    category: "Web Development",
    date: "2023-12-10",
    readTime: "7 min read",
    author: "John Doe",
  },
  {
    title: "Cybersecurity Essentials for Modern Businesses",
    slug: "cybersecurity-essentials-modern-businesses",
    excerpt:
      "Discover the essential cybersecurity measures every business should implement to protect their digital assets.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    category: "Cybersecurity",
    date: "2023-12-05",
    readTime: "8 min read",
    author: "Jane Smith",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Our <span className="text-[#a0ff4a]">Blog</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Stay updated with the latest trends and insights in technology and
          digital transformation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="bg-slate-800/50 border-slate-700 pt-0 hover:border-[#a0ff4a] transition-all duration-300 h-full group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#a0ff4a] text-black">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#a0ff4a] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      By {post.author}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#a0ff4a] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
