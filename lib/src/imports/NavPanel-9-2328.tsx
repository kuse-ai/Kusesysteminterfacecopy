import svgPaths from "./svg-gkbikjrw3c";
import imgImg from "figma:asset/ee65809f6cb756ff394316efd31f32cfda52c076.png";

function LeftnavIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_9_2350)" id="leftnav_icon">
          <foreignObject height="104" width="104" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_9_2350_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p161de800} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_9_2350_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p161de800} />
          </clipPath>
          <clipPath id="clip0_9_2350">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="logo">
      <LeftnavIcon />
    </div>
  );
}

function LeftnavIcon1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leftnav_icon">
          <path d={svgPaths.p2db8c100} fill="url(#paint0_linear_9_2341)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_2341" x1="12" x2="12" y1="2.49961" y2="21.5">
            <stop stopColor="#9FE430" />
            <stop offset="1" stopColor="#63BC51" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <LeftnavIcon1 />
    </div>
  );
}

function Agent() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Agent">
      <Icon />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Agent</p>
    </div>
  );
}

function LeftnavIcon2() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leftnav_icon">
          <path d={svgPaths.p2461a800} fill="url(#paint0_linear_9_2347)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_2347" x1="12.0001" x2="12.0001" y1="2" y2="22">
            <stop stopColor="#F2BD84" />
            <stop offset="1" stopColor="#F7A854" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <LeftnavIcon2 />
    </div>
  );
}

function Skill() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Skill">
      <Icon1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Skill</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
        <g id="Group 1171276326">
          <rect fill="var(--fill-0, #B1DBFA)" height="12" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="20.4" x="3.57628e-07" />
          <path d={svgPaths.p4b3ad00} fill="var(--fill-0, #82A7CB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftnavIcon3() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <Group />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <LeftnavIcon3 />
    </div>
  );
}

function File() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="File">
      <Icon2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">File</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Logo />
      <Agent />
      <Skill />
      <File />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Profile">
      <div className="absolute aspect-[20/20] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="img">
        <img alt="" className="block max-w-none size-full" height="32" src={imgImg} width="32" />
      </div>
    </div>
  );
}

function NavPanel() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col h-[780px] items-center justify-between max-w-[400px] pb-[26px] pt-[12px] px-0 relative shrink-0 w-[56px]" data-name="nav_panel">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <Frame />
      <Profile />
    </div>
  );
}

export default function NavPanel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="nav_panel">
      <NavPanel />
    </div>
  );
}