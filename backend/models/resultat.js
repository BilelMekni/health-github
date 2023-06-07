const mongoose = require("mongoose");

const resultatSchema = mongoose.Schema({

    title: String,
    description: String,
    date : Date,
    specialite : String,
    telephone : String,
    medecinsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: String,
    accepter: String,
    
   
});
// Model Name "Publication" => PascalCase
const resultat = mongoose.model("Resultat", resultatSchema);
module.exports = resultat;