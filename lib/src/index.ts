// Main Kuse Components - Core Navigation and File Management

// Main Navigation Components
export { ExpandedNavPanel } from './components/ExpandedNavPanel';
export { CollapsedNavPanel } from './components/CollapsedNavPanel';
export { default as InteractiveNavPanel } from './components/InteractiveNavPanel';
export { NavItem } from './components/NavItem';

// File Management Components
export { default as FileArea } from './components/FileArea';
export { default as FileGridItem } from './components/FileGridItem';
export { FileItem } from './components/FileItem';

// Chat Components
export { default as ChatPanel } from './components/ChatPanel';
export { default as EmptyChatPanel } from './components/EmptyChatPanel';
export { default as PopulatedChatPanel } from './components/PopulatedChatPanel';

// Skill Components
export { SkillCard } from './components/SkillCard';

// Toggle Components
export { Toggle } from './components/Toggle';

// Figma Components
export { ImageWithFallback } from './components/figma/ImageWithFallback';

// CSS Imports for styling
import './components/ExpandedNavPanel.css';
import './components/EmptyChatPanel.css';
import './components/PopulatedChatPanel.css';
import './components/NavItem.css';
import './components/FileItem.css';
import './components/SkillCard.css';
import './components/Toggle.css';

// Re-export types that might be needed
export type { MessageBlock } from './components/PopulatedChatPanel';