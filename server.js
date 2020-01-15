const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const database = {
    dataName: 'STOpB6h9xd',
    username: 'STOpB6h9xd',
    password: 'xNsWSqQhjv',
    server: 'remotemysql.com',
    port: 3306
};

const connection = mysql.createConnection({
    host: database.server,
    user: database.username,
    password: database.password,
    database: database.dataName,
    port: database.port
});
connection.connect();


//Setare route pentru GET request (Functioneaza)
app.get('/api/utilizatori', (req, res) => {
    connection.query('SELECT * FROM `utilizatori`', (err, users, fields)=>{
        res.json(users);
    }); 
});

//Adaugare utilizatori
app.post('/api/utilizatori', (req, res, next) => {
    let username = req.body.nume_utilizator.toString();
    let parola = req.body.nume_utilizator.toString();
    let sqlQuery = `INSERT INTO utilizatori (user_nume, user_parola) VALUES("${username}", "${parola}")`;
    connection.query(sqlQuery, (err, result) => {
       if(err){
        console.log(err);
       }
       res.writeHead(301,
        {Location: '/api/utilizatori'}
      );
        res.end();
    });
    
});

//Afisare toate notitele (Functioneaza)
app.get('/api/notite', (req, res) => {
   connection.query(`SELECT * FROM notite`, (err, notite, fields)=>{
	   res.send(notite);
    }); 
});


//Afisare roluri
app.get('/api/roluri', (req, res) => {
    res.json(`Sunt afisate rolurile utilizatorilor`);
});

const port = 5000;
app.listen(port);
