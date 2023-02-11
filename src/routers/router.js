const express = require("express")
const checkMethod = require("../middlewares/check-method")
const router = express.Router();

/**
* Router level middleware
* @param {*} req 
* @param {*} res 
* @param {*} next 
*/
const timeLog = (req, res, next) => {
   const date = new Date()
   console.log("Time : "+ date);
   next()
 }
router.use(timeLog)

/*router.get("/",
    [
        checkMethod
    ],
    (req, res) => {
        res.status(200).send("Hello ExpressJS!")
    })
*/

router.get("/", (req, res) => {
   res.status(200).send("Hello ExpressJS!")
})

 router.get("/json", (req, res) => {
   const data = {
       "name" : "Akmal",
       "age" : "20"
    }
    res.status(200).json(data)
})

module.exports = router;