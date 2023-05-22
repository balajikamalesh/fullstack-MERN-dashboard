const express = require("express");
const { getSales } = require("../controllers/sales");

const salesRoutes = express.Router();
salesRoutes.get("/sales", getSales);

module.exports = salesRoutes;
