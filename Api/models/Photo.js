const {Schema, model}= require('mongoose');
const photoSchema= new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        minlength: 2
    },
    description:{
        type: String,
        require:true,
        minlength: 5
    },
    imageURL:{
        type: [String],
        require:true
    },
    public_id:{
        type: String,
    },
    active:{
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
  })
 module.exports= model('Photo', photoSchema)