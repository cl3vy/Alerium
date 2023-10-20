interface ITheme {
  colors: Colors;
  fontawesomeType: FontAwesomeTypes;
  spacings: Spacings;
}
type TailwindColor = 'green' | 'yellow' | 'blue' | 'red' | 'purple';
type TailwindWeight = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type TailwindClass = `${TailwindColor}-${TailwindWeight}`;
type Colors = "primary" | TailwindClass | "secondary" ;
type FontAwesomeTypes =
  | "duotone"
  | "sharp"
  | "light"
  | "thin"
  | "solid"
  | "brands";
type Spacings = 0 | 0.5 | 1 | 2 | 2.5 | 3 | 3.5 | 4 | 5;
export type { ITheme, Colors, FontAwesomeTypes, Spacings };
