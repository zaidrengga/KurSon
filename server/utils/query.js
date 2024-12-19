import mysql from "mysql2"
import("dotenv/config")

export function connection() {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });
    return db;
}


const db = connection();
export function insert(table,data){ 

    // menerima nama<str> table dan data <object>
    // Jika selesai akan mengembalikan bool

    let result = true;
    const sql = `INSERT INTO ${table} (${Object.keys(data)}) VALUES (${Object.values(data).map((val) => {if (typeof(val) == "string") {return `'${val}'`} return val}).join(",")})`
    db.query(sql,(err,_)=>{
        if (err) {console.log(err); result = false}
        console.log('inserting data : ',data)
    }); return result;
}


export async function get(data,table,where = false){
    
    // data<str> "*" or "(data1,data2,data3)" dan where<object> itu opsional
    
    let on;
    if (where) {
        on = "WHERE " + Object.entries(where).map(([key, value]) => {return typeof value === "string" ? `${key}='${value}'` : `${key}=${value}`;}).join(" AND ")} else { on = ""}

    const sql = `SELECT ${data} FROM ${table} ${on}`
    console.log("query : ",sql)
    const [rows] = await db.promise().query(sql)
    return rows
}
