// Next Images
import Image from 'next/image'
// Shad CN Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// Custom Components
import { Badge, LogInForm, Stack, Typography } from "@constants/components";
// Styles
import styles from "./style";
// Types And Interfaces
type LogInProps = {};
// Images
import image from '@/public/assets/images/sign-up-background-image.png'
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
            Welcome back Home!
          </Typography>
          <Typography className={styles.subtitle}>
            Respect for others fosters a greater opportunity for understanding.
            We are committed to treating you with dignity, regardless of
            opinions, experiences, backgrounds or perspectives.
          </Typography>
          <LogInForm className={styles.form} />
          <Typography>
            Haven't joined yet?
            <Button variant={"link"}>Create account!</Button>
          </Typography>
        </Stack>
        <Stack className={styles.imageContainer}>
          <Image src={image} alt={'Background-Image'} className={styles.image}/>
          <Stack className={styles.textContainer}>
            <Typography className={styles.title}>Home awaits!</Typography>
            <Typography className={styles.imageSubtitle}>
              At Folé you will find hospitality, warmth and all the necessary
              services and facilities that will make you feel at home.
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
      </Stack>
    </Stack>
  );
}

export default LogIn;
export type { LogInProps };
