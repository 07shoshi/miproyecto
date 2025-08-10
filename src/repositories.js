// repositories.js

// Repositorio 1
class ProductRepository {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(`Product '${product.name}' added to repository.`);
  }

  getProductById(id) {
    return this.products.find((p) => p.id === id);
  }

  getAllProducts() {
    return this.products;
  }
}

// Repositorio 2 (puedes crear una clase Customer similar)
class CustomerRepository {
  constructor() {
    this.customers = [];
  }
  // Implementación de métodos para clientes
}

module.exports = { ProductRepository, CustomerRepository };