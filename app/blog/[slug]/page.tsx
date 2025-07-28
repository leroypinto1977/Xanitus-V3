import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  body: Array<{ children: Array<{ text: string }> }>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
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
      },
      body
    }
  `;

  try {
    const post = await client.fetch(query, { slug });
    
    if (post) {
      return post;
    }
    
    // Fallback to sample data
    const samplePost = sampleBlogPosts.find((post) => post.slug.current === slug);
    return samplePost || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    // Fallback to sample data
    const samplePost = sampleBlogPosts.find((post) => post.slug.current === slug);
    return samplePost || null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
  const post = await getBlogPost(slug);

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
            src={
              post.mainImage && typeof post.mainImage === 'object' && post.mainImage.asset
                ? urlFor(post.mainImage).width(800).height(600).url()
                : post.mainImage?.asset?.url || "/placeholder.jpg"
            }
            alt={post.title}
            width={800}
            height={600}
            className="w-full h-96 object-cover"
          />
        </div>

        <Badge className="bg-[#a0ff4a] text-black mb-4">
          {post.categories?.[0]?.title || "Technology"}
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
            {post.readTime || "5 min read"}
          </div>
          <div>By {post.author?.name || "Xanitus Team"}</div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed">
            {post.body && post.body.length > 0 ? (
              post.body.map((block, index) => (
                <p key={index} className="mb-4">
                  {block.children?.[0]?.text || ""}
                </p>
              ))
            ) : (
              <p className="mb-4">
                {post.excerpt || "This blog post content will be available soon."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
