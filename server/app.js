import express, { request } from "express";
import cors from "cors"
import dotenv from "dotenv"
import { json_format_send } from "./utils/excepts.js";
import { get_user, login, register } from "./src/auth.js";
import {hash} from 'bcrypt';
dotenv.config()


const PORT = process.env.APP_PORT || 3001
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/register',async (request,res)=> {

    const result = await register(request)
    if (result == 0) {
        res.send({message: "User registered successfully"});
    }else{
        res.status(401).json(json_format_send({status:401,message:result}))
    }
 })

 app.post('/login',async (request,res)=>{
    const result = await login(request);
    if (result == "fail"){
        res.status(401).json(json_format_send({status:401,message:"kegagalan login"}));
    } else {
        res.json(json_format_send({message: "login succsess",data:result}));
    }
 })

 app.put("/login",async (request,res)=> {
    const result = await get_user(request);
    if (result == "failed") {
        res.status(401).json(json_format_send({status:401,message:result}));
    } else {
        res.json(json_format_send({data : result}))
    }
 })

app.listen(PORT,()=> {console.log(`listen on http://127.0.0.1:${PORT}`)})