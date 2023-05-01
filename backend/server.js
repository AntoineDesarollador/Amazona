import express from "express";
import data from "./data.js";





const app = express();


app.get("/", (req, res) => {
    res.send(data.slug);
});


app.get("/api/product", (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});