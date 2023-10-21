"use client";
// React Peer Dependencies
import React, { ReactNode } from "react";
// Next Components
import Link from "next/link"
// Shad CN Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// Custom Components
import {Stack} from '@constants/components';
import { NavigationMenuItemProps } from "@radix-ui/react-navigation-menu";
// Types And Interfaces
type NavigationBarItemProps = {
trigger: ReactNode
} & NavigationMenuItemProps
type NavigationBarProps = {
  items: NavigationBarItemProps[]
}
function NavigationBar({items}:NavigationBarProps) {
  return (
  <NavigationMenu>
    <NavigationMenuList>
      {items.map(({trigger, }, i) => <React.Fragment key={i}>
        <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
      </React.Fragment>)}
    </NavigationMenuList>
  </NavigationMenu>
  );
}

export default NavigationBar;
export type {NavigationBarProps}
