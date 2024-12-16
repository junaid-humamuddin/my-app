const serverless = require('serverless-http');
const express = require('express')
const cors = require('cors')
const app = express();

const router = require('./routes');

app
.use(express.json())
.use(cors())    
.use('/api/', router) 
// const server = app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
module.exports.handler = serverless(app);