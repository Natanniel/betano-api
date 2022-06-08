const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let estrategiaSchema = new Schema({
    status: { type: Number, default: 1 }, //  0 = Inativo , 1 ativo , 2 alert , 3 cuidado      
    estrategia: String,
    aposta : String,
    analise: Number,
    confirma: Number
      
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("estrategias", estrategiaSchema);
