let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let transSchema = new Schema({
    amount : Number,
    category : String,
    vendor : String,
    
});
let Trans = mongoose.model("TransModel",transSchema);
module.exports = Trans;