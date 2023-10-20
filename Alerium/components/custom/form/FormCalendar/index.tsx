"use client";
// React Peer Dependencies
import {ReactNode} from 'react';
// Shad CN Components
import {
    FormControl, FormDescription, FormField, FormItem as ShadCNFormItem, FormLabel, FormMessage
} from "@/components/ui/form";
// Custom Components
import {CalendarInput} from "@constants/components";
// Schemas
import {userSchema} from '@constants/utils';
import * as z from "zod"
// Types And Interfaces
import {UseFormReturn} from 'react-hook-form';
type FormCalendarProps = {
    form: UseFormReturn<z.infer<typeof userSchema>>;
    name: 'birthday';
    children: ReactNode;
    formDescription?: string
}

function FormCalendar({name, form, children, formDescription}: FormCalendarProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <ShadCNFormItem>
                    <FormControl>
                        <CalendarInput onSelection={(date) => field.onChange(date)}>
                            {children}
                        </CalendarInput>
                    </FormControl>
                    {formDescription && <FormDescription>
                        {formDescription}
                    </FormDescription>}
                    <FormMessage />
                </ShadCNFormItem>
            )}
        />
    );
}

export default FormCalendar;
export type {FormCalendarProps}
