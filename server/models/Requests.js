const mongoose=require('mongoose');


const RequestSchema=new mongoose.Schema({
    email:{
        type:String,
         default:"abc@gmail.com"
    },
    name:{
            type:String,
            default:"abc"
    },
    type:{
            type:String
    },
    request:{
            type:Object
    },
    requestStatus:{
            type:String,
            default:"Under Process"
    },
    createdAt:
    {
        type:Date,
        default:Date.now
    }
});
const Requests = mongoose.model('Requests', RequestSchema)
module.exports = Requests;