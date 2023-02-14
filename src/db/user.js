const { v4: uuidv4 } = require('uuid');

const userDatabase = [
    {
        id : generateRandomId(),
        username: "Leesang",
        email: "lee@gmail.com",
        password: "123test",
        role: "Fighter"
    },
    {
        id : generateRandomId(),
        username: "Seanz",
        email: "seanz@gmail.com",
        password: "456test",
        role: "Tank"        
    },
    {
        id : generateRandomId(),
        username: "ExRufus",
        email: "rufus@gmail.com",
        password: "789test",
        role: "Assasin"     
    },
    
]

// Tujuan: [] -> [{ createUser }]
function createNewUser(newUserId) {
    const newUserPlusId = {
        id: generateRandomId(),
        ...newUserId,
    };
    // newUser { name: "", email: "", password: "", role: "", }
    // newUserPlusId { name: "", email: "", password: "", role: "", id: "" }
    userDatabase.push(newUserPlusId);
}

// Tujuan: [{ userId, role: "Fighter" }] -> [{ todoItem, role: "Tank"}]
function updateRoleUser(id) {
    const index = userDatabase.findIndex(
        (userId) => userId.id === id
    );
    userDatabase[index].role = "";
}

module.exports = {
    userDatabase,
    createNewUser,
    updateRoleUser,
    generateRandomId
};

// fungsi untuk generate random ID:
function generateRandomId() {
    return uuidv4();
  }