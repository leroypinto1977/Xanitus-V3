import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sampleBlogPosts } from "@/data/sampleData";

export const metadata: Metadata = {
  title: "Blog | Xanitus",
  description:
    "Latest insights and articles on technology, development, and digital transformation",
};

// Use sample blog posts data
const blogPosts = sampleBlogPosts.map((post) => ({
  title: post.title,
  slug: post.slug.current,
  excerpt: post.excerpt,
  image: post.mainImage.asset.url,
  category: post.categories[0]?.title || "Technology",
  date: post.publishedAt.split("T")[0],
  readTime: post.readTime,
  author: post.author.name,
}));

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
