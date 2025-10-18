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
handleError(error)
}

//step 5 creating the displayProducts function
function displayProducts(products){
    container.innerHTML = ""
    products.slice(0,5).forEach((p) =>{
        const {name, price} = p.fields
        const imageURL = getImageURL(p.fields)
        const card = document.createElement("div")
        card.className = "product-card"
        card.innerHTML = `
        <img class="product-image" src="${imageUrl}" alt="${escapeHtml(name)}">
        <div class="product-name">${escapeHtml(name)}</div>
        <div class="product-price">$${(price/100).toFixed(2)}</div>
        `
        container.appendChild(card)
    })
}
//Step 6 creating the error message
function handleError(error){
    console.log(`An error occurred: `)
}


//Step 7, calling the functions
fetchProductsThen()
fetchProductsAsync()