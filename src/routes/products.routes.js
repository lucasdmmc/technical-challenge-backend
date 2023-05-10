const { Router } = require('express');

const ProductsController = require("../controllers/ProductsController")
const productsController = new ProductsController();

const productsRoutes = Router();

productsRoutes.get("/", productsController.index)
productsRoutes.get("/:id", productsController.show)
productsRoutes.put("/:id", productsController.update)
productsRoutes.post("/new", productsController.create)
productsRoutes.delete("/:id", productsController.delete)


module.exports = productsRoutes;