// Create a web server that listens for requests on port 3000. When someone visits the root route, have the server return the following HTML:
// <html>
// <body>
// <h1>Comments</h1>
// </body>
// </html>
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
