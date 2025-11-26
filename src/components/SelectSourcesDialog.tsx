import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Toggle } from './Toggle';
import { FolderTree, FileNode, getSelectionState } from './FolderTree';
import './SelectSourcesDialog.css';

// --- Types ---

interface SelectSourcesDialogProps {
    children: React.ReactNode;
    data: FileNode[];
    checkedIds: Set<string>;
    isWebSearch: boolean;
    onSave: (ids: Set<string>, isWebSearch: boolean) => void;
}

// --- Icons ---
const svgPaths = {
    webSearch: "M6.5 12.5C7.83 12.4999 9.1223 12.0581 10.174 11.244C11.2257 10.4299 11.9773 9.2895 12.3107 8.002M6.5 12.5C5.17 12.4999 3.87769 12.0581 2.82598 11.244C1.77427 10.4299 1.02272 9.2895 0.689332 8.002M6.5 12.5C8.1567 12.5 9.5 9.8133 9.5 6.5C9.5 3.18667 8.1567 0.500001 6.5 0.500001M6.5 12.5C4.84333 12.5 3.5 9.8133 3.5 6.5C3.5 3.18667 4.84333 0.500001 6.5 0.500001M12.3107 8.002C12.434 7.522 12.5 7.0187 12.5 6.5C12.5016 5.46807 12.2359 4.45333 11.7287 3.55467M12.3107 8.002C10.5328 8.9876 8.5328 9.5032 6.5 9.5C4.392 9.5 2.41133 8.9567 0.689332 8.002M0.689332 8.002C0.563162 7.5113 0.499552 7.0066 0.500002 6.5C0.500002 5.43 0.780002 4.42467 1.27133 3.55467M6.5 0.500001C7.5642 0.499561 8.6093 0.78224 9.5281 1.31904C10.447 1.85585 11.2065 2.62744 11.7287 3.55467M6.5 0.500001C5.43584 0.499561 4.39072 0.78224 3.47187 1.31904C2.55302 1.85585 1.79353 2.62744 1.27133 3.55467M11.7287 3.55467C10.2771 4.81195 8.4204 5.50276 6.5 5.5C4.50133 5.5 2.67333 4.76667 1.27133 3.55467",
    toggleBg: "M21.5 0H8.5C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17H21.5C26.1944 17 30 13.1944 30 8.5C30 3.80558 26.1944 0 21.5 0Z",
    toggleCircle: "M6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13Z"
};

// --- Internal Components ---

function WebSearchToggleRow({ active, onToggle }: { active: boolean, onToggle: (pressed: boolean) => void }) {
    return (
        <div className="web-search-row">
            <div className="web-search-row-inner">
                <div className="web-search-row-content">
                     {/* Label */}
                    <div className="web-search-label-container">
                        <div className="web-search-icon-wrapper">
                             <svg className="web-search-icon" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                                <path d={svgPaths.webSearch} stroke="#6A4040" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                         <p className="web-search-text">Web search</p>
                    </div>

                    {/* Switch */}
                    <div
                        className="web-search-toggle-wrapper"
                    >
                        <Toggle pressed={active} onPressedChange={onToggle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SelectSourcesDialog({ children, data, checkedIds, isWebSearch, onSave }: SelectSourcesDialogProps) {
    const [open, setOpen] = useState(false);
    const [tempCheckedIds, setTempCheckedIds] = useState<Set<string>>(new Set(checkedIds));
    const [tempIsWebSearch, setTempIsWebSearch] = useState(isWebSearch);

    // Sync state when dialog opens
    useEffect(() => {
        if (open) {
            setTempCheckedIds(new Set(checkedIds));
            setTempIsWebSearch(isWebSearch);
        }
    }, [open, checkedIds, isWebSearch]);

    const handleToggle = (node: FileNode) => {
        setTempCheckedIds(prev => {
            const currentState = getSelectionState(node, prev);
            const targetChecked = currentState !== 'checked'; 
            const newSet = new Set(prev);
            
            const toggleRecursively = (n: FileNode) => {
                if (targetChecked) newSet.add(n.id);
                else newSet.delete(n.id);
                
                if (n.children) n.children.forEach(toggleRecursively);
            };
            
            toggleRecursively(node);
            return newSet;
        });
    };

    const handleSave = () => {
        onSave(tempCheckedIds, tempIsWebSearch);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="select-sources-content">
                <DialogHeader className="select-sources-header">
                    <DialogTitle className="select-sources-title">Select Search Scope</DialogTitle>
                     <DialogDescription className="sr-only">
                        Select files and folders to use as sources for the chat.
                    </DialogDescription>
                </DialogHeader>

                {/* Web Search Toggle Row */}
                <WebSearchToggleRow active={tempIsWebSearch} onToggle={(pressed) => setTempIsWebSearch(pressed)} />
                
                {/* Content Area */}
                <div className="select-sources-body">
                    <div className="select-sources-scroll-container">
                         <ScrollArea className="h-full w-full">
                            <div className="select-sources-tree-wrapper">
                                <FolderTree 
                                    data={data} 
                                    checkedIds={tempCheckedIds} 
                                    onToggle={handleToggle} 
                                />
                            </div>
                        </ScrollArea>
                    </div>
                </div>

                <DialogFooter className="select-sources-footer">
                    <div className="select-sources-count">
                        {(() => {
                            const countFiles = (nodes: FileNode[]): number => {
                                let count = 0;
                                for (const node of nodes) {
                                    if (node.type !== 'folder' && tempCheckedIds.has(node.id)) {
                                        count++;
                                    }
                                    if (node.children) {
                                        count += countFiles(node.children);
                                    }
                                }
                                return count;
                            };
                            return countFiles(data);
                        })()} items selected
                    </div>
                    <div className="select-sources-actions">
                        <button 
                            onClick={() => setOpen(false)} 
                            className="select-sources-cancel-btn"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSave} 
                            className="select-sources-done-btn"
                        >
                            Done
                        </button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}