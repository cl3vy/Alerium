// React Peer Dependencies
import React, { ReactNode } from "react";
// Custom Components
import { Stack } from "@constants/components";
// Custom Hooks and Functions
import { editQueryParams, PushHistoryParams } from "@constants/utils";
// Types And Interfaces
type StaticLinkProps = {
  children: ReactNode;
  navigationargs: PushHistoryParams;
  onClick?: () => void;
};

function StaticLink({ children, navigationargs, onClick }: StaticLinkProps) {
  return (
    <Stack
      onClick={() => {
        editQueryParams(navigationargs);
        onClick && onClick();
      }}
    >
      {children}
    </Stack>
  );
}

export default StaticLink;
export type { StaticLinkProps };
