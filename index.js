const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    console.log("received a request")
    res.json({
        status: "online",
        data: [
            {
                studen_name: "Nathan",
                age: "old"
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});