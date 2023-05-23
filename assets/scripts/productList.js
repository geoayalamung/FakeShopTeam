//Contiene la definición de la clase "ProductList".
/* ### Step 3 - Product List

Create a class called `ProductList` that will have the following properties:

```js
const productList = {
  products: [],
  fetchProducts: function () {
    // fetch the products from the API
  },
  render() {
    // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
  },
};
```

> API to be used: https://fakestoreapi.com/products */

class ProductList{
    constructor(){
        this.products = [];

}
async fetchProducts(){
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data.map((item) =>{
            return new Product(item.id, item.title, item.price);
        });
        this.render();
        }catch(error){
            console.log(error);
    }
}
render(){
    const ul = document.createElement('ul');
    this.products.forEach((product) => {
        const productItem =new ProductItem(product);
        ul.appendChild(productItem.render());
});
document.body.appendChild(ul);
}
}
