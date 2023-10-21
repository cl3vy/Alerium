// Utils
import { getFloors } from "@constants/utils";
// Styles
import './styles.css'
export default async function Page({
  params,
}: {
  params: { buildingId: string };
}) {
  const { props: floors } = await getFloors(params.buildingId);
  const colors = ['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900']
  return (
    <div className={"map"}>
      {floors?.map(({ floorNumber, id }, i) => (
        <div className={`floor`} style={{zIndex: floors.length - i * 10}} key={id}>
          <span className={`label ${colors[i]} after:${colors[i]}`}>{floorNumber}</span>
          <div className={`plan ${colors[i]}`}></div>
        </div>
      ))}


    </div>
  );
}
