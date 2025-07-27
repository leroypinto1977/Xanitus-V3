# Xanitus Portfolio - Sanity CMS Setup Guide

## Current Status

Your Xanitus portfolio website is now running with:

- ✅ Navbar and Footer on all pages
- ✅ Sample blog posts and portfolio items
- ✅ Working Next.js application at http://localhost:3000
- ✅ Sanity Studio accessible at http://localhost:3000/studio

## Sample Content

The application currently uses sample data located in `/data/sampleData.ts` which includes:

- 4 blog posts with full content
- 4 portfolio projects with detailed information
- Sample technologies and categories

## Sanity CMS Setup (Optional)

To connect to a real Sanity CMS for content management:

### Option 1: Create Your Own Sanity Project

1. **Go to https://sanity.io and create an account**
2. **Create a new project** in the Sanity dashboard
3. **Copy your Project ID** from the project settings
4. **Update the environment variables** in `.env.local`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### Option 2: Continue with Sample Data

You can continue using the sample data and manually update it in `/data/sampleData.ts` as needed.

## Adding Content

### To Add Blog Posts (using sample data):

1. Open `/data/sampleData.ts`
2. Add new blog post objects to the `sampleBlogPosts` array
3. Follow the existing structure for consistency

### To Add Portfolio Projects (using sample data):

1. Open `/data/sampleData.ts`
2. Add new project objects to the `sampleProjects` array
3. Include technologies, images, and detailed descriptions

## Accessing the Sanity Studio

Visit http://localhost:3000/studio to access the Sanity Studio interface.

**Note**: To use the studio with your own Sanity project, you'll need to:

1. Set up your own Sanity project (Option 1 above)
2. Configure authentication
3. Import the sample data or create content manually

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar/footer
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/page.tsx # Individual blog posts
│   ├── portfolio/
│   │   ├── page.tsx       # Portfolio listing
│   │   └── [slug]/page.tsx # Individual projects
│   └── studio/            # Sanity Studio
├── components/
│   ├── sections/          # Page sections
│   └── ui/               # UI components
├── data/
│   └── sampleData.ts     # Sample blog posts and projects
├── lib/
│   └── sanity.ts         # Sanity client configuration
└── schemas/              # Sanity schema definitions
```

## Features

- **Responsive Design**: Works on all devices
- **Blog System**: With categories, authors, and full content
- **Portfolio Showcase**: With technology filtering
- **Contact Forms**: Ready for integration
- **SEO Optimized**: With proper meta tags
- **Performance**: Optimized images and fast loading

## Next Steps

1. **Customize the design** to match your brand
2. **Add your own content** to the sample data
3. **Set up a real Sanity project** when you're ready for a CMS
4. **Deploy to Vercel** or your preferred hosting platform
5. **Connect contact forms** to your email service

## Deployment

When ready to deploy:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

Your portfolio is now ready to use! 🚀
