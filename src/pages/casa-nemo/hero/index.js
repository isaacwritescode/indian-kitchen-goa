import { Box, Grid } from "@mui/material";

export default function Hero() {
  return <Box
    width="80%"
    m="auto"
    my={16}
  >
    <Grid
      container
      columns={{ xs: 6, md: 12 }}
      spacing={{ xs: 3, md: 6 }}
      alignItems="center"
    >
      <Grid item xs={6}>
        <img src="/images/casa-nemo-hero-wp.svg" width="100%" />
      </Grid>
      <Grid item xs={6}>
        <img src="/images/casa-nemo-amenities.svg" width="100%" />
      </Grid>
    </Grid>
  </Box>
}