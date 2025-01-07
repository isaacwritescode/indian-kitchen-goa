import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { cloneElement, useState } from "react";
import { NAVBAR_LINKS } from "../../common/Navbar/constants";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const Details = ({
  label,
  title,
  desc,
  info,
  collage,
  amenities,
  location,
}) => {
  const [checkIn, setCheckIn] = useState(dayjs("2022-04-17"));
  const [checkOut, setCheckOut] = useState(dayjs("2022-04-27"));
  const path = title.replace(" ", "-").toLowerCase();
  const color = NAVBAR_LINKS.filter((elem) => elem.path === "/" + path)[0]
    .color;

  return (
    <Box width="100%" my={16}>
      <Box maxWidth={1400} m="auto" pb={12}>
        <Box
          textAlign="center"
          py={6}
          width={{ xs: "90%", md: "100%" }}
          m="auto"
        >
          <Typography
            variant="body1"
            textTransform="uppercase"
            fontWeight={500}
            color={color}
          >
            {label}
          </Typography>
          <Typography
            variant="h1"
            fontSize={{ xs: 80, sm: 110, md: 160 }}
            textTransform="uppercase"
            fontFamily="pizzicato-private"
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {desc}
          </Typography>
        </Box>
        {collage && (
          <Box py={{ xs: 0, md: 6 }} width={"90%"} m="auto">
            <Stack direction="row" gap={{ xs: 1.5, sm: 3 }} alignItems="center">
              <Box flex={2}>
                <img
                  style={{ borderRadius: 16 }}
                  src={`/images/${path}/1.jpg`}
                  alt="img"
                  width="100%"
                />
              </Box>
              <Stack flex={1} gap={{ xs: 1.5, sm: 3 }}>
                <Box flex={1}>
                  <img
                    style={{ borderRadius: 16 }}
                    src={`/images/${path}/2.jpg`}
                    alt="img"
                    width="100%"
                  />
                </Box>
                <Box flex={1}>
                  <img
                    style={{ borderRadius: 16 }}
                    src={`/images/${path}/3.jpg`}
                    alt="img"
                    width="100%"
                  />
                </Box>
              </Stack>
              <Box flex={1}>
                <img
                  style={{ borderRadius: 16 }}
                  src={`/images/${path}/4.jpg`}
                  alt="img"
                  width="100%"
                />
              </Box>
            </Stack>
          </Box>
        )}
        <Box width="90%" m="auto">
          <Grid container spacing={8}>
            <Grid item xs={8}>
              {info && (
                <Box py={6}>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color="text.primary"
                  >
                    About
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {info}
                  </Typography>
                </Box>
              )}
              {amenities && (
                <Box py={6}>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color="text.primary"
                  >
                    Amenities
                  </Typography>
                  <Box width="fit-content">
                    <Stack
                      direction="row"
                      gap={3}
                      py={6}
                      width="100%"
                      flexWrap="wrap"
                    >
                      {amenities.map(({ icon, title }, idx) => {
                        icon = cloneElement(icon, {
                          sx: { fontSize: "32px" },
                        });
                        return (
                          <Stack
                            bgcolor="#ffffff30"
                            borderRadius={3}
                            overflow="hidden"
                            spacing={2}
                          >
                            <Stack
                              alignItems="center"
                              justifyContent="center"
                              sx={{ aspectRatio: "1/1" }}
                              width="164px"
                              border="1px solid #00000020"
                              borderRadius={100}
                            >
                              <Box>{icon}</Box>
                            </Stack>
                            <Typography textAlign="center" variant="body1">
                              {title}
                            </Typography>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </Box>
                </Box>
              )}
              {location && (
                <Box py={6}>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color="text.primary"
                  >
                    Location
                  </Typography>
                  <Box
                    mt={4}
                    overflow="hidden"
                    borderRadius={4}
                    height="fit-content"
                  >
                    <iframe
                      title="map"
                      src={location}
                      width="100%"
                      height="600"
                      allowfullscreen=""
                      loading="lazy"
                      style={{ border: "none" }}
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid item xs={4}>
              <Box
                borderRadius={4}
                bgcolor="white"
                position="sticky"
                top="12.5%"
                p={4}
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px",
                  border: "1px solid rgb(221, 221, 221)",
                }}
              >
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <Stack spacing={4} borderRadius={2} width="100%">
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      color="text.primary"
                    >
                      Check availability
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Full Name"
                      name="full-name"
                      variant="outlined"
                      required
                    />
                    <TextField
                      label="Phone"
                      name="phone"
                      type="text"
                      variant="outlined"
                      required
                    />
                    <TextField
                      label="Guests"
                      placeholder="No. of guests"
                      name="guests"
                      type="number"
                      variant="outlined"
                      required
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <Stack direction="row" spacing={2}>
                          <DatePicker
                            label="Check in"
                            value={checkIn}
                            onChange={(newValue) => setCheckIn(newValue)}
                          />
                          <DatePicker
                            label="Check out"
                            value={checkOut}
                            onChange={(newValue) => setCheckOut(newValue)}
                          />
                        </Stack>
                      </DemoContainer>
                    </LocalizationProvider>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ background: color, borderRadius: 2 }}
                      size="large"
                    >
                      Send enquiry
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
