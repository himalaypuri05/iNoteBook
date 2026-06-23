const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require("dotenv").config({ path: __dirname + "/.env" });
console.log("MONGO_URI =", process.env.MONGO_URI);

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend app listening on port http://localhost:${port}`)
})
