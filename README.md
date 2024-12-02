# Food-Delivery-Backend-with-Order-Management

# Food Delivery Backend

# Overview
This project is a simple API to manage restaurant menus, place orders, and track order statuses. It allows users to add menu items, place orders, and check the status of orders.

# Features
- Add Menu Items: Add a new item to the menu with name, price, and category.
- View Menu: Fetch a list of all available menu items.
- Place Orders: Place an order by selecting multiple items from the menu.
- Order Tracking: View the details of a specific order, including its status.

# API Endpoints

- POST /menu: Add a new menu item.  
  Request body:  
  ```json
  { "name": "Pizza", "price": 12.99 }
