// Next Components
import Image from "next/image";
// Shad CN Components
import { Button } from "@/components/ui/button";
// Custom Components
import { Badge, SignUpForm, Stack, Typography } from "@constants/components";
// Styles
import styles from "./style";
import { Separator } from "@/components/ui/separator";
// Images
import background from "@/public/assets/images/sign-up-background-image.png";
// Types And Interfaces
type SignInProps = {};

function SignIn(props: SignInProps) {
  return (
    <Stack component={"main"} className={styles.body}>
      <Stack direction={"row"} className={styles.page}>
        <Stack
          spacing={2}
          className={styles.formContainer}
          separator={<Separator />}
        >
          <Typography className={styles.mainTitle}>
            This is the start of something amazing!
          </Typography>
          <Typography className={styles.subtitle}>
            Decent, comfortable, safe accommodation with high standard services
            and facilities and a lively and attractive environment.
          </Typography>
          <SignUpForm className={styles.form} />
          <Typography>
            Have an account instead? <Button variant={"link"}>Log In!</Button>
          </Typography>
        </Stack>
        <Stack className={styles.imageContainer}>
          <Stack className={styles.textContainer}>
            <Typography className={styles.title}>Live Cozy!</Typography>
            <Typography className={styles.imageSubtitle}>
              In the Folè residence you will find decent, comfortable, safe
              accommodation with high standard services and facilities as well
              as a lively and attractive environment for young people, safe and
              inclusive to live and study.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            className={styles.badgesContainer}
            spacing={2}
          >
            <Badge>Housing</Badge>
            <Badge>Student</Badge>
            <Badge>College</Badge>
            <Badge>Affordable_Living</Badge>
          </Stack>
        </Stack>
      </Stack>{" "}
    </Stack>
  );
}

export default SignIn;
export type { SignInProps };
