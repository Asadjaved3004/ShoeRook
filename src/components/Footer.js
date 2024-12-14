import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#333", color: "white", padding: "10px 0", textAlign: "center" }}>
      <Typography variant="body2">© 2024 Shoe Rook. All Rights Reserved.</Typography>
      <Typography variant="body2">Follow us on Social Media: Facebook | Instagram | Twitter</Typography>
    </Box>
  );
};

export default Footer;
