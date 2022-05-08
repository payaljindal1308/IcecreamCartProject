/*

    Create a react app 

    1. on Homepage it makes a fetch request call to get list of products.
    2. Allows user to select couple of products from them.
    3. User should be able to distinguish between all products and selected products.
    4. Once user is finished with selection of products . He clicks on Go to Cart .
    5. Navigate user to cart page.
    6. User should be able to see his list of selected products there.
    7. User can still choose to remove some of his items from cart page 
        or increment the quantity of them.
        Initially all products quantity is 1.
    8. Once user is all ready . he should be clicking on Place order. 
        Clicking on place order..saves his order to a file.

    9. Create a client side route to view each product
        Route - /product/productId 

        It should display product details for that product
        cost and name.
    
    
    Additional Tasks.
    10. Create a route to view all the orders.
    11. Read from your folder all the order files and display them in a table.
    Stored order should have 
        orderId - 89384938383938
        items: [] // Products for that order with quantity.
        totalCost: 3434   // Sum of all prices of the products.


        Each row of the table should have 3 columns displaying order Id 
        Associated item names and their respective quantity
        Total Cost.

    12. Create a client side route to display each order details. 
        Route - /order/orderId
*/