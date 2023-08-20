import { Box, Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

const ContactUs = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return <Grid container mt={10} columns={{ xs: 6, md: 12 }}>
    <Grid item xs={6}>
      <Box width={{ xs: "90%", md: "80%" }} py={8} m="auto" maxWidth={1400}>
        <Typography py={1} variant="body1" textTransform="uppercase" fontWeight={500} color={"#E0A30C"}>Contact us</Typography>
        <Typography variant={md ? "h2" : "h3"}>Get in touch</Typography>
        <Box my={4} maxWidth={900}>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Stack
              spacing={4}
              borderRadius={2}
              width="100%"
            >
              <Stack direction="row" spacing={2}>
                <TextField
                  sx={{ width: "100%" }}
                  label="First Name"
                  name="first-name"
                  variant="outlined"
                  required
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Last Name"
                  name="last-name"
                  variant="outlined"
                  required
                />
              </Stack>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
              />
              <TextField
                label="Message (Optional)"
                name="message"
                rows={4}
                variant="outlined"
                multiline
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "fit-content" }}
              >
                Send message
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Box overflow="hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3194114126504!2d73.75501068124665!3d15.55271396407507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfea08836c4c7d%3A0x96f9a450e1212de2!2sIndian%20Kitchen!5e0!3m2!1sen!2sin!4v1692549380555!5m2!1sen!2sin" width="100%" height="600" allowfullscreen="" loading="lazy" style={{ border: "none" }} referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Grid>
  </Grid>
}

export default ContactUs