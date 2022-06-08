const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UsuariosSchema = new Schema({
    status: { type: Number, default: 1 }, //  1 = Ativo 0 = Inativo      
    nome :String,    
    senha :String, 
    
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("usuarios", UsuariosSchema);
