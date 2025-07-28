// components/sections/BlogSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { sampleBlogPosts } from "@/data/sampleData";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: any;
  categories: Array<{ title: string }>;
  publishedAt: string;
  readTime: string;
  author: { name: string };
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      categories[]-> {
        title
      },
      publishedAt,
      readTime,
      author-> {
        name
      }
    }
  `;

  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsData = await getBlogPosts();

        // Use Sanity data if available, otherwise use sample data
        const formattedPosts =
          postsData.length > 0
            ? postsData.map((post) => ({
                title: post.title,
                excerpt: post.excerpt,
                image: post.mainImage
                  ? urlFor(post.mainImage).width(400).height(300).url()
                  : "/placeholder.jpg",
                category: post.categories?.[0]?.title || "Technology",
                date:
                  post.publishedAt?.split("T")[0] ||
                  new Date().toISOString().split("T")[0],
                readTime: post.readTime || "5 min read",
                author: post.author?.name || "Xanitus Team",
                slug: post.slug?.current || "",
              }))
            : sampleBlogPosts.slice(0, 3).map((post) => ({
                title: post.title,
                excerpt: post.excerpt,
                image: post.mainImage.asset.url,
                category: post.categories[0]?.title || "Technology",
                date: post.publishedAt.split("T")[0],
                readTime: post.readTime,
                author: post.author.name,
                slug: post.slug.current,
              }));

        setBlogPosts(formattedPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        // Fallback to sample data
        const fallbackPosts = sampleBlogPosts.slice(0, 3).map((post) => ({
          title: post.title,
          excerpt: post.excerpt,
          image: post.mainImage.asset.url,
          category: post.categories[0]?.title || "Technology",
          date: post.publishedAt.split("T")[0],
          readTime: post.readTime,
          author: post.author.name,
          slug: post.slug.current,
        }));
        setBlogPosts(fallbackPosts);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-700 rounded mb-4 w-64 mx-auto"></div>
              <div className="h-4 bg-slate-700 rounded mb-8 w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
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
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="bg-slate-800/50 border-slate-700 pt-0 hover:border-white transition-all duration-300 h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-60 object-cover rounded-t-2xl hover:rounded-t-2xl transition-transform duration-300"
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
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-[#a0ff4a] text-[#a0ff4a] hover:bg-[#a0ff4a] hover:text-black px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
