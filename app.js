const express = require("express");
const morgan = require("morgan");
const app = express();
// const checkMethod = require('./src/middlewares/check-method')
// const router = require("./src/routers/router")

// middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))
// // app.use(express.urlencoded({
// //     extended: false
// // }))
// /**
//  * Application level midleware
//  * @param {*} req 
//  * @param {*} res 
//  * @param {*} next 
//  */
// const logger = (req, res, next) => {
// console.log(`${req.method} |Endpoint ${req.url}`)
//     next()
// }

// app.use(checkMethod)
// app.use(logger)
// app.use(router);
 
app.get("/", (req, res) => {
    res.status(200).send("Hello ExpressJS!")    
})
app.get("/json", (req, res) => {
    const data = {
        "name" : "Akmal",
        "age" : "20"
    }
    res.status(200).json(data)
})
// 1. buat halaman chapter 3 + css + imgs
// 2. halaman chapter 4 + css + js + images

app.get("/halaman", (req, res) => {
    
})
 
// app.use((req, res, next) => {
//     if(err.status === 404) {
//         res.status(404).send({ error: 'Bad Request'})
//     } else {
//         next(err)
//     }
// })

// middleware eror handling
// const errorHandLingInternalServerError = (err, req, res, next) => {
//     console.error(err)
//     res.status(500).json({
//         status: "fail",
//         error: err.message
//     })
// }
// app.use(errorHandLingInternalServerError)

app.get("/errorkan", (req, res) => {
    errorkan()
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
    next();
  });

// app.post("/json", (req, res) => {
//     const data = {
//         "name" : "Akmal",
//         "age" : "20"
//     }
//     res.status(200).json(data)
// })

// app.get("/login", (req, res) => {
    
// })

app.use((req, res) => {
    res.status(400).json({ 
        status: 'fail',
        error: '404 Not Found'
    })
})

app.listen(9000, () => {
    console.log("Server run on port 9000");
})