const express = require("express");

const app = express();

const dbConfig = require('./db')

const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)
app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started using Nodemon`));

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:5173', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));