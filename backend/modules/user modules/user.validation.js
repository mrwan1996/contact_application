import Joi from 'joi'
import { generalFields } from '../../middlewere/validation.js'

export const loginvalidation ={body:Joi.object().required().keys({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(20)
        .required(),
    password: generalFields.password.required(),
        
})} 
