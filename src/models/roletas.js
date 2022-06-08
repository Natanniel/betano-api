const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RoletasSchema = new Schema({
    status: { type: Number, default: 1 }, //  1 = Ativo 0 = Inativo      
    nome : String,    
    roletas : [{
        nome: String,
        url: String          
    }]
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("roletas", RoletasSchema);
