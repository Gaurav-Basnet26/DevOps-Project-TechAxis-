const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Feature A");
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

