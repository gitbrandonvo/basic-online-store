class Store {
    constructor() {
        this.inventory = [];
        this.shoppingCarts = [];
    }

    isProduct = (id) => this.inventory.some(product => product.id === id);

    isACart = (userId) => this.shoppingCarts.some(shoppingCart => shoppingCart.userId === userId);

    cartIndex = (userId) => this.shoppingCarts.findIndex(cart => cart.userId === userId);

    inventoryIndex = (itemId) => this.inventory.findIndex(item => item.id === itemId);

    addToInventory = (item) => {
        if (!this.isProduct(item.id)) {
            const { id, product, price } = item;
            console.log(`Product "${product}" with ID ${id} and price $${price} added successfully.`);
            return this.inventory.push(item);
        } else {
            console.log(`A product with ID ${item.id} already exists.`);
            return -1;
        }
    }

    createShoppingCart = (userId) => {
        if (!this.isACart(userId)) {
            console.log(`Shopping cart created for user with ID: ${userId}.`);
            return this.shoppingCarts.push(new ShoppingCart(userId));
        } else {
            console.log(`A shopping cart for user with ID ${userId} already exists.`);
            return -1;
        }
    }

    addItemToCart = (userId, itemId) => {
        const userCartIndex = this.cartIndex(userId);
        const itemIndex = this.inventoryIndex(itemId);

        if (userCartIndex !== -1 && itemIndex !== -1) {
            this.shoppingCarts[userCartIndex].ShoppingCart.push(this.inventory[itemIndex]);
            console.log(`Item with ID ${itemId} added to cart of user with ID ${userId}.`);
        } else {
            console.log(`Error: Either user with ID ${userId} does not have a cart or item with ID ${itemId} does not exist.`);
        }
    }

    getCartContents = (userId) => {
        const cartIndex = this.cartIndex(userId);
        if (cartIndex !== -1) {
            return this.shoppingCarts[cartIndex].ShoppingCart;
        } else {
            console.log(`User with ID ${userId} does not have a shopping cart.`);
        }
    }

    calculateTotalPrice = (userId) => {
        const cartIndex = this.cartIndex(userId);
        if (cartIndex !== -1) {
            const cartTotal = this.shoppingCarts[cartIndex].ShoppingCart.reduce((total, item) => {
                return total + item.price;
            }, 0);
            console.log(`Total price for cart of user with ID ${userId}: $${cartTotal}`);
            return cartTotal;
        } else {
            console.log(`User with ID ${userId} does not have a shopping cart.`);
        }
    }

    checkout = (userId) => {
        const cartIndex = this.cartIndex(userId);
        if (cartIndex !== -1) {
            const userCart = this.shoppingCarts[cartIndex].ShoppingCart;
            if (userCart.length > 0) {
                this.calculateTotalPrice(userId);
                this.shoppingCarts[cartIndex].ShoppingCart = [];
                console.log(`Checkout completed for user with ID ${userId}.`);
            } else {
                console.log(`Shopping cart for user with ID ${userId} is empty.`);
            }
        } else {
            console.log(`Cannot find a shopping cart for user with ID ${userId}.`);
        }
    }
}

class Product {
    constructor(id, product, price) {
        this.id = id;
        this.product = product;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(userId) {
        this.userId = userId;
        this.ShoppingCart = [];
    }
}

//Client code
// const store = new Store;
// store.addToInventory({ id: 1, product: 'Shirt', price: 20 });
// store.addToInventory({ id: 2, product: 'Jeans', price: 40 });
// store.addToInventory({ id: 3, product: 'Hat', price: 15 });
// store.addToInventory({ id: 3, product: 'Hat', price: 15 });
// store.createShoppingCart("A001");
// store.addItemToCart("A001", 1);
// store.getCartContents("A001");
// store.calculateTotalPrice('A001');
// store.checkout("A002");
// store.checkout("A001");
// store.checkout("A001");