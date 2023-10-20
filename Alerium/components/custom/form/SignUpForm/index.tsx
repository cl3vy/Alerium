"use client"
// Form Props
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {useForm} from "react-hook-form";
// Shad CN Components
import {Button} from "@/components/ui/button"
import {Form} from "@/components/ui/form"
// Custom Components
import {FormItem, FormCalendar} from '@constants/components'
// Schemas
import {userSchema as schema} from '@constants/utils'

function SignUpForm() {

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema), defaultValues: {
            email: "", surname: "", name: "",
        },
    })

    function onSubmit(values: z.infer<typeof schema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (<Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormItem form={form} name={'name'}>Your Name</FormItem>
                <FormItem form={form} name={'surname'}>Your Surname</FormItem>
                <FormItem form={form} name={'email'}>Your Email</FormItem>
                <FormItem form={form} name={'phoneNumber'}>Your Phone Number</FormItem>
                <FormCalendar form={form} name={'birthday'}>Your Birthday</FormCalendar>
                <Button type="submit">Submit</Button>
            </form>
        </Form>);
}

export default SignUpForm;
