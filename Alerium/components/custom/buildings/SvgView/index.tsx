"use client";
// Custom Components
import {Stack} from '@constants/components';
// Types And Interfaces
type SvgViewProps = {

}
export type SVGProps = {
  onClick: () => void
}

// SVGs
import Building1 from '../SingularSVG/Building1'
import Building2 from "@/components/custom/buildings/SingularSVG/Building2";
function SvgView({}: SvgViewProps) {
  const clickHandler = () => console.log('hi')
  return (
    <Stack className={'w-[500px] h-[500px]'}>
      {/*<Building1 onClick={clickHandler} />*/}
      <Building2 onClick={clickHandler} />
    </Stack>
  );
}

export default SvgView;
export type {SvgViewProps};
