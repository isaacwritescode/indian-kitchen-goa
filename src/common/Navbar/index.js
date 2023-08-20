import { CloseOutlined, Menu } from "@mui/icons-material";
import { Button, IconButton, Stack, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../Link";
import { NavlinkGroup } from "./NavlinkGroup";

export const Navbar = ({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current?.classList.remove("active");
      setTimeout(() => {
        ref.current?.classList.add("active");
      }, 100);
    }
  }, [pathname]);

  if (pathname)
    return pathname === "/" && !userHasScrolled ? (
      <Box
        boxSizing="border-box"
        width="100%"
        mx="auto"
        py={1}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
        }}
      >
        <Box
          ref={ref}
          className="slideIn"
          width={{ xs: "85%", md: "90%" }}
          m="auto"
          maxWidth={1400}
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
          >
            <Link
              path="/"
              component={
                <img src="/logos/wordmark-light.svg" height={64} alt="alto" />
              }
            />
            {md && <NavlinkGroup fontColor="white" />}
            <Stack direction="row" spacing={2}>
              <Button size="large" variant="outlined" color="secondary">
                Contact us
              </Button>
              {md || (
                <IconButton
                  color="secondary"
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  {isMenuVisible ? <CloseOutlined /> : <Menu />}
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    ) : (
      <Box
        boxSizing="border-box"
        width="100%"
        mx="auto"
        py={1}
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 99,
          boxShadow: userHasScrolled && "0 0 50px rgb(0, 0, 0, 0.3)",
          bgcolor: "white",
        }}
      >
        <Box
          ref={ref}
          className="slideIn"
          width={{ xs: "85%", md: "90%" }}
          m="auto"
          maxWidth={1400}
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
          >
            <Link
              path="/"
              component={
                <img src="/logos/wordmark-dark.svg" height={64} alt="alto" />
              }
            />
            {md && <NavlinkGroup fontColor="black" />}
            <Stack direction="row" spacing={2}>
              <Button size="large" variant="contained">
                Contact us
              </Button>
              {md || (
                <IconButton
                  sx={{ color: "white.main" }}
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  {isMenuVisible ? <CloseOutlined /> : <Menu />}
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
};
