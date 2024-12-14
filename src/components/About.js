import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Shoe Rook!
        </Typography>
        <Typography variant="body1" paragraph>
          At **Shoe Rook**, we’re dedicated to providing the finest selection of
          shoes for every occasion. Whether you’re looking for sports shoes,
          casual wear, or formal footwear, we’ve got you covered. Our platform
          is designed with ease of use in mind, allowing you to explore, select,
          and purchase your favorite shoes effortlessly.
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the latest trends, enjoy seamless shopping, and step into
          comfort and style with Shoe Rook. Your satisfaction is our priority!
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Explore Now
        </Button>
      </Paper>
    </Box>
  );
};

export default About;
