import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Info({ INFO }) {
  return <Box maxWidth={1000} mx="auto" my={12}>
    <Stack spacing={8}>
      {INFO.map(({ label, title, desc, img }, idx) =>
        <Box key={idx}>
          <Grid container direction={idx % 2 === 1 ? "row-reverse" : "row"} spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid item xs={6}>
              <Stack alignItems="start">
                <Typography variant="body1" textTransform="uppercase" fontWeight={500}>{label}</Typography>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body1" fontWeight={500} color="text.secondary">{desc}</Typography>
                {/* <Box mt={4}>
                <Button variant="contained" size="large">Take a look</Button>
              </Box> */}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box flex={1}>
                <img src={img} alt="img" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )
      }
    </Stack>
  </Box>
}