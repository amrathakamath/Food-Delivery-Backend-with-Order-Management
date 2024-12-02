const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 


let menu = [];
let orders = [];


app.post('/menu', (req, res) => {
    const { name, price } = req.body;
    if (price <= 0) {
        return res.status(400).send('Price must be a positive number');
    }

    const newItem = { id: menu.length + 1, name, price };
    menu.push(newItem);
    res.status(201).json(newItem);
});


app.get('/menu', (req, res) => {
    res.status(200).json(menu);
});


app.post('/orders', (req, res) => {
    const { items } = req.body;

    
    const invalidItems = items.filter(itemId => !menu.find(menuItem => menuItem.id === itemId));
    if (invalidItems.length > 0) {
        return res.status(400).send('Some menu items are invalid');
    }

    const newOrder = {
        id: orders.length + 1,
        items,
        status: 'Preparing'
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.get('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return res.status(404).send('Order not found');
    }

    res.status(200).json(order);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
