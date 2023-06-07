const mongoose = require("mongoose");

const rendezSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    telephone :String,
    adresse : String, 
    description : String,
    selection  : String,
    date : Date,
    
});
// Model Name "Accompagnant" => PascalCase
const rendez = mongoose.model("Rendez",rendezSchema);
module.exports = rendez;