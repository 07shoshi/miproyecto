// services.js

const { ProductRepository, CustomerRepository } = require("./repositories");

// Servicio 1
class ProductService {
  constructor() {
    this.repo = new ProductRepository();
  }

  addNewProduct(product) {
    // Aquí puedes añadir lógica de negocio, como validaciones
    this.repo.addProduct(product);
    console.log(`ProductService: Product '${product.name}' added successfully.`);
  }

  getProduct(id) {
    return this.repo.getProductById(id);
  }

  exportAllProducts() {
    const allProducts = this.repo.getAllProducts();
    return allProducts.map((p) => p.exportToCsv()).join("\n");
  }
}

// Servicio 2
class CustomerService {
  constructor() {
    this.repo = new CustomerRepository();
  }
  // Implementación de métodos para clientes
}

module.exports = { ProductService, CustomerService };