//Contiene la definición de la clase App y es el punto de entrada de la aplicación.

const cart = [];

var products ={
  items: [
    {
      id: 1,
      name: "A Pillow",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      id: 2,
      name: "A Carpet",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
   /* Creo que debemos agregar los productos de las APIS */
  ],

  addToCart: function (productId) {
    var product = this.items.find(function(item) {
      return item.id === productId;
    });

    if (product) {
      cart.push(product);
      console.log("Product added to your cart:", product);
    }
  },
};

var addToCartButtons = document.querySelectorAll(".product-item button");


addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var productId = parseInt(
      event.target.closest(".product-item").dataset.productId
    );
    products.addToCart(productId);
  });
});


function orderNow() {
    console.log("¡Order Made!");
    console.log("Products in the Cart:", cart);
  }
  
  var orderButton = document.querySelector(".cart button");
  
  orderButton.addEventListener("click", orderNow);
  