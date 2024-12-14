import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link, IconButton, Stack } from "@mui/material";
import { Facebook, Google, Instagram } from "@mui/icons-material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Sign up with ${platform}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
        padding: "20px",
        backgroundColor: "#f4f4f4", // Optional background for contrast
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px", // Limit the maximum width of the form
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          backgroundColor: "white", // Make the form container white for contrast
          display: "flex",
          flexDirection: "column", // Stack form fields vertically
          gap: "20px", // Add space between form fields
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>

        {/* Name Input */}
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password Input */}
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Error Message */}
        {error && (
          <Typography variant="body2" color="error" sx={{ textAlign: "center" }}>
            {error}
          </Typography>
        )}

        {/* Signup Button */}
        <Button fullWidth variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>

        {/* Social Media Login */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            Or sign up with
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <IconButton onClick={() => handleSocialLogin("Google")}>
              <Google />
            </IconButton>
            <IconButton onClick={() => handleSocialLogin("Facebook")}>
              <Facebook />
            </IconButton>
            <IconButton onClick={() => handleSocialLogin("Instagram")}>
              <Instagram />
            </IconButton>
          </Stack>
        </Box>

        {/* Login Link */}
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          <span>Already have an account? </span>
          <Link href="/login" sx={{ textDecoration: "none" }}>
            <strong>Login</strong>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
