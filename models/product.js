// product.js

// Import necessary modules
const mongoose = require('mongoose');

// Define the schema for the product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

// Create and export the Product model based on the schema
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
