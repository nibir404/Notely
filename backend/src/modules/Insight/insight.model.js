const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema({
    note:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
        required: true
    },
    pain_point:{
        type: String,
        required: true
    },
    featureRequest:{
        type: String,
        required: true
    },
    sentiment:{
        type: String,
        required: true
    },
    suggested_solution:{
        type: String,
        required: true
    },
    
}, {timestamps: true});


module.exports = mongoose.model("Insight", insightSchema);
