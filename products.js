let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Ladys dress",
        category: "ladies",
        price: 99.99,
        img:
          "https://img.joomcdn.net/a4d061cede3cc457594d6ee73ed52417c41a1198_original.jpeg",
      },
      {
        title: " Mens trousers",
        category: "Mens",
        price: 144.99,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k1oEoPJqij3LdMpkjYjb89ePzmGxcTv65A&usqp=CAU",
      },
      {
        title: "Girls dress",
        category: "Girls Kids",
        price: 99.99,
        img:
          "https://cdn.chv.me/images/thumbnails/2pcs-set-Girls-Dress-Colorful-jqTwYbOs.jpeg.thumb_800x800.jpg",
      },
      {
        title: "Jeans",
        category: "Boys Kids",
        price: 119.99,
        img:
          "https://image.made-in-china.com/202f0j00vSWlEncJykob/Wholesale-Washed-Kids-Unisex-Solid-Color-Children-Denim-Jeans.jpg",
      },
      {
        title: "Ladies swimwear",
        category: "Ladies swimwear",
        price: 119.99,
        img:
          "https://image.made-in-china.com/44f3j00dLHtARkhEBoq/Sexy-High-Quality-Two-Piece-Beachwear-Bikini-Ladies-Swimwear.jpg",
      },
      {
        title: "Mens swimwear",
        category: "Mens swimwear",
        price: 119.99,
        img:
          "https://i5.walmartimages.com/asr/3b8d5270-e41a-42c1-a009-de1c8f0b9bf5.c03daf0781945cf0c411a419f19ecb36.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      },
      {
        title: "Girls swimwear",
        category: "Girls swimwear",
        price: 119.99,
        img:
          "https://img.joomcdn.net/e281314462b2e6f33ac9196b348fc8d44a577aca_original.jpeg",
      },
      {
        title: "Boys swimwear",
        category: "Boys swimwear",
        price: 119.99,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xAJD4fbrAPpH6SBG8KbgSiTpc73vY2VKKw&usqp=CAU",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          

          <input
          class="form-control"
          type="number"
          name="addImg"
          id="addCart${position}"
          min="1"
          value="1"
        />


        

<button type="button" class="btn btn-secondary" onclick="addCart(${position})" >
Add to cart
</button>
             
         


          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
            Edit
          </button>
          <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
            Delete
          </button>
         

           
              <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >

                        <option value="Ladies">Ladies</option>
                        <option value="Mens">Mens</option>
                        <option value="Girls Kids">Girls Kids</option>
                        <option value="Boys Kids">Boys Kids</option>
                        <option value="Ladies swimwear">Ladys swim wear</option>
                        <option value="Mens swimwear">Mens swim wear</option>
                        <option value="Girls swimwear">Girls swim wear</option>
                        <option value="Boys swimwear">Boys swim wear</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    `;
  });
}

readProducts(products);

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// ADD TO CART
function addCart(position) {
  let qty = document.querySelector(`#addCart${position}`).value;

  cart.push({ ...products[position], qty });

  localStorage.setItem("cart", JSON.stringify(cart));
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}
// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}

// CHECKOUT
function checkout() {
  let total = cart
    .reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0)
    .toFixed(2);
  try {
    if (parseInt(total) == 0) throw new Error("Nothing in cart");
    let confirmation = confirm(`Total payment needed: R${total}`);

    if (confirmation) {
      cart.length = 0;
      localStorage.removeItem("cart");
      readCart(cart);
    }
  } catch (err) {
    alert(err);
  }
}
