var express = require("express")
var bodyParser = require("body-parser")
var mangoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
const mongoose = require('mongoose');

mangoose.connect('mongodb+srv://users:msg672000@m4y.o8adm.mongodb.net/Data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to mongo db!'))


app.post("/contact",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted Succesfully");
    });

    return res.redirect('final.html')
})

