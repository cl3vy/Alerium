"use client";
// Form Props
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
// Shad CN Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// Custom Components
import { FormCalendar, FormItem, FormSelect, Stack, Typography } from "@constants/components";
// Custom Hooks
import { useFetch } from "@constants/hooks";
// Schemas
import { userSchema as schema } from "@constants/utils";
// Styles
import styles from "./style";
import { endpoints } from "@constants/defaults";
import { useState } from "react";
import { Send } from "lucide-react";
// Types And Interfaces
type SignUpFormProps = {
  className?: string;
};

function SignUpForm({ className }: SignUpFormProps) {
  const [userData, setUserData] = useState<
    z.infer<typeof schema> | undefined
  >();
  useFetch({
    url: endpoints.url + "/api/user-alerium",
    type: "POST",
    body: userData,
    preventFetch: !userData,
    onSuccess: () => console.log("success"),
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      surname: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
    setUserData(values);
  }

  return (
    <Stack className={className}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.mainContainer}
          method={"POST"}
        >
          <FormItem form={form} name={"name"} className={styles.smallField}>
            Your Name
          </FormItem>
          <FormItem form={form} name={"surname"} className={styles.smallField}>
            Your Surname
          </FormItem>
          <FormItem form={form} name={"email"} className={styles.smallField}>
            Your Email
          </FormItem>
          <FormItem
            form={form}
            name={"phoneNumber"}
            className={styles.smallField}
          >
            Your Phone Number
          </FormItem>

          <FormItem
            form={form}
            name={"hashPassword"}
            className={styles.smallField}
            password={true}
          >
            Password
          </FormItem>
          <FormItem
            form={form}
            name={"repeatPassword"}
            className={styles.smallField}
            password={true}
          >
            Repeat Password
          </FormItem>
          <FormCalendar
            form={form}
            name={"birthday"}
            className={styles.smallField}
          >
            Your Birthday
          </FormCalendar>
          <FormSelect name={"gender"} form={form} className={styles.smallField}>
            Select Your Gender
          </FormSelect>
          <Button className={styles.button} type="submit">
          Submit
          </Button>
        </form>
      </Form>
    </Stack>
  );
}

export default SignUpForm;
