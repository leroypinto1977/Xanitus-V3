// components/sections/BlogSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sampleBlogPosts } from "@/data/sampleData";

// Use first 3 blog posts for the homepage section
const blogPosts = sampleBlogPosts.slice(0, 3).map((post) => ({
  title: post.title,
  excerpt: post.excerpt,
  image: post.mainImage.asset.url,
  category: post.categories[0]?.title || "Technology",
  date: post.publishedAt.split("T")[0],
  readTime: post.readTime,
  author: post.author.name,
}));

export function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-[#a0ff4a]">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 pt-0 hover:border-white transition-all duration-300 h-full group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl hover:rounded-t-2xl transition-transform duration-300"
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#a0ff4a] text-[#a0ff4a] hover:bg-[#a0ff4a] hover:text-black px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
