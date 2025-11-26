# @kuse/ui-components

A comprehensive React UI components library for Kuse system interface, featuring navigation panels, file management, chat interfaces, and modern UI components.

## Installation

```bash
npm install @kuse/ui-components
```

## Quick Start

```jsx
import { ExpandedNavPanel, FileArea, ChatPanel } from '@kuse/ui-components';

function App() {
  return (
    <div>
      <ExpandedNavPanel
        selectedFolder="Folder 1"
        setSelectedFolder={() => {}}
        expandedFolders={new Set()}
        toggleFolder={() => {}}
        onCollapse={() => {}}
      />
      <FileArea
        selectedFolder="Folder 1"
        selectedFile={null}
        setSelectedFile={() => {}}
        onToggleAssetTree={() => {}}
        assetTreeOpen={true}
      />
    </div>
  );
}
```

## Components

### Navigation Components

- **`ExpandedNavPanel`** - Full-featured navigation panel with folder tree
- **`CollapsedNavPanel`** - Minimized navigation panel
- **`InteractiveNavPanel`** - Smart navigation that switches between expanded/collapsed
- **`NavItem`** - Individual navigation item component

### File Management Components

- **`FileArea`** - Main file display area with grid/list views
- **`FileGridItem`** - Individual file item in grid view
- **`FileItem`** - Detailed file item component

### Chat Components

- **`ChatPanel`** - Main chat interface
- **`EmptyChatPanel`** - Empty state for chat
- **`PopulatedChatPanel`** - Chat with messages

### UI Components

- **`SkillCard`** - Skill/capability display card
- **`Toggle`** - Custom toggle component
- **`ImageWithFallback`** - Image with fallback support

## Styling

The library includes CSS modules for styling. Components come with default styling that matches the Kuse design system.

```css
@import '@kuse/ui-components/dist/index.css';
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import { MessageBlock } from '@kuse/ui-components';

const messages: MessageBlock[] = [
  // Your message data
];
```

## Dependencies

This package requires React 18+ and includes:

- Radix UI components for accessible primitives
- Lucide React for icons
- Class Variance Authority for styling utilities
- Additional UI libraries for advanced components

## Development

```bash
# Build the package
npm run build

# Development mode
npm run dev
```

## License

MIT License

## Author

Kuse AI

---

For more documentation and examples, visit our [documentation site](https://docs.kuse.ai).