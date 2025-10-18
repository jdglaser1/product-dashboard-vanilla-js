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


//Step 4, creating the fetchProductsAsync() function
async function fetchProductsAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  console.log(user.name);

//passing the results to a function
displayProducts(products)

//handleError(error) if fetch fails
handelError(error)
}



