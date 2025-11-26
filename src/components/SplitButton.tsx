import React from 'react';
import './SplitButton.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import WebSearchOnIcon from '../assets/svgs/web-search-on.svg';
import WebSearchOffIcon from '../assets/svgs/web-search-off.svg';

// Simple wrapper components for the SVG icons
function WebSearchOnIconComponent() {
    return (
        <img
            src={WebSearchOnIcon}
            alt="Web search on"
            className="w-6 h-6"
        />
    );
}

function WebSearchOffIconComponent() {
    return (
        <img
            src={WebSearchOffIcon}
            alt="Web search off"
            className="w-6 h-6"
        />
    );
}

interface SplitButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    isWebSearch: boolean;
    onToggleWebSearch: () => void;
    label: string;
    onTextClick?: () => void;
}

export const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
    ({ isWebSearch, onToggleWebSearch, label, onTextClick, className, onClick, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`sb-container ${className || ''}`}
                onClick={onClick}
                {...props}
            >
                <TooltipProvider>
                    {/* Icon Wrapper - Toggle Web Search */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className={`sb-icon-wrapper ${isWebSearch ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleWebSearch();
                                }}
                            >
                                {isWebSearch ? <WebSearchOnIconComponent /> : <WebSearchOffIconComponent />}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>Web Search</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Text Wrapper - Opens Dialog */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className="sb-text-wrapper"
                                onClick={onTextClick}
                                style={{ cursor: onTextClick ? 'pointer' : 'default' }}
                            >
                                <span className="sb-text">
                                    {label}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>Select Sources</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        );
    }
);

SplitButton.displayName = "SplitButton";
