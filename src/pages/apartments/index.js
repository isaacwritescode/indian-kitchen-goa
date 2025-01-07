import {
  AcUnit,
  Bed,
  FireExtinguisher,
  RoomService,
  Wifi,
} from "@mui/icons-material";
import { Details } from "../../templates/details";

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

export default function Apartments() {
  return (
    <Details
      label="APARTMENTS"
      title="Quinta Souza"
      desc="Luxury & budget rooms for every type of traveller"
      info="We are Goa’s original inhabitants, and our ancestral home, once a busy restaurant, is now a guesthouse for families & budget travelers. After our parents’ passing, we added luxury apartments managed by my siblings. The guesthouse offers modern amenities at budget rates, while the apartments cater to premium travelers. Though the restaurant is closed, guests enjoy Goan vibes at “The Love Shack,” our brother’s beachside shack. We blend heritage and hospitality to reflect Goa’s true charm."
      amenities={AMENITIES}
      location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3194114126504!2d73.75501068124665!3d15.55271396407507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea08836c4c7d%3A0x96f9a450e1212de2!2sIndian%20Kitchen!5e0!3m2!1sen!2sin!4v1692549380555!5m2!1sen!2sin"
      collage
    />
  );
}
