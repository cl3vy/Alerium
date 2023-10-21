"use client";
// React Peer Dependencies
import React from "react";
// Shad CN Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem as ShadCNFormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Custom Components
import { CalendarInput, FormItemProps, Stack } from "@constants/components";
import styles from "../FormItem/style";
// Schemas

// Types And Interfaces
interface FormCalendarProps extends FormItemProps {
  name: "birthday";
}

function FormCalendar({
  name,
  form,
  children,
  formDescription,
  className,
}: FormCalendarProps) {
  return (
    <Stack className={className}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <ShadCNFormItem>
            <FormLabel className={styles.label}>{children}</FormLabel>
            <FormControl>
              <CalendarInput onSelection={(date) => field.onChange(date)}>
                Pick a Date
              </CalendarInput>
            </FormControl>
            {formDescription && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage className={styles.errorLabel}>{form.formState.errors[name]?.message}</FormMessage>
          </ShadCNFormItem>
        )}
      />
    </Stack>
  );
}

export default FormCalendar;
export type { FormCalendarProps };
