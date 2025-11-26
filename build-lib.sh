#!/bin/bash

echo "🔧 Building @kuse/system-interface package..."

# Clean previous build
rm -rf dist

# Copy the npm package.json for the build
cp package.npm.json package.json.backup
cp package.npm.json package.json

# Build the library using the lib config
echo "📦 Building library with Vite..."
npx vite build --config vite.config.lib.ts

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"

    # Copy CSS files to dist
    echo "📝 Copying CSS files..."
    mkdir -p dist/components/ui
    cp src/components/*.css dist/components/ 2>/dev/null || true
    cp src/components/ui/*.css dist/components/ui/ 2>/dev/null || true

    # Copy assets
    echo "🎨 Copying assets..."
    cp -r src/assets dist/ 2>/dev/null || true

    echo "📁 Build output:"
    ls -la dist/

    echo ""
    echo "🎉 Package ready for publishing!"
    echo "📦 Files in package:"
    find dist -type f

else
    echo "❌ Build failed!"
    # Restore original package.json
    mv package.json.backup package.json
    exit 1
fi

# Restore original package.json
mv package.json.backup package.json

echo ""
echo "✨ Build completed successfully!"
echo "To publish: npm publish"