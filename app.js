const express = require("express");
const morgan = require("morgan");
const app = express();
const router = require("./src/routers/router")
const timeLog = require("./src/middlewares/check-method")

// middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))
app.use(router)
app.use(timeLog)

app.set("view engine", "ejs");
app.set("views", "./src/views");

const port = 9000;
app.listen(port, () => {
    console.log(`Server running with port ${port}`);
})