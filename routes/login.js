module.exports = function (app) {

    app.get("/login", function (req,res) {
        res.render("login.ejs")
    })


    app.post("/login",function (req,res) {

        

    })

}