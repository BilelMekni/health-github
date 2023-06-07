const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({

    title: String,
    description: String,
    date : Date,
    patientsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: String,
    reservation: String,
    
   
});
// Model Name "Publication" => PascalCase
const publication = mongoose.model("Publication", publicationSchema);
module.exports = publication;