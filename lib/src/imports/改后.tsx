import svgPaths from "./svg-furmp7g9fx";
import imgEllipse1388Stroke from "figma:asset/b689b9624e750af3e40149c828fafa492d00162d.png";

function RiChatAi3Line() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:chat-ai-3-line">
          <g id="Subtract">
            <path d={svgPaths.p264bce00} fill="var(--fill-0, #202020)" fillOpacity="0.4" />
            <path d={svgPaths.p27dbfbf0} fill="var(--fill-0, #202020)" fillOpacity="0.4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(32,32,32,0.4)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">New Chat</p>
      </div>
    </div>
  );
}

function ChatTitle() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center overflow-clip relative shrink-0 w-[264px]" data-name="chat_title">
      <RiChatAi3Line />
      <Frame24 />
    </div>
  );
}

function Icon7() {
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

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <Icon7 />
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

function Iconstatus24Px() {
  return (
    <div className="content-stretch flex items-start opacity-60 relative rounded-[4px] shrink-0" data-name="iconstatus/24px">
      <Icon />
    </div>
  );
}

function ChatHistory() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="chat_history">
      <Iconstatus24Px />
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Button />
      <ChatHistory />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconLightInteraction />
        </div>
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat_Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ChatTitle />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function IconLightElements() {
  return (
    <div className="h-[30.302px] relative shrink-0 w-[28.859px]" data-name="Icon / Light / Elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 31">
        <g id="Icon / Light / Elements" opacity="0.6">
          <path d={svgPaths.p2c467980} fill="var(--fill-0, #202020)" id="Subtract" />
          <path d={svgPaths.p1cbf4800} fill="var(--fill-0, white)" id="Rectangle 10237" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Theme() {
  return (
    <div className="bg-[rgba(146,98,71,0.1)] content-stretch flex flex-col gap-[10px] h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]" data-name="theme">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconLightElements />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Theme />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202020] text-[12px] text-nowrap whitespace-pre">File title</p>
    </div>
  );
}

function ChatAboutItem() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[8px] w-full" data-name="chatAbout_item">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03),0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02)]" />
      <Frame25 />
    </div>
  );
}

function IconLightElements1() {
  return (
    <div className="h-[30.302px] relative shrink-0 w-[28.859px]" data-name="Icon / Light / Elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 31">
        <g id="Icon / Light / Elements">
          <path d={svgPaths.p1ab23200} fill="var(--fill-0, #1CD946)" id="Rectangle 10235" />
          <path d={svgPaths.p28e5e400} fill="var(--fill-0, white)" id="X" />
          <path d={svgPaths.p1ec92a00} fill="var(--fill-0, white)" id="Rectangle 10237" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Theme1() {
  return (
    <div className="bg-[rgba(146,98,71,0.1)] content-stretch flex flex-col gap-[10px] h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]" data-name="theme">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconLightElements1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Theme1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">User Feedback</p>
    </div>
  );
}

function ChatAboutItem1() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[8px] items-center ml-0 mt-[9.29px] p-[4px] relative rounded-[8px] w-[160px]" data-name="chatAbout_item">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03),0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02)]" />
      <Frame26 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-[0.03px] mt-0 relative w-[160.813px]">
        <div className="flex-none h-[48px] rotate-[1deg] w-[160px]">
          <ChatAboutItem />
        </div>
      </div>
      <ChatAboutItem1 />
    </div>
  );
}

function ChatAboutSend() {
  return (
    <div className="content-stretch flex flex-col gap-px items-end relative shrink-0 w-[160px]" data-name="chatAbout_send">
      <Group />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end justify-center p-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#202020] text-[14px] w-[min-content]">I’m planning to add video generation feature for Kuse. Summarize what users who mentioned “video” care about most, based on the selected feedback file.</p>
        </div>
      </div>
    </div>
  );
}

function UserInput() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="user_input">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end justify-center pl-[24px] pr-0 py-0 relative w-full">
          <ChatAboutSend />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p2da7c280} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Iconstatus24Px1() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative rounded-[4px] shrink-0" data-name="iconstatus/24px">
      <Icon1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[6px] py-0 relative w-full">
          <Iconstatus24Px1 />
        </div>
      </div>
    </div>
  );
}

function CopyInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] isolate items-end relative shrink-0 w-full" data-name="copy input">
      <UserInput />
      <Frame22 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.6">
          <path d={svgPaths.p74c9100} fill="var(--fill-0, #202020)" id="Vector" />
          <path d={svgPaths.p18cb2300} fill="var(--fill-0, #202020)" id="Vector_2" />
          <path d={svgPaths.p135dc000} fill="var(--fill-0, #202020)" id="Vector_3" />
          <path d={svgPaths.p8701b00} fill="var(--fill-0, #202020)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Planning</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon_24">
          <path d={svgPaths.p348e5700} fill="var(--fill-0, #202020)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] h-[32px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <Frame37 />
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">
        <ol className="list-decimal" start="1">
          <li className="ms-[18px]">
            <span className="leading-[1.5]">Open and analyze User_Feedback.xlsx to find rows that mention “video”, then aggregate the themes and summarize what users care about most.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dashboard">
      <div className="absolute flex inset-[6.87%_6.87%_6.88%_6.87%] items-center justify-center">
        <div className="flex-none rotate-[270deg] size-[13.8px]">
          <div className="relative size-full" data-name="Ellipse 1388 (Stroke)">
            <img alt="" className="block max-w-none size-full" height="13.8" src={imgEllipse1388Stroke} width="13.8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function UsingToolLight1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame4 />
      <Dashboard />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px opacity-30 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">
        <ol className="list-decimal" start="2">
          <li className="ms-[18px]">
            <span className="leading-[1.5]">Synthesize key themes and priorities from insights about</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function IconLightCommon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Light / Common" opacity="0.3">
          <path d={svgPaths.pbc00600} fill="var(--fill-0, #202020)" id="Line 191 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame5 />
      <IconLightCommon />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <UsingToolLight1 />
          <UsingToolLight2 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[8px] shrink-0 w-[368px]">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <UsingToolLight />
      <Frame34 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="-webkit-box font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[14px] w-[368px]">
        <p className="mb-0">Okay, I need to summarize what users who mentioned “video” care about most, using the selected feedback file.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Now I’ll set up a task list and start processing.</p>
      </div>
      <Frame40 />
    </div>
  );
}

function TablerSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_13_10937)" id="tabler:search">
          <path d="M8 -0.445312V15.5547" id="Vector 2513" stroke="var(--stroke-0, #202020)" strokeOpacity="0.2" />
        </g>
        <defs>
          <clipPath id="clip0_13_10937">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconUsingTool() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon_Using Tool">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon_Using Tool" opacity="0.6">
          <g id="Union">
            <path d={svgPaths.p3bfff4c0} fill="var(--fill-0, #202020)" />
            <path d={svgPaths.pedf9e00} fill="var(--fill-0, #202020)" />
            <path clipRule="evenodd" d={svgPaths.p25376580} fill="var(--fill-0, #202020)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <IconUsingTool />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Read File</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Useing Tool</p>
      </div>
      <TablerSearch />
      <Frame15 />
    </div>
  );
}

function IconLightCommon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Light / Common" opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p849f780} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight3() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] box-border content-stretch flex gap-[12px] h-[32px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[368px]" data-name="Using Tool / Light">
      <Frame6 />
      <IconLightCommon1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[14px] w-[368px]">{` I will read the selected spreadsheet to find rows that mention “video”, then aggregate the themes and summarize what users care about most.`}</p>
      <UsingToolLight3 />
      <div className="absolute bg-white h-[173px] left-0 top-[169.71px] w-[368px]" />
    </div>
  );
}

function Response() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#202020] text-[14px] w-full z-[3]" data-name="response1">
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Video preview and templates</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Requests for “Video Preview” reliability and speed (e.g., F-053, F-057, F-064, F-066).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Desire for more/better “Video templates” and template management (F-003, F-006, F-019, F-027, F-051).</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Rendering and performance</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Faster/more reliable rendering and export; reduce failures/timeouts (F-012, F-023, F-032, F-035, F-038, F-059, F-063, F-070).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Batch video operations and efficiency improvements (F-021).</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Editing workflow</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Better editing tools and ease of use in the video editor (F-007, F-011, F-013, F-018, F-041).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">{`Timeline adjustments and controls (F-002, F-010, F-022, F-060). `}</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Export, formats, and upload</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Export options: duration control, formats, quality, and reliability (F-025, F-028, F-034, F-036, F-037).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Video file handling and uploads (F-036, F-038).</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Audio, voiceover, and TTS</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Voiceover/TTS integration and quality (F-009, F-020, F-033, F-045, F-067).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Music support, background music controls, and rendering with audio (F-016, F-029, F-031, F-040, F-046, F-062).</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Watermark and branding</p>
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-[1.5]">Watermark controls (add/remove, customize) and branded output (F-043, F-058, F-065).</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 not-italic">Pricing, usage, and analytics (adjacent concerns impacting video usage)</p>
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-[1.5]">Pricing transparency for video features and usage tracking/analytics (F-071, F-072, F-075, F-080, F-085, F-086).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ReportText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] isolate items-start overflow-clip relative shrink-0 w-full" data-name="report text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202020] text-[14px] w-full z-[4]">Here’s what users who mentioned “video” care about most, based on the selected feedback file:</p>
      <Response />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.6">
          <path d={svgPaths.p74c9100} fill="var(--fill-0, #202020)" id="Vector" />
          <path d={svgPaths.p18cb2300} fill="var(--fill-0, #202020)" id="Vector_2" />
          <path d={svgPaths.p135dc000} fill="var(--fill-0, #202020)" id="Vector_3" />
          <path d={svgPaths.p8701b00} fill="var(--fill-0, #202020)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Planning</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <Frame7 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon_24">
          <path d={svgPaths.p348e5700} fill="var(--fill-0, #202020)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight4() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] h-[32px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <Frame38 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-30 overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[0px] text-nowrap">
        <ol className="list-decimal" start="1">
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Regular',sans-serif] leading-[1.5] line-through not-italic text-[12px]">Open and analyze User_Feedback.xlsx to find rows that mention “video”, then aggregate the themes and summarize what users care about most.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function IconLightCommon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Light / Common" opacity="0.3">
          <path clipRule="evenodd" d={svgPaths.p849f780} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight5() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame8 />
      <IconLightCommon2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-30 overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[0px] text-nowrap">
        <ol className="list-decimal" start="2">
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Regular',sans-serif] leading-[1.5] line-through not-italic text-[12px]">Synthesize key themes and priorities from insights about</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function IconLightCommon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Light / Common" opacity="0.3">
          <path clipRule="evenodd" d={svgPaths.p849f780} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight6() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame9 />
      <IconLightCommon3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <UsingToolLight5 />
          <UsingToolLight6 />
        </div>
      </div>
    </div>
  );
}

function Planing() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[8px] shrink-0 w-full" data-name="planing2">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <UsingToolLight4 />
      <Frame35 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p336ace80} fill="var(--fill-0, #202020)" fillRule="evenodd" />
            <path d={svgPaths.p1962ab00} fill="var(--fill-0, #202020)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Iconstatus24Px2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="iconstatus/24px">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p2da7c280} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Iconstatus24Px3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="iconstatus/24px">
      <Icon3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-0 relative shrink-0 w-full">
      <Iconstatus24Px2 />
      <Iconstatus24Px3 />
    </div>
  );
}

function IconLightElements2() {
  return (
    <div className="h-[30.302px] relative shrink-0 w-[28.859px]" data-name="Icon / Light / Elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 31">
        <g id="Icon / Light / Elements">
          <path d={svgPaths.p2045f6c0} fill="var(--fill-0, #FF4D00)" id="Rectangle 10235" />
          <path d={svgPaths.p22e25300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3f254980} fill="var(--fill-0, white)" id="Rectangle 10237" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Theme2() {
  return (
    <div className="bg-[rgba(146,98,71,0.1)] content-stretch flex flex-col gap-[10px] h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]" data-name="theme">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconLightElements2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Theme2 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Kuse Product Architecture</p>
    </div>
  );
}

function ChatAboutItem2() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 p-[4px] relative rounded-[8px] w-[160px]" data-name="chatAbout_item">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03),0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02)]" />
      <Frame27 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ChatAboutItem2 />
    </div>
  );
}

function ChatAboutSend1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-end relative shrink-0 w-[160px]" data-name="chatAbout_send">
      <Group1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end justify-center p-[12px] relative w-full">
          <div className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#202020] text-[14px] w-[min-content]">
            <p className="mb-0 whitespace-pre-wrap">{`Based on this architecture document and previous chat context,  generate a requirements document for the Video Generation Feature.`}</p>
            <p>Make sure it covers the user pain points identified earlier.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInput1() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="user_input">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end justify-center pl-[24px] pr-0 py-0 relative w-full">
          <ChatAboutSend1 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <path clipRule="evenodd" d={svgPaths.p2da7c280} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Iconstatus24Px4() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative rounded-[4px] shrink-0" data-name="iconstatus/24px">
      <Icon4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[6px] py-0 relative w-full">
          <Iconstatus24Px4 />
        </div>
      </div>
    </div>
  );
}

function CopyInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] isolate items-end relative shrink-0 w-full" data-name="copy input">
      <UserInput1 />
      <Frame23 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.6">
          <path d={svgPaths.p74c9100} fill="var(--fill-0, #202020)" id="Vector" />
          <path d={svgPaths.p18cb2300} fill="var(--fill-0, #202020)" id="Vector_2" />
          <path d={svgPaths.p135dc000} fill="var(--fill-0, #202020)" id="Vector_3" />
          <path d={svgPaths.p8701b00} fill="var(--fill-0, #202020)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Planning</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon_24">
          <path d={svgPaths.p348e5700} fill="var(--fill-0, #202020)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight7() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] h-[32px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <Frame39 />
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px opacity-30 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[0px] text-nowrap">
        <ol className="list-decimal" start="1">
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Regular',sans-serif] leading-[1.5] line-through not-italic text-[12px]">Read and analyze Kuse Product Architecture.pdf</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function IconLightCommon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Light / Common" opacity="0">
          <path d={svgPaths.pbc00600} fill="var(--fill-0, #202020)" id="Line 191 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconLightCommon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Light / Common" opacity="0.3">
          <path clipRule="evenodd" d={svgPaths.p849f780} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function UsingToolLight8() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame11 />
      <IconLightCommon4 />
      <IconLightCommon5 />
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dashboard">
      <div className="absolute flex inset-[6.87%_6.87%_6.88%_6.87%] items-center justify-center">
        <div className="flex-none rotate-[270deg] size-[13.8px]">
          <div className="relative size-full" data-name="Ellipse 1388 (Stroke)">
            <img alt="" className="block max-w-none size-full" height="13.8" src={imgEllipse1388Stroke} width="13.8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">
        <ol className="list-decimal" start="2">
          <li className="ms-[18px]">
            <span className="leading-[1.5]">{`Draft a comprehensive requirements `}</span>
          </li>
        </ol>
      </div>
      <Dashboard1 />
    </div>
  );
}

function UsingToolLight9() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[32px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Using Tool / Light">
      <Frame12 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <UsingToolLight8 />
          <UsingToolLight9 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <UsingToolLight7 />
      <Frame36 />
    </div>
  );
}

function IWillEadTheArch() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="I will ead the arch...">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#202020] text-[14px] w-[min-content]">{` I will ead the architecture PDF to understand system components, data flow, and constraints applicable to a video generation feature. Then draft the requirements document covering preview, rendering/export, editing workflow, voiceover/TTS, and watermark/branding, aligned with the architecture.`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <IWillEadTheArch />
    </div>
  );
}

function IWillEadTheArch1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="I will ead the arch...">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">{`I have enough architectural context. Next, I will produce the requirements document. To comply with the file-first approach, I'll delegate to AI Notes Agent to create a professional Markdown requirements file in the current project folder, incorporating`}</p>
    </div>
  );
}

function Generating() {
  return (
    <div className="h-[18px] relative shrink-0 w-[250px]" data-name="Generating...">
      <p className="[white-space-collapse:collapse] absolute bg-clip-text bg-gradient-to-r font-['Poppins:Regular',sans-serif] from-[#202020] inset-0 leading-[1.5] not-italic opacity-60 overflow-ellipsis overflow-hidden text-[12px] text-nowrap to-[32.2%] to-[rgba(32,32,32,0)]" style={{ WebkitTextFillColor: "transparent" }}>
        Generating...
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="[white-space-collapse:collapse] font-['Poppins:Medium',sans-serif] leading-[1.5] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[14px] text-nowrap w-[min-content]">Image</p>
      <Generating />
    </div>
  );
}

function AidocCard() {
  return (
    <div className="absolute h-[111px] left-[224px] top-[20px] w-[99px]" data-name="AIDOC-card">
      <div className="absolute inset-[-6.31%_-7.07%_-11.71%_-13.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 131">
          <g filter="url(#filter0_d_13_10888)" id="AIDOC-card">
            <rect fill="var(--fill-0, white)" height="111" rx="4" width="99" x="13" y="7" />
            <rect height="112" rx="4.5" stroke="var(--stroke-0, #202020)" strokeOpacity="0.08" width="100" x="12.5" y="6.5" />
            <path clipRule="evenodd" d={svgPaths.p3e3eb400} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Subtract" opacity="0.08" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131" id="filter0_d_13_10888" width="119" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-3" dy="3" />
              <feGaussianBlur stdDeviation="4.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.678431 0 0 0 0 0.678431 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_13_10888" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_13_10888" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[rgba(32,32,32,0.12)] h-[93px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[93px] items-start justify-center p-[16px] relative w-full">
          <Frame32 />
          <AidocCard />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AiDocCard() {
  return (
    <div className="bg-[rgba(32,32,32,0.02)] max-w-[368px] relative rounded-[12px] shrink-0 w-full" data-name="AI doc card">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit p-[10px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function ChatArea() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="chatArea">
      <div className="flex flex-col justify-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-end px-[16px] py-0 relative size-full">
          <CopyInput />
          <Frame41 />
          <Frame42 />
          <ReportText />
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">I will now synthesize the top priorities from what I’ve learned.</p>
          <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#202020] text-[0px] w-full">
            <p className="leading-[1.5] mb-0 text-[14px]">&nbsp;</p>
            <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] mb-0 text-[18px]">Top priorities to address first for a video generation feature:</p>
            <p className="leading-[1.5] mb-0 text-[14px]">&nbsp;</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
                <span className="leading-[1.5] text-[14px]">Preview stability and speed, plus robust templates.</span>
              </li>
              <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
                <span className="leading-[1.5] text-[14px]">Rendering/export reliability, with common formats and batch support.</span>
              </li>
              <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
                <span className="leading-[1.5] text-[14px]">Editing workflow improvements, including timeline controls.</span>
              </li>
              <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
                <span className="leading-[1.5] text-[14px]">Voiceover/TTS and audio management.</span>
              </li>
              <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
                <span className="leading-[1.5] text-[14px]">Watermark/branding options.</span>
              </li>
            </ul>
          </div>
          <Planing />
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">All set. Let me know if you want me to turn this into a structured requirements document or backlog items.</p>
          <Frame31 />
          <CopyInput1 />
          <Frame43 />
          <Frame44 />
          <IWillEadTheArch1 />
          <AiDocCard />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#202020] h-[16px] opacity-60 rounded-[2px] shrink-0 w-px" />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic opacity-40 relative shrink-0 text-[#202020] text-[14px] text-nowrap whitespace-pre">Ask Kuse Anything...</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon" opacity="0.6">
          <path d={svgPaths.p3e4c5b00} fill="var(--fill-0, #202020)" id="Vector 3098 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
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

function Variants() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] box-border content-stretch flex gap-[2px] h-[28px] items-center max-w-[104px] px-[6px] py-0 relative rounded-[8px] shrink-0 w-[104px]" data-name="Variants">
      <Icon6 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">All sources</p>
    </div>
  );
}

function SourceOnly() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[104px]" data-name="source only">
      <Variants />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icon5 />
      <SourceOnly />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap whitespace-pre">GPT-5</p>
    </div>
  );
}

function IconLightCommon6() {
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

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <Frame19 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <IconLightCommon6 />
        </div>
      </div>
    </div>
  );
}

function Model() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="model">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame28 />
      <Model />
    </div>
  );
}

function Icon11() {
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Icon11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px pb-[10px] pt-[12px] px-[12px] relative rounded-[8px] shrink-0 w-[376px] z-[2]">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[85px] isolate items-start relative rounded-[8px] shrink-0" data-name="输入框">
      <Frame30 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[12px] pt-0 px-[12px] relative w-full">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white relative size-full" data-name="改后">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-inherit min-w-inherit relative size-full">
        <ChatHeader />
        <ChatArea />
        <Frame29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}