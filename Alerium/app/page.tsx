import { Button } from "@/components/ui/button";
import { NavigationMenu, SvgView, Typography } from "@/constants/components";
import Stack from "@/components/custom/general/Stack";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Logo from '@/public/assets/images/logo-with-text.png'
export default function Home() {
  return (
    <Stack component={'main'} className={'p-4 relative'}>
      <SvgView />
      <Card className={'absolute w-[23%] top-[10px] right-[10px]'}>
        <CardHeader>
          <CardTitle>A Project build By Fole</CardTitle>
          <CardDescription>Decent, comfortable, safe accommodation with high standard services and facilities and a lively and attractive environment.</CardDescription>
        </CardHeader>
        <CardContent>
         <Image src={Logo} alt={'Fole Logo'} />
        </CardContent>
        <CardFooter>
          Accommodation and services with the highest standards, a lively, attractive, safe, comprehensive environment and a wide range of services for a student life as dynamic as possible.
        </CardFooter>
      </Card>
    </Stack>
  );
}
