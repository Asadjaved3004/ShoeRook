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
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: "20px", textAlign: "center" }}>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>

      {/* Redirect to Sign Up Page */}
      <Typography variant="body2" style={{ marginTop: "20px", textAlign: "center" }}>
        <span>If you are a new user, </span>
        <Link component={RouterLink} to="/signup" style={{ textDecoration: "none" }}>
          <strong>Sign Up</strong>
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
