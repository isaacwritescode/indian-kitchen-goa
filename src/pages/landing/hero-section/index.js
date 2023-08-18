import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function HeroSection() {
  return (
    <Stack
      justifyContent="center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Stack maxWidth={1400} mx="auto" width="100%" alignItems="center">
        <Typography variant="h6" color="white">
          WE ARE
        </Typography>
        <Stack mx="auto" width={{ xs: "40%", md: "20%" }}>
          <img src="/logos/wordmark-light.svg" width="100%" alt="logo" />
        </Stack>
        <Typography
          variant="body1"
          mb={4}
          fontWeight={500}
          maxWidth={320}
          textAlign="center"
          color="#ffffff90"
        >
          We provide affordable and premium stays in the heart of goa
        </Typography>
      </Stack>
    </Stack>
  );
}
