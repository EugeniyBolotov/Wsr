module.exports = (app) =>{
    const indexController = require("./../controllers/DishController")

    app.route('/').get(indexController.users)
}