import { FireExtinguisher, KebabDining, MusicNote, RoomService, Wifi } from "@mui/icons-material";
import { Details } from "../../templates/details";
import { RESTAURANT } from "./constants";

const AMENITIES = [{
  title: "WiFi",
  icon: <Wifi />,
},
{
  title: "Indian Food",
  icon: <KebabDining />
},
{
  title: "Fire extinguisher",
  icon: <FireExtinguisher />
},
{
  title: "Ambient music",
  icon: <MusicNote />
},
{
  title: "Quick service",
  icon: <RoomService />
},
]

export default function Restaurant() {
  return <Details
    label="Dine at our"
    title="restaurant"
    info={RESTAURANT}
    amenities={AMENITIES} collage />
}