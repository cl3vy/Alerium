import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/constants/components";
import Stack from "@/components/custom/general/Stack";
// SVGs
import Building1Svg from '@/public/assets/SVGs/Building-1.svg'
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
      <Building1Svg onClick={() => console.log('svg clicked')}/>
      <Stack className={'w-[500px] h-[300px] skew-x-[30px] bg-amber-800'}></Stack>

    </main>
  );
}
