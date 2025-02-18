import {
  BeachAccess,
  RoomService,
  SetMeal,
  Waves,
  Wifi,
} from "@mui/icons-material";
import { Details } from "../../templates/details";

const AMENITIES = [
  {
    title: "WiFi",
    icon: <Wifi />,
  },
  {
    title: "Beach shack",
    icon: <Waves />,
  },
  {
    title: "Lounge area",
    icon: <BeachAccess />,
  },
  {
    title: "Fresh seafood",
    icon: <SetMeal />,
  },
  {
    title: "Quick service",
    icon: <RoomService />,
  },
];

export default function LoveShack() {
  return (
    <Details
      label="RELAX AT"
      title="Love shack"
      desc="Quaint seafood restaurant by the beach"
      info="Love Shack is a serene getaway at Baga-Calangute beach, where you can unwind with great food, friendly staff, and free WiFi. Known for its authentic Goan cuisine, it’s the perfect place to relax, whether you’re dining, working, or simply enjoying the laid-back atmosphere. With a welcoming vibe and convenient location, Love Shack offers something for everyone to chill and recharge."
      amenities={AMENITIES}
      location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.744014716565!2d73.75037597602032!3d15.551847685055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea036c87dc05%3A0xe614896a35e6d82f!2sLove%20Shack!5e0!3m2!1sen!2sin!4v1736019035922!5m2!1sen!2sin"
      collage
    />
  );
}
