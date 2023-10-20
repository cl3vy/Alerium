"use client";
import { useState } from "react";
// Shad CN Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// Custom Components
import { Stack, Typography, Badge, CalendarInput } from "@constants/components";
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
        <Stack className={styles.inputContainer}>
          <Label htmlFor={"name-input"}>Your Name</Label>
          <Input
            id={"name-input"}
            value={userData.name}
            onChange={(e) =>
              setUserData((currentUserData) => ({
                ...currentUserData,
                name: e.target.value,
              }))
            }
          />
        </Stack>
        <Stack className={styles.inputContainer}>
          <Label htmlFor={"surname-input"}>Your Surname</Label>
          <Input
            id={"surname-input"}
            value={userData.surname}
            onChange={(e) =>
              setUserData((currentUserData) => ({
                ...currentUserData,
                surname: e.target.value,
              }))
            }
          />
        </Stack>
        <Stack className={styles.inputContainer}>
          <Label htmlFor={"email-input"}>Your Email</Label>
          <Input
            id={"email-input"}
            value={userData.email}
            onChange={(e) =>
              setUserData((currentUserData) => ({ ...currentUserData, email: e.target.value }))
            }
          />
        </Stack>
        <Stack className={styles.inputContainer}>
          <Label htmlFor={"phone-number-input"}>Your Phone Number</Label>
          <Input id={"phone-number-input"} />
        </Stack>
        <Stack className={styles.inputContainer}>
          <Label htmlFor={"birthday-input"}>Your Birthday</Label>
          <CalendarInput
            onSelection={(date) =>
              setUserData((currentUserData) => ({
                ...currentUserData,
                birthday: date,
              }))
            }
          >
            Your Birthday
          </CalendarInput>
        </Stack>
        <Button>Sign Up</Button>
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
