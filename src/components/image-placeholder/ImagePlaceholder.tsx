import * as React from "react";

import { cn } from "../../lib/utils";
import { Badge } from "../badge";
import { Play } from "lucide-react";

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
  aspectRatio?: "auto" | "portrait" | "square" | "video";
  width?: number;
  height?: number;
  tag?: string;
  alt?: string;
  link?: string;
  video?: boolean;
  variant?: "variant-1" | "variant-2";
}

export function ImagePlaceholder({
  imgSrc,
  aspectRatio = "auto",
  width,
  height,
  alt,
  tag,
  link,
  className,
  video = false,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div className={cn("", className)} {...props}>
      <div className="relative">
        {tag && (
          <Badge
            variant="secondary"
            className="absolute top-4 right-4 text-red-500"
          >
            {tag}
          </Badge>
        )}

        {link ? (
          <a href="">
            <img
              src={imgSrc}
              alt={alt}
              className={cn(`aspect-${aspectRatio}`, "object-cover")}
            />
          </a>
        ) : (
          <img
            src={imgSrc}
            alt={alt}
            className={cn(`aspect-${aspectRatio}`, "object-cover")}
          />
        )}

        {video && (
          <div className="flex items-center cursor-pointer justify-center absolute bottom-4 right-4 w-5 h-5 bg-white bg-opacity-50 rounded-full backdrop-blur-[5px]">
            <Play className="w-[16px]" />
          </div>
        )}
      </div>
    </div>
  );
}
