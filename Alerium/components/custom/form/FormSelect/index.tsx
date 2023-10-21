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
import styles from "@/components/custom/form/FormItem/style";
// Custom Components
import { FormItemProps, Select, Stack } from "@constants/components";
// Utils
import { userSchema } from "@constants/utils";
// Types And Interfaces
type FormSelectProps = {name: 'gender'} & FormItemProps<typeof userSchema>

function FormSelect({ name, children, className, form, formDescription }: FormSelectProps) {
  return (<Stack className={className}>
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (<ShadCNFormItem>
        <FormLabel className={styles.label}>{children}</FormLabel>
        <FormControl>
          <Stack direction={"row"}>
            <Select
              selectorPlaceholder={'Expand'}
              onValueChange={(value) => field.onChange(value)}
              items={[{
                value: "male", description: "Male",
              }, {
                value: "female", description: "Female",
              }, {
                value: "Other", description: "Other",
              }]} />
          </Stack>
        </FormControl>
        {formDescription && (<FormDescription>{formDescription}</FormDescription>)}
        <FormMessage className={styles.errorLabel}>{form.formState.errors[name]?.message}</FormMessage>
      </ShadCNFormItem>)}
    />
  </Stack>);
}

export default FormSelect;
export type { FormSelectProps };
