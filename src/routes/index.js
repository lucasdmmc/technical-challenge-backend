const { Router } = require('express');

const categoriesRoutes = require("./categories.routes");
const categoriesIdRoutes = require("./categoriesId.routes");
const createcategoriesRoutes = require("./createCategories.routes")

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/categories/:id", categoriesIdRoutes);
routes.use("/new", createcategoriesRoutes);



module.exports = routes;