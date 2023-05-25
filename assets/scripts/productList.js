//Contiene la definición de la clase "ProductList".

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this.product);
  }

  render() {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <img src="${this.product.image}" alt="${this.product.title}">
      <h3>${this.product.title}</h3>
      <p>${this.product.price}</p>
      <p>${this.product.description}</p>
      <button onclick="productList.products[0].addToCart()">Add to Cart</button>
    `;
    return liElement;
  }
}

class ProductList {
  constructor() {
    this.products = [];
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          this.products = data;
          this.render();
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
  }

  render() {
    const ulElement = document.createElement('ul');

    this.products.forEach(product => {
      const productItem = new ProductItem(product);
      const liElement = productItem.render();
      ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
  }
}

const productList = new ProductList();
productList.fetchProducts();
