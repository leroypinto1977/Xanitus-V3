"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Card className="bg-slate-800/50 border-slate-700 pt-0 hover:border-[#a0ff4a] transition-all duration-300 h-full group cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
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
              <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

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
                <span className="text-sm text-gray-400">By {post.author}</span>
                <ArrowRight className="h-4 w-4 text-[#a0ff4a] group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
