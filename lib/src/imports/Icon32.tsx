import svgPaths from "./svg-lfz31t5fp4";

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

export default function Icon() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Icon_32">
      <LeftnavIcon />
    </div>
  );
}