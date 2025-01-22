const express = require('express');

const app = express();
const PORT = 3000;

let count = 0;

app.get((req, res) => {
    count += 1;
    res.send(`hello world, present count ${count}`);
})

app.listen(PORT, () => console.log('Server running on port', PORT));
