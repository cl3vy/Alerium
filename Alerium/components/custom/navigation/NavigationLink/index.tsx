"use client";
// React Peer Dependencies
import React, { ElementType, ReactNode } from "react";
// Next Components
import Link from "next/link";
// Custom Components
import {
  DynamicLink,
  Stack,
  StackProps,
  StaticLink,
  Typography,
  TypographyProps,
} from "@constants/components";
// Types and Interfaces
import { PushNavigationParams } from "@constants/hooks";
import { PushHistoryParams } from "@constants/utils";
import { twMerge } from "tailwind-merge";
// Styles
import styles from "./style";

interface BaseNavigationLinkProps extends Partial<StackProps> {
  description: string | ReactNode;
  accordion?: boolean;
  typographyProps?: Partial<TypographyProps>;
}

interface NavigationLinkProps extends BaseNavigationLinkProps {
  path?: string;
  navigationConfig?:
    | {
        causeRerender: false;
        navigationArgs: PushHistoryParams;
      }
    | {
        causeRerender: true;
        navigationArgs: PushNavigationParams;
      };
}

function NavigationLink({
  path,
  description,
  typographyProps,
  navigationConfig,
  className,
  ...rest
}: NavigationLinkProps) {
  let Component: ElementType;
  if (navigationConfig) {
    const { causeRerender } = navigationConfig;
    if (causeRerender) {
      Component = DynamicLink;
    } else {
      Component = StaticLink;
    }
  } else {
    Component = Stack;
  }
  return (
    <Component
      {...rest}
      navigationargs={navigationConfig?.navigationArgs}
      className={twMerge(styles.link, className)}
    >
      <Stack className={styles.stack}>
        {path && (
          <a>
            <Link href={path} />
          </a>
        )}
        <Typography
          {...typographyProps}
          innerContentClassName={twMerge(
            styles.typography,
            typographyProps?.innerContentClassName
          )}
        >
          {description}
        </Typography>
      </Stack>
    </Component>
  );
}

export default NavigationLink;
export type { NavigationLinkProps };
