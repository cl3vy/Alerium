const styles = {
  tabsProvider: "w-full",
  tabList:
    "w-full gap-1 justify-start hover:overflow-x-auto overflow-y-hidden snap-proximity snap-x h-auto",
  tabTrigger:
    "flex-1 min-w-[calc(100%/3)] border dark:border-primary-foreground",
  addTab:
    "border-primary-foreground dark:border-secondary-foreground rounded-sm w-standard hover:bg-primary group transition-colors",
  addTabIcon:
    "min-w-full flex pl-[3px] items-middle transition-colors group-hover:text-secondary",
  tabContent: "w-full flex-auto",
};
export default styles;
