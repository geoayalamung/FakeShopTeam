//Contiene la definición de la clase "Shop"
/* ### Step 4 - ShoppingCart

Create a class called `ShoppingCart` that will have the following properties:

```js
const shoppingCart = {
  items: [],
  getTotal() {
    // calculate the total price of the items in the cart
  },
  render() {
    // render the total and a button `order now` in a `<section>` element
  },
};
``` */

class ShoppingCart{
    static items=[];

    static addProduct(product){
        this.items.push(product);
        this.updateTotal();
    }
}
