const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    firstName : String,
    email : String,
    telephone :String, 
    description : String,
    
});
// Model Name "Contact Problem" => PascalCase
const contact = mongoose.model("Contact",contactSchema);
module.exports = contact;