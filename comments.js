// Create a web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <body>
    <h1>Comments</h1>
    </body>
    </html>`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
