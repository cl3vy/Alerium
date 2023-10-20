"use client";
import { useState } from "react";
// Shad CN Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// Custom Components
import { Stack, Typography, Badge, SignUpForm } from "@constants/components";
// Custom Utils
import { validateEmail } from "@constants/utils";
// Types And Interfaces
import { IUser } from "@/constants/interfaces";

type SignInProps = {};
// Styles
import styles from "./style";

function SignIn(props: SignInProps) {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const { toast } = useToast();
  return (
    <Stack component={"main"}>
      <Stack spacing={2}>
        <Typography>This is the start of something amazing!</Typography>
        <Typography>
          Decent, comfortable, safe accommodation with high standard services
          and facilities and a lively and attractive environment.
        </Typography>
       <SignUpForm />
        <Typography>
          Have an account instead? <Button variant={"link"}>Log In!</Button>
        </Typography>
      </Stack>
      <Stack>
        <Stack direction={"row"}>
          <Badge>Housing</Badge>
          <Badge>Student</Badge>
          <Badge>College</Badge>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SignIn;
export type { SignInProps };
