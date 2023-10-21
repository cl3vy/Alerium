// Shad CN Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// Custom Components
import { Badge, LogInForm, Stack, Typography } from "@constants/components";
// Styles
import styles from "./style";
// Types And Interfaces
type LogInProps = {};

async function LogIn(props: LogInProps) {
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
          <LogInForm className={styles.form} />
          <Typography>
           Haven't joined yet? <Button variant={"link"}>Create account!</Button>
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

export default LogIn;
export type { LogInProps };
