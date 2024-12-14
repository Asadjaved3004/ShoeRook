import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link, IconButton } from "@mui/material";
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


//   const handleSignup = () => {
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // Proceed with signup logic here (e.g., API call)
//     alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
//   };

  const handleSocialLogin = (platform) => {
    alert(`Sign up with ${platform}`);
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
        Sign Up
      </Typography>

      {/* Name Input */}
      <TextField
        fullWidth
        label="Full Name"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email Input */}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Confirm Password Input */}
      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Error Message */}
      {error && (
        <Typography variant="body2" color="error" style={{ marginBottom: "20px", textAlign: "center" }}>
          {error}
        </Typography>
      )}

      {/* Signup Button */}
      <Button fullWidth variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>

      {/* Social Media Login Icons */}
      <Box style={{ marginTop: "20px", textAlign: "center" }}>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          Or  with
        </Typography>
        <Box>
          <IconButton onClick={() => handleSocialLogin("Google")} style={{ margin: "0 10px" }}>
            <Google />
          </IconButton>
          <IconButton onClick={() => handleSocialLogin("Facebook")} style={{ margin: "0 10px" }}>
            <Facebook />
          </IconButton>
          <IconButton onClick={() => handleSocialLogin("Instagram")} style={{ margin: "0 10px" }}>
            <Instagram />
          </IconButton>
        </Box>
      </Box>

      {/* Login Link */}
      <Typography variant="body2" style={{ marginTop: "20px", textAlign: "center" }}>
        <span>Already have an account? </span>
        <Link href="/login" style={{ textDecoration: "none" }}>
          <strong>Login</strong>
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;
