import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const isMobile = useMediaQuery("(max-width: 600px)"); // Check if screen size is small (Mobile)
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Drawer open state

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold" }}>
          Shoe Rook
        </Typography>

        {/* Mobile Menu (Hamburger Icon) */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer}
              style={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer for mobile navigation */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.label} onClick={() => navigate(item.path)}>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {/* Search Box for larger screens */}
            <Box display="flex" alignItems="center" mr={2}>
              <InputBase
                placeholder="Search…"
                style={{
                  color: "white",
                  padding: "0 10px",
                  backgroundColor: "#444",
                  borderRadius: "4px",
                }}
              />
              <SearchIcon style={{ color: "white", marginLeft: "10px" }} />
            </Box>

            {/* Menu Buttons for larger screens */}
            {menuItems.map((item) => (
              <Button color="inherit" key={item.label} onClick={() => navigate(item.path)}>
                {item.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
