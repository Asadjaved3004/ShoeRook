import React from "react";
import { Typography, Button, TextField, Box } from "@mui/material";

const BuyNowForm = ({ product, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order placed for ${product.name}!`);
    onClose();
  };

  return (
    <Box
      sx={{
        padding: 4,
        margin: "auto",
        maxWidth: 500,
        border: "1px solid #ccc",
        borderRadius: 4,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Buy Now - {product.name}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          fullWidth
          required
          type="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Address"
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          fullWidth
        >
          Place Order
        </Button>
        <Button
          variant="text"
          color="secondary"
          style={{ marginTop: 10 }}
          fullWidth
          onClick={onClose}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default BuyNowForm;
