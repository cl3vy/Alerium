"use client";
// React Peer Dependencies
import React from "react";
// Next Components
import Link from "next/link";
// Shad CN Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// Custom Components
import { ThemeToggle, Typography } from "@constants/components";
import { Home, Inbox, User, User2, Users } from "lucide-react";
// Types And Interfaces
type NavigationBarProps = {};

function NavigationBar() {
  return (
    <NavigationMenu
      className={
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <Typography
                className={navigationMenuTriggerStyle()}
                startDecorator={<Home />}
              >
                Home
              </Typography>
            </NavigationMenuLink>
          </Link>
          <Link href="/residents" legacyBehavior passHref>
            <NavigationMenuLink>
              <Typography
                className={navigationMenuTriggerStyle()}
                startDecorator={<Users />}
              >
                Residents
              </Typography>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/requests" legacyBehavior passHref>
            <NavigationMenuLink>
              <Typography
                className={navigationMenuTriggerStyle()}
                startDecorator={<Inbox />}
              >
                Requests
              </Typography>
            </NavigationMenuLink>
          </Link>
          <Link href="/log-in" legacyBehavior passHref>
            <NavigationMenuLink>
              <Typography
                className={navigationMenuTriggerStyle()}
                startDecorator={<User2 />}
              >
                Log In
              </Typography>
            </NavigationMenuLink>
          </Link>
          <Link href="/sign-up" legacyBehavior passHref>
            <NavigationMenuLink>
              <Typography
                className={navigationMenuTriggerStyle()}
                startDecorator={<User/>}
              >
                Sign In
              </Typography>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <ThemeToggle className={'ml-auto my-1'}/>
    </NavigationMenu>
  );
}

export default NavigationBar;
export type { NavigationBarProps };
