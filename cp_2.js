// Starting step 3

function fetchProductsThen(){
    fetch('https://www.course-api.com/javascript-store-products')
  .then(response => response.json()) // Convert the response to JSON
  .then(products => {
    products.forEach(product => {
      console.log(`Product: ${product.fields.name} | Price: $${product.fields.price / 100}`);
    });
  })
  //catching the errors
  .catch(error => console.error('Failed to load product data:', error));
}

//calling the function to display in the console
fetchProductsThen()


