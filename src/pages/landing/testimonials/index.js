import { Masonry } from "@mui/lab";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Card } from "./card";
import { TESTIMONIALS } from "./constants";

const Testimonials = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width="100%" py={12}>
      <Box
        width={{ xs: "90%", lg: "75%" }}
        m="auto"
        maxWidth={1400}
        overflow="hidden"
      >
        <Stack spacing={4}>
          <Stack justifyContent="center" textAlign="center" maxWidth={600} alignSelf="center">
            <Typography variant="body1" textTransform="uppercase" fontWeight={500}>Testimonials</Typography>
            <Typography variant="h3">See what our guests have to say about us</Typography>
          </Stack>
          <Box width="100%">
            <Masonry columns={{ xl: 3, md: 2, xs: 1 }} spacing={2}>
              {TESTIMONIALS.map(({ name, description, review, image }, idx) => (
                <Box
                  key={idx}
                  data-sal={
                    sm ? "fade-up" : idx % 2 ? "fade-up-left" : "fade-up-right"
                  }
                >
                  <Card
                    key={idx}
                    name={name}
                    description={description}
                    review={review}
                    image={image}
                  />
                </Box>
              ))}
            </Masonry>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Testimonials;