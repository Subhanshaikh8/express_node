let exp = require("express")
let co = require("../Function/Logic")
let r = exp.Router();

r.get("/h",co.Home);
r.get("/a",co.About);
r.get("/fa",co.Faq);
r.get("/p",co.Privacy);
r.get("/f",co.Feedback);

module.exports = r;


