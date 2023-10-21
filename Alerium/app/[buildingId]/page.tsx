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
  return (
    <div className={"map"}>
      {floors?.map(({ floorNumber, id }, i) => (
        <div className={`floor f${i}`} style={{zIndex: i * 10}} key={id}>
          <span className="label">floorNumber</span>
          <div className="plan"></div>
        </div>
      ))}


    </div>
  );
}
