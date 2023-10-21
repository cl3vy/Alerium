"use client";
// Custom Components
import {Stack} from '@constants/components';
// Types And Interfaces
type SvgViewProps = {

}
export type SVGProps = {
  onClick: () => void;
  className?: string
}

// SVGs
import Building1 from '../SingularSVG/Building1'
import Building2 from "@/components/custom/buildings/SingularSVG/Building2";
import Building3 from "@/components/custom/buildings/SingularSVG/Building3";
function SvgView({}: SvgViewProps) {
  const clickHandler = () => console.log('hi')
  return (
    <Stack className={'relative w-full h-[500px]'}>
        <Building3 onClick={clickHandler} className={''}/>
    </Stack>
  );
}

export default SvgView;
export type {SvgViewProps};
