// Create web server
// 1. Install express
// 2. Create a web server
// 3. Create a route
// 4. Send a response

// 1. Install express
// npm install express

// 2. Create a web server
const express = require('express');
const app = express();

// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 4. Send a response
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 5. Create a route
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// 6. Send a response
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 7. Create a route
app.get('/comments/:id', (req, res) => {
    res.send(`This is a comments page with id: ${req.params.id}`);
});

// 8. Send a response
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
