// RutasWeb.js
const express = require('express');
const router = express.Router();

var products = require("../data/products.json")
var currency = require("../data/currency.json")

router.get('/products', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(products)
})

router.get('/currency', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(currency)
})

module.exports = router;