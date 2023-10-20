"use client";
// React Peer Dependencies
import React from "react";
// ShadCn Components
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Custom Components
import {
  AccordionNavigationItemProps,
  NavigationLink,
  Stack,
} from "@constants/components";
// Styles
import styles from "./style";

function NavigationAccordion({
  accordionID,
  accordionItems,
  endDecorator,
  startDecorator,
  ...rest
}: AccordionNavigationItemProps) {
  return (
    <AccordionItem value={String(accordionID!)}>
      <Stack
        direction={"row"}
        spacing={1}
        className={styles.accordionTriggerContainer}
      >
        {startDecorator && startDecorator}
        <AccordionTrigger className={styles.accordionTrigger}>
          <NavigationLink {...rest} className={styles.link} />
        </AccordionTrigger>
        {endDecorator && endDecorator}
      </Stack>
      <AccordionContent>
        {accordionItems!.map(({ accordion, ...rest }, i) =>
          accordion ? (
            <NavigationAccordion
              {...(rest as AccordionNavigationItemProps)}
              key={i}
            />
          ) : (
            <NavigationLink key={i} {...rest} className={styles.leagueLink} />
          )
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default NavigationAccordion;
