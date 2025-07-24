require('dotenv').config();
const app = require('./src/app');

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});