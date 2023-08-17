import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "../Link";
import { SocialLinks } from "./SocialLinks";
import { FOOTER_LINKS } from "./constants";

const Footer = () => {
  return <Box bgcolor="#000000">
    <Box maxWidth={1400} pt={20} pb={16} m="auto" width="90%">
      <Grid container spacing={6} columns={{ xs: 4, sm: 4, md: 8 }}>
        <Grid item xs={4} sm={4} md={4}>
          <Stack spacing={3} width="100%" >
            <Box alignSelf="center">
              <img src="/logos/wordmark-light.svg" width={240} />
              <SocialLinks />
            </Box>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ borderColor: "#ffffff20" }} />
        <Grid item md width="100%">
          <Box display="grid" gridTemplateColumns="1fr 1fr">
            {Object.keys(FOOTER_LINKS).map((category, idx) => (
              <Stack spacing={6} pb={6} pl={{ md: 6 }}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ fontWeight: 500, textTransform: "capitalize" }}
                >
                  {category}
                </Typography>
                {FOOTER_LINKS[category].map(({ item, url, path }, idx) => (
                  <Link key={idx} url={url} path={path} component={<Typography
                    variant="body1"
                    color="#ffffff80"
                    sx={{ fontWeight: 500, textTransform: "capitalize" }}
                  >
                    {item}
                  </Typography>} />
                ))}
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
}

export default Footer;