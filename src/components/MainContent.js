import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import BuyNowForm from "./BuyNowForm";
import "../MainContent.css";

const MainContent = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    { id: 1, name: "Sport Shoes", price: "PKR:2500", category: "Sport Shoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CLKs2ENpRipU7Tt0g59O1dnwXKCrGb7ZEQ&s" },
    { id: 2, name: "Casual Shoes", price: "PKR:3000", category: "Casual Shoes", img: "data:image/jpeg;base64,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" },
    { id: 3, name: "Formal Shoes", price: "PKR:4500", category: "Formal Shoes", img: "data:image/jpeg;base64,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" },
    { id: 4, name: "Formal Shoes", price: "PKR:4500", category: "Formal Shoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfpS2O6v42zTGgfLXtDd1nnPayFvbqSqIvg&s" },
    { id: 5, name: "Sport Shoes", price: "PKR:2500", category: "Sport Shoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7dJKv5TNF6qzBFXVBKoA-y0CmDY__BigAg&s" },
    { id: 6, name: "Casual Shoes", price: "PKR:2500", category: "Casual Shoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyOp-ifGfGma8aeeThgs_qrj0GMO7gaB82A&s" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(""); // State for dropdown selection
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  const closeForm = () => {
    setSelectedProduct(null);
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter((product) => product.category === selectedCategory);


    
  return (
    <Box style={{ padding: 20 }}>
      {/* Dropdown for Category Selection */}
      <FormControl style={{ width: "200px", marginBottom: "20px" }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Sport Shoes">Sport Shoes</MenuItem>
          <MenuItem value="Casual Shoes">Casual Shoes</MenuItem>
          <MenuItem value="Formal Shoes">Formal Shoes</MenuItem>
        </Select>
      </FormControl>

      {/* Horizontal Scrolling Container */}
      <Box
        style={{
          display: "flex",
          overflowX: "auto",
          paddingBottom: 10,
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            style={{
              minWidth: "250px",
              flexShrink: 0,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.img}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Conditionally render the BuyNowForm */}
      {selectedProduct && <BuyNowForm product={selectedProduct} onClose={closeForm} />}
    </Box>
  );
};

export default MainContent;
