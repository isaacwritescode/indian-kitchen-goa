import { Stack } from "@mui/material";
import { cloneElement } from "react";
import { Link } from "../../Link";
import { SOCIAL_LINKS } from "./constants";

export const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2} flex={1}>
      {SOCIAL_LINKS.map(({ platform, icon, url }, idx) => {
        icon = cloneElement(
          icon,
          { color: 'white', size: "28px" }
        );
        return <Stack alignItems="center" justifyContent="center" height={48} width={48} bgcolor="#ffffff20" color="white" borderRadius={3}>
          <Link
            key={idx}
            url={url}
            component={icon}
          />
        </Stack>
      })}
    </Stack>
  );
};
