const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Add this line
const app = express();
app.use(cors())


const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jalajkanak',
    database: 'TokenDB'
})

db.connect((err) => { // Add this block to handle connection errors
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/meme', (req, res) => {
    const query = "SELECT * FROM tokens";
    db.query(query, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error fetching data');
        }
        res.send(data);
    });
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});
