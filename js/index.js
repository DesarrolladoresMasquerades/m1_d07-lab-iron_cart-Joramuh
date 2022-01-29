// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const calcSubTotal = product.querySelector(".subtotal span");
  
  return calcSubTotal.textContent = price.textContent*quantity.value;    
}

function calculateAll() {
 
// ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach(element => {
   total += parseInt(updateSubtotal(element))
  });
// ITERATION 3
  document.querySelector("#total-value span").textContent= total;
  return total; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
