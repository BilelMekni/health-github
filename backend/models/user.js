const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    telephone :{type : Number, unique: true},
    email :{type: String, unique: true},
    password : String,
    adresse : String,
    experience : String,
    specialite : String,
    matricule : String,
    description : String,
    role : String,
    status:String,
    message:String,
    gender : String,
    avatar : String,
    cv : String,
   
   
    
});
userSchema.plugin(uniqueValidator);
// Model Name "Accompagnant" => PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;