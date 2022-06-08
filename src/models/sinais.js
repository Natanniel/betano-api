const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RoletasSchema = new Schema({
    status: { type: Number, default: 0 }, // 0 = Zero 1 - win  2 - Loss       1 = finalizado 
    roleta : String
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("roletas", RoletasSchema);
