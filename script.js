const data = [
  {
    name: "Cosmetics",
    productList: [
      {
        name: "Hair Oil",
        price: 122,
      },
      {
        name: "Face wash",
        price: 123,
      },
    ],
  },
  {
    name: "Household",
    productList: [
      {
        name: "Hair Oil",
        price: 122,
      },
      {
        name: "Face wash",
        price: 123,
      },
    ],
  },
];

const cart = [];

function prodList(products) {
  return `
        ${products
          .map(
            (product) => `
            <div id="product-ctn">
                <p id="prod-name"  class="prod-details">Name: ${product.name}</p>
                <p id="prod-price" class="prod-details">Price: ${product.price}</p>
                <button id="add-btn" class="btn">Add to the Cart</button>
                <br>
                <button id="remove-btn" class="btn">Remove from Card</button>
            </div>
        `
          )
          .join(" ")}
    `;
}

document.getElementById("app").innerHTML = `
<h1 id="heading">Cart</h1>
${data
  .map(
    (list) => `
    <div>
        <h2 id="prod-type">${list.name}</h2>
        ${prodList(list.productList)}
    <div>
`
  )
  .join(" ")}
`;

var addBtn = document.getElementById("add-btn");
var rmvBtn = document.getElementById("remove-btn");

addBtn.addEventListener("click", function () {
  console.log("Product Added to the Cart");
});

rmvBtn.addEventListener("click", function () {
  console.log("Product removed from the Cart");
});
