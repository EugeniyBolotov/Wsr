module.exports = (app) =>{
    const indexController = require("./../controllers/UserController")

    app.route('/Auth').get(indexController.users)
}

