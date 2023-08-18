import Info from "../../templates/info";
import Testimonials from "../landing/testimonials";
import { INFO } from "./constants";
import Hero from "./hero";

export default function QuintaSouzaLopes() {
  return <>
    <Hero />
    <Info INFO={INFO} />
    <Testimonials />
  </>
}