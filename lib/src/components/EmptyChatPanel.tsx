import React, { useState } from "react";
import svgPaths from "../imports/svg-1vo43hmms7";
import "./EmptyChatPanel.css";

interface EmptyChatPanelProps {
  onSend: (message: string) => void;
}

// --- Icons ---

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon_24">
          <path clipRule="evenodd" d={svgPaths.pb719200} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector 2479 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p144c280} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLightInteraction() {
  return (
    <div className="relative size-[32px]" data-name="Icon / Light / Interaction">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Light / Interaction">
          <g id="Icon / Light / Tool bar" opacity="0.6">
            <path clipRule="evenodd" d={svgPaths.p3782a700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28.381px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="Icon_24">
          <path clipRule="evenodd" d={svgPaths.p20a02c00} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
      <div className="absolute inset-[20.83%_20.44%_16.67%_16.67%]">
        <div className="absolute inset-[-4.67%_-4.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <g id="Group 2147206601">
              <path d={svgPaths.p38967480} id="Vector" stroke="var(--stroke-0, #797979)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              <path d={svgPaths.p32f2ce60} id="Vector_2" stroke="var(--stroke-0, #797979)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <path d={svgPaths.p873db80} fill="var(--fill-0, #202020)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconLightCommon() {
  return (
    <div className="relative size-[12px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Light / Common" opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p27f6d700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon_24">
          <path clipRule="evenodd" d={svgPaths.p26a7c300} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Subtract" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

// --- Component ---

export default function EmptyChatPanel({ onSend }: EmptyChatPanelProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onSend(inputValue);
        setInputValue("");
      }
    }
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="empty-chat-root">
      <div className="empty-chat-border" aria-hidden="true" />
      <div className="empty-chat-content">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-inner">
            <div className="chat-title !w-auto !flex-1 !min-w-0">
              <div className="chat-title-text truncate">New chat</div>
            </div>
            <div className="header-actions shrink-0">
              <div className="header-btn">
                <div className="header-btn-border" />
                <Icon3 />
              </div>
              <div className="chat-history-btn">
                <div className="content-stretch flex items-start opacity-60 relative rounded-[4px] shrink-0">
                  <Icon />
                </div>
              </div>
              <div className="interaction-icon-wrapper">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <IconLightInteraction />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Area */}
        <div className="welcome-area">
          <div className="welcome-content">
            <div className="welcome-message-wrapper">
              <div className="welcome-title-row">
                <Icon4 />
                <p className="welcome-title-text">Hi echoecho</p>
              </div>
              <p className="welcome-subtitle-text">What do you want to create today?</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="input-container">
          <div className="input-box">
            <div className="input-box-border" />
            
            <div className="input-field-wrapper">
              <input
                className="real-input"
                placeholder="Ask Kuse Anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
            </div>

            <div className="input-actions-row">
              <div className="input-bottom-row">
                <div className="source-selector">
                  <Icon1 />
                  <div className="source-btn">
                    <div className="source-selector">
                      <Icon2 />
                      <p className="source-text">All sources</p>
                    </div>
                  </div>
                </div>
                
                <div className="model-selector">
                  <div className="model-selector-border" />
                  <div className="model-inner">
                    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0">
                      <p className="model-text">GPT-5</p>
                    </div>
                    <div className="flex h-[12px] w-[12px] items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                        <IconLightCommon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="submit-icon" onClick={handleSendClick}>
                <Icon5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
