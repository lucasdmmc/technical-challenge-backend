const { Router } = require('express');

const CategoriesController = require("../controllers/CategoriesController")
const categoriesController = new CategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", categoriesController.index)
categoriesRoutes.get("/:id", categoriesController.show)
categoriesRoutes.put("/:id", categoriesController.update)
categoriesRoutes.post("/new", categoriesController.create)
categoriesRoutes.delete("/:id", categoriesController.delete)

module.exports = categoriesRoutes;