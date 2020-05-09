const path = require('path'); //node js module with file path
const express = require('express');//backend server frmwrk
const bodyParser = require('body-parser');//various http interpretation

var db= require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 4000;//express server running port

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));

if(ENV === "production"){
    app.use(express.static(path.join(__dirname),'../client/build'))
    app.use((req, res) => {
        res.sendFile(path.join(__dirname,'../client/build/index.html'))
    })
}

app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}.....`);
});

db.query('SELECT NOW()',(err,res) => {
    if(err.error)
        return console.log(err.error);
    console.log(`PostgreSQL Connected: ${res[0].now}`);
})

module.exports = app;


