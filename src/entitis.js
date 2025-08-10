// entities.js

// Clase Abstracta (BaseEntity)
class BaseEntity {
  constructor(id) {
    // Si se intenta instanciar esta clase directamente, lanza un error
    if (new.target === BaseEntity) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.id = id;
  }

  // Método abstracto
  displayInfo() {
    throw new Error("Method 'displayInfo' must be implemented.");
  }
}

// Interfaz 1 (ICrudOperations)
class ICrudOperations {
  add(item) {
    throw new Error("Method 'add' must be implemented.");
  }
  getById(id) {
    throw new Error("Method 'getById' must be implemented.");
  }
  update(item) {
    throw new Error("Method 'update' must be implemented.");
  }
  delete(id) {
    throw new Error("Method 'delete' must be implemented.");
  }
}

// Interfaz 2 (IExportable)
class IExportable {
  exportToCsv() {
    throw new Error("Method 'exportToCsv' must be implemented.");
  }
}

// Clase concreta
class Product extends BaseEntity {
  constructor(id, name, price) {
    super(id);
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    return `Producto ID: ${this.id}, Nombre: ${this.name}, Precio: ${this.price}`;
  }

  // Implementación de los métodos de ICrudOperations
  add(item) {
    console.log(`Adding product: ${item.displayInfo()}`);
  }
  getById(id) {
    console.log(`Getting product with ID: ${id}`);
    return this.id === id ? this : null;
  }
  update(item) {
    console.log(`Updating product with ID: ${item.id}`);
    this.name = item.name;
    this.price = item.price;
  }
  delete(id) {
    console.log(`Deleting product with ID: ${id}`);
  }

  // Implementación del método de IExportable
  exportToCsv() {
    return `${this.id},${this.name},${this.price}`;
  }
}

module.exports = {
  BaseEntity,
  ICrudOperations,
  IExportable,
  Product,
};