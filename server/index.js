const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


//connecting to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "datanew",
});

app.post('/register', (req, res) => {
    const sentUsername = req.body.Username;
    const sentEmail = req.body.Email;
    const sentPassword = req.body.Password;

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [sentUsername, sentEmail, sentPassword];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(`User ${sentUsername} registered successfully`);
            res.send({message: "User registered successfully"});    
        }
    });
})

app.post('/login', (req, res) => {
    const sentLoginEmail = req.body.LoginEmail;
    const sentLoginPassword = req.body.LoginPassword;

    const sql = "SELECT * FROM users WHERE email = ? && password = ?";
    const values = [sentLoginEmail, sentLoginPassword];

    db.query(sql, values, (err, result) => {
        if (err) {
            res.send({error: err});
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({message: "User not found"});
        }
    });
})