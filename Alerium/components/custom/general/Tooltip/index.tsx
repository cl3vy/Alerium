// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import {
  Tooltip as ShadCNTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Styles
import styles from "./style";
//  Types And Interfaces
type TooltipProps = {
  content: string | ReactNode;
  children: ReactNode;
};

function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <ShadCNTooltip>
        <TooltipTrigger className={styles.tooltipTrigger}>
          {children}
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </ShadCNTooltip>
    </TooltipProvider>
  );
}

export default Tooltip;
export type { TooltipProps };
