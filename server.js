const express = require('express');
//import mysql from 'mysql2';

const port = process.env.PORT || 3300;
const app = express();

const CategoryRoutes = require('./routes/CategoryRoutes')
const DishRoutes = require('./routes/DishRoutes')
const AuthRoutes = require('./routes/AuthRoutes')
const RegisterRoutes = require('./routes/RegisterRoutes')
const UserRoutes = require('./routes/UserRoutes')

app.use(express.json());
CategoryRoutes(app)
DishRoutes(app)
AuthRoutes(app)
RegisterRoutes(app)
UserRoutes(app)




app.listen(port,() =>{
    console.log(`App on port ${port}`);
})