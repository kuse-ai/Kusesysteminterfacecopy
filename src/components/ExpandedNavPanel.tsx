import React, { useState } from "react";
// Replaced Lucide icons with emoji for better reliability
import svgPaths from "../imports/svg-he6gmen30l";
import imgEllipse1381 from "figma:asset/65f57febecf14e96f6c70d5e90a5b916e8a55498.png";
import { NavItem } from "./NavItem";
import "./ExpandedNavPanel.css";

interface ExpandedNavPanelProps {
  selectedFolder: string | null;
  setSelectedFolder: (folder: string) => void;
  expandedFolders: Set<string>;
  toggleFolder: (folder: string) => void;
  activeView?: "files" | "skill";
  onSkillClick?: () => void;
  onCollapse: () => void;
}

function LogoLight() {
  return (
    <div className="logo-container" data-name="Logo / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 24">
        <g id="Logo / Light">
          <foreignObject height="104" width="104" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_0_3_18127_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d={svgPaths.p161de800} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
          <path d={svgPaths.p3477600} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="bgblur_0_3_18127_clip_path" transform="translate(40 40)">
            <path clipRule="evenodd" d={svgPaths.p161de800} fillRule="evenodd" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPaths.p22ba4700} fill="var(--fill-0, #777777)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function AgentIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2b125600} fill="url(#paint0_linear_agent)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_agent" x1="8" x2="8" y1="1.6664" y2="14.3333">
            <stop stopColor="#9FE430" />
            <stop offset="1" stopColor="#63BC51" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SkillIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p1a1bfac0} fill="url(#paint0_linear_skill)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_skill" x1="8.00004" x2="8.00004" y1="1.33334" y2="14.6667">
            <stop stopColor="#F2BD84" />
            <stop offset="1" stopColor="#F7A854" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FolderIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[12.5%_7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
          <g>
            <rect fill="var(--fill-0, #EBD7B5)" height="8" opacity="0.4" rx="1.5" width="13.6" />
            <path d={svgPaths.p241d7580} fill="var(--fill-0, #F2BD84)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ExpandCollapseIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p1bf51d00} stroke="var(--stroke-0, #777777)" strokeLinecap="round" />
          <path d={svgPaths.p6f00980} stroke="var(--stroke-0, #777777)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export function ExpandedNavPanel({
  selectedFolder,
  setSelectedFolder,
  expandedFolders,
  toggleFolder,
  activeView,
  onSkillClick,
  onCollapse,
}: ExpandedNavPanelProps) {
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

  // TODO: In a real app, these would probably come from props or a store
  const folders = [
    { name: "Folder 1", hasChildren: true },
    { name: "Folder 2", hasChildren: false },
    { name: "Folder 3", hasChildren: false },
    { name: "Kuse Onboarding", hasChildren: false },
  ];

  const subfolders = [
    { name: "Subfolder A", parent: "Folder 1" },
    { name: "Subfolder B", parent: "Folder 1" },
  ];

  const handleFolderClick = (folderName: string, hasChildren: boolean) => {
    setSelectedFolder(folderName);
    if (hasChildren) {
      toggleFolder(folderName);
    }
  };

  return (
    <div className="expanded-nav-panel-root">
      <div aria-hidden="true" className="expanded-nav-border" />
      
      {/* Header - Logo and Menu */}
      <div className="expanded-nav-header-wrapper">
        <div className="expanded-nav-header-content">
          <div className="expanded-nav-header-inner">
            <LogoLight />
            <div
              className="menu-icon-wrapper"
              onClick={onCollapse}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Agent and Skill */}
      <div className="expanded-nav-agent-skill-container">
        {/* Agent */}
        <div className="expanded-nav-item-wrapper">
          <div className="expanded-nav-item-inner">
            <NavItem icon={<AgentIcon />} label="Agent" />
          </div>
        </div>

        {/* Skill */}
        <div
          className={`expanded-nav-item-wrapper ${activeView === "skill" ? "active" : ""}`}
          onClick={onSkillClick}
        >
          <div className="expanded-nav-item-inner">
            <NavItem icon={<SkillIcon />} label="Skill" />
          </div>
        </div>
      </div>

      {/* Files Section */}
      <div className="expanded-nav-files-container">
        {/* Divider */}
        <div className="files-divider-wrapper">
          <div className="files-divider-svg-container">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
              <path d={svgPaths.p25cb7400} stroke="var(--stroke-0, #E6E6E6)" />
            </svg>
          </div>
        </div>

        {/* Files Header */}
        <div className="files-header">
          <p className="files-header-text">Files</p>
          <div className="expand-collapse-icon-wrapper">
            <ExpandCollapseIcon />
          </div>
        </div>

        {/* Folder List */}
        <div className="folder-list-container">
          <div className="folder-list-inner">
            {folders.map((folder) => {
              const isExpanded = expandedFolders.has(folder.name);
              const isSelected = selectedFolder === folder.name;
              const isHovered = hoveredFolder === folder.name;

              return (
                <div key={folder.name} className="folder-item-container">
                  {/* Main Folder */}
                  <div
                    className={`folder-item-main ${isSelected ? "selected" : isHovered ? "hovered" : ""}`}
                    onClick={() => handleFolderClick(folder.name, folder.hasChildren)}
                    onMouseEnter={() => setHoveredFolder(folder.name)}
                    onMouseLeave={() => setHoveredFolder(null)}
                  >
                    <div className="folder-item-content">
                      <div className="folder-item-inner">
                        <div className="folder-item-details">
                          {folder.hasChildren && (
                            <div className="chevron-container">
                              {isExpanded ? (
                                <span className="chevron-icon">🔽</span>
                              ) : (
                                <span className="chevron-icon">▶️</span>
                              )}
                            </div>
                          )}
                          {!folder.hasChildren && <div className="chevron-spacer" />}
                          <FolderIcon />
                          <div className="folder-name-wrapper">
                            <p className="folder-name-text">
                              {folder.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subfolders */}
                  {folder.hasChildren && isExpanded && (
                    <div className="subfolder-list">
                      {subfolders
                        .filter((sub) => sub.parent === folder.name)
                        .map((subfolder) => {
                          const isSubSelected = selectedFolder === subfolder.name;
                          return (
                            <div
                              key={subfolder.name}
                              className={`subfolder-item ${isSubSelected ? "selected" : ""}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedFolder(subfolder.name);
                              }}
                            >
                              <div className="subfolder-content">
                                <FolderIcon />
                                <p className="subfolder-name">
                                  {subfolder.name}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="nav-footer-wrapper">
        <div aria-hidden="true" className="nav-footer-border" />
        <div className="nav-footer-content">
          <div className="nav-footer-inner">
            <div className="user-profile-wrapper">
              <div className="user-profile-content">
                <div className="user-avatar-container">
                  <div className="user-avatar-wrapper">
                    <div className="user-avatar-clip">
                      <img alt="" className="user-avatar-img" src={imgEllipse1381} />
                    </div>
                  </div>
                </div>
                <div className="user-name-wrapper">
                  <p className="user-name-text">Sophia Martinez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
