import usermodel from "../../db/models/users.model.js"
import { haching } from "../../utils/hashing.js"
import { tokenfunction } from "../../utils/token.js"

export const adduser = async (req,res,next)=>{
    const {name,password,cpassword}=req.body
    if(password!=cpassword)
    return res.status('400').json({message:'password not qual to cpassword'})
    const hashedpass= haching({payload:password})
    const newuser = new usermodel({
        name,
        password:hashedpass
    })
    const saved = await newuser.save()
    if (saved){
        res.status('201').json({message:'done',data:newuser})
    }else{
        return next(new Error(' fail to update', { cause: 400 }))
    }
    
} 

export const login = async(req,res,next)=>{
    const {name,password}=req.body
    const user = await usermodel.findOne({name})
    if(!user)
    return res.status(401).json({message:'please enter valid data' , success:false})
    const passcheck = haching({payload:password,refernce:user.password,haching:false})
    if(!passcheck)
    return res.status(401).json({message:'please enter avalid data' , success:false})
    const activation = await usermodel.updateOne(user,{login:true})
    if (!activation)
    {
        return next(new Error(' fail to update', { cause: 400 }))
    }
    else{
        console.log(user);
        const token = tokenfunction({payload:{id:user._id}})
        res.status(200).json({message:'done',success:true , token:token})
    }

}