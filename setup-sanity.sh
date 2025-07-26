#!/bin/bash

# Xanitus Sanity Setup Script
# This script helps you set up your Sanity project quickly

echo "🚀 Setting up Sanity CMS for Xanitus Portfolio..."
echo ""

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Installing Sanity CLI..."
    npm install -g @sanity/cli
fi

echo "🔐 Please log in to Sanity..."
sanity login

echo ""
echo "📋 Creating a new Sanity project..."
echo "When prompted:"
echo "  - Choose a project name (e.g., 'xanitus-portfolio')"
echo "  - Select 'Clean project with no predefined schemas'"
echo "  - Choose TypeScript: Yes"
echo ""

# This will create a new project and get the project ID
sanity init --create-project --dataset production --output-path ./temp-sanity

# Extract project ID from the generated sanity.cli.ts file
if [ -f "./temp-sanity/sanity.cli.ts" ]; then
    PROJECT_ID=$(grep -o "projectId: '[^']*'" ./temp-sanity/sanity.cli.ts | cut -d"'" -f2)
    
    if [ ! -z "$PROJECT_ID" ]; then
        echo ""
        echo "✅ Project created successfully!"
        echo "📝 Project ID: $PROJECT_ID"
        
        # Update environment file
        sed -i.bak "s/your-project-id/$PROJECT_ID/g" .env.local
        
        echo "🔄 Updated .env.local with your project ID"
        echo ""
        echo "🗑️ Cleaning up temporary files..."
        rm -rf ./temp-sanity
        
        echo ""
        echo "🎉 Setup complete! Next steps:"
        echo "  1. Run 'npm run dev' to start your development server"
        echo "  2. Visit http://localhost:3000/studio to access your CMS"
        echo "  3. Start adding projects and technologies!"
        echo ""
        echo "📚 For detailed instructions, see PORTFOLIO_SETUP.md"
    else
        echo "❌ Could not extract project ID. Please update .env.local manually."
    fi
else
    echo "❌ Setup failed. Please run sanity init manually and update .env.local with your project ID."
fi

echo ""
echo "🚀 Ready to launch your portfolio!"
