// Utils
import { getFloors } from "@constants/utils";
// Styles
import "../../components/custom/room/FloorView/styles.css";
import { Floor, FloorView, Stack } from "@constants/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/assets/images/logo-with-text.png";
import { IRoom } from "@/interfaces/IRoom";
export default async function Page({
  params,
}: {
  params: { buildingId: string };
}) {
  const { props: floors } = await getFloors(params.buildingId);

  return (
    <Stack className={"p-[10px] relative"} direction={'row'}>
      <FloorView floors={floors} />
      <Stack className={"w-[33%] absolute top-[10px] gap-4"}>
        <Card>
          <CardHeader>
            <CardTitle className={'text-[4rem]'}>Building {params.buildingId} </CardTitle>
            <CardDescription>
              Decent, comfortable, safe accommodation with high standard
              services and facilities and a lively and attractive environment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={Logo} alt={"Fole Logo"} />
          </CardContent>
          <CardFooter>
            Accommodation and services with the highest standards, a lively,
            attractive, safe, comprehensive environment and a wide range of
            services for a student life as dynamic as possible.
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>A Project build By Fole</CardTitle>
            <CardDescription>
              Decent, comfortable, safe accommodation with high standard
              services and facilities and a lively and attractive environment.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            Accommodation and services with the highest standards, a lively,
            attractive, safe, comprehensive environment and a wide range of
            services for a student life as dynamic as possible.
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
}
