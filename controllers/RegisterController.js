const response = require('./../responce')
const db = require('../settings/config')

exports.Registr = (req,res)=>{
        const {login,pwd} = req.query;
        if(surname == undefined){
            response.statusError(rows,res,400);
        }
        else{
            db.query(`INSERT INTO bd4p4tejrva2dt3sw2ua.user (Email,Password) VALUES ('${login}', '${pwd}');`, (error,rows,fields) =>{
                response.statuslog(201,res);
        })
        }
    
}