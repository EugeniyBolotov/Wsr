const response = require('./../responce')
const db = require('../settings/config')
const jwt = require('jsonwebtoken');



exports.Auth = (req,res)=>{
    const token = jwt.sign(
        {
            id: 1,
        },
        'wsr-food',
        {
            expiresIn: '30d',
        },
    );
        const {login,password} = req.query;
        db.query(`SELECT * FROM bd4p4tejrva2dt3sw2ua.user where Email = '${login}' and Password = '${password}'`, (error,rows,fields) =>{
            if(error){
                response.statusError(rows,res,400);
            }
            else{
                if(rows.length ==0){
                    response.statusError(rows,res,401);
                }
                else{
                    response.statuslog(token,res,200);
                }
            }
        })
    
}