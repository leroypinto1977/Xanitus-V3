// Sample data for blog posts and portfolio items
// This can be replaced with Sanity CMS data later

export const sampleBlogPosts = [
  {
    _id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    slug: { current: "future-web-development-trends-2025" },
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      },
    },
    categories: [{ title: "Web Development", _id: "web-dev" }],
    publishedAt: "2025-01-15T00:00:00Z",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
      },
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The web development landscape is evolving at an unprecedented pace. As we move through 2025, several key trends are reshaping how we build and interact with web applications.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "From AI-powered development tools to advanced progressive web apps, the future of web development promises exciting innovations that will transform user experiences.",
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    title: "Automating Business Processes: A Complete Guide",
    slug: { current: "automating-business-processes-guide" },
    excerpt:
      "Learn how workflow automation can transform your business operations, boost productivity, and reduce manual errors.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      },
    },
    categories: [{ title: "Automation", _id: "automation" }],
    publishedAt: "2025-01-10T00:00:00Z",
    readTime: "8 min read",
    author: {
      name: "Jane Smith",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        },
      },
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Business process automation is no longer a luxury—it's a necessity for companies looking to stay competitive in today's fast-paced market.",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    title: "Mobile App Development: Native vs Cross-Platform in 2025",
    slug: { current: "mobile-app-development-native-vs-cross-platform-2025" },
    excerpt:
      "Compare the pros and cons of native and cross-platform mobile app development approaches, with updated insights for 2025.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      },
    },
    categories: [{ title: "Mobile Development", _id: "mobile-dev" }],
    publishedAt: "2025-01-05T00:00:00Z",
    readTime: "6 min read",
    author: {
      name: "Mike Johnson",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        },
      },
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The mobile app development landscape continues to evolve, with new frameworks and technologies emerging regularly.",
          },
        ],
      },
    ],
  },
  {
    _id: "4",
    title: "AI Integration in Modern Web Applications",
    slug: { current: "ai-integration-modern-web-applications" },
    excerpt:
      "Discover how artificial intelligence is being integrated into web applications to create smarter, more personalized user experiences.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      },
    },
    categories: [{ title: "AI & Machine Learning", _id: "ai-ml" }],
    publishedAt: "2024-12-28T00:00:00Z",
    readTime: "7 min read",
    author: {
      name: "Sarah Wilson",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
      },
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Artificial Intelligence is revolutionizing how we build and interact with web applications, offering unprecedented opportunities for personalization and automation.",
          },
        ],
      },
    ],
  },
];

export const sampleProjects = [
  {
    _id: "1",
    title: "E-commerce Platform Redesign",
    slug: { current: "ecommerce-platform-redesign" },
    client: "Fashion Forward Retailer",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      },
    },
    galleryImages: [
      {
        _key: "1",
        asset: {
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        },
        caption: "Homepage design",
      },
      {
        _key: "2",
        asset: {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        },
        caption: "Product catalog",
      },
    ],
    technologies: [
      { _id: "1", name: "Next.js", icon: null },
      { _id: "2", name: "Tailwind CSS", icon: null },
      { _id: "3", name: "Stripe", icon: null },
      { _id: "4", name: "Sanity CMS", icon: null },
    ],
    publishedAt: "2024-12-15T00:00:00Z",
    excerpt:
      "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate and improved user experience.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This comprehensive e-commerce platform redesign transformed an outdated online store into a modern, high-converting sales machine.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key improvements included streamlined checkout process, mobile-first design, and advanced product filtering capabilities.",
          },
        ],
      },
    ],
    projectUrl: "https://example-ecommerce.com",
  },
  {
    _id: "2",
    title: "Mobile Banking Application",
    slug: { current: "mobile-banking-application" },
    client: "SecureBank Financial",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      },
    },
    technologies: [
      { _id: "5", name: "React Native", icon: null },
      { _id: "6", name: "Node.js", icon: null },
      { _id: "7", name: "MongoDB", icon: null },
      { _id: "8", name: "AWS", icon: null },
    ],
    publishedAt: "2024-11-20T00:00:00Z",
    excerpt:
      "Secure and user-friendly mobile banking application with advanced features, biometric authentication, and real-time transaction monitoring.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed a comprehensive mobile banking solution that prioritizes security while maintaining an intuitive user experience.",
          },
        ],
      },
    ],
    projectUrl: null,
  },
  {
    _id: "3",
    title: "Healthcare Management System",
    slug: { current: "healthcare-management-system" },
    client: "MedCare Solutions",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      },
    },
    technologies: [
      { _id: "9", name: "Vue.js", icon: null },
      { _id: "10", name: "Python", icon: null },
      { _id: "11", name: "PostgreSQL", icon: null },
      { _id: "12", name: "Docker", icon: null },
    ],
    publishedAt: "2024-10-10T00:00:00Z",
    excerpt:
      "Comprehensive healthcare management system for patient records, appointment scheduling, and medical staff coordination.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Built a robust healthcare management platform that streamlines patient care and administrative processes.",
          },
        ],
      },
    ],
    projectUrl: "https://example-healthcare.com",
  },
  {
    _id: "4",
    title: "Real Estate Platform",
    slug: { current: "real-estate-platform" },
    client: "PropertyPro Realty",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      },
    },
    technologies: [
      { _id: "13", name: "Angular", icon: null },
      { _id: "14", name: "Firebase", icon: null },
      { _id: "15", name: "Google Maps API", icon: null },
      { _id: "16", name: "Algolia", icon: null },
    ],
    publishedAt: "2024-09-05T00:00:00Z",
    excerpt:
      "Advanced real estate platform with property listings, virtual tours, and intelligent matching algorithms for buyers and sellers.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Created a modern real estate platform that connects buyers, sellers, and agents through advanced search and matching capabilities.",
          },
        ],
      },
    ],
    projectUrl: "https://example-realestate.com",
  },
];

export const sampleTechnologies = [
  { _id: "1", name: "Next.js" },
  { _id: "2", name: "Tailwind CSS" },
  { _id: "3", name: "Stripe" },
  { _id: "4", name: "Sanity CMS" },
  { _id: "5", name: "React Native" },
  { _id: "6", name: "Node.js" },
  { _id: "7", name: "MongoDB" },
  { _id: "8", name: "AWS" },
  { _id: "9", name: "Vue.js" },
  { _id: "10", name: "Python" },
  { _id: "11", name: "PostgreSQL" },
  { _id: "12", name: "Docker" },
  { _id: "13", name: "Angular" },
  { _id: "14", name: "Firebase" },
  { _id: "15", name: "Google Maps API" },
  { _id: "16", name: "Algolia" },
];

export const sampleCategories = [
  { _id: "web-dev", title: "Web Development" },
  { _id: "automation", title: "Automation" },
  { _id: "mobile-dev", title: "Mobile Development" },
  { _id: "ai-ml", title: "AI & Machine Learning" },
];
