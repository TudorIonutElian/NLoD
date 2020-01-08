const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({
    extended: true
}))

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

//Afisare profil user (Functioneaza)
app.get('/api/utilizatori/:id', (req, res) => {
	let id = parseInt(req.params.id);
	if(Number.isInteger(id)){
		connection.query(`SELECT * FROM utilizatori WHERE user_id=${id}`, (err, user, fields)=>{
			if(user.length === 0){
				res.send(`Utilizatorul cu id-ul ${req.params.id} nu exista in baza de date!`);
			}else{
				res.send(user);
			}
		}); 
	}else{
		res.send('ID-ul introdus este invalid! Va rugam sa introduceti un ID valid');
	}
	
});

//Afisare toate notitele (Functioneaza)
app.get('/api/notite', (req, res) => {
   connection.query(`SELECT * FROM notite`, (err, notite, fields)=>{
	   res.send(notite);
    }); 
});

//Afisare notita dupa id
app.get('/api/notite/:id', (req, res) => {
	let id = parseInt(req.params.id);
    connection.query(`SELECT * FROM notite WHERE notite_id=${id}`, (err, notita, fields)=>{
	   if(notita.length === 0){
		   res.send(`Nu exista notita cu numarul ${req.params.id}`);
	   }else{
		   res.send(notita);
	   }
	   
    }); 
});

//Afisare notita dupa user
app.get('/api/notite/:user', (req, res) => {
    res.send(`Afisez notitele user-ului ${req.params.user}`);
});

//Afisare roluri
app.get('/api/roluri', (req, res) => {
    res.json(`Sunt afisate rolurile utilizatorilor`);
});


//Afisare rol dupa id
app.post('/api/utilizatori/adauga', (req, res) => {
    console.log(req.body);
});




const port = 5000;
app.listen(port);
