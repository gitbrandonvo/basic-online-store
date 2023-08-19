# Online Store

Welcome! This project is an exercise in creating a basic online store using JavaScript. It simulates a simple store with functionalities like inventory management, shopping cart management, and checkout operations.

## Requirements

Design an online store system that provides the following features:

- Maintain an inventory of products with properties: id, product, and price.
- Create shopping carts for users. Each cart is associated with a unique user ID.
- Add products to the inventory and ensure each product has a unique ID.
- Add products to a user's shopping cart.
- Calculate the total price of products in a user's cart.
- Provide a checkout functionality that clears a user's cart.

## Implemented Overview

### Classes

- The `Store` class manages the inventory and shopping carts. It provides methods for adding products to the inventory, creating shopping carts, adding items to carts, calculating cart totals, and performing checkout.
- The `Product` class represents products available in the store.
- The `ShoppingCart` class represents a user's shopping cart, allowing for products to be added.

### Operations

- Products can be added to the inventory using the `addToInventory` method.
- Shopping carts can be created for users using the `createShoppingCart` method.
- Products can be added to a user's cart using the `addItemToCart` method.
- The total price of products in a user's cart can be calculated using the `calculateTotalPrice` method.
- Users can checkout using the `checkout` method, which clears their cart.

### Client Code

```javascript
const store = new Store();
store.addToInventory({ id: 1, product: 'Shirt', price: 20 });
store.addToInventory({ id: 2, product: 'Jeans', price: 40 });
store.createShoppingCart("A001");
store.addItemToCart("A001", 1);
store.calculateTotalPrice("A001");
store.checkout("A001");
```

### My Reflections
- Project meets requirements and provides a simple simulation of an online shopping experience. While the foundational elements are in place, reflecting, there's certain room for improvement. Fun consideratons in the future:

- Implement a UI: focus were on requirements and backend logic. Adding a UI for realism would make sense.
- Refine logic: refine logic, add validations, and manage edge cases
- Data persistence could be implemnted using a file system (like JSON) or a database
- Database -> user accounts & authentication
- Modularity would make this more maintainble and organized (store.js, product.js, etc.)
- Implement error handling gracefully with try-catch blocks as a start
- Additional features like: removing item from a cart, updating quantity of items in a cart, adding quantity field to inventory, handling out-of-stock scenarios, support discounts/promotions