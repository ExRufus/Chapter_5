const timeLog = (req, res, next) => {
    const date = new Date()
    console.log("Time : "+ date);
    next()
  }
 

 module.exports = timeLog;