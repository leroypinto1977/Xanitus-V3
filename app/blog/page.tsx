import { Metadata } from "next";
import { client, urlFor } from "@/lib/sanity";
import { sampleBlogPosts } from "@/data/sampleData";
import { BlogGrid } from "@/app/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog | Xanitus",
  description:
    "Latest insights and articles on technology, development, and digital transformation",
};

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

async function getBlogPosts(): Promise<any[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
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
    const postsData = await client.fetch(query);

    // Use Sanity data if available, otherwise use sample data
    const formattedPosts =
      postsData.length > 0
        ? postsData.map((post: BlogPost) => ({
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
        : sampleBlogPosts.map((post) => ({
            title: post.title,
            excerpt: post.excerpt,
            image: post.mainImage.asset.url,
            category: post.categories[0]?.title || "Technology",
            date: post.publishedAt.split("T")[0],
            readTime: post.readTime,
            author: post.author.name,
            slug: post.slug.current,
          }));

    return formattedPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Fallback to sample data
    return sampleBlogPosts.map((post) => ({
      title: post.title,
      excerpt: post.excerpt,
      image: post.mainImage.asset.url,
      category: post.categories[0]?.title || "Technology",
      date: post.publishedAt.split("T")[0],
      readTime: post.readTime,
      author: post.author.name,
      slug: post.slug.current,
    }));
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

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

        <BlogGrid posts={blogPosts} />
      </div>
    </div>
  );
}
