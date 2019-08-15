const express = require('express');
const app = express();
const morgan = require("morgan");
// const mysql = require('mysql');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('short'))


const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: "123456789", // alexander
  database: 'sorteo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


async function getAllUser(){
    const result = await pool.query('SELECT * FROM users'); 
    return result[0];  
}

async function getUserForDNI(dni) {
    const result = await pool.query('SELECT * FROM users WHERE dni_users = ?', [dni]); 
    return result[0][0];
}

async function insertUsers(dni,full_name,status) {
    await pool.query(
        'INSERT INTO users SET dni_users = ?, fullName_users = ?, status = ?',
        [ dni,full_name,status ]
    );
}

async function changeStatus(dni,status) {
    const result = await pool.query('UPDATE users SET status = ? where dni_users = ? ', [status,dni]); 
    return result[0][0];
}

app.get("/users/:dni", async (req,res) => {
    const dni = req.params.dni;
    const user = await getUserForDNI(dni);
    let data = user
    if (!user) {
        data = []
    }
    res.json({"message":"Ok","status":true,"data":data})
});

app.post("/users_create", async (req,res,next) => { 
    const dni = req.body.dni;
    const full_name = req.body.full_name;
    const status = true;

    const get_user_repeat = await getUserForDNI(dni);
    if (!get_user_repeat) {
        const get_user_repeat = await insertUsers(dni,full_name,status);
    }
    res.json({"message":"Se insertó correctamente","status":true})
});

app.get("/all_users", async (req,res) => {
    const user = await getAllUser();
    let data = user
    if (!user) {
        data = []
    }
    res.json({"message":"Ok","status":true,"data":data})
});

app.put("/change_status", async (req,res) => {
    const dni = req.body.dni;
    const status = req.body.status;
    const user = await changeStatus(dni,status);
    let data = user
    if (!user) {
        data = []
    }
    res.json({"message":"Se modificó correctamente","status":true,"data":data})
});


app.listen(3000,()=>{
    console.log("Seerver us up and listening on 3003...");
});
