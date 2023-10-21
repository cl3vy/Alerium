"use client";
// Form Props
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
// Shad CN Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// Custom Components
import { FormCalendar, FormItem, Stack } from "@constants/components";
// Schemas
import { userSchema as schema } from "@constants/utils";
// Types And Interfaces
type SignUpFormProps = {
  className?: string;
}
// Styles
import styles from "./style";

function SignUpForm({className}: SignUpFormProps) {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema), defaultValues: {
      email: "", surname: "", name: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (<Stack className={className} direction={'row'}>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.mainContainer}>
        <FormItem form={form} name={"name"} className={styles.smallField}>Your Name</FormItem>
        <FormItem form={form} name={"surname"} className={styles.smallField}>Your Surname</FormItem>
        <FormItem form={form} name={"email"}>Your Email</FormItem>
        <FormItem form={form} name={"phoneNumber"}>Your Phone Number</FormItem>
        <FormCalendar form={form} name={"birthday"}>Your Birthday</FormCalendar>
        <Button className={styles.button} type="submit">Submit</Button>
      </form>
    </Form></Stack>);
}

export default SignUpForm;
