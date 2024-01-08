import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../navigation-menu";
import { Button } from "../../button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="main-header">
      <div className="m-auto max-w-[1128px] flex justify-between py-6 border-b border-gray-200">
        <div className="location-and-weather">
          <div className="weather"></div>
          <div className="location">
            <div>السعودية</div>
            <div>10 فبراير 2023</div>
          </div>
        </div>
        <div className="logo">
          <img src="https://picsum.photos/160/64?image=101" alt="" />
        </div>
        <div className="user">تسجيل الدخول</div>
      </div>
      <div className="m-auto max-w-[1128px] flex justify-between py-4">
        <div className="logo">
          <img src="https://picsum.photos/160/64?image=103" alt="" />
        </div>
        <div className="navbar flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 3</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 4</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 5</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 6</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item 7</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="link" size="icon">
            <Search className="text-red-500" />
          </Button>
        </div>
        <div className="logo">
          <img src="https://picsum.photos/160/64?image=102" alt="" />
        </div>
      </div>
    </header>
  );
};
