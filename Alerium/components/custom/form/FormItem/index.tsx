"use client";
// React Peer Dependencies
import React, { ReactNode, useState } from "react";
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
import { Button } from "@/components/ui/button";
// Custom Components
import { Stack } from "@constants/components";
// Schemas
import { userSchema } from "@constants/utils";
import * as z from "zod";
// Types And Interfaces
import { UseFormReturn } from "react-hook-form";
type TextInputFieldName = Exclude<keyof z.infer<typeof userSchema>, "birthday">;
type FormItemProps = {
  form: UseFormReturn<z.infer<typeof userSchema>>;
  name: TextInputFieldName;
  children: ReactNode;
  formDescription?: string;
  className?: string;
  password?: boolean
};
// Styles
import styles from './style'
// Icon
import { EyeIcon } from "lucide-react";

function FormItem({
  name,
  form,
  children,
  formDescription,
  className,
                    password
}: FormItemProps) {
  const [hidden, setHidden] = useState(password)
  return (
    <Stack className={className}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <ShadCNFormItem>
            <FormLabel className={styles.label}>{children}</FormLabel>
            <FormControl>
              <Stack direction={'row'}>
              <Input {...field} type={hidden ? 'password' : 'text'}/>
              {password && <Button type={'button'} size={'icon'} variant={!hidden ? 'default' : 'ghost'} onClick={() => setHidden(currentHidden => !currentHidden)}><EyeIcon /></Button>}
              </Stack>
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

export default FormItem;
export type { FormItemProps };
