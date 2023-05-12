import mongoose, { Schema } from "mongoose";
const contactschema = new Schema ({
    name : {
        type:String,
        require:true,
    },
    phone :{
        type: String,
        require:true ,
    },
    adress:{
        type:String,
        require:true
    },

    notes:{
        type : String,
        require:false

    },
    lockestatus:{
        type : Boolean,
        default:false   
    },
    addedby:{
        type:String,
        require:true
    }
},
{
    timestamps:true
})

const contactmodel = mongoose.model('contact',contactschema )
export default contactmodel