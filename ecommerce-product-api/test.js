const test = async () => {
    try {
        // 1. POST product
        console.log("Testing POST /products");
        let res = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Bluetooth Speaker", category: "Electronics", price: 2999, stock: 20, rating: 4.6 })
        });
        console.log("POST status:", res.status);
        console.log(await res.json());

        // 2. GET all products
        console.log("\nTesting GET /products");
        res = await fetch('http://localhost:3000/products');
        console.log("GET all status:", res.status);
        const allProducts = await res.json();
        console.log("Total products:", allProducts.length);

        // 3. GET product by ID
        console.log("\nTesting GET /products/6");
        res = await fetch('http://localhost:3000/products/6');
        console.log("GET id status:", res.status);
        console.log(await res.json());

        // 4. GET products by category
        console.log("\nTesting GET /products/category/Electronics");
        res = await fetch('http://localhost:3000/products/category/Electronics');
        console.log("GET category status:", res.status);
        console.log(await res.json());

        // 5. PUT replace entire product
        console.log("\nTesting PUT /products/6");
        res = await fetch('http://localhost:3000/products/6', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "JBL Speaker", category: "Electronics", price: 3499, stock: 15, rating: 4.8 })
        });
        console.log("PUT full status:", res.status);
        console.log(await res.json());

        // 6. PUT update stock
        console.log("\nTesting PUT /products/6/stock");
        res = await fetch('http://localhost:3000/products/6/stock', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stock: 50 })
        });
        console.log("PUT stock status:", res.status);
        console.log(await res.json());

        // 7. PUT update price
        console.log("\nTesting PUT /products/6/price");
        res = await fetch('http://localhost:3000/products/6/price', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ price: 3299 })
        });
        console.log("PUT price status:", res.status);
        console.log(await res.json());

    } catch (err) {
        console.error("Test failed:", err);
    }
};

test();
