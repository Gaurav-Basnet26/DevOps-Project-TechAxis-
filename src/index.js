const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("DevOps Practical TechAxis - Feature");
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

