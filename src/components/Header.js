import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <AppBar position="static" style={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold" }}>
          Shoe Rook
        </Typography>
        <Box display="flex" alignItems="center" mr={2}>
          <InputBase
            placeholder="Search…"
            style={{ color: "white", padding: "0 10px", backgroundColor: "#444", borderRadius: "4px" }}
          />
          <SearchIcon style={{ color: "white", marginLeft: "10px" }} />
        </Box>
        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button color="inherit">Shop</Button>
        <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
        <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
        <Button color="inherit" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
