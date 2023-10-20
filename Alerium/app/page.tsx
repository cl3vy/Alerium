import { Button } from "@/components/ui/button";
import {NavigationMenu } from "@/constants/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Tracker App</Button>
      <NavigationMenu
        items={[
          {
            description: "hi",
            accordion: true,
            accordionID: "12",
            accordionItems: [{ description: "bye" }],
          },
        ]}
      />
    </main>
  );
}
