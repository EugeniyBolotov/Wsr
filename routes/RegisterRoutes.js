module.exports = (app) =>{
    const indexController = require("./../controllers/RegisterController")

    app.route('/Auth/Register').post(indexController.Registr)
}