const {connection} = require('./query')
const db = connection()

const schema = `CREATE TABLE user(
    id int AUTO_INCREMENT PRIMARY KEY,
    username  varchar(250),
    user_email varchar(250),
    user_password varchar(250),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

//////////////////////////////////////

db.query(schema,(err,result)=>{
    if (err) throw err
    console.log("migration success")
})