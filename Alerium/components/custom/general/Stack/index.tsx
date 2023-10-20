// React Peer Dependencies
import React, { ElementType, HTMLAttributes, ReactNode } from "react";
// Types and Interfaces
import { Spacings } from "@constants/interfaces";
// Tailwind Utils
import { twMerge } from "tailwind-merge";
// Styles
import styles from "./style";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: Spacings;
  component?: ElementType;
  separator?: ReactNode;
  direction?: "row" | "col";
}

function Stack({
  children,
  className,
  spacing,
  separator,
  component: Component = "div",
  direction,
  ...rest
}: StackProps) {
  const childArray = React.Children.toArray(children);
  const childrenWithSeparator = childArray.reduce(
    (acc: ReactNode[], child, index) => {
      if (index < childArray.length - 1) {
        acc.push(child);
        if (separator) {
          acc.push(
            React.cloneElement(separator as React.ReactElement, {
              key: "separator-" + index,
            })
          );
        }
      } else {
        acc.push(child);
      }
      return acc;
    },
    []
  );
  return (
    <Component
      className={twMerge(
        styles.primaryStyles,
        spacing && `gap-${spacing}`,
        `flex-${direction ?? "col"}`,
        className
      )}
      {...rest}
    >
      {childrenWithSeparator}
    </Component>
  );
}

export default Stack;
export type { StackProps };
