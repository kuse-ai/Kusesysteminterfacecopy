import { useState } from "react";
import EmptyChatPanel from "./EmptyChatPanel";
import PopulatedChatPanel, { MessageBlock } from "./PopulatedChatPanel";

export default function ChatPanel() {
  const [messages, setMessages] = useState<MessageBlock[]>([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (content: string) => {
    // Add user message
    const userMsg: MessageBlock = { type: 'user', content };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    // Easter egg: if content contains "video", show the full demo sequence from Figma
    if (content.toLowerCase().includes("video")) {
      setTimeout(() => {
        const sequence: MessageBlock[] = [
          { type: 'ai-text', content: "Okay, I need to summarize what users who mentioned “video” care about most, using the selected feedback file.\n\nNow I’ll set up a task list and start processing." },
          { type: 'tool', name: 'Planning', status: 'loading', items: ['Read and analyze Kuse Product Architecture.pdf', 'Draft a comprehensive requirements document'] },
          { type: 'ai-text', content: "I will read the selected spreadsheet to find rows that mention “video”, then aggregate the themes and summarize what users care about most." },
          { type: 'tool', name: 'Using Tool', status: 'done', items: ['Read File', 'Using Tool'] },
          { 
            type: 'rich', 
            content: (
              <div className="flex flex-col gap-[20px] w-full font-['Poppins'] text-[14px] text-[#202020]">
                <div className="w-full">
                  <p className="font-bold mb-1">Video preview and templates</p>
                  <ul className="list-disc pl-[21px] m-0">
                    <li className="mb-1">Requests for “Video Preview” reliability and speed (e.g., F-053, F-057, F-064, F-066).</li>
                    <li>Desire for more/better “Video templates” and template management (F-003, F-006, F-019, F-027, F-051).</li>
                  </ul>
                </div>
                <div className="w-full">
                   <p className="font-bold mb-1">Top priorities to address first for a video generation feature:</p>
                   <ul className="list-disc pl-[21px] m-0">
                     <li className="mb-1">Preview stability and speed, plus robust templates.</li>
                     <li className="mb-1">Rendering/export reliability, with common formats and batch support.</li>
                     <li className="mb-1">Editing workflow improvements, including timeline controls.</li>
                     <li className="mb-1">Voiceover/TTS and audio management.</li>
                     <li>Watermark/branding options.</li>
                   </ul>
                 </div>
              </div>
            )
          },
          { type: 'plan', items: [{text: 'Read and analyze Kuse Product Architecture...', done: true}, {text: 'Draft a comprehensive requirements', done: false}] },
          { type: 'ai-text', content: "I have enough architectural context. Next, I will produce the requirements document. To comply with the file-first approach, I'll delegate to AI Notes Agent to create a professional Markdown requirements file in the current project folder, incorporating" },
          { type: 'image-gen', prompt: "Image" }
        ];
        
        // Add messages one by one to simulate thinking (accelerated for demo)
        let i = 0;
        const interval = setInterval(() => {
           if (i < sequence.length) {
             setMessages(prev => [...prev, sequence[i]]);
             i++;
           } else {
             clearInterval(interval);
           }
        }, 500);
      }, 500);
    } else {
      // Standard response
      setTimeout(() => {
        const aiMsg: MessageBlock = { 
          type: 'ai-text', 
          content: "I'm processing your request. How can I help you with that?" 
        };
        setMessages((prev) => [...prev, aiMsg]);
      }, 1000);
    }
  };

  const handleInputSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  if (messages.length === 0) {
    return (
      <div className="w-[360px] bg-neutral-50 border-l border-[#e6e6e6] flex flex-col h-full">
        <EmptyChatPanel onSend={sendMessage} />
      </div>
    );
  }

  return (
    <div className="w-[360px] bg-neutral-50 border-l border-[#e6e6e6] flex flex-col h-full">
      <PopulatedChatPanel 
        messages={messages} 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSend={handleInputSend}
      />
    </div>
  );
}
