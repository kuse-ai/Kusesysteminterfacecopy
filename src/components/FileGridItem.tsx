import React from "react";
import { FileItem } from "./FileItem";

interface FileGridItemProps {
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

export default function FileGridItem(props: FileGridItemProps) {
  return <FileItem {...props} />;
}
