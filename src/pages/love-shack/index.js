import { BeachAccess, RoomService, SetMeal, Waves, Wifi } from "@mui/icons-material";
import { Details } from "../../templates/details";
import { LOVE_SHACK } from "./constants";

const AMENITIES = [{
  title: "WiFi",
  icon: <Wifi />,
},
{
  title: "Beach shack",
  icon: <Waves />
},
{
  title: "Lounge area",
  icon: <BeachAccess />
},
{
  title: "Fresh seafood",
  icon: <SetMeal />
},
{
  title: "Quick service",
  icon: <RoomService />
},
]

export default function LoveShack() {
  return <Details
    label="Relax at"
    title="love shack"
    desc="The Beach Restaurant with a difference, famous for its Ambience and its Great Service"
    info={LOVE_SHACK}
    amenities={AMENITIES} collage />
}