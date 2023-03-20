const response = require('../responce')
const db = require('../settings/config')

exports.users = (req,res)=>{

db.query('SELECT * FROM bd4p4tejrva2dt3sw2ua.dish;', (error,rows,fields) =>{
    if(error){
        response.statusError(rows,res,400);
    }else{
        response.status(rows,res);
    }
})
}