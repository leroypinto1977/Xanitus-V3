# Xanitus Portfolio with Sanity CMS

This project includes a dynamic portfolio system powered by Sanity CMS. Follow these steps to set up and configure your content management system.

## Sanity Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create a new account or log in
2. Create a new project
3. Choose a project name (e.g., "xanitus-portfolio")
4. Choose a dataset name (recommended: "production")
5. Copy your Project ID

### 2. Configure Your Project

1. Update `sanity.config.ts`:

   ```typescript
   projectId: 'your-actual-project-id', // Replace with your Sanity project ID
   ```

2. Update `lib/sanity.ts`:
   ```typescript
   projectId: 'your-actual-project-id', // Replace with your Sanity project ID
   ```

### 3. Install Sanity CLI (if not already installed)

```bash
npm install -g @sanity/cli
```

### 4. Authenticate with Sanity

```bash
sanity login
```

### 5. Deploy Your Schema

```bash
cd /path/to/your/project
sanity deploy
```

### 6. Access Your Studio

After completing the setup, you can:

1. **Local Studio**: Visit `http://localhost:3000/studio` (when running your Next.js app)
2. **Deploy Studio**: Run `sanity deploy` to deploy your studio to Sanity's hosted platform

## Content Management

### Adding Projects

1. Go to your Sanity Studio (`/studio` route or hosted studio)
2. Click on "Portfolio Project" in the sidebar
3. Click "Create" to add a new project
4. Fill in the required fields:
   - **Title**: Project name
   - **Slug**: URL-friendly version (auto-generated from title)
   - **Client**: Client name (optional)
   - **Main Image**: Primary project image
   - **Gallery Images**: Additional project images
   - **Technologies**: Select or create technology tags
   - **Published At**: Publication date
   - **Excerpt**: Short description for the portfolio listing
   - **Body**: Detailed project description (rich text)
   - **Project URL**: Link to live project (optional)

### Adding Technologies

1. Go to "Technology" in the Sanity Studio sidebar
2. Add technologies that you use in your projects
3. Include name, icon, and description
4. These will be available as tags for your projects

### Managing Content

- **Draft vs Published**: Projects are automatically published when created
- **Preview**: Use the preview pane to see how content will look
- **Media Library**: Manage all your images in the media section
- **Version History**: Sanity keeps track of all changes

## Features

### Portfolio Listing Page (`/portfolio`)

- Displays all published projects
- Shows project thumbnails, titles, client names, and technologies
- Responsive grid layout
- Links to individual project pages

### Dynamic Project Pages (`/portfolio/[slug]`)

- Detailed project information
- Rich text content with embedded images
- Image gallery
- Technology badges
- Links to live projects
- SEO optimized with meta tags

### Studio Integration (`/studio`)

- Full Sanity Studio interface
- Content editing and management
- Media library
- User management (if configured)

## Fallback Content

The portfolio pages include fallback content that will be displayed if:

- Sanity is not configured
- No projects are found
- There are connection issues

This ensures your site works even during setup or if there are temporary issues.

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**: Make sure all dependencies are installed

   ```bash
   npm install
   ```

2. **Sanity connection issues**: Verify your project ID and dataset name

3. **CORS errors**: Add your domain to the CORS settings in your Sanity project settings

4. **Images not loading**: Check your Sanity project permissions and make sure images are uploaded correctly

### Development

```bash
# Start development server
npm run dev

# Access local studio
# Visit http://localhost:3000/studio
```

### Production

1. Deploy your Next.js app to your hosting platform
2. Update CORS settings in Sanity to include your production domain
3. Your studio will be available at `yoursite.com/studio`

## Security

- The studio route is publicly accessible by default
- For production, consider adding authentication
- Sanity handles user permissions and access control
- Always use environment variables for sensitive configuration

## Support

For issues with:

- **Sanity CMS**: Check [Sanity Documentation](https://www.sanity.io/docs)
- **Portfolio Implementation**: Review the code comments and this README
- **Next.js**: Refer to [Next.js Documentation](https://nextjs.org/docs)
