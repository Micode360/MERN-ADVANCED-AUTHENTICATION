require('dotenv').config({path: "./config.env"});
const express = require("express");
const app = express();
const cors = require('cors');
const db = require('./config/db');
db();
const errorHandler = require('./middleware/error');




const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))
app.use(errorHandler);//this handler must always be the last handler


// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//Powering up the server
const server = app.listen(port, () => console.log(`your port is running at ${port}`));

//This code prevents the server from crashing heavily. But does it in a neat way.
process.on("unhandledRejection", (error, promise) => {
    console.log(`Process Error: ${error}`)

    server.close(()=> process.exit(1));
})

