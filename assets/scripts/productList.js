const productContainer = document.getElementById("prod-list");

fetch("https://fakestoreapi.com/products")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.forEach(function(product) {
      var listItem = document.createElement("li");
      listItem.className = "product-item";

      var itemContainer = document.createElement("div");
      itemContainer.className = "product-item__container";

      var image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;

      image.classList.add("product-item__image");

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

      button.addEventListener("click", function() {
        products.addToCart(product.id);
      });
    });
  })
  .catch(function(error) {
    console.log(error);
  });
