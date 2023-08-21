import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

export const MenuLink = ({ path, children, setIsMenuVisible }) => {
  const { pathname } = useLocation();
  return <Box
    m="auto"
    onClick={() => setIsMenuVisible(false)}
  >
    <WavyLink
      to={path}
    >
      <Typography
        variant="h5"
        color={pathname !== path ? "grey.500" : "black.main"}
        textAlign="center"
        sx={{
          textTransform: "capitalize",
          py: 2,
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        {children.replace("-", " ")}
      </Typography>
    </WavyLink>
  </Box>
};
