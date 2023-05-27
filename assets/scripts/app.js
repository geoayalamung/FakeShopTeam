//Contiene la definición de la clase App y es el punto de entrada de la aplicación.

var productContainer = document.getElementById("prod-list");

fetch("https://fakestoreapi.com/products")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    data.forEach(function(product) {
      var listItem = document.createElement("li");
      listItem.className = "product-item";

      var itemContainer = document.createElement("div");

      var image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;

     
      image.classList.add("myClass");

     
      image.style.width = "200px";
      image.style.height = "200px";


      var content = document.createElement("div");
      content.className = "product-item__content";

      var title = document.createElement("h2");
      title.textContent = product.title;

      var price = document.createElement("h3");
      price.textContent = "$" + product.price;

      var description = document.createElement("p");
      description.textContent = product.description;

      var button = document.createElement("button");
      button.textContent = "Add to Cart";

      content.appendChild(title);
      content.appendChild(price);
      content.appendChild(description);
      content.appendChild(button);

      itemContainer.appendChild(image);
      itemContainer.appendChild(content);

      listItem.appendChild(itemContainer);
      productContainer.appendChild(listItem);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

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
  