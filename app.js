const express = require('express');
const app = express();
const morgan = require("morgan");
// const mysql = require('mysql');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
var cors = require('cors');
// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('short'))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

let host = "127.0.0.1"
let user = "root"
let password = "123456"
let database = "sorteo"
if ( process.env.NODE_ENV == 'prod'){
    host = "mysql1005.mochahost.com";
    user = "creatos_sorteo";
    database = "creatos_sorteo";
    password = "sorteo_pacifico"
}

const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
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

async function selectWin(){
    const result = await pool.query('SELECT * FROM users WHERE status = 1 ORDER BY RAND() LIMIT 1 ');
    return result[0][0];
} 

async function searchUser(name){
    let query = `SELECT * FROM sorteo.users WHERE fullName_users LIKE '%${name}%'`
    const result = await pool.query(query);
    return result[0];  
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

app.post("/users_create", async (req,res) => {
    const dni = req.body.dni;
    const full_name = req.body.full_name;
    const status = true;
    let message = "Ya se encuentra registrado";
    const get_user_repeat = await getUserForDNI(dni);
    if (!get_user_repeat) {
        const get_user_repeat = await insertUsers(dni,full_name,status);
        message = "Se insertó correctamente"
    }
    res.json({"message":message,"status":true})
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

app.get("/selectWin", async(req,res) => {
    const win = await selectWin();
    res.json({"message":"Ok","status":true,"data":win})
})

app.get("/search/:name", async(req,res) => {
    const name = req.params.name;
    const user = await searchUser(name);
    res.json({"message":"Ok","status":true,"data":user})
})

const port = process.env.PORT || 3003;
app.listen(port,()=>{
    console.log(`Seerver us up and listening on ${port}...`);
});
