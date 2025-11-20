import { useState } from "react";
import { Plus, Grid3x3, List, Upload, Menu } from "lucide-react";
import FileGridItem from "./FileGridItem";
import imgACoupleRidingBicycles from "figma:asset/5a6060e9ef4b69650ee271496e3abbda4a058a1e.png";
import imgScreenshot from "figma:asset/47fc666b26620b5d72ce06f4be3eafa900a54c21.png";
import img2025 from "figma:asset/8240af8d279c04225dcff223cc9b5e88c0b50573.png";

interface FileAreaProps {
  selectedFolder: string | null;
  selectedFile: string | null;
  setSelectedFile: (file: string | null) => void;
  onToggleAssetTree: () => void;
  assetTreeOpen: boolean;
}

export default function FileArea({
  selectedFolder,
  selectedFile,
  setSelectedFile,
  onToggleAssetTree,
  assetTreeOpen,
}: FileAreaProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock file data
  const getFilesForFolder = (folderName: string | null) => {
    if (!folderName) return [];

    const allFiles = {
      "Folder 1": [
        { id: "1", name: "Image_change the background.Skill", type: "folder", icon: "folder" },
        { id: "2", name: "folder 1", type: "folder", icon: "folder" },
        {
          id: "3",
          name: "Image_change the background.Skill",
          type: "pdf",
          icon: "pdf",
          preview: imgScreenshot,
        },
        {
          id: "4",
          name: "Image_change the background name.pdf",
          type: "pdf",
          icon: "pdf",
          preview: imgScreenshot,
        },
        {
          id: "5",
          name: "Image_change the background.Skill",
          type: "image",
          icon: "image",
          preview: imgACoupleRidingBicycles,
        },
        { id: "6", name: "folder 1", type: "image", icon: "image", preview: imgACoupleRidingBicycles },
        {
          id: "7",
          name: "Image_change the background.Skill",
          type: "image",
          icon: "image",
          preview: img2025,
        },
        { id: "8", name: "data spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
        { id: "9", name: "data spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
        { id: "10", name: "data spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
        { id: "11", name: "data spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
        { id: "12", name: "data spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
        { id: "13", name: "contact information.docx", type: "docx", icon: "docx" },
        { id: "14", name: "contact information.docx", type: "docx", icon: "docx" },
        { id: "15", name: "contact information.docx", type: "docx", icon: "docx" },
      ],
      "Folder 2": [
        { id: "16", name: "Document 1.pdf", type: "pdf", icon: "pdf" },
        { id: "17", name: "Spreadsheet.xlsx", type: "xlsx", icon: "xlsx" },
      ],
      "Kuse Onboarding": [
        { id: "20", name: "Welcome.pdf", type: "pdf", icon: "pdf" },
        { id: "21", name: "Getting Started.docx", type: "docx", icon: "docx" },
      ],
      "Subfolder A": [
        { id: "22", name: "SubA Document.pdf", type: "pdf", icon: "pdf" },
        { id: "23", name: "SubA Notes.docx", type: "docx", icon: "docx" },
      ],
      "Subfolder B": [
        { id: "24", name: "SubB Presentation.pptx", type: "pptx", icon: "pptx" },
        { id: "25", name: "SubB Data.xlsx", type: "xlsx", icon: "xlsx" },
      ],
    };

    return allFiles[folderName as keyof typeof allFiles] || [];
  };

  const files = getFilesForFolder(selectedFolder);

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar */}
      <div className="bg-neutral-50 h-[52px] border-b border-[#e6e6e6] flex items-center justify-between px-[20px] shrink-0">
        <div className="flex items-center gap-[12px]">
          <p className="text-[12px] text-[rgba(32,32,32,0.6)] max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap">
            {selectedFolder || "Select a folder"}
          </p>
        </div>

        <div className="flex gap-[10px]">
          <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-neutral-200 rounded-[4px] transition-colors">
            <Plus className="w-[20px] h-[20px] text-[rgba(32,32,32,0.6)]" />
          </button>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="w-[32px] h-[32px] flex items-center justify-center hover:bg-neutral-200 rounded-[4px] transition-colors"
          >
            {viewMode === "grid" ? (
              <List className="w-[20px] h-[20px] text-[rgba(32,32,32,0.6)]" />
            ) : (
              <Grid3x3 className="w-[20px] h-[20px] text-[rgba(32,32,32,0.6)]" />
            )}
          </button>
          <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-neutral-200 rounded-[4px] transition-colors">
            <Upload className="w-[20px] h-[20px] text-[rgba(32,32,32,0.6)]" />
          </button>
        </div>
      </div>

      {/* File Grid */}
      <div className="flex-1 overflow-auto bg-white p-[20px]">
        {files.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-[rgba(32,32,32,0.4)] text-[14px]">No files in this folder</p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(105px,1fr))] gap-[20px]">
            {files.map((file) => (
              <FileGridItem
                key={file.id}
                file={file}
                isSelected={selectedFile === file.id}
                onClick={() => setSelectedFile(file.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}