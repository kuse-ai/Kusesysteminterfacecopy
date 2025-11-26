import React, { useState } from 'react';
import { cn } from "./ui/utils";
import './FolderTree.css';

import folderIcon from "../assets/fileBeta/floder.svg";
import pdfIcon from "../assets/fileBeta/pdf.svg";
import htmlIcon from "../assets/fileBeta/html.svg";
import docIcon from "../assets/fileBeta/word.svg";
import excelIcon from "../assets/fileBeta/csv.svg";
import imageIcon from "../assets/fileBeta/icon_img.svg";
import pptIcon from "../assets/fileBeta/ppt.svg";
import videoIcon from "../assets/fileBeta/video.svg";
import defaultIcon from "../assets/fileBeta/txt.svg";
import sharedWithMeIcon from "../assets/fileBeta/shared-with-me.svg";

// --- Types ---
export interface FileNode {
    id: string;
    name: string;
    type: 'folder' | 'file' | 'image' | 'pdf' | 'html' | 'doc' | 'excel' | 'ppt' | 'video';
    children?: FileNode[];
    content?: string;
    src?: string;
}

export type SelectionState = 'checked' | 'unchecked' | 'indeterminate';

// --- Icons ---
const svgPaths = {
    chevron: "M0.5 0.5L3.5 3.5L6.5 0.5"
};

// --- Helper Functions ---
export const getSelectionState = (node: FileNode, checkedIds: Set<string>): SelectionState => {
    if (node.children && node.children.length > 0) {
        const childrenStates = node.children.map(child => getSelectionState(child, checkedIds));
        const allChecked = childrenStates.every(s => s === 'checked');
        const allUnchecked = childrenStates.every(s => s === 'unchecked');
        
        if (allChecked) return 'checked';
        if (allUnchecked) return 'unchecked';
        return 'indeterminate';
    }
    return checkedIds.has(node.id) ? 'checked' : 'unchecked';
};

// --- Sub-components ---

function TreeCheckbox({ state, onClick }: { state: SelectionState, onClick: () => void }) {
    return (
        <div 
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className={cn(
                "tree-checkbox",
                state
            )}
        >
            {state === 'checked' && (
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                     <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            )}
            {state === 'indeterminate' && (
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                     <path d="M2.5 6H9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            )}
        </div>
    );
}

function ExpandArrow({ isOpen, visible, onClick }: { isOpen: boolean, visible: boolean, onClick: (e: React.MouseEvent) => void }) {
    return (
        <div 
            className="expand-arrow"
            onClick={onClick}
        >
            <div className={`expand-arrow-inner ${!isOpen ? 'collapsed' : ''}`}>
               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
                    <path d={svgPaths.chevron} stroke="#6A4040" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
               </svg>
            </div>
        </div>
    );
}

const typeIconMap: Record<FileNode['type'], string> = {
    folder: folderIcon,
    file: defaultIcon,
    image: imageIcon,
    pdf: pdfIcon,
    html: htmlIcon,
    doc: docIcon,
    excel: excelIcon,
    ppt: pptIcon,
    video: videoIcon,
};

function FileIcon({ type, isShared }: { type: FileNode['type'], isShared?: boolean }) {
    if (isShared) {
        return (
            <div className="file-icon-container">
                <img src={sharedWithMeIcon} alt="Shared with me" className="file-icon-base" />
            </div>
        );
    }

    const src = typeIconMap[type] ?? defaultIcon;
    return (
        <div className="file-icon-container">
            <img src={src} alt={`${type} icon`} className="file-icon-base" />
        </div>
    );
}

// --- Main Tree Node Component ---

interface FolderTreeNodeProps {
    node: FileNode;
    checkedIds: Set<string>;
    onToggle: (node: FileNode) => void;
    level?: number;
}

export function FolderTreeNode({ node, checkedIds, onToggle, level = 0 }: FolderTreeNodeProps) {
    // Default collapsed
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const hasChildren = node.children && node.children.length > 0;
    const selectionState = getSelectionState(node, checkedIds);
    
    // Special icon logic based on name/type
    const isShared = node.name === 'Shared with me';
    
    return (
        <div className="w-full">
             <div 
                className="tree-node-container"
                style={{ paddingLeft: `${level * 24 + 8}px` }} // 8px base padding + 24px per level indentation
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    if (hasChildren) {
                        setIsOpen(!isOpen);
                    } else {
                        onToggle(node);
                    }
                }}
            >
                {/* Arrow */}
                <div className="tree-node-arrow-container">
                    {hasChildren && (
                        <ExpandArrow 
                            isOpen={isOpen} 
                            visible={true} 
                            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} 
                        />
                    )}
                </div>

                {/* Checkbox */}
                <TreeCheckbox state={selectionState} onClick={() => onToggle(node)} />

                {/* Icon & Name */}
                <div className="tree-node-content">
                    <FileIcon type={node.type} isShared={isShared} />
                    <p className="tree-node-text">
                        {node.name}
                    </p>
                </div>
            </div>

            {/* Children */}
            {isOpen && hasChildren && (
                <div>
                    {node.children!.map(child => (
                        <FolderTreeNode 
                            key={child.id} 
                            node={child} 
                            checkedIds={checkedIds} 
                            onToggle={onToggle} 
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

interface FolderTreeProps {
    data: FileNode[];
    checkedIds: Set<string>;
    onToggle: (node: FileNode) => void;
}

export function FolderTree({ data, checkedIds, onToggle }: FolderTreeProps) {
    return (
        <div className="folder-tree-root">
            {data.map(node => (
                <FolderTreeNode 
                    key={node.id} 
                    node={node} 
                    checkedIds={checkedIds} 
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
}
