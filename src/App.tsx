import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FileText,
  Image as ImageIcon,
  File as FileIcon,
} from "lucide-react";
import InteractiveNavPanel from "./components/InteractiveNavPanel";
import ChatPanel from "./components/ChatPanel";
import FileArea from "./components/FileArea";
import { SkillPage } from "./imports/演示用这个Skill";

export default function App() {
  const [selectedFolder, setSelectedFolder] = useState<
    string | null
  >("Folder 1");
  const [expandedFolders, setExpandedFolders] = useState<
    Set<string>
  >(new Set(["Folder 1"]));
  const [selectedFile, setSelectedFile] = useState<
    string | null
  >(null);
  const [activeView, setActiveView] = useState<
    "files" | "skill"
  >("files");

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <div className="flex h-screen w-full bg-neutral-50">
      {/* Left Navigation Panel */}
      <InteractiveNavPanel
        selectedFolder={selectedFolder}
        setSelectedFolder={(folder) => {
          setSelectedFolder(folder);
          setActiveView("files");
        }}
        expandedFolders={expandedFolders}
        toggleFolder={toggleFolder}
        activeView={activeView}
        onSkillClick={() => {
          setActiveView("skill");
          setSelectedFolder(null);
        }}
      />

      {/* Middle - Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {activeView === "files" ? (
          <FileArea
            selectedFolder={selectedFolder}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            onToggleAssetTree={() => {}}
            assetTreeOpen={false}
          />
        ) : (
          <SkillPage />
        )}
      </div>

      {/* Right - Chat Panel */}
      <ChatPanel />
    </div>
  );
}