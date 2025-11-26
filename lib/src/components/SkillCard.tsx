import React, { useState } from "react";
import svgPaths from "../imports/svg-p1ttwh0os1";
import { Toggle } from "./Toggle";
import "./SkillCard.css";

interface SkillCardProps {
  title: string;
  description: string;
  author?: string;
  tag?: string;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}

export function SkillCard({
  title,
  description,
  author = "by Kuse",
  tag = "Read only",
  enabled: initialEnabled = true,
  onToggle,
}: SkillCardProps) {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = (newState: boolean) => {
    setEnabled(newState);
    onToggle?.(newState);
  };

  // Use unique IDs for clip paths to avoid conflicts
  const clipPathId = "clip0_skill_card_icon";
  const bgBlurId = "bgblur_skill_card_icon";

  return (
    <div className="skill-card-root">
      {/* Header Section */}
      <div className="skill-card-header">
        <div className="skill-card-header-top">
          <p className="skill-card-title">{title}</p>
          <Toggle pressed={enabled} onPressedChange={handleToggle} />
        </div>
        <p className="skill-card-description">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="skill-card-footer">
        <div className="skill-card-footer-inner">
          {/* Author */}
          <div className="skill-card-author">
            <div className="skill-card-author-icon">
              <div className="skill-card-author-icon-inner">
                <svg
                  className="skill-card-svg"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12 12"
                >
                  <g clipPath={`url(#${clipPathId})`}>
                    <foreignObject height="92" width="92" x="-40" y="-40">
                      <div
                        style={{
                          backdropFilter: "blur(20px)",
                          clipPath: `url(#${bgBlurId})`,
                          height: "100%",
                          width: "100%",
                        }}
                        xmlns="http://www.w3.org/1999/xhtml"
                      />
                    </foreignObject>
                    <path
                      d={svgPaths.p11d97aa0}
                      data-figma-bg-blur-radius="40"
                      fill="var(--fill-0, #202020)"
                    />
                  </g>
                  <defs>
                    <clipPath id={bgBlurId} transform="translate(40 40)">
                      <path d={svgPaths.p11d97aa0} />
                    </clipPath>
                    <clipPath id={clipPathId}>
                      <rect fill="white" height="12" width="12" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="skill-card-author-name">{author}</p>
          </div>

          {/* Tag */}
          <div className="skill-card-tag">
            <p className="skill-card-tag-text">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
