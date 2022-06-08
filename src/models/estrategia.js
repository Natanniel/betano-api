const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let estrategiaSchema = new Schema({
    status: { type: Number, default: 1 }, //  0 = Inativo , 1 ativo , 2 alert , 3 cuidado      
    sinal :  { type: Number, default: 1 }, //  0 = Inativo , 1 ativo , 2 alert , 3 cuidado
    nome: String,
    tipoAposta: String,
    duzia: {
        um: Boolean,
        dois: Boolean,
        tres: Boolean,
    },
    coluna: {
        um: Boolean,
        dois: Boolean,
        tres: Boolean,
    },
    analisa: Number,
    aposta: Number
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("estrategias", estrategiaSchema);
