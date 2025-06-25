const express = require('express')

require('./Model/db.js')
require('./Model/clientSchema.js')

const ClientRouter= require('./Routes/clientreqRouter.js')


const app  = express();
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors({origin: "*"}))
app.use(express.json())


app.use('/clients', ClientRouter);


app.listen(PORT, ()=>{console.log("Server is running on PORT "+ PORT)})