const express = require('express');

const app = express();
const PORT = 3000;

let count = 0;

app.get('/', (req, res) => {
    count += 1;
    res.send(`hello world, present count ${count} test-1`);
})

app.listen(PORT, () => console.log('Server running on port', PORT));
