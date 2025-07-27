#!/usr/bin/env node

// Script to import sample data into Sanity
// Run with: node import-sample-data.js

const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "4x9v8qm4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  useCdn: false,
});

// Sample data
const sampleData = [
  // Technologies
  {
    _id: "tech-1",
    _type: "technology",
    name: "Next.js",
    description: "React framework for production",
    category: "Frontend",
  },
  {
    _id: "tech-2",
    _type: "technology",
    name: "TypeScript",
    description: "Typed JavaScript at scale",
    category: "Language",
  },
  {
    _id: "tech-3",
    _type: "technology",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    category: "Styling",
  },
  {
    _id: "tech-4",
    _type: "technology",
    name: "Sanity CMS",
    description: "Headless CMS for structured content",
    category: "CMS",
  },
  {
    _id: "tech-5",
    _type: "technology",
    name: "React Native",
    description: "Mobile app development framework",
    category: "Mobile",
  },
  {
    _id: "tech-6",
    _type: "technology",
    name: "Node.js",
    description: "JavaScript runtime for server-side development",
    category: "Backend",
  },

  // Authors
  {
    _id: "author-1",
    _type: "author",
    name: "John Doe",
    slug: { _type: "slug", current: "john-doe" },
    bio: [
      {
        _key: "bio-1",
        _type: "block",
        children: [
          {
            _key: "bio-1-1",
            _type: "span",
            marks: [],
            text: "Lead Developer at Xanitus with 8+ years of experience in web development and digital solutions.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
  },
  {
    _id: "author-2",
    _type: "author",
    name: "Jane Smith",
    slug: { _type: "slug", current: "jane-smith" },
    bio: [
      {
        _key: "bio-2",
        _type: "block",
        children: [
          {
            _key: "bio-2-1",
            _type: "span",
            marks: [],
            text: "Full-stack developer and automation specialist passionate about improving business processes through technology.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
  },

  // Categories
  {
    _id: "cat-1",
    _type: "category",
    title: "Web Development",
    slug: { _type: "slug", current: "web-development" },
    description:
      "Articles about modern web development practices and technologies",
  },
  {
    _id: "cat-2",
    _type: "category",
    title: "Automation",
    slug: { _type: "slug", current: "automation" },
    description: "Business process automation and workflow optimization",
  },
  {
    _id: "cat-3",
    _type: "category",
    title: "Mobile Development",
    slug: { _type: "slug", current: "mobile-development" },
    description: "Mobile app development for iOS and Android platforms",
  },

  // Projects
  {
    _id: "project-1",
    _type: "project",
    title: "E-commerce Platform Redesign",
    slug: { _type: "slug", current: "ecommerce-platform-redesign" },
    client: "Fashion Retailer",
    technologies: [
      { _type: "reference", _ref: "tech-1" },
      { _type: "reference", _ref: "tech-3" },
      { _type: "reference", _ref: "tech-4" },
    ],
    publishedAt: "2024-01-15T00:00:00Z",
    excerpt:
      "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate.",
    description: [
      {
        _type: "block",
        _key: "desc-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "desc-span-1",
            text: "We completely redesigned and rebuilt this fashion retailer's e-commerce platform from the ground up, focusing on user experience and performance optimization.",
          },
        ],
      },
    ],
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    _id: "project-2",
    _type: "project",
    title: "Mobile Banking Application",
    slug: { _type: "slug", current: "mobile-banking-application" },
    client: "Financial Services Company",
    technologies: [
      { _type: "reference", _ref: "tech-5" },
      { _type: "reference", _ref: "tech-6" },
      { _type: "reference", _ref: "tech-2" },
    ],
    publishedAt: "2024-01-10T00:00:00Z",
    excerpt:
      "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
    description: [
      {
        _type: "block",
        _key: "desc-2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "desc-span-2",
            text: "A comprehensive mobile banking solution featuring advanced security measures, intuitive UI/UX design, and seamless integration with existing banking infrastructure.",
          },
        ],
      },
    ],
    projectUrl: "https://example.com/banking",
    githubUrl: "https://github.com/example/banking",
  },

  // Blog Posts
  {
    _id: "post-1",
    _type: "post",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: { _type: "slug", current: "future-web-development-2024" },
    author: { _type: "reference", _ref: "author-1" },
    categories: [{ _type: "reference", _ref: "cat-1" }],
    publishedAt: "2024-01-15T10:00:00Z",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    body: [
      {
        _type: "block",
        _key: "block-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span-1",
            text: "The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies. In this comprehensive guide, we'll explore the key trends that will shape the future of web development.",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-2",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "span-2",
            text: "AI Integration in Web Applications",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span-3",
            text: "Artificial Intelligence is becoming increasingly integrated into web applications, providing personalized user experiences and automating complex tasks.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-2",
    _type: "post",
    title: "Automating Business Processes: A Complete Guide",
    slug: { _type: "slug", current: "automating-business-processes-guide" },
    author: { _type: "reference", _ref: "author-2" },
    categories: [{ _type: "reference", _ref: "cat-2" }],
    publishedAt: "2024-01-10T14:30:00Z",
    excerpt:
      "Learn how workflow automation can transform your business operations and boost productivity.",
    body: [
      {
        _type: "block",
        _key: "block-4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span-4",
            text: "Business process automation is revolutionizing how companies operate, offering unprecedented efficiency and accuracy improvements.",
          },
        ],
      },
    ],
  },
];

async function importData() {
  try {
    console.log("Starting data import...");

    // Import data in batches
    const transaction = client.transaction();

    sampleData.forEach((doc) => {
      transaction.createOrReplace(doc);
    });

    await transaction.commit();

    console.log("✅ Successfully imported sample data!");
    console.log(`Imported ${sampleData.length} documents`);
  } catch (error) {
    console.error("❌ Error importing data:", error);
  }
}

// Run the import
if (require.main === module) {
  importData();
}

module.exports = { importData, sampleData };
