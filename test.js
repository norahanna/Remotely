const pool = require('./connection');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(cors());


app.get('/destinations/:destination', async (request, response) => {

    const connection = await pool.getConnection();
    try {
        const destination = request.params.destination;
        console.log(destination)
        // return the query result
        const result = await connection.query('SELECT * FROM capstoneremotely.destinations WHERE DestinationName = ?', destination);
    
        response.status(200).json({
            destinations: result,
        });
    } catch (error) {        
        response.send(500).json(error);
    }

});
app.get('/continents/:continent', async (request, response) => {
    //get the connection
    const connection = await pool.getConnection();
    try {
        const continent = request.params.continent;
        console.log(continent)
        // return the query result
        const result = await connection.query('SELECT * FROM capstoneremotely.destinations WHERE Continent = ?', continent);
    
        response.status(200).json({
            continent: result,
        });
    } catch (error) {        
        response.send(500).json(error);
    }

});

app.post('/users/', async (request, response) => {
    const connection = await pool.getConnection();
    // console.log(request);
    // const username = request.body.username;
    // const email = request.body.email;
    const { userID, username, email} = request.body;

    if(!userID || !username || !email) return response.status(500).send('Please provide both name and email');
    
    try {
        const result = await connection.query(`
        INSERT INTO capstoneremotely.users (userID, username, email)
        VALUES( ?, ?, ?)`, [userID, username, email]);
        return response.status(200).send(`Rows instered ${result.affectedRows}`);        
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
    
});
app.post('/login/', async (request, response) => {
  
    const { username, password } = request.body;    

    if(!username || !password) return response.status(500).json('All fields are required');

    const connection = await pool.getConnection();

    try {
        const user = await connection.query(`SELECT UserID, Username, Password 
                                         FROM capstoneremotely.users
                                         WHERE Username = ?`, [username]);

        if(user.length === 0){
            return response.status(401).json('User not found');
        }
    

        console.log("match password");

        return response.status(200).json({user:user});

    } catch (errors) {

    }

});
app.post('/register/', async (request, response) => {
    const { username, email, password, confirm_password } = request.body;


    if(!username || !email || !password || !confirm_password) return response.status(500).json('All fields are required');

    if(password != confirm_password) return response.status(500).json(`Password doesn't match with confirm password`);

    const connection = await pool.getConnection();
   
    
    try {
        const result = await connection.query(`INSERT INTO capstoneremotely.users (Username, Email, Password)
                                        VALUES (?, ?, ?)`, [username, email, password]);
        
        return response.status(200).json(`Rows inserted ${result.affectedRows}`);
        
    } catch(error){
        return response.status(500).json(error);
    }

})
app.listen(3000, () => {
    console.log('Application is running');
});