// Main Components
export { SplitButton } from '../components/SplitButton'
export { SelectSourcesDialog } from '../components/SelectSourcesDialog'
export { FolderTree, FolderTreeNode } from '../components/FolderTree'
export { Toggle } from '../components/Toggle'

// UI Components
export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '../components/ui/dialog'
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip'
export { ScrollArea } from '../components/ui/scroll-area'

// Types
export type { FileNode, SelectionState } from '../components/FolderTree'

// Utilities
export { cn } from '../components/ui/utils'
export { getSelectionState } from '../components/FolderTree'

// CSS exports (users need to import these in their project)
export const cssFiles = [
  './components/SplitButton.css',
  './components/SelectSourcesDialog.css',
  './components/FolderTree.css',
  './components/Toggle.css',
  './components/ui/dialog.css',
  './components/ui/tooltip.css',
] as const