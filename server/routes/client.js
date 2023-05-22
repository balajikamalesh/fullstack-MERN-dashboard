const express = require("express");
const {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} = require("../controllers/client");

const clientRoutes = express.Router();

clientRoutes.get("/products", getProducts);
clientRoutes.get("/customers", getCustomers);
clientRoutes.get("/transactions", getTransactions);
clientRoutes.get("/geography", getGeography);

module.exports = clientRoutes;
