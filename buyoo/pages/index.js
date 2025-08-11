import { useState } from "react"; // import react from the package... and also import Hook useState.

const products = [ // initilize a new variable as array.
  { id: 1, name: "Product A", price: 10 }, //initilize a an object as array value
  { id: 2, name: "Product B", price: 50 }, //initilize a an object as array value
  { id: 3, name: "Product C", price: 200 }, //initilize a an object as array value
]; // array closed 

export default function Home() { // export default  function Home()
  const [cart, setCart] = useState([]); // set State default value is 0 or empty

  function addToCart(product) { // initilize a function with argument value.
    setCart((prev) => { // start state with an arror function that have prev arguments means if value or item is exist in cart or not, this is an array.

      const exists = prev.find((item) => item.id === product.id);      // Check if product is already in cart, checking clicked item is exist or not in cart.
      if(exists) { // if item exist in cart then run this block script else move to further 
        
        return prev.map((item) => // Increase quantity (prev item + 1) and after that return it
          item.id === product.id ? { ...item, quantity: item.quantity + 5 } : item // conditional if item id,  equals to product.id then increase item in cart as +1.
        );
      }// close if statement
      
      return [...prev, { ...product, quantity: 5 }];// Add new product with quantity 1
    });
  }

  function totalPrice() { // initilize a function that is call on state change
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); // return cart value after cart total value update.
    // reduce function here used for reduce all array values into single value and then return this single value.
  }// close the function

  return ( // return function of Component that execute each time when the cart value is updated.
    <div style={{ padding: "20px" }}> {/* <!-- Html elements with style --> */}
      <h1>My Shopping Site</h1> 
      <h2>Products</h2>
      <ul>
        {products.map((product) => ( // all products list is added on main page
        // map function that applied on each item of array
          <li key={product.id} style={{ marginBottom: "10px" }}> {/* sandy */ }
            {product.name} - ${product.price}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice()}</h3>
    </div>
  );
}
