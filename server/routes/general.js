const express = require("express");
const { getUser, getDashboardStats } = require("../controllers/general.js");

const generalRoutes = express.Router();
generalRoutes.get("/user/:id", getUser);
generalRoutes.get("/dashboard", getDashboardStats);

module.exports = generalRoutes;
