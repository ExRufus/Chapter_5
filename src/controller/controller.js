const {
    userDatabase,
    createNewUser,
    updateRoleUser,
    } = require("../db/user")


// middleware eror handling
function errorkan (req, res)  {
    console.error(err.stack);
    res.status(500).json('Something went wrong!');
}

function getAllUser (req, res)  {
    res
       .status(200)
       .json(userDatabase);
}

function createUser (req, res)  {
    const body = req.body;
    createNewUser(body);
    res.status(200)
    res.json(userDatabase)
  };

function roleUser (req, res)  {
    const id = req.params.id;
    updateRoleUser(id);
    res.json(userDatabase);
  };

function findUser (req, res)  {
    const user = user.userDatabase.find((user) => user.id === req.params.id);
    console.log("user:::", user);
    res.json(user);
  };


const userLogin = async (req, res) => {
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
}; 

function deleteUser (req, res) {
    // bikin logic delete user
    if (true) {
        res.json({ status: "OK", desc: "item deleted" });
    } else {
        res.json({
            status: "FAILED",
            desc: "instance not found",
        })
    }
}

// router.use((req, res) => {
//     res.status(400).json({ 
//         status: 'fail',
//         error: '404 Not Found'
//     })
// })

module.exports = {errorkan,findUser, getAllUser, createUser, roleUser, userLogin, deleteUser}