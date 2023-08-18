import { Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "../../../common/Link";
import { AccordionGroup } from "./AccordionGroup";

const FAQ = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box width="100%" bgcolor="#f2f3f5">
      <Grid
        id="FAQ"
        container
        gap={8}
        py={12}
        maxWidth={1000}
        m="auto"
        flexWrap="nowrap"
        width={md ? "75%" : "90%"}
        direction={lg ? "row" : "column"}
        alignItems={lg ? "center" : md ? "start" : "center"}
      >
        <Grid item lg={6}>
          <Stack alignItems="start">
            <Typography variant="body1" textTransform="uppercase" fontWeight={500}>FAQ</Typography>
            <Typography variant="h3">Let’s see whats on your mind</Typography>
            <Typography variant="body1" fontWeight={500} color="text.secondary">Still got a question? Reach out to us</Typography>
            <Box mt={4}>
              <Link
                path="/contact-us"
                component={
                  <Button size="medium" variant="outlined">
                    Contact us
                  </Button>
                }
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          <AccordionGroup expanded={expanded} handleChange={handleChange} />
        </Grid>
      </Grid>
    </Box>
  );
};


export default FAQ;