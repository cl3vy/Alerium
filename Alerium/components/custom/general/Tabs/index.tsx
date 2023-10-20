"use client";
// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import {
  Tabs as ShadCNTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"; // Tailwind Utils
import { twMerge } from "tailwind-merge"; // Styles
import styles from "./style"; // Icons
import { PlusIcon } from "lucide-react";
import { NavigationLink } from "@constants/components"; // Types And Interfaces
// Types And Interfaces
type TabsProps = {
  defaultOpenTabID?: string | number;
  className?: string;
  tabs: TabProps[];
  addTabs?: true;
  onValueChange?: (tabID: string) => void;
};
type TabProps = {
  tabID: string;
  tabTitle: string;
  tabContent: ReactNode;
  className?: string;
  tabTriggerClassName?: string;
};

function Tabs({
  defaultOpenTabID,
  className,
  tabs,
  addTabs,
  onValueChange,
}: TabsProps) {
  return (
    <ShadCNTabs
      defaultValue={defaultOpenTabID ? String(defaultOpenTabID) : tabs[0].tabID}
      className={twMerge(styles.tabsProvider, className)}
      onValueChange={onValueChange}
    >
      <TabsList className={styles.tabList}>
        {tabs.map(({ tabID, tabTitle, tabTriggerClassName }, i) => (
          <TabsTrigger
            value={tabID}
            key={i}
            className={twMerge(styles.tabTrigger, tabTriggerClassName)}
          >
            {tabTitle}
          </TabsTrigger>
        ))}
        {addTabs && (
          <NavigationLink
            className={styles.addTab}
            description={<PlusIcon />}
            navigationConfig={{
              causeRerender: true,
              navigationArgs: {
                typeOfParam: "multiple",
                typeOfAddition: "new",
                paramName: "leagues",
                addedIDs: [],
                route: "sport",
              },
            }}
            typographyProps={{
              innerContentClassName: styles.addTabIcon,
            }}
          />
        )}
      </TabsList>
      {tabs.map(({ tabID, tabContent, className }, i) => (
        <TabsContent
          value={tabID}
          key={i}
          className={twMerge(styles.tabContent, className)}
        >
          {tabContent}
        </TabsContent>
      ))}
    </ShadCNTabs>
  );
}

export default Tabs;
export type { TabsProps, TabProps };
