import React from "react";
import { cn } from "../../lib/utils";
import { ImagePlaceholder } from "../image-placeholder";

export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  articleImg?: string;
  articleImgAspectRatio?: "portrait" | "square";
  articleVariant?: "vertical" | "horizontal";
  articleTitle?: string;
  articleCategory?: string;
  articleTag?: string;
  articleLink?: string;
  articleCardVideo?: boolean;
}

export function ArticleCard({
  articleImg,
  articleImgAspectRatio = "portrait",
  articleVariant = "vertical",
  articleTitle,
  articleCategory,
  articleTag,
  articleLink,
  articleCardVideo,
  className,
  ...props
}: ArticleCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-white",
        `${articleVariant == "horizontal" && "flex-row"}`,
        className
      )}
      {...props}
    >
      {articleImg && (
        <ImagePlaceholder
          className={cn(`${articleVariant == "horizontal" && "w-[120px]"}`)}
          imgSrc={articleImg}
          aspectRatio={articleImgAspectRatio}
          tag={articleTag}
          alt={articleTitle}
          link={articleLink}
          video={articleCardVideo}
        />
      )}
      <div className="flex-auto">
        <div className={cn(`${articleVariant == "vertical" && "px-4"}`)}>
          <p>{articleCategory}</p>
          <h3>{articleTitle}</h3>
        </div>
        <div className="px-2">...</div>
      </div>
    </div>
  );
}
