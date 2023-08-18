import { Chip, Stack, Typography, } from "@mui/material";
import { useLocation } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { NAVBAR_LINKS } from "../constants";

export const NavlinkGroup = ({ fontColor }) => {
  const { pathname } = useLocation();
  return <Stack direction="row" spacing={1}>
    {NAVBAR_LINKS.map(({ title, path, label, color }, idx) => {
      return fontColor === "white" ?
        <WavyLink
          to={path}
          color={color}
        >
          <Stack key={idx} direction="row" spacing={1} alignItems="center" p={1} borderRadius={3} sx={{ "&:hover": { bgcolor: "#ffffff30" }, cursor: "pointer" }}>
            <Typography
              fontWeight={500}
              variant="body2"
              textTransform="capitalize"
              sx={{
                position: "relative",
                color:
                  pathname === path || pathname.includes(path + "/")
                    ? "white"
                    : "#ffffff90",
                transition: "all ease 0.3s",
              }}
            >
              {title}
            </Typography>
            {label && <Chip color="blueCust" size="small" label={label} />}
          </Stack>
        </WavyLink>
        :
        <WavyLink
          to={path}
          color={color}
        >
          <Stack key={idx} direction="row" spacing={1} alignItems="center" p={1} borderRadius={3} sx={{ "&:hover": { bgcolor: "#00000010" }, cursor: "pointer" }}>
            <Typography
              fontWeight={500}
              variant="body2"
              textTransform="capitalize"
              sx={{
                position: "relative",
                color:
                  pathname === path || pathname.includes(path + "/")
                    ? "text.primary"
                    : "text.secondary",
                transition: "all ease 0.3s",
              }}
            >
              {title}
            </Typography>
            {label && <Chip color="blueCust" size="small" label={label} />}
          </Stack>
        </WavyLink>
    })}
  </Stack >
}