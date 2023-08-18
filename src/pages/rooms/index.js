import {
  AcUnit,
  Bed,
  FireExtinguisher,
  RoomService,
  Wifi
} from "@mui/icons-material";
import { Details } from "../../templates/details";
import { ROOMS } from "./constants";

const AMENITIES = [
  {
    title: "WiFi",
    icon: <Wifi />,
  },
  {
    title: "A/C",
    icon: <AcUnit />,
  },
  {
    title: "Fire extinguisher",
    icon: <FireExtinguisher />,
  },
  {
    title: "Tidy beds",
    icon: <Bed />,
  },
  {
    title: "Room service",
    icon: <RoomService />,
  },
];

export default function Rooms() {
  return (
    <Details
      label="We've got"
      title="rooms"
      desc="Luxury & budget rooms for every type of traveller"
      info={ROOMS}
      amenities={AMENITIES}
      collage
    />
  );
}
