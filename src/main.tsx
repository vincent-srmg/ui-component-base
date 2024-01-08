import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ArticleCard } from "./components/article-card";
import { ImagePlaceholder } from "./components/image-placeholder";
import { articles1, articles2, articles3, articles4 } from "../data/article";
import { Button } from "./components/button";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";

import { Header } from "./components/organisms/header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />

    <main className="main-content py-10 bg-[#FAFAFA]">
      <div className=" m-auto max-w-[1128px]">
        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-15">
            <div className="grid grid-cols-3 gap-4">
              {articles1.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleTag={article.articleTag}
                    articleLink={article.articleLink}
                    articleCardVideo={article.articleCardVideo}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-9 flex flex-col gap-4">
            <div className="flex flex-col gap-4 shadow rounded-lg p-4 bg-white">
              {articles2.map(function (article) {
                return (
                  <ArticleCard
                    key={article.articleTitle}
                    articleVariant="horizontal"
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleLink={article.articleLink}
                  />
                );
              })}
            </div>
            <Card className="bg-[#00CA57] rounded-lg text-white flex-auto">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* ADS */}
        <div className="flex items-center justify-center my-[100px]">
          <div className="flex items-center justify-center border w-[728px] h-[90px]">
            ADS HERE
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-15">
            <div className="grid grid-cols-2 gap-4 h-full">
              {articles3.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    articleVariant="horizontal"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleLink={article.articleLink}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-9 flex flex-col gap-4">
            <div className="flex flex-col gap-4 shadow rounded-lg p-4 bg-white">
              {articles2.map(function (article) {
                return (
                  <ArticleCard
                    key={article.articleTitle}
                    articleVariant="horizontal"
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleLink={article.articleLink}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ADS */}
        <div className="flex items-center justify-center my-[100px]">
          <div className="flex items-center justify-center border w-[728px] h-[90px]">
            ADS HERE
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-15">
            <div className="grid grid-cols-3 gap-4">
              {articles4.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleTag={article.articleTag}
                    articleLink={article.articleLink}
                    articleCardVideo={article.articleCardVideo}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-9 flex flex-col gap-4">
            <div className="flex flex-col gap-4 shadow rounded-lg p-4 bg-white">
              {articles2.map(function (article) {
                return (
                  <ArticleCard
                    key={article.articleTitle}
                    articleVariant="horizontal"
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleLink={article.articleLink}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ADS */}
        <div className="flex items-center justify-center my-[100px]">
          <div className="flex items-center justify-center border w-[728px] h-[90px]">
            ADS HERE
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-9 flex flex-col gap-4">
            <ArticleCard
              className="shadow rounded-lg overflow-hidden"
              articleImg="https://picsum.photos/640/640"
              articleImgAspectRatio="square"
              articleTitle="Article Title"
              articleCategory="Article Category"
              articleTag="Article Tag"
              articleLink="https://picsum.photos/"
              articleCardVideo
            />
          </div>
          <div className="col-span-15">
            <div className="grid grid-cols-3 gap-4">
              {articles4.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleTag={article.articleTag}
                    articleLink={article.articleLink}
                    articleCardVideo={article.articleCardVideo}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ADS */}
        <div className="flex items-center justify-center my-[100px]">
          <div className="flex items-center justify-center border w-[728px] h-[90px]">
            ADS HERE
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-15">
            <div className="grid grid-cols-3 gap-4">
              {articles4.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleTag={article.articleTag}
                    articleLink={article.articleLink}
                    articleCardVideo={article.articleCardVideo}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-9 flex flex-col gap-4">
            <ArticleCard
              className="shadow rounded-lg overflow-hidden"
              articleImg="https://picsum.photos/640/640"
              articleImgAspectRatio="square"
              articleTitle="Article Title"
              articleCategory="Article Category"
              articleTag="Article Tag"
              articleLink="https://picsum.photos/"
              articleCardVideo
            />
          </div>
        </div>

        {/* ADS */}
        <div className="flex items-center justify-center my-[100px]">
          <div className="flex items-center justify-center border w-[728px] h-[90px]">
            ADS HERE
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4">
          <div className="col-span-9 flex flex-col gap-4">
            <ArticleCard
              className="shadow rounded-lg overflow-hidden"
              articleImg="https://picsum.photos/640/640"
              articleImgAspectRatio="square"
              articleTitle="Article Title"
              articleCategory="Article Category"
              articleTag="Article Tag"
              articleLink="https://picsum.photos/"
              articleCardVideo
            />
          </div>
          <div className="col-span-15">
            <div className="grid grid-cols-3 gap-4">
              {articles4.map(function (article) {
                return (
                  <ArticleCard
                    className="shadow rounded-lg overflow-hidden"
                    key={article.articleTitle}
                    articleImg={article.articleImg}
                    articleImgAspectRatio={article.articleImgAspectRatio}
                    articleTitle={article.articleTitle}
                    articleCategory={article.articleCategory}
                    articleTag={article.articleTag}
                    articleLink={article.articleLink}
                    articleCardVideo={article.articleCardVideo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="main-footer"></footer>
  </React.StrictMode>
);
