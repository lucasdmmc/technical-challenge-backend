const knex = require("../database/knex");
const AppError = require("../utils/AppError")
class ProductsController {
  async create(request, response) {
    const { name, category, price } = request.body;
  
    try {
      // Verifica se a categoria já existe
      const productExists = await knex('products').where({ name, category, price }).first();
  
      if (productExists) {
        // Dispara um erro caso a categoria já exista
        throw new AppError("Product already exists");
      }
  
      // Insere uma nova categoria no banco de dados
      const product = await knex('products').insert({ name, category, price }).returning(['id', 'name', "category", 'price']);
      
      // Retorna a categoria recém-criada
      return response.json({ product });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async index(request, response) {
    const products = await knex.select("*").from("products");

    return response.json(products);
  }

  async show(request, response) {
    try {
      const { id } = request.params;
  
      // Faz uma consulta no banco de dados para buscar o registro pelo id
      const product = await knex("products").where({ id }).first();
  
      // Retorna o registro encontrado
      return response.json({ product });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('products').where({ id }).delete();

    return response.status(204).send();
  }

  async update(request, response) {
    try {
      const { name, category, price } = request.body;
      const { id } = request.params;

      const productsExists = await knex('products').where({ id }).first();
  
      if (!productsExists) {
        return response.json({ error: "Product not found" });
      }
  
      await knex('products').where({ id }).update({ name, category, price });
  
      return response.status(200).json({ message: "Products updated successfully" });
  
    } catch (error) {
      console.error(error);
      return response.sendStatus(500);
    }
  }
}

module.exports = ProductsController;