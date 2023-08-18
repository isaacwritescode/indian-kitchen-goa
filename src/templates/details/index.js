import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { cloneElement } from "react";
import { NAVBAR_LINKS } from "../../common/Navbar/constants";
import Info from "../info";

export const Details = ({ label, title, desc, info, collage, amenities }) => {
  return <Box width="100%" my={16}>
    <Box maxWidth={1400} m="auto" pb={12} >
      <Box textAlign="center" py={6} width={{xs: "90%", md: "100%"}} m="auto">
        <Typography variant="body1" textTransform="uppercase" fontWeight={500} color={NAVBAR_LINKS.filter(elem => elem.title === title)[0].color}>{label}</Typography>
        <Typography variant="h1" fontSize={160} textTransform="uppercase" fontFamily="pizzicato-private">{title}</Typography>
        <Typography variant="body1" color="text.secondary">{desc}</Typography>
      </Box>
      {collage && <Box py={6} width={{xs: "90%", md: "100%"}} m="auto">
        <Stack direction="row" gap={{ xs: 1.5, sm: 3 }} alignItems="center">
          <Box flex={1} visibility="hidden" display={{ xs: "none", md: "block" }}>
            <img src="/images/01.png" alt="img" width="100%" />
          </Box>
          <Box flex={1}>
            <img src="/images/collage/01.png" alt="img" width="100%" />
          </Box>
          <Stack gap={{ xs: 1.5, sm: 3 }} flex={1}>
            <img src="/images/collage/02.png" alt="img" width="100%" />
            <img src="/images/collage/03.png" alt="img" width="100%" />
          </Stack>
          <Box flex={1}>
            <img src="/images/collage/04.png" alt="img" width="100%" />
          </Box>
          <Box flex={1} visibility="hidden" display={{ xs: "none", md: "block" }}>
            <img src="/images/07.png" alt="img" width="100%" />
          </Box>
        </Stack>
      </Box>}
      {amenities && <Box py={6} width={{xs: "90%", md: "100%"}} m="auto">
        <Typography variant="h3" textAlign="center" fontWeight={600} color="text.primary">Amenities</Typography>
        <Box m="auto" width="fit-content">
          <Stack direction="row" gap={3} py={6} width="100%" flexWrap="wrap" justifyContent="center">
            {amenities.map(({ icon, title }, idx) => {
              icon = cloneElement(icon, {
                sx: { fontSize: "32px" }
              })
              return <Stack width="164px" border="1px solid #00000020" bgcolor="#ffffff30" borderRadius={3} overflow="hidden" >
                <Stack width="100%" alignItems="center" justifyContent="center" sx={{ aspectRatio: "1/1" }}>
                  <Box>
                    {icon}
                  </Box>
                </Stack>
                <Box p={2} bgcolor="black">
                  <Typography textAlign="center" variant="body1" color='white'>{title}</Typography>
                </Box>
              </Stack>
            }
            )}
          </Stack>
        </Box>
      </Box>}
      {info && <Info INFO={info} />}
    </Box>
  </Box>
}