// React Peer Dependencies
import React, { ReactNode } from "react";
import { Accordion } from "@/components/ui/accordion";
// Custom Components
import {
  NavigationAccordion,
  NavigationLink,
  NavigationLinkProps,
  Stack,
  TypographyProps,
} from "@constants/components";
// Styles
import styles from "./style";
// Types and Interfaces
type NavigationMenuProps = {
  items: FullNavigationItemProps[];
  className?: string;
  header?: ReactNode;
  defaultOpenAccordions?: string[];
};

interface AccordionNavigationItemProps extends NavigationLinkProps {
  accordion?: true;
  accordionItems: FullNavigationItemProps[];
  accordionID: string;
  endDecorator?: TypographyProps["endDecorator"];
  startDecorator?: TypographyProps["startDecorator"];
}

type FullNavigationItemProps =
  | NavigationLinkProps
  | AccordionNavigationItemProps;

function NavigationMenu({
  items,
  className,
  defaultOpenAccordions,
  header,
}: NavigationMenuProps) {
  return (
    <Stack className={className} component={"aside"}>
      {header && <Stack className={styles.header}>{header}</Stack>}
      <Accordion type={"multiple"} defaultValue={defaultOpenAccordions}>
        {items.map(({ accordion, ...rest }, i) =>
          accordion ? (
            <NavigationAccordion
              {...(rest as AccordionNavigationItemProps)}
              key={i}
            />
          ) : (
            <NavigationLink {...rest} key={i} />
          )
        )}
      </Accordion>
    </Stack>
  );
}

export default NavigationMenu;
export type {
  NavigationMenuProps,
  FullNavigationItemProps,
  AccordionNavigationItemProps,
};
