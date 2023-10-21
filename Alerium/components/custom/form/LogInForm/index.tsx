"use client";
// Form Props
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
// Shad CN Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// Custom Components
import { FormItem, Stack } from "@constants/components";
// Custom Hooks
import { useFetch } from "@constants/hooks";
// Schemas
import { logInSchema as schema } from "@constants/utils";
// Styles
import styles from "./style";
import { endpoints } from "@constants/defaults";
import { useState } from "react";
// Types And Interfaces
type LogInFormProps = {
  className?: string;
};

function LogInForm({ className }: LogInFormProps) {
  const [userLogin, setUserLogin] = useState<
    z.infer<typeof schema> | undefined
  >();
  useFetch({
    url: endpoints.url + "/api/user-alerium",
    type: "POST",
    body: userLogin,
    preventFetch: !userLogin,
    onSuccess: () => console.log("success"),
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
    setUserLogin(values);
  }

  return (
    <Stack className={className}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.mainContainer}
          method={"POST"}
        >
          <FormItem<typeof schema> form={form} name={"email"} className={styles.field}>
            Your Email
          </FormItem>

          <FormItem
            <typeof schema>
            form={form}
            name={"hashPassword"}
            className={styles.field}
            password={true}
          >
            Password
          </FormItem>
          <Button className={styles.button} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Stack>
  );
}

export default LogInForm;
export type { LogInFormProps };
