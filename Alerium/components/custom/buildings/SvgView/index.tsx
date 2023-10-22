"use client";
// Custom Components
import { Stack, Typography } from "@constants/components";
import { useRouter } from "next/navigation";
// SVGs
import Building3 from "@/components/custom/buildings/SingularSVG/AllBuildings";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// Types And Interfaces
type SvgViewProps = {};
export type SVGProps = {
  onClick: (index: number) => void;
  className?: string;
};
import Logo from '@/public/assets/images/bolv-logo.png'

function SvgView({}: SvgViewProps) {
  const router = useRouter();
  const clickHandler = (index: number) => router.push(`/${index}`);
  return (
    <Stack className={"relative w-full h-full"}>
      <Stack className={"absolute top-[10px] left-[10px] w-[33%]"}>
        <Typography className={"text-[6rem] font-bold  leading-normal block"} innerContentClassName={'block'}>
          Welcome to
          <span className={'italic ml-2'}>Alerium</span>
        </Typography>

        <Card className={"w-[70%]"}>
          <CardHeader>
            <CardTitle>Student Housing</CardTitle>
            <CardDescription>
              Decent, comfortable, safe accommodation with high standard
              services and facilities and a lively and attractive environment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Accommodation and services with the highest standards, a lively,
            attractive, safe, comprehensive environment and a wide range of
            services for a student life as dynamic as possible. Contemporary
            conditions "Folé" residence consists of 4 accommodation buildings
            with high standards and the latest technology (ventilated facade,
            hood system, acoustic insulation, central heating-cooling system,
            elevator system, camera monitoring system, anti-fire system, waste
            management system , etc.).
          </CardContent>
          <CardFooter>
            <Image src={Logo} alt={'Bolv Group Logo'} />
          </CardFooter>
        </Card>
      </Stack>
      <Building3

        onClick={clickHandler}
        className={"h-[calc(100dvh-35px)] rotate-90 dark:invert"}
      />
    </Stack>
  );
}

export default SvgView;
export type { SvgViewProps };
