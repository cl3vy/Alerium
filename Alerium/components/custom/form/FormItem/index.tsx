"use client";
// React Peer Dependencies
import React, { ReactNode } from "react";
// Shad CN Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem as ShadCNFormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Schemas
import { userSchema } from "@constants/utils";
import * as z from "zod";
// Types And Interfaces
import { UseFormReturn } from "react-hook-form";
import { Stack } from "@constants/components";

type TextInputFieldName = Exclude<keyof z.infer<typeof userSchema>, "birthday">;
type FormItemProps = {
  form: UseFormReturn<z.infer<typeof userSchema>>;
  name: TextInputFieldName;
  children: ReactNode;
  formDescription?: string
  className?: string
}

function FormItem({ name, form, children, formDescription, className }: FormItemProps) {
  return (<Stack className={className}><FormField
    control={form.control}
    name={name}
    render={({ field }) => (<ShadCNFormItem>
      <FormLabel>{children}</FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
      {formDescription && <FormDescription>
        {formDescription}
      </FormDescription>}
      <FormMessage />
    </ShadCNFormItem>)}
  />
  </Stack>);
}

export default FormItem;
export type { FormItemProps };
