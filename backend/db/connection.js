import mongoose from 'mongoose'
const connectDB  = async ()=>{
    return await mongoose
    .connect('mongodb://127.0.0.1:27017/Connections')
    .then(res=>console.log(`DB Connected successfully .........`))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
}


export default connectDB;