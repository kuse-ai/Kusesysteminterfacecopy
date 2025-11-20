import React from "react";
import svgPaths from "../imports/svg-3dyk07kod3";
import { imgScreenshot20251106At1718001 } from "../imports/svg-okb2k";
import "./FileItem.css";

interface FileItemProps {
  file: {
    id: string;
    name: string;
    type: string;
    icon: string;
    preview?: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

function FolderIcon() {
  return (
    <div className="file-icon-root">
      <div className="folder-icon-wrapper">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 86">
          <g>
            <mask height="86" id="mask0_folder" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="96" x="0" y="0">
              <path d={svgPaths.p3330ae00} fill="url(#paint0_linear_folder)" />
            </mask>
            <g mask="url(#mask0_folder)">
              <g filter="url(#filter0_i_folder)">
                <path d={svgPaths.p3a491fc0} fill="#F4DAB0" />
              </g>
              <g filter="url(#filter1_i_folder)">
                <path d={svgPaths.p3ef98d00} fill="url(#paint1_linear_folder)" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91.1057" id="filter0_i_folder" width="96" x="0" y="-1.65748">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3.44828" />
              <feGaussianBlur stdDeviation="25.8621" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.415686 0 0 0 0 0.25098 0 0 0 0 0.25098 0 0 0 0.5 0" />
              <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="79.8884" id="filter1_i_folder" width="96" x="0" y="6.29577">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-8.62069" />
              <feGaussianBlur stdDeviation="68.9655" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.415686 0 0 0 0 0.25098 0 0 0 0 0.25098 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_folder" x1="48" x2="48" y1="4.97216" y2="86">
              <stop stopColor="#DD9657" />
              <stop offset="1" stopColor="#D58E43" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_folder" x1="48" x2="48" y1="21.2959" y2="86.1841">
              <stop stopColor="#FFECCD" />
              <stop offset="1" stopColor="#FAE1AC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PDFPreview({ preview }: { preview?: string }) {
  return (
    <div className="file-icon-root">
      <div className="doc-preview-container">
        {preview && (
          <div
            className="pdf-preview-image-wrapper"
            style={{
              maskImage: `url('${imgScreenshot20251106At1718001}')`,
              WebkitMaskImage: `url('${imgScreenshot20251106At1718001}')`,
            }}
          >
            <img alt="" className="absolute inset-0 object-cover size-full" src={preview} />
          </div>
        )}
        <div className="pdf-label-container">
          <div className="pdf-dot" />
          <p className="doc-label-text">PDF</p>
        </div>
        <div className="doc-fold-corner">
          <div className="doc-fold-corner-svg-wrapper">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
              <g filter="url(#filter0_d_pdf)">
                <path d={svgPaths.p117aaf80} fill="white" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.5" id="filter0_d_pdf" width="40.5" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImagePreview({ preview }: { preview?: string }) {
  return (
    <div className="file-icon-root">
      <div className="image-preview-container">
        {preview ? (
          <img src={preview} alt="" className="image-preview-img" />
        ) : (
          <div className="image-preview-placeholder">
            <span className="image-preview-placeholder-text">IMG</span>
          </div>
        )}
      </div>
    </div>
  );
}

function DocIcon({ type }: { type: string }) {
  const getColor = () => {
    switch (type) {
      case "xlsx":
        return "#63BC51";
      case "docx":
        return "#4A90E2";
      default:
        return "#969696";
    }
  };

  return (
    <div className="file-icon-root">
      <div className="doc-preview-container">
        <div className="generic-doc-container">
          <div className="generic-doc-label">
            <div className="generic-doc-dot" style={{ backgroundColor: getColor() }} />
            <p className="generic-doc-text">{type}</p>
          </div>
        </div>
        <div className="doc-fold-corner">
          <div className="doc-fold-corner-svg-wrapper">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
              <g filter="url(#filter0_d_doc)">
                <path d={svgPaths.p117aaf80} fill="white" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.5" id="filter0_d_doc" width="40.5" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FileItem({ file, isSelected, onClick }: FileItemProps) {
  const renderPreview = () => {
    if (file.type === "folder") {
      return <FolderIcon />;
    } else if (file.type === "pdf") {
      return <PDFPreview preview={file.preview} />;
    } else if (file.type === "image") {
      return <ImagePreview preview={file.preview} />;
    } else {
      return <DocIcon type={file.type} />;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`file-item-root ${isSelected ? "selected" : ""}`}
    >
      <div className="file-item-preview-container">{renderPreview()}</div>
      <div className="file-item-label-container">
        <p className="file-item-label">{file.name}</p>
      </div>
    </div>
  );
}
