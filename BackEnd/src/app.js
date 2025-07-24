const express = require('express');
const app = express();
const cors = require('cors');
const aiRoutes = require("./routes/ai.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/ai',aiRoutes);


module.exports = app;