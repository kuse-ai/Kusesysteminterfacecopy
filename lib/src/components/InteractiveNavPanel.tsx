import { useState } from "react";
import { NavItem } from "./NavItem";
import { CollapsedNavPanel } from "./CollapsedNavPanel";
import { ExpandedNavPanel } from "./ExpandedNavPanel";

interface InteractiveNavPanelProps {
  selectedFolder: string | null;
  setSelectedFolder: (folder: string) => void;
  expandedFolders: Set<string>;
  toggleFolder: (folder: string) => void;
  activeView?: "files" | "skill";
  onSkillClick?: () => void;
}

export default function InteractiveNavPanel({
  selectedFolder,
  setSelectedFolder,
  expandedFolders,
  toggleFolder,
  activeView,
  onSkillClick,
}: InteractiveNavPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <CollapsedNavPanel
        onExpand={() => setIsCollapsed(false)}
        activeView={activeView}
        onViewChange={(view) => {
          if (view === "skill") {
            onSkillClick?.();
          } else {
            setSelectedFolder("Folder 1");
          }
        }}
      />
    );
  }

  return (
    <ExpandedNavPanel
      selectedFolder={selectedFolder}
      setSelectedFolder={setSelectedFolder}
      expandedFolders={expandedFolders}
      toggleFolder={toggleFolder}
      activeView={activeView}
      onSkillClick={onSkillClick}
      onCollapse={() => setIsCollapsed(true)}
    />
  );
}
