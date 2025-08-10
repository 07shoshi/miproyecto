// main.js

const { Product } = require("./src/entitis");
const { ProductService } = require("./src/services");

// Lógica principal
const productService = new ProductService();

// Creación y adición de productos
const product1 = new Product(1, "Laptop", 1200.50);
const product2 = new Product(2, "Mouse", 25.00);

productService.addNewProduct(product1);
productService.addNewProduct(product2);

// Obteniendo y mostrando un producto
const foundProduct = productService.getProduct(1);
if (foundProduct) {
  console.log(`\nFound product: ${foundProduct.displayInfo()}`);
}

// Exportando todos los productos a CSV
console.log("\n--- Exporting products to CSV ---");
console.log(productService.exportAllProducts());