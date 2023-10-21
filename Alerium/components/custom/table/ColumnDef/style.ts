import {themeDefaults} from "@constants/defaults";

const styles = {
  icon: (enabled: boolean) => ` fa-${themeDefaults.fontawesomeType} fa-circle-info ${enabled ? 'text-green-800' : 'text-red-800'}`
}
export default styles;
