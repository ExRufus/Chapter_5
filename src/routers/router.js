const express = require("express");
const router = express.Router();
const {userDatabase,
       createNewUser,
       updateRoleUser,
    } = require("../db/user");
// const users = require("../controller/controller")
// const checkMethod = require("../middlewares/check-method")

// router.get("/users", users.getAllUser)
// router.post("/user", users.createUser)
// router.post("/user/:id", users.findUser)
// router.put("/user/:id", users.roleUser)
// router.get("/errorkan", users.errorkan)
// router.get("/login", users.userLogin)
// router.delete("/user/:id", users.deleteUser)
// router.use((req, res) => {
//     res.status(404).json({ message: "404, not found"})
// })

// middleware eror handling
router.get("/errorkan", (req, res) => {
    errorkan()
})
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json('Something went wrong!');
    console.error(err)
  });

router.get("/getAllUser", (req, res) => {
    res
       .status(200)
       .json(userDatabase);
})

router.post('/getAllUser', (req, res) => {
    const body = req.body;
    createNewUser(body);
    res.status(200)
    res.json(userDatabase)
  });

router.put("/user/:id", (req, res) => {
    const user = req.body;
    updateRoleUser(user);
    res.json(userDatabase);
  });

router.get("/user/:id", (req, res) => {
    const user = userDatabase.find((user) => user.id === req.params.id);
    console.log("user:::", user);
    res.json(user);
  });


router.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
      const user = await userDatabase.find(
        (user) => user.name === name && user.password === password
      );
      user
        ? res.status(200).json({ message: "login success !", data: user })
        : res.status(200).json({ message: "password doesn't match!" });
    } catch {
        res.status(400).json({ message: error.message });
    }
}); 

router.delete("/user", (req, res) => {
    // bikin logic delete user
    if (true) {
        res.json({ status: "OK", desc: "item deleted" });
    } else {
        res.json({
            status: "FAILED",
            desc: "instance not found",
        })
    }
})

router.use((req, res) => {
    res.status(400).json({ 
        status: 'fail',
        error: '404 Not Found'
    })
})

module.exports = router;