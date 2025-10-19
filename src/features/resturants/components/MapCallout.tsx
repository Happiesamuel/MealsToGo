import { ResturantInfo } from "../../../../model";
import CompactResturantInfo from "./CompactResturantInfo";

export default function MapCallout({
  resturant,
}: {
  resturant: ResturantInfo;
}) {
  return <CompactResturantInfo isMap={true} resturant={resturant} />;
}
