const express = require("express");
const bodyParser = require('body-parser');

const commentRouter = require("./src/routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/comment", commentRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is up !!");
});