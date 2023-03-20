module.exports = (app) =>{
    const indexController = require("./../controllers/ProductsController")

    app.route('/Products').get(indexController.users)
}