const express = require("express");
const { getAdmins, getUserPerformance } = require("../controllers/management");

const managementRoutes = express.Router();

managementRoutes.get("/admins", getAdmins);
managementRoutes.get("/performance/:id", getUserPerformance);

module.exports = managementRoutes;
