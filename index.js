const express = require("express");
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Suyog");
});


console.log("Hello, World!");
//today we will study about MVC clean architecture and publish in github
//at first we will learn about user-side...


