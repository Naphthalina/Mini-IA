const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const user = req.query.user;
    console.log(user);
    res.send(user + "!");
});

app.listen(5000, () => {
    console. log('server started on port 5000');
});