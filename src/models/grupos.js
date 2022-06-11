const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let gruposSchema = new Schema({
    status: { type: Number, default: 1 }, //  0 = Inativo , 1 ativo
    nomeGrupo: String,
    tipoRoleta : String,
    hash: String,
    telegram: String,
    estrategias:{
        uid: {type: mongoose.Schema.Types.ObjectId, ref: 'estrategias'},
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("grupos", gruposSchema);
