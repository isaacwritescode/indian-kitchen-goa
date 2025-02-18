import { useTheme } from "@emotion/react";
import { Divider, List, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { camelCaseToSentance } from "../../../utils/camelCaseToSentence";
import { PROJECT_STATS } from "./constants";

const StatBlock = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return (
    <Box
      width={{ xs: "90%", lg: "75%" }}
      py={6}
      pl={6}
      pr={{ xs: 6, lg: 16 }}
      boxSizing="border-box"
      borderRadius={6}
      m="auto"
      my={8}
    >
      <VisibilitySensor
        active={!viewPortEntered}
        onChange={(isVisible) => {
          if (isVisible) {
            setViewPortEntered(true);
          }
        }}
        delayedCall
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction={{ sm: "row", xs: "column" }}
        >
          {Object.entries(PROJECT_STATS).map(
            ([key, { value, suffix, decimal }], idx) => (
              <Fragment key={idx}>
                <Stack
                  spacing={{ xs: 2, md: 4 }}
                  direction={{ xs: "column", md: "row" }}
                  textAlign={{ xs: "center", md: "left" }}
                  maxWidth={200}
                  flex={1}
                  alignItems="center"
                >
                  <CountUp
                    start={viewPortEntered ? null : 0}
                    end={value}
                    duration={1}
                    onEnd={() => (viewPortEntered ? setOnCountUpEnd(true) : "")}
                    decimals={decimal}
                  >
                    {({ countUpRef }) => {
                      return (
                        <>
                          <Typography
                            ref={countUpRef}
                            variant="h3"
                            textTransform="capitalize"
                          >
                            {onCountUpEnd && (
                              <Box display="inline">{suffix}</Box>
                            )}
                          </Typography>
                        </>
                      );
                    }}
                  </CountUp>
                  <Typography
                    variant="body1"
                    textTransform="capitalize"
                    color="grey.500"
                    width="80%"
                  >
                    {camelCaseToSentance(key)}
                  </Typography>
                </Stack>
                {idx < Object.entries(PROJECT_STATS).length - 1 &&
                  (sm ? (
                    <List>
                      <Divider
                        sx={{ borderColor: "#00000030", height: "48px" }}
                        orientation="vertical"
                      />
                    </List>
                  ) : (
                    <List sx={{ width: "80%", my: 4, mx: "auto" }}>
                      <Divider
                        sx={{ borderColor: "#00000050" }}
                        orientation="horizontal"
                      />
                    </List>
                  ))}
              </Fragment>
            ),
          )}
        </Stack>
      </VisibilitySensor>
    </Box>
  );
};

export default StatBlock;
