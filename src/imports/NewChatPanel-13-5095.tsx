import svgPaths from "./svg-feuswkst2o";

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(32,32,32,0.4)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">New chat</p>
      </div>
    </div>
  );
}

function ChatTitle() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center overflow-clip relative shrink-0 w-[264px]" data-name="chat_title">
      <Frame6 />
    </div>
  );
}

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

function Button() {
  return (
    <div className="bg-[#fdfcf8] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <Icon3 />
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

function Frame5() {
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
    <div className="relative shrink-0 w-full z-[3]" data-name="Chat_Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ChatTitle />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28.381px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="Icon_24">
          <path clipRule="evenodd" d={svgPaths.p2342a6f0} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <Icon4 />
      <p className="font-['Poppins:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#202020] text-[26.947px] text-nowrap whitespace-pre">Hi echoecho</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
      <Frame8 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(32,32,32,0.4)] text-nowrap whitespace-pre">What do you want to create today?</p>
    </div>
  );
}

function Welcome() {
  return (
    <div className="relative shrink-0 w-full" data-name="Welcome">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center px-[70px] py-[25px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="回复区域">
      <Welcome />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ffcc5d] text-[14px] text-nowrap whitespace-pre">@Skillname</p>
      <div className="bg-[#202020] h-[16px] opacity-60 rounded-[2px] shrink-0 w-px" />
    </div>
  );
}

function Group() {
  return (
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
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
      <Group />
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

function Variants() {
  return (
    <div className="bg-[rgba(32,32,32,0.04)] box-border content-stretch flex gap-[2px] h-[28px] items-center max-w-[104px] px-[6px] py-0 relative rounded-[8px] shrink-0 w-[104px]" data-name="Variants">
      <Icon2 />
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icon1 />
      <SourceOnly />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap whitespace-pre">GPT-5</p>
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

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <Frame3 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <IconLightCommon />
        </div>
      </div>
    </div>
  );
}

function Model() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="model">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Model />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Icon5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px pb-[10px] pt-[12px] px-[12px] relative rounded-[8px] shrink-0 w-[376px] z-[1]">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[85px] isolate items-start relative rounded-[8px] shrink-0 z-[1]" data-name="输入框">
      <Frame10 />
    </div>
  );
}

export default function NewChatPanel() {
  return (
    <div className="bg-white relative size-full" data-name="New_Chat panel">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col isolate items-start justify-between max-w-inherit min-w-inherit p-[10px] relative size-full">
          <ChatHeader />
          <Component />
          <Component1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}