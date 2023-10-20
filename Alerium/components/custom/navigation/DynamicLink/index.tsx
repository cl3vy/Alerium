"use client";
// React Peer Dependencies
import React, { ReactNode } from "react";
// Custom Hooks
import { PushNavigationParams, useEditQueryParams } from "@constants/hooks";
// Tailwind Utils
import { twMerge } from "tailwind-merge";
import { Stack } from "@constants/components";
// Styles
import styles from "./style";
// Types And Interfaces
type DynamicLinkProps = {
  children: ReactNode;
  navigationargs: PushNavigationParams;
  onClick?: () => void;
  className?: string;
};

function DynamicLink({
  children,
  navigationargs,
  onClick,
  className,
}: DynamicLinkProps) {
  const clickHandler = useEditQueryParams(navigationargs);
  return (
    <Stack
      onClick={() => {
        clickHandler();
        onClick && onClick();
      }}
      className={twMerge(styles.stack, className)}
    >
      {children}
    </Stack>
  );
}

export default DynamicLink;
export type { DynamicLinkProps };
