const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"bd4p4tejrva2dt3sw2ua-mysql.services.clever-cloud.com",
    port:"3306",
    user:"usr8klmbdkayw9cm",
    password:"RXfDabbLr1PARikM5r5h",
    database:"bd4p4tejrva2dt3sw2ua"
})

connection.connect((error) =>{
if(error){
    return console.log('Ошибка подключения');
}else{
    return console.log('Подключение успешно');
}
})

module.exports = connection