const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    console.log("received a request")
    res.json({
        status: "online",
        data: [
            {
                student_name: "Nathan",
                age: "old"
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});