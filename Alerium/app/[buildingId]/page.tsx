// Utils
import { getFloors } from "@constants/utils";
// Styles
import "./styles.css";
import { Stack } from "@constants/components";
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

export default async function Page({
  params,
}: {
  params: { buildingId: string };
}) {
  const { props: floors } = await getFloors(params.buildingId);
  const colors = [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
  ];
  return (
    <Stack className={"p-[10px] relative"}>
      <div className={"map"}>
        {floors.map(({ floorNr, id }, i) => (
          <div
            className={`floor`}
            style={{ zIndex: floors.length - i * 10 }}
            key={id}
          >
            <span className={`label ${colors[i]} after:${colors[i]}`}>
              {floorNr}
            </span>
            <div className={`plan ${colors[i]}`}></div>
          </div>
        ))}
      </div>
      <Stack className={"w-[33%] absolute top-[10px] gap-4"}>
        <Card>
          <CardHeader>
            <CardTitle>Building {params.buildingId} </CardTitle>
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
