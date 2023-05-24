//Contiene la definición de la clase "Product".

/* const product = {
  id: 1,
  title: "...",
  price: 0,
  description: "...",
  image: "...",
};
console.log(product) */


class Product {
    constructor(id, title, price, description, image) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
    const productTest = new Product(0, "Test Product", 100, "This is a test", "test.jpg");
    const productTest1 = new Product(1, "Test Product2", 200, "This is another test", "test.jpg");
  console.log(productTest1);
  console.log(productTest);
