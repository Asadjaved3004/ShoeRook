import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink for routing

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "300px", sm: "400px" }, // Adjust maxWidth for small screens
        margin: "50px auto",
        padding: { xs: "16px", sm: "20px" }, // Adjust padding for smaller screens
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "20px",
          textAlign: "center",
          fontSize: { xs: "1.25rem", sm: "1.5rem" }, // Adjust font size
        }}
      >
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        sx={{
          marginBottom: "20px",
          fontSize: { xs: "0.875rem", sm: "1rem" }, // Adjust font size for smaller screens
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        sx={{
          marginBottom: "20px",
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          padding: { xs: "10px", sm: "12px" }, // Adjust padding for smaller screens
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
        onClick={handleLogin}
      >
        Login
      </Button>

      {/* Redirect to Sign Up Page */}
      <Typography
        variant="body2"
        sx={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Smaller font size for small screens
        }}
      >
        <span>If you are a new user, </span>
        <Link
          component={RouterLink}
          to="/signup"
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
