const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Data
let products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3,
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5,
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2,
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4,
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1,
    },
];

// Helper to generate next ID
const getNextId = () => {
    if (products.length === 0) return 1;
    return Math.max(...products.map(p => p.id)) + 1;
};

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Product API visit /products to see all products"})
})

// 1. GET /products - Return all products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// 2. GET /products/:id - Return product by ID
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
});

// 3. GET /products/category/:categoryName - Return products by category
app.get("/products/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName.toLowerCase();
    const filteredProducts = products.filter(
        p => p.category.toLowerCase() === categoryName
    );

    res.status(200).json(filteredProducts);
});

// 4. POST /products - Add a new product
app.post("/products", (req, res) => {
    const { name, category, price, stock, rating } = req.body;

    const newProduct = {
        id: getNextId(),
        name,
        category,
        price,
        stock,
        rating,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// 5. PUT /products/:id - Replace entire product
app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, category, price, stock, rating } = req.body;

    // Replace all fields except ID
    products[productIndex] = {
        id: productId,
        name: name !== undefined ? name : products[productIndex].name,
        category: category !== undefined ? category : products[productIndex].category,
        price: price !== undefined ? price : products[productIndex].price,
        stock: stock !== undefined ? stock : products[productIndex].stock,
        rating: rating !== undefined ? rating : products[productIndex].rating,
    };

    res.status(200).json(products[productIndex]);
});

// 6. PUT /products/:id/stock - Update only stock value
app.put("/products/:id/stock", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (req.body.stock === undefined) {
        return res.status(400).json({ message: "Stock value is required" });
    }

    products[productIndex].stock = req.body.stock;
    res.status(200).json(products[productIndex]);
});

// 7. PUT /products/:id/price - Update only price
app.put("/products/:id/price", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (req.body.price === undefined) {
        return res.status(400).json({ message: "Price value is required" });
    }

    products[productIndex].price = req.body.price;
    res.status(200).json(products[productIndex]);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
