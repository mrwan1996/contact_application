import mongoose, { Schema } from "mongoose";
const userschema = new Schema ({
    name : {
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    logedin:{
        type : Boolean,
        default:false   
    },

},
{
    timestamps:true
})

const usermodel = mongoose.model('user',userschema )
export default usermodel