module.exports = (app) =>{
    const indexController = require("./../controllers/AuthController")

    app.route('/Auth/login').get(indexController.Auth)
}