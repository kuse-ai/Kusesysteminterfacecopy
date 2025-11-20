import svgPaths from "./svg-he6gmen30l";
import imgEllipse1381 from "figma:asset/65f57febecf14e96f6c70d5e90a5b916e8a55498.png";

function LogoLight() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70px]" data-name="Logo / Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 24">
        <g id="Logo / Light">
          <foreignObject height="104" width="104" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_0_3_18127_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path clipRule="evenodd" d={svgPaths.p161de800} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" fillRule="evenodd" id="Union" />
          <path d={svgPaths.p3477600} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="bgblur_0_3_18127_clip_path" transform="translate(40 40)">
            <path clipRule="evenodd" d={svgPaths.p161de800} fillRule="evenodd" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftnavIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leftnav_icon">
          <path clipRule="evenodd" d={svgPaths.p22ba4700} fill="var(--fill-0, #777777)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <LeftnavIcon />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[12px] px-[10px] relative w-full">
          <LogoLight />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function LeftnavIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="leftnav_icon">
          <path d={svgPaths.p2b125600} fill="url(#paint0_linear_3_18124)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_18124" x1="8" x2="8" y1="1.6664" y2="14.3333">
            <stop stopColor="#9FE430" />
            <stop offset="1" stopColor="#63BC51" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow h-[16px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Agent</p>
      </div>
    </div>
  );
}

function Rename() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-between px-[4px] py-0 relative rounded-[4px] shrink-0 w-[147px]" data-name="rename区域">
      <Text />
    </div>
  );
}

function Agent() {
  return (
    <div className="relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Agent">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center pl-[4px] pr-0 py-[4px] relative w-full">
          <LeftnavIcon1 />
          <Rename />
        </div>
      </div>
    </div>
  );
}

function LeftnavIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="leftnav_icon">
          <path d={svgPaths.p1a1bfac0} fill="url(#paint0_linear_3_18121)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_18121" x1="8.00004" x2="8.00004" y1="1.33334" y2="14.6667">
            <stop stopColor="#F2BD84" />
            <stop offset="1" stopColor="#F7A854" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow h-[16px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Skill</p>
      </div>
    </div>
  );
}

function Rename1() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-between px-[4px] py-0 relative rounded-[4px] shrink-0 w-[147px]" data-name="rename区域">
      <Text1 />
    </div>
  );
}

function Skill() {
  return (
    <div className="relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Skill">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center pl-[4px] pr-0 py-[4px] relative w-full">
          <LeftnavIcon2 />
          <Rename1 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[10px] py-0 relative shrink-0 w-[240px]">
      <Agent />
      <Skill />
    </div>
  );
}

function LeftnavIcon3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leftnav_icon">
          <path d={svgPaths.p1bf51d00} id="Vector 3121" stroke="var(--stroke-0, #777777)" strokeLinecap="round" />
          <path d={svgPaths.p6f00980} id="Vector 3122" stroke="var(--stroke-0, #777777)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon_32">
      <LeftnavIcon3 />
    </div>
  );
}

function FileTop() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-between pl-[14px] pr-[10px] py-0 relative shrink-0 w-[240px]" data-name="File-top">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Files</p>
      <Icon6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group 1171276325">
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" />
          <path d={svgPaths.p241d7580} fill="var(--fill-0, #F2BD84)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLightElements() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Elements">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[214px]">
      <IconLightElements />
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[10px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Folder 1</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon_24" opacity="0">
          <path clipRule="evenodd" d={svgPaths.pba89000} fill="var(--fill-0, #202020)" fillOpacity="0.6" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Files() {
  return (
    <div className="h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="files">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between pl-[18px] pr-[8px] py-[8px] relative w-full">
          <Frame />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group 1171276325">
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" />
          <path d={svgPaths.p241d7580} fill="var(--fill-0, #F2BD84)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLightElements1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Elements">
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[214px]">
      <IconLightElements1 />
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[10px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Folder 2</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon_24" opacity="0">
          <path clipRule="evenodd" d={svgPaths.pba89000} fill="var(--fill-0, #202020)" fillOpacity="0.6" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Files1() {
  return (
    <div className="h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="files">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between pl-[18px] pr-[8px] py-[8px] relative w-full">
          <Frame1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group 1171276325">
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" />
          <path d={svgPaths.p241d7580} fill="var(--fill-0, #F2BD84)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLightElements2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Elements">
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[214px]">
      <IconLightElements2 />
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[10px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Folder 3</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon_24">
          <g id="Vector (Stroke)"></g>
        </g>
      </svg>
    </div>
  );
}

function Files2() {
  return (
    <div className="h-[34px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full" data-name="files">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between pl-[18px] pr-[8px] py-[8px] relative w-full">
          <Frame2 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group 1171276325">
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" />
          <path d={svgPaths.p241d7580} fill="var(--fill-0, #F2BD84)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLightElements3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Light / Elements">
      <Group3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[214px]">
      <IconLightElements3 />
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[10px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.5] overflow-ellipsis overflow-hidden">Kuse Onboarding</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon_24" opacity="0">
          <path clipRule="evenodd" d={svgPaths.pba89000} fill="var(--fill-0, #202020)" fillOpacity="0.6" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Files3() {
  return (
    <div className="h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="files">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between pl-[18px] pr-[8px] py-[8px] relative w-full">
          <Frame3 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <Files />
      <Files1 />
      <Files2 />
      <Files3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Folderlist() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[542px] items-start relative shrink-0 w-full" data-name="folderlist">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 w-[240px]">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
            <path d={svgPaths.p25cb7400} id="Vector 3120" stroke="var(--stroke-0, #E6E6E6)" />
          </svg>
        </div>
      </div>
      <FileTop />
      <Folderlist />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon_24">
      <div className="absolute aspect-[20/20] bottom-0 left-1/2 top-0 translate-x-[-50%]">
        <div className="absolute inset-[-1.04%]">
          <img alt="" className="block max-w-none size-full" height="32.667" src={imgEllipse1381} width="32.667" />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-end relative shrink-0">
      <Icon4 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap">
        <p className="leading-[1.5] overflow-ellipsis overflow-hidden whitespace-pre">Sophia Martinez</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[80px] items-center pb-[12px] pl-[10px] pr-[12px] pt-[8px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function NavPanel() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col gap-[16px] h-[780px] items-center max-w-[400px] relative shrink-0 w-[240px]" data-name="nav_panel">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <Frame9 />
      <Frame11 />
      <Frame10 />
      <Frame7 />
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