import React, { useRef, useEffect } from "react";
import svgPaths from "../imports/svg-furmp7g9fx";
import imgEllipse1388Stroke from "figma:asset/b689b9624e750af3e40149c828fafa492d00162d.png";
import "./PopulatedChatPanel.css";

// --- Icons ---

function RiChatAi3Line() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g>
          <g opacity="0.4">
            <path d={svgPaths.p264bce00} fill="#202020" />
            <path d={svgPaths.p27dbfbf0} fill="#202020" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconHistory() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p144c280} fill="#202020" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.pb719200} fill="#202020" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconInteraction() {
  return (
    <div className="relative size-[32px]">
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <g opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p3782a700} fill="#202020" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconTool() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <g opacity="0.6">
          <g>
            <path d={svgPaths.p3bfff4c0} fill="#202020" />
            <path d={svgPaths.pedf9e00} fill="#202020" />
            <path clipRule="evenodd" d={svgPaths.p25376580} fill="#202020" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M8 -0.445312V15.5547" stroke="#202020" strokeOpacity="0.2" />
      </svg>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <g opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p849f780} fill="#202020" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconLoading() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute flex inset-[6.87%_6.87%_6.88%_6.87%] items-center justify-center">
        <div className="flex-none rotate-[270deg] size-[13.8px]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse1388Stroke} />
        </div>
      </div>
    </div>
  );
}

function IconAttach() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g opacity="0.6">
          <path d={svgPaths.p3e4c5b00} fill="#202020" />
        </g>
      </svg>
    </div>
  );
}

function IconSources() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g opacity="0.6">
          <path d={svgPaths.p873db80} fill="#202020" />
        </g>
      </svg>
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p26a7c300} fill="#202020" fillRule="evenodd" opacity="0.2" />
      </svg>
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="relative size-[12px]">
      <svg className="block size-full" fill="none" viewBox="0 0 12 12">
        <g opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p27f6d700} fill="#202020" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

// --- Types ---

export type MessageBlock =
  | { type: 'user'; content: string }
  | { type: 'ai-text'; content: string }
  | { type: 'tool'; name: string; status: 'loading' | 'done'; items: string[] }
  | { type: 'plan'; items: { text: string; done: boolean }[] }
  | { type: 'rich'; content: React.ReactNode }
  | { type: 'image-gen'; prompt: string };

interface PopulatedChatPanelProps {
  messages: MessageBlock[];
  inputValue: string;
  setInputValue: (val: string) => void;
  onSend: () => void;
}

// --- Components ---

function Header() {
  return (
    <div className="pop-chat-header">
      <div className="pop-chat-header-inner">
        <div className="pop-chat-title">
          <RiChatAi3Line />
          <div className="pop-chat-title-text">New Chat</div>
        </div>
        <div className="pop-header-actions">
          <div className="bg-white border border-[rgba(32,32,32,0.08)] flex items-center justify-center p-[8px] rounded-[8px] size-[32px] cursor-pointer">
            <IconPlus />
          </div>
          <div className="flex items-center justify-center size-[32px] cursor-pointer opacity-60">
            <IconHistory />
          </div>
          <div className="flex items-center justify-center size-[32px] cursor-pointer rotate-180 scale-y-[-1]">
            <IconInteraction />
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="user-message-wrapper">
      <div className="user-input-bubble">
        <div className="user-text-bubble">
          <div className="user-text-inner">
            <p className="user-text">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AiTextMessage({ content }: { content: string }) {
  return (
    <div className="ai-message-wrapper">
      <p className="ai-text">{content}</p>
    </div>
  );
}

function ToolBlock({ name, items, status }: { name: string; items: string[]; status: 'loading' | 'done' }) {
  return (
    <div className="tool-block-container">
      <div className="tool-block-border" />
      <div className="tool-header">
        <div className="tool-header-content">
          <div className="tool-icon-wrapper">
            {status === 'loading' ? <IconLoading /> : <IconTool />}
            <p className="tool-name">{name}</p>
          </div>
          <IconSearch />
          <div className="flex items-center gap-[6px]">
            <IconTool />
            <p className="tool-name">Read File</p>
          </div>
        </div>
      </div>
      <div className="tool-body">
        {items.map((item, idx) => (
          <div key={idx} className="tool-item">
            <p className="tool-item-text" style={{ opacity: idx < items.length - 1 ? 0.3 : 1 }}>
              {item}
            </p>
            {idx < items.length - 1 && <IconCheck />}
            {idx === items.length - 1 && status === 'loading' && <IconLoading />}
          </div>
        ))}
      </div>
    </div>
  );
}

// Specialized generic tool block for simple lists like in the design
function GenericToolBlock({ items, status }: { items: string[]; status: 'loading' | 'done' }) {
   return (
    <div className="tool-block-container">
      <div className="tool-block-border" />
       <div className="bg-[rgba(32,32,32,0.04)] flex items-center px-[12px] py-[8px] rounded-t-[8px] w-full gap-[12px]">
         <div className="flex items-center gap-[6px]">
           <IconTool />
           <p className="tool-name">Using Tool</p>
         </div>
       </div>
      <div className="flex flex-col gap-[8px] px-[12px] pb-[8px] pt-[8px] w-full">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[rgba(32,32,32,0.04)] flex items-center justify-between px-[12px] py-[8px] rounded-[8px] w-full">
             <div className="flex items-center gap-[4px] flex-1 overflow-hidden">
                <p className={`tool-item-text ${idx < items.length - 1 ? 'opacity-30 line-through' : ''}`}>
                   {/* Using a simplified representation for the number list */}
                   <span className="mr-1">{idx + 1}.</span>{item}
                </p>
             </div>
             {idx < items.length - 1 && <IconCheck />}
             {idx === items.length - 1 && status === 'loading' && <IconLoading />}
          </div>
        ))}
      </div>
    </div>
   )
}

function PlanBlock({ items }: { items: { text: string; done: boolean }[] }) {
  return (
    <div className="plan-block-root">
      {items.map((item, idx) => (
        <div key={idx} className="plan-list-item">
          <p className={`plan-text ${item.done ? 'plan-text-done' : ''}`}>
            {idx + 1}. {item.text}
          </p>
          {item.done && <IconCheck />}
        </div>
      ))}
    </div>
  );
}

function RichResponse({ content }: { content: React.ReactNode }) {
  return (
    <div className="ai-message-wrapper">
      {content}
    </div>
  );
}

function ImageGenBlock({ prompt }: { prompt: string }) {
  return (
    <div className="image-gen-card">
      <div className="image-gen-border" />
      <div className="image-gen-inner">
        <p className="image-gen-text">{prompt}</p>
        <p className="generating-text">Generating...</p>
        <div className="image-icon-placeholder">
          <svg className="block size-full" fill="none" viewBox="0 0 119 131">
             <rect fill="white" height="111" rx="4" width="99" x="13" y="7" />
             <rect height="112" rx="4.5" stroke="#202020" strokeOpacity="0.08" width="100" x="12.5" y="6.5" />
             <path clipRule="evenodd" d={svgPaths.p3e3eb400} fill="#202020" fillRule="evenodd" opacity="0.08" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export default function PopulatedChatPanel({ messages, inputValue, setInputValue, onSend }: PopulatedChatPanelProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) onSend();
    }
  };

  return (
    <div className="populated-chat-root">
      <div className="populated-chat-border" />
      <div className="populated-chat-inner">
        <Header />
        
        <div className="pop-chat-area">
          <div className="pop-chat-messages-container !justify-start !pt-[20px]">
            {messages.map((msg, idx) => {
              switch (msg.type) {
                case 'user':
                  return <UserMessage key={idx} content={msg.content} />;
                case 'ai-text':
                  return <AiTextMessage key={idx} content={msg.content} />;
                case 'tool':
                  return <GenericToolBlock key={idx} items={msg.items} status={msg.status} />;
                case 'plan':
                  return <PlanBlock key={idx} items={msg.items} />;
                case 'rich':
                  return <RichResponse key={idx} content={msg.content} />;
                case 'image-gen':
                  return <ImageGenBlock key={idx} prompt={msg.prompt} />;
                default:
                  return null;
              }
            })}
            <div ref={bottomRef} />
          </div>
        </div>

        <div className="pop-input-area">
          <div className="pop-input-box">
            <div className="pop-input-field">
              <div className="relative size-[16px] shrink-0 opacity-40">
                 <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <g opacity="0.6">
                      <path d={svgPaths.p74c9100} fill="#202020" />
                      <path d={svgPaths.p18cb2300} fill="#202020" />
                      <path d={svgPaths.p135dc000} fill="#202020" />
                      <path d={svgPaths.p8701b00} fill="#202020" />
                    </g>
                 </svg>
              </div>
              <input 
                className="pop-input-text" 
                placeholder="Ask Kuse Anything..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
              />
            </div>
            <div className="pop-input-actions">
              <div className="pop-action-left">
                <IconAttach />
                <div className="source-btn">
                  <IconSources />
                  <span className="source-btn-text">All sources</span>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="model-btn">
                  <span className="model-btn-text">GPT-5</span>
                  <div className="rotate-[270deg] scale-y-[-1] flex items-center">
                    <IconChevronDown />
                  </div>
                </div>
                <div className="send-icon-wrapper" onClick={() => inputValue.trim() && onSend()}>
                  <IconSend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
