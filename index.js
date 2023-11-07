class ProductManager {
    constructor() {
    this.products = [];
    this.autoIncrementId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
      //  campos  obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios');
        return;
}

    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
        console.error('El código ya está en uso');
        return;
}

    const newProduct = {
        id: this.autoIncrementId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,};

    this.products.push(newProduct);
    this.autoIncrementId++;

    console.log('Producto agregado satisfactoriamente');}

    getProducts() {
    return this.products;
    }
    getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
        console.error('Producto no encontrado');
    } else {
        return product;
    }
    }
}

  //  instancia de la clase ProductManager
const productManager = new ProductManager();


console.log('Productos iniciales:', productManager.getProducts());


productManager.addProduct(
    'Laptop HP',
    'Portátil HP con procesador Intel Core i7',
    800,
    'laptop.jpg',
    'hp123',
    10
);


console.log('Productos después de agregar uno:', productManager.getProducts());


productManager.addProduct(
    'PC de escritorio Dell',
    'Ordenador de escritorio Dell con pantalla HD',
    600,
    'desktop.jpg',
    'hp123', // Código repetido
    5
);


const productId = 1; 
const foundProduct = productManager.getProductById(productId);
if (foundProduct) {
    console.log('Producto de computadora encontrado:', foundProduct);
}
