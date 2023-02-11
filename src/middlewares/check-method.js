const checkMethod = (req, res, next) => {
    console.log("Ini Adalah Middleware router endpoint!")
    next();
}

module.exports = checkMethod;
// biasa dipakai untuk error authorizedException