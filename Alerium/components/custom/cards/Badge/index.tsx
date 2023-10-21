// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Custom Components
import { Stack, StackProps, Typography } from "@constants/components";
// Types And Interfaces
type BadgeProps = {
  children: ReactNode;
  imageSrc?: string;
  titleClassName?: string;
} & StackProps;
// Styles
import styles from "./style";
// Tailwind Utils
import { twMerge } from "tailwind-merge";

function Badge({
  children,
  imageSrc,
  titleClassName,
  className,
  ...rest
}: BadgeProps) {
  return (
    <Stack
      direction={"row"}
      className={twMerge(styles.container, className)}
      {...rest}
    >
      <Avatar>
        <AvatarImage src={imageSrc} />
        <AvatarFallback>#</AvatarFallback>
      </Avatar>
      <Typography className={twMerge(styles.title, titleClassName)}>
        {children}
      </Typography>
    </Stack>
  );
}

export default Badge;
export type { BadgeProps };
