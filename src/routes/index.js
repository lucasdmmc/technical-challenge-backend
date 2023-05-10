const { Router } = require('express');

const categoriesRoutes = require("./categories.routes");
const productsRoutes = require("./products.routes");

const routes = Router();
routes.use("/categories", categoriesRoutes);
routes.use("/products", productsRoutes)

module.exports = routes;