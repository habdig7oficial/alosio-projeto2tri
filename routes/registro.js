module.exports = function (app) {
    app.get("/registro",function (req,res) {
        res.render("registro.ejs")
    })
}