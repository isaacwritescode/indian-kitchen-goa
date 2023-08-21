import { CloseOutlined } from "@mui/icons-material";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import { NAVBAR_LINKS } from "../Navbar/constants";
import { MenuLink } from "./MenuLink";

export const Menu = ({ setIsMenuVisible }) => {
  const b1 = useMediaQuery("(max-width:1132px)");
  return (
    b1 && (
      <>
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            background: "#f2f3f5",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 99,
            borderTop: "1px solid #ddd",
            animation: "pop ease 0.3s",
          }}
        >
          <IconButton
            onClick={() => setIsMenuVisible(false)}
            sx={{
              position: "absolute",
              right: 24,
              top: 24
            }}
          >
            <CloseOutlined />
          </IconButton>
          <Stack m="auto" width="90%" py={2} alignSelf="center">
            {NAVBAR_LINKS.map(({ title, path, color }, idx) => (
              <MenuLink
                key={idx}
                title={title}
                path={path}
                color={color}
                setIsMenuVisible={setIsMenuVisible}
              >
                {title}
              </MenuLink>
            ))}
          </Stack>
        </Stack>
      </>
    )
  );
};
