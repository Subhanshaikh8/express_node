let exp = require("express");
let myapp = exp();
let r = require("./Routing/Route");
require("dotenv").config()

myapp.use("/subhan",r)
myapp.listen(process.env.PORT,()=>{
    console.log(`server started at http://localhost:${process.env.PORT}`)
})