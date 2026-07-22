require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send(process.env.APP_NAME);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
