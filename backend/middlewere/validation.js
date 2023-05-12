import joi from 'joi'
import { Types } from 'mongoose'
const dataMethods = ["body", 'params', 'query', 'headers', 'file']

const validateObjectId = (value, helper) => {
    console.log({ value });
    console.log(helper);
    return Types.ObjectId.isValid(value) ? true : helper.message('In-valid objectId')
}
export const generalFields = {

    password: joi.string().required(),
    
}

export const validation = (schema) => {
    return (req, res, next) => {
        console.log({body:req.body});
        const validationErr = []
        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false })
                if (validationResult.error) {
                    validationErr.push(validationResult.error.details)
                }
            }
        });

        if (validationErr.length) {
            return res.json({ message: "Validation Err", validationErr })
        }
        return next()
    }
}