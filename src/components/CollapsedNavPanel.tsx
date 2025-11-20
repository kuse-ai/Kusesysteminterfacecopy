import React from "react";
import svgPaths from "../imports/svg-gkbikjrw3c";
import imgEllipse1381 from "figma:asset/65f57febecf14e96f6c70d5e90a5b916e8a55498.png";

interface CollapsedNavPanelProps {
  onExpand: () => void;
  activeView?: "files" | "skill";
  onViewChange: (view: "files" | "skill") => void;
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
      data-name="leftnav_icon"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_9_2350)" id="leftnav_icon">
          <foreignObject height="104" width="104" x="-40" y="-40">
            <div
              style={{
                backdropFilter: "blur(20px)",
                clipPath: "url(#bgblur_1_9_2350_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d={svgPaths.p161de800}
            data-figma-bg-blur-radius="40"
            fill="var(--fill-0, #202020)"
            id="Union"
          />
        </g>
        <defs>
          <clipPath
            id="bgblur_1_9_2350_clip_path"
            transform="translate(40 40)"
          >
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

const EXPAND_ICON_PATH =
  "M18.0297 3.75C18.633 3.74998 19.1425 3.74952 19.5543 3.79604C19.9878 3.84506 20.3965 3.95365 20.7598 4.2288C20.9635 4.38319 21.1427 4.56995 21.2908 4.7824C21.5547 5.16111 21.6588 5.58722 21.7058 6.03924C21.7505 6.46857 21.75 6.99978 21.75 7.6287V16.3713C21.75 17.0002 21.7505 17.5314 21.7058 17.9608C21.6588 18.4128 21.5547 18.8389 21.2908 19.2176C21.1427 19.4301 20.9635 19.6168 20.7598 19.7712C20.3965 20.0464 19.9878 20.1549 19.5543 20.204C19.1425 20.2505 18.633 20.25 18.0297 20.25H5.97028C5.36703 20.25 4.85754 20.2505 4.44574 20.204C4.01218 20.1549 3.60348 20.0464 3.24024 19.7712C3.03646 19.6168 2.85733 19.4301 2.70924 19.2176C2.44533 18.8389 2.34118 18.4128 2.29416 17.9608C2.24954 17.5314 2.24998 17.0002 2.25 16.3713V7.6287C2.24998 6.99976 2.24954 6.46858 2.29416 6.03924C2.34118 5.58722 2.44533 5.16111 2.70924 4.7824C2.85733 4.56995 3.03646 4.38319 3.24024 4.2288C3.60348 3.95365 4.01218 3.84506 4.44574 3.79604C4.85754 3.74952 5.36704 3.74998 5.97028 3.75H18.0297ZM9.45652 18.7768H17.9911C18.6426 18.7768 19.0752 18.7757 19.4019 18.7388C19.7151 18.7034 19.8473 18.6423 19.9296 18.58C20.0134 18.5164 20.0872 18.4395 20.1482 18.3521C20.208 18.2663 20.2666 18.1285 20.3005 17.8019C20.3359 17.4613 20.337 17.0103 20.337 16.331V7.66898C20.337 6.98967 20.3359 6.53872 20.3005 6.19807C20.2666 5.87151 20.208 5.73374 20.1482 5.64792C20.0872 5.56051 20.0134 5.48356 19.9296 5.42003C19.8473 5.35767 19.7151 5.29662 19.4019 5.2612C19.0752 5.22429 18.6426 5.22322 17.9911 5.22322H9.45652V18.7768ZM6.00892 5.22322C5.35736 5.22322 4.92482 5.22429 4.59808 5.2612C4.28486 5.29662 4.15271 5.35767 4.0704 5.42003C3.98657 5.48356 3.91276 5.56051 3.85182 5.64792C3.79201 5.73374 3.73345 5.87151 3.69947 6.19807C3.66408 6.53872 3.66304 6.98967 3.66304 7.66898V16.331C3.66304 17.0103 3.66408 17.4613 3.69947 17.8019C3.73345 18.1285 3.79201 18.2663 3.85182 18.3521C3.91276 18.4395 3.98657 18.5164 4.0704 18.58C4.15271 18.6423 4.28486 18.7034 4.59808 18.7388C4.92482 18.7757 5.35736 18.7768 6.00892 18.7768H8.04348V5.22322H6.00892Z";

function ExpandIcon() {
  return (
    <div
      className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="leftnav_icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="leftnav_icon">
          <path
            clipRule="evenodd"
            d={EXPAND_ICON_PATH}
            fill="var(--fill-0, #777777)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo({ onExpand }: { onExpand: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-neutral-100 transition-colors"
      data-name="logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onExpand}
    >
      {isHovered ? <ExpandIcon /> : <MenuIcon onClick={onExpand} />}
    </div>
  );
}

function AgentIcon() {
  return (
    <div
      className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="leftnav_icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="leftnav_icon">
          <path
            d={svgPaths.p2db8c100}
            fill="url(#paint0_linear_9_2341)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_9_2341"
            x1="12"
            x2="12"
            y1="2.49961"
            y2="21.5"
          >
            <stop stopColor="#9FE430" />
            <stop offset="1" stopColor="#63BC51" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SkillIcon() {
  return (
    <div
      className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="leftnav_icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="leftnav_icon">
          <path
            d={svgPaths.p2461a800}
            fill="url(#paint0_linear_9_2347)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_9_2347"
            x1="12.0001"
            x2="12.0001"
            y1="2"
            y2="22"
          >
            <stop stopColor="#F2BD84" />
            <stop offset="1" stopColor="#F7A854" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileIcon() {
  return (
    <div className="absolute inset-[12.5%_7.5%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 18"
      >
        <g id="Group 1171276326">
          <rect
            fill="var(--fill-0, #B1DBFA)"
            height="12"
            id="Rectangle 34625995"
            opacity="0.4"
            rx="1.5"
            width="20.4"
            x="3.57628e-07"
          />
          <path
            d={svgPaths.p4b3ad00}
            fill="var(--fill-0, #82A7CB)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

interface CollapsedNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function CollapsedNavItem({
  icon,
  label,
  isActive,
  onClick,
}: CollapsedNavItemProps) {
  return (
    <div
      className={`content-stretch flex flex-col items-center relative shrink-0 cursor-pointer rounded-[4px] p-[2px] ${
        isActive ? "bg-neutral-100" : "hover:bg-neutral-100"
      }`}
      onClick={onClick}
    >
      <div className="relative rounded-[4px] shrink-0 size-[32px]">
        {icon}
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(32,32,32,0.6)] text-nowrap whitespace-pre">
        {label}
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Profile">
      <div
        className="absolute aspect-[20/20] bottom-0 left-1/2 top-0 translate-x-[-50%]"
        data-name="img"
      >
        <img
          alt=""
          className="block max-w-none size-full rounded-full"
          height="32"
          src={imgEllipse1381}
          width="32"
        />
      </div>
    </div>
  );
}

export function CollapsedNavPanel({
  onExpand,
  activeView,
  onViewChange,
}: CollapsedNavPanelProps) {
  return (
    <div
      className="bg-neutral-50 box-border content-stretch flex flex-col h-full items-center justify-between pb-[26px] pt-[12px] px-0 relative shrink-0 w-[56px] border-r border-[#e6e6e6]"
      data-name="nav_panel"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <Logo onExpand={onExpand} />
        <CollapsedNavItem icon={<AgentIcon />} label="Agent" />
        <CollapsedNavItem
          icon={<SkillIcon />}
          label="Skill"
          isActive={activeView === "skill"}
          onClick={() => onViewChange("skill")}
        />
        <CollapsedNavItem
          icon={
            <div
              className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
              data-name="leftnav_icon"
            >
              <FileIcon />
            </div>
          }
          label="File"
          isActive={activeView === "files"}
          onClick={() => onViewChange("files")}
        />
      </div>
      <Profile />
    </div>
  );
}
