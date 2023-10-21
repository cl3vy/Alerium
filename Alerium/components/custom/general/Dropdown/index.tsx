// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Types And Interfaces
type Content = {
  shortcut?: string; title: ReactNode;
};

type Sub = {
  trigger: string; items: DropdownGroup[];
};

type DropdownItemProps =
  | { type: "content"; content: Content }
  | { type: "separator"; content: undefined }
  | { type: "sub"; content: Sub };

type DropdownGroup = {
  label?: string; items: DropdownItemProps[];
}
type DropdownProps = {
  children: ReactNode; groups: DropdownGroup[]; label?: string

};
// Styles
import styles from './style'
import { Stack } from "@/constants/components";
function DropdownItem({ content, type }: DropdownItemProps) {
  return (<>
    {type === "separator" ? <DropdownMenuSeparator /> : type === "content" ? <DropdownMenuItem className={styles.menuItem}>
      <Stack>{content.title}</Stack>
      {content.shortcut && <DropdownMenuShortcut>{content.shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem> : <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        {content.trigger}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {content.items.map(({ items, label }) => <DropdownMenuGroup>  {label &&
            <DropdownMenuLabel>{label}</DropdownMenuLabel>} {items.map(item =>
            <DropdownItem {...item} />)}</DropdownMenuGroup>)}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>}
  </>);
}

function Dropdown({ children, groups, label }: DropdownProps) {
  return (<DropdownMenu>
    <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
    <DropdownMenuContent>
      {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
      {groups.map(({ items, label }, i) => <DropdownMenuGroup key={i}>
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {items.map(( item, i) => <DropdownItem {...item} key={i}/>)}
      </DropdownMenuGroup>)}
    </DropdownMenuContent>
  </DropdownMenu>);
}

export default Dropdown;
export type { DropdownProps, DropdownItemProps };
