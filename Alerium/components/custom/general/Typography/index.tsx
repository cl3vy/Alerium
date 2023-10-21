// React Peer Dependencies
import React, { ElementType, ReactNode } from "react";
// Types and Interfaces
import { Colors, FontAwesomeTypes } from "@constants/interfaces";
type TypographyProps = {
  children: ReactNode;
  startDecorator?: ReactNode | string;
  endDecorator?: ReactNode | string;
  innerContentClassName?: string;
  color?: Colors;
  className?: string;
  component?: ElementType;
};
// Tailwind Utils
import { twMerge } from "tailwind-merge";
// Styles
import styles from "./styles";
function Typography({
  children,
  innerContentClassName,
  color,
  className,
  startDecorator,
  endDecorator,
  component: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={twMerge(
        `${styles.textAlignCenter} m-0 w-full`,
        className,
        color && `text-${color}`
      )}
    >
      {startDecorator && (
        <span className={`mr-1 ${styles.textAlignCenter}`}>
          {startDecorator}
        </span>
      )}
      <span
        className={twMerge(
          `text-black dark:text-white h-full ${styles.textAlignCenter}`,
          innerContentClassName
        )}
      >
        {children}
      </span>
      {endDecorator && (
        <span className={`ml-auto ${styles.textAlignCenter}`}>
          {endDecorator}
        </span>
      )}
    </Component>
  );
}

export default Typography;
export type { TypographyProps };
