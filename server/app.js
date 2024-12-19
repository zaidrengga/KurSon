const express = require("express");
const cors = require("cors")
const {insert,get} = require('./migration/query')
require('dotenv/config')


PORT = process.env.APP_PORT || 3001

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/register',(req,res)=> {
    const username = req.body.Username;
    const user_email = req.body.Email;
    const user_password = req.body.Password;
    console.log(insert("user",{username,user_email,user_password : btoa(user_password)}))
    res.send({message: "User registered successfully"});
 })

 app.post('/login',(req,res)=>{
    const user_email = req.body.LoginEmail;
    const user_password = req.body.LoginPassword;
    
    get("*","user",{user_email,user_password : btoa(user_password)})
    .then((e) => {
        if (e.length > 0) {res.send(e);} else { res.send({message: "User not found"});}
    }).catch(e => {console.error(e); res.send({error: err})})
 })


app.listen(PORT,()=> {console.log(`listen on ${PORT}`)})