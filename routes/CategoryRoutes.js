module.exports = (app) =>{
    const indexController = require("../controllers/CategoryController")

    app.route('/Category').get(indexController.users)
}

