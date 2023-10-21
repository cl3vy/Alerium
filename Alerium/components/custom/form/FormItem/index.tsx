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
import { Button } from "@/components/ui/button"; // Custom Components
import { Stack } from "@constants/components"; // Schemas
import * as z from "zod"; // Types And Interfaces
import { Path, UseFormReturn } from "react-hook-form"; // Styles
import styles from "./style"; // Icon
import { EyeIcon } from "lucide-react"; // Define a generic type for your schema

// Define a generic type for your schema
type Schema = z.ZodType<any, any>;

// Update your type definitions to accept a schema
type TextInputFieldName<T extends Schema> = Path<z.infer<T>>;

type FormItemProps<T extends Schema> = {
  form: UseFormReturn<z.infer<T>>;
  children: ReactNode;
  formDescription?: string;
  className?: string;
};

type FormFieldProps<T extends Schema> = {
  name: TextInputFieldName<T>;
  password?: boolean;
} & FormItemProps<T>;

// Update your component to accept a schema
function FormItem<T extends Schema>({
  name,
  form,
  children,
  formDescription,
  className,
  password,
}: FormFieldProps<T>) {
  const [hidden, setHidden] = useState(password);
  const errorMessage = form.formState.errors[name]?.message;
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
            {typeof errorMessage === 'string' && (
              <FormMessage className={styles.errorLabel}>{errorMessage}</FormMessage>
            )}
          </ShadCNFormItem>
        )}
      />
    </Stack>
  );
}

export default FormItem;
export type { FormItemProps };
