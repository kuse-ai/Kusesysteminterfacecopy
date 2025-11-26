import React, { useState } from 'react';
import { cn } from "./ui/utils";
import './FolderTree.css';

// --- Types ---
export interface FileNode {
    id: string;
    name: string;
    type: 'folder' | 'file' | 'image';
    children?: FileNode[];
    content?: string;
    src?: string;
}

export type SelectionState = 'checked' | 'unchecked' | 'indeterminate';

// --- Icons ---
const svgPaths = {
    folder: "M4.3992e-07 3.76007C-2.19698e-05 2.86008 -3.31879e-05 2.41008 0.229157 2.09463C0.303176 1.99275 0.39277 1.90315 0.494649 1.82914C0.810105 1.59995 1.2601 1.59997 2.16009 1.6L3.71211 1.60006C4.13583 1.60008 4.34769 1.60008 4.54846 1.6531C4.61503 1.67067 4.6804 1.69253 4.74415 1.71853C4.93643 1.79694 5.10568 1.92436 5.4442 2.17921L6.03069 2.62075C6.36923 2.87562 6.53849 3.00305 6.73078 3.08146C6.79454 3.10746 6.85991 3.12932 6.92649 3.1469C7.12727 3.19991 7.33914 3.19991 7.76289 3.19991H11.44C12.3399 3.19991 12.7899 3.19991 13.1053 3.42909C13.2072 3.5031 13.2968 3.59269 13.3708 3.69457C13.6 4.01001 13.6 4.45998 13.6 5.35992L13.6 9.83999C13.6 10.7399 13.6 11.1899 13.3708 11.5053C13.2968 11.6072 13.2072 11.6968 13.1053 11.7708C12.7899 12 12.3399 12 11.44 12H2.16018C1.26026 12 0.810302 12 0.494865 11.7708C0.392992 11.6968 0.303403 11.6072 0.229387 11.5054C0.000205374 11.1899 0.000194158 10.74 0.00017175 9.84004L4.3992e-07 3.76007Z",
    sharedGroup: [
        "M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88562 10.781C9.38552 10.281 8.70724 10 8 10H4C3.29276 10 2.61448 10.281 2.11438 10.781C1.61428 11.2811 1.33333 11.9594 1.33333 12.6667V14",
        "M10.6667 2.08529C11.2385 2.23353 11.7449 2.56746 12.1065 3.03466C12.468 3.50186 12.6641 4.07588 12.6641 4.66662C12.6641 5.25736 12.468 5.83138 12.1065 6.29858C11.7449 6.76578 11.2385 7.09971 10.6667 7.24795",
        "M14.6667 13.9999V12.6666C14.6662 12.0757 14.4696 11.5018 14.1076 11.0348C13.7456 10.5678 13.2388 10.2343 12.6667 10.0866",
        "M6 7.33333C7.47276 7.33333 8.66667 6.13943 8.66667 4.66667C8.66667 3.19391 7.47276 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z"
    ],
    fileBase: "M0 2.16C0 1.26006 1.04308e-07 0.8101 0.22918 0.49466C0.3032 0.39278 0.39278 0.3032 0.49466 0.22918C0.8101 4.47035e-08 1.26006 0 2.16 0H8.8L12 3.2V12.24C12 13.1399 12 13.5899 11.7708 13.9053C11.6968 14.0072 11.6072 14.0968 11.5053 14.1708C11.1899 14.4 10.7399 14.4 9.84 14.4H2.16C1.26006 14.4 0.8101 14.4 0.49466 14.1708C0.39278 14.0968 0.3032 14.0072 0.22918 13.9053C1.04308e-07 13.5899 0 13.1399 0 12.24V2.16Z",
    fileDetail: "M3.91598 1.66791C3.91598 1.95261 3.84888 2.2212 3.71454 2.47367C3.58024 2.72614 3.36538 2.93295 3.06993 3.0941C2.77449 3.24988 2.39578 3.32777 1.93382 3.32777H1.07857C0.9902 3.32777 0.91857 3.3994 0.91857 3.48777V5.44C0.91857 5.5284 0.84693 5.6 0.75857 5.6H0.16C0.0716399 5.6 0 5.5284 0 5.44V0.16C0 0.0716303 0.0716399 0 0.16 0H1.93382C2.36355 0 2.72614 0.0752003 3.02159 0.22561C3.3224 0.37065 3.54533 0.5694 3.69036 0.82187C3.84078 1.07434 3.91598 1.35636 3.91598 1.66791ZM1.93382 2.57842C2.28298 2.57842 2.54351 2.50053 2.7154 2.34475C2.8873 2.1836 2.97324 1.95799 2.97324 1.66791C2.97324 1.05554 2.62677 0.74935 1.93382 0.74935H1.07857C0.9902 0.74935 0.91857 0.82099 0.91857 0.90935V2.41842C0.91857 2.50678 0.9902 2.57842 1.07857 2.57842H1.93382Z",
    fileCorner: "M0 0L3.2 3.2H1.44C0.84 3.2 0.5401 3.2 0.3298 3.04721C0.2619 2.99787 0.2021 2.93814 0.1528 2.87023C-3.8743e-07 2.65994 0 2.35996 0 1.76V0Z",
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

function FileIcon({ type }: { type: FileNode['type'] }) {
    if (type === 'folder') {
        return (
             <div className="file-icon-container">
                <svg className="file-icon-base" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
                    <rect fill="#EBD7B5" height="8" opacity="0.4" rx="1.2" width="13.6" x="0" />
                    <path d={svgPaths.folder} fill="#F2BD84" />
                </svg>
            </div>
        );
    }

    if (type === 'image' || type === 'file') {
        return (
             <div className="file-icon-container">
                <div className="file-detail-icon-wrapper">
                    <svg className="file-icon-base" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
                         <path d={svgPaths.fileBase} fill="#FB7F12" />
                    </svg>
                </div>
                <div className="file-detail-inner-wrapper">
                    <svg className="file-icon-base" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6">
                        <path d={svgPaths.fileDetail} fill="#FDFCF8" />
                    </svg>
                </div>
                 <div className="file-corner-wrapper">
                    <svg className="file-icon-base" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                         <path d={svgPaths.fileCorner} fill="#FDFCF8" opacity="0.4" />
                    </svg>
                </div>
            </div>
        );
    }
    
    return null;
}

function SharedIcon() {
    return (
        <div className="file-icon-container">
            <svg className="file-icon-base" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                {svgPaths.sharedGroup.map((d, i) => (
                    <path key={i} d={d} stroke="#6A4040" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
                ))}
            </svg>
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
                    {isShared ? <SharedIcon /> : <FileIcon type={node.type} />}
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