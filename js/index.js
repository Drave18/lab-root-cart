// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value;
  let subtotal  = price*quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
  //... your code goes here
}
// ITERATION 2 & 3
function calculateAll() {
  let totalElement = document.querySelector('#total-value span');
  let products = document.getElementsByClassName('product')
  let totalProducts = 0;
  for(const product of products){
    totalProducts += updateSubtotal(product);
  }
  totalElement.innerText = totalProducts

}

// ITERATION 4

function removeProduct(event) {
  const button = event.target; // 
  const row = button.closest('.product');
  if (row) {
    row.remove();
    calculateAll();
  }
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector(
    '.create-product td input[placeholder="Product Name"]'
  ).value;

  let unitPrice = document.querySelector(
    '.create-product td input[placeholder="Product Price"]'
  ).value;

  let products = document.querySelector('.products')
  let product = document.createElement('tr')
  product.className='product'
  product.innerHTML += `
    <td class="name">
      <span></span>
    </td>
    <td class="price">$<span></span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
`;
product.querySelector('.price span').textContent = unitPrice;
product.querySelector('.name span').textContent = productName
products.appendChild(product);

//Clear inputs
document
  .querySelectorAll('.create-product td input')
  .forEach((input) => (input.value = ''));
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Event delegation for remove buttons
  document
    .querySelector('.products')
    .addEventListener('click', function (event) {
      if (event.target.classList.contains('btn-remove')) {
        removeProduct(event);
      }
    });
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
