//Contiene la definición de la clase "ProductItem".
/* ### Step 2 - Product Item

Create a class called `ProductItem` that will have the following properties:
 */
/* ```js
const productItem = {
  product: {}, // instance of Product class
  addToCart() {
    // just console.log the product for now
  },
  render() {
    // return the product element with the product data (<li>)
  },
};
``` */

/* Test your class by creating a new instance of it with hardcoded values and calling the `render` method. Also, test the `addToCart` method by clicking on the button and check if shows the product in the console. */

class ProductItem{
    constructor(product){
        this.product = product;
    }
    addToCart(){
        shoppingCart.addProduct(this.product);
        console.log(this.product);
    }
    render(){
        const li = document.createElement('li');
        list.innerHTML = ` img src = "${this.product.image}" alt = "${this.product.tittle}"/>
        <h3>${this.product.tittle}</h3>
        <p>Price: $$this.product.price}</p>
        <p>${this.product.description}</p>
        <button onclick = "addToCart(this.id)">Add to cart</button>`;
        return li;
    }
}