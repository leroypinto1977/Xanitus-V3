import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sampleBlogPosts } from "@/data/sampleData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = sampleBlogPosts.find((post) => post.slug.current === slug);

  return {
    title: post ? `${post.title} | Xanitus Blog` : "Blog Post | Xanitus",
    description: post?.excerpt || "Read our latest blog post",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = sampleBlogPosts.find((post) => post.slug.current === slug);

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
            src={post.mainImage.asset.url}
            alt={post.title}
            width={800}
            height={320}
            className="w-full h-80 object-cover"
          />
        </div>

        <Badge className="bg-[#a0ff4a] text-black mb-4">
          {post.categories[0]?.title || "Technology"}
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-400 mb-8">
          <div className="flex items-center mr-6">
            <Calendar className="h-5 w-5 mr-2" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center mr-6">
            <Clock className="h-5 w-5 mr-2" />
            {post.readTime}
          </div>
          <div>By {post.author.name}</div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed">
            {post.body.map((block, index) => (
              <p key={index} className="mb-4">
                {block.children[0]?.text || ""}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
