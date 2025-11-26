import svgPaths from "./svg-p1ttwh0os1";
import imgEllipse1381 from "figma:asset/65f57febecf14e96f6c70d5e90a5b916e8a55498.png";
import { SkillCard as SkillCardComponent } from "../components/SkillCard";
import { Toggle } from "../components/Toggle";

const SKILL_DESCRIPTION = "This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill";

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

function Icon19() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <LeftnavIcon />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[12px] px-[10px] relative w-full">
          <LogoLight />
          <Icon19 />
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

function Frame28() {
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

function Icon20() {
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
      <Icon20 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group 1171276325">
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" x="4.88758e-05" />
          <path d={svgPaths.p2e357c00} fill="var(--fill-0, #F2BD84)" id="Vector" />
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

function Icon14() {
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
          <Icon14 />
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
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" x="4.88758e-05" />
          <path d={svgPaths.p2e357c00} fill="var(--fill-0, #F2BD84)" id="Vector" />
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

function Icon15() {
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
          <Icon15 />
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
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" x="4.88758e-05" />
          <path d={svgPaths.p2e357c00} fill="var(--fill-0, #F2BD84)" id="Vector" />
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

function Icon16() {
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
          <Icon16 />
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
          <rect fill="var(--fill-0, #EBD7B5)" height="8" id="Rectangle 34625995" opacity="0.4" rx="1.5" width="13.6" x="4.88758e-05" />
          <path d={svgPaths.p2e357c00} fill="var(--fill-0, #F2BD84)" id="Vector" />
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

function Icon17() {
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
          <Icon17 />
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

function Frame26() {
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

function Icon18() {
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
      <Icon18 />
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
      <Frame21 />
      <Frame28 />
      <Frame26 />
      <Frame7 />
    </div>
  );
}

function NavPanel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[2]" data-name="nav_panel">
      <NavPanel />
    </div>
  );
}

function WeuiSearchOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="weui:search-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="weui:search-outlined">
          <path clipRule="evenodd" d={svgPaths.p3fcdff0} fill="var(--fill-0, #202020)" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-white grow h-[36px] max-w-[500px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="search bar">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center max-w-inherit px-[10px] py-0 relative w-full">
          <WeuiSearchOutlined />
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] mix-blend-multiply not-italic relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Search</p>
        </div>
      </div>
    </div>
  );
}

function IonFilter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ion:filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ion:filter">
          <path d={svgPaths.p19147300} fill="var(--fill-0, #202020)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Category() {
  return (
    <div className="bg-white box-border content-stretch flex h-[32px] items-center justify-between px-[10px] py-0 relative rounded-[4px] shrink-0 w-[120px]" data-name="Category">
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] mix-blend-multiply not-italic relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Category</p>
      <IonFilter />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.pa2d8e00} fill="var(--fill-0, #202020)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[4px] overflow-clip rounded-[4px] size-[24px] top-[4px]" data-name="icon">
      <Icon />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon_32">
      <Icon1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Category />
      <Icon21 />
    </div>
  );
}

function Topbar() {
  return (
    <div className="bg-neutral-50 h-[52px] shrink-0 sticky top-0 w-full z-[2]" data-name="topbar">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[52px] items-center justify-between px-[20px] py-[8px] relative w-full">
          <SearchBar />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic pb-0 pt-[20px] px-[40px] relative text-nowrap w-full whitespace-pre">
          <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#202020] text-[14px]">Skills Configuration</p>
          <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] text-[rgba(32,32,32,0.6)]">Configure your AI skills and capabilities. Enable or disable specific skills based on your needs.</p>
        </div>
      </div>
    </div>
  );
}

function IconLightCommon() {
  return (
    <div className="relative size-[12px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Light / Common" opacity="0.4">
          <path clipRule="evenodd" d={svgPaths.p38f0700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconLightCommon />
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">General</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">(3/3)</p>
    </div>
  );
}

function Asdf() {
  return <Toggle pressed={true} />;
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Exampaper</p>
      <Asdf />
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame30 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon4 />
    </div>
  );
}

function By() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By />
      <Tag />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function SkillCard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Exampaper</p>
          <Toggle pressed={true} />
        </div>
        <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Asdf1() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Apple style</p>
      <Asdf1 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame32 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon5 />
    </div>
  );
}

function By1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon3 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By1 />
      <Tag1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function SkillCard1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame33 />
      <Frame10 />
    </div>
  );
}

function Asdf2() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Skill Name</p>
      <Asdf2 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame35 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon6 />
    </div>
  );
}

function By2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon4 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By2 />
      <Tag2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function SkillCard2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame36 />
      <Frame11 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <SkillCardComponent key={i} title="Exampaper" description={SKILL_DESCRIPTION} />
      ))}
      <SkillCardComponent title="Apple style" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Skill Name" description={SKILL_DESCRIPTION} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame69 />
      <Frame22 />
    </div>
  );
}

function IconLightCommon1() {
  return (
    <div className="relative size-[12px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Light / Common" opacity="0.4">
          <path clipRule="evenodd" d={svgPaths.p38f0700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconLightCommon1 />
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">AI Page</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">(3/3)</p>
    </div>
  );
}

function Asdf3() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Exampaper</p>
      <Asdf3 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame38 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon7 />
    </div>
  );
}

function By3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon5 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By3 />
      <Tag3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function SkillCard3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame39 />
      <Frame12 />
    </div>
  );
}

function Asdf4() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Apple style</p>
      <Asdf4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame45 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon8 />
    </div>
  );
}

function By4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon6 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By4 />
      <Tag4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function SkillCard4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame46 />
      <Frame13 />
    </div>
  );
}

function Asdf5() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Skill Name</p>
      <Asdf5 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame48 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon9 />
    </div>
  );
}

function By5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon7 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By5 />
      <Tag5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function SkillCard5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame49 />
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
      <SkillCardComponent title="Exampaper" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Apple style" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Skill Name" description={SKILL_DESCRIPTION} />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame71 />
      <Frame23 />
    </div>
  );
}

function IconLightCommon2() {
  return (
    <div className="relative size-[12px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Light / Common" opacity="0.4">
          <path clipRule="evenodd" d={svgPaths.p38f0700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconLightCommon2 />
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">AI Note</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">(3/3)</p>
    </div>
  );
}

function Asdf6() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Exampaper</p>
      <Asdf6 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame51 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon10 />
    </div>
  );
}

function By6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon8 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By6 />
      <Tag6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function SkillCard6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame52 />
      <Frame15 />
    </div>
  );
}

function Asdf7() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Apple style</p>
      <Asdf7 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame54 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon11 />
    </div>
  );
}

function By7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon9 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By7 />
      <Tag7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function SkillCard7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame55 />
      <Frame16 />
    </div>
  );
}

function Asdf8() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Skill Name</p>
      <Asdf8 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame57 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon12 />
    </div>
  );
}

function By8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon10 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By8 />
      <Tag8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame59 />
    </div>
  );
}

function SkillCard8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame58 />
      <Frame17 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
      <SkillCardComponent title="Exampaper" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Apple style" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Skill Name" description={SKILL_DESCRIPTION} />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame72 />
      <Frame24 />
    </div>
  );
}

function IconLightCommon3() {
  return (
    <div className="relative size-[12px]" data-name="Icon / Light / Common">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Light / Common" opacity="0.4">
          <path clipRule="evenodd" d={svgPaths.p38f0700} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconLightCommon3 />
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">AI Image</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">(3/3)</p>
    </div>
  );
}

function Asdf9() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Exampaper</p>
      <Asdf9 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame60 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon13 />
    </div>
  );
}

function By9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon11 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By9 />
      <Tag9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function SkillCard9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame61 />
      <Frame18 />
    </div>
  );
}

function Asdf10() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Apple style</p>
      <Asdf10 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame63 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon14 />
    </div>
  );
}

function By10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon12 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By10 />
      <Tag10 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function SkillCard10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame64 />
      <Frame19 />
    </div>
  );
}

function Asdf11() {
  return (
    <div className="h-[20px] overflow-clip relative rounded-[99px] shadow-[0px_1px_0px_0px_#ffffff,0px_2px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[36px]" data-name="asdf" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 228, 9, 0.4) 0%, rgba(0, 228, 9, 0.4) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)" }}>
      <div className="absolute bottom-[10%] left-1/2 right-[5.56%] rounded-[99px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.02),0px_5px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.08)] top-[10%]" data-name="asdf" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 35.417%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_1px_inset_#ffffff,0px_1px_0px_0px_inset_#ffffff]" />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04),0px_2px_4px_0px_inset_rgba(0,0,0,0.04),0px_0px_0px_0.5px_inset_rgba(0,0,0,0.06),0px_0px_8px_0px_inset_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202020] text-[12px] text-nowrap">Skill Name</p>
      <Asdf11 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame66 />
      <p className="-webkit-box font-['Poppins:Regular',sans-serif] h-[56px] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] w-full">This is the description of the skill, this is the description of the skill, this is the maximum length. This is the description of the skill, this is the description of the skill, this is the description of the skill</p>
    </div>
  );
}

function LeftnavIcon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="leftnav_icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_24713)" id="leftnav_icon">
          <foreignObject height="92" width="92" x="-40" y="-40">
            <div style={{ backdropFilter: "blur(20px)", clipPath: "url(#bgblur_1_3_24713_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p11d97aa0} data-figma-bg-blur-radius="40" fill="var(--fill-0, #202020)" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_1_3_24713_clip_path" transform="translate(40 40)">
            <path d={svgPaths.p11d97aa0} />
          </clipPath>
          <clipPath id="clip0_3_24713">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[14px]" data-name="icon">
      <LeftnavIcon15 />
    </div>
  );
}

function By11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[16px] shrink-0" data-name="by">
      <Icon13 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">by Kuse</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[8px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">Read only</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <By11 />
      <Tag11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function SkillCard11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start overflow-clip px-[12px] py-[10px] relative rounded-[16px] shrink-0 w-[250px]" data-name="skill-card">
      <Frame67 />
      <Frame20 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
      <SkillCardComponent title="Exampaper" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Apple style" description={SKILL_DESCRIPTION} />
      <SkillCardComponent title="Skill Name" description={SKILL_DESCRIPTION} />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame73 />
      <Frame25 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[905px] relative shrink-0 w-full" data-name="main">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[905px] items-center px-[40px] py-[20px] relative w-full">
          <Frame40 />
          <Frame41 />
          <Frame42 />
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Skill1() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col gap-[10px] items-center overflow-x-clip overflow-y-auto relative shrink-0 w-full z-[1]" data-name="skill 布局">
      <Frame70 />
      <Main />
    </div>
  );
}

export function SkillPage() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[780px] isolate items-center min-h-px min-w-px overflow-clip relative shrink-0 z-[1]" data-name="skill 布局">
      <Topbar />
      <Skill1 />
    </div>
  );
}

export default function Skill3() {
  return (
    <div className="bg-neutral-50 content-stretch flex isolate items-center relative size-full" data-name="演示用这个_skill">
      <NavPanel1 />
      <SkillPage />
    </div>
  );
}