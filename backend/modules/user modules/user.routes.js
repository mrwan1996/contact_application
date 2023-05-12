
import { Router } from 'express';
import * as allcontroller from '../../modules/user modules/user.models.js'
import { validation } from '../../middlewere/validation.js';
import { loginvalidation } from './user.validation.js';

const userroutes =  Router();

userroutes.post('/adduser', allcontroller.adduser)
userroutes.post('/login', validation(loginvalidation) ,allcontroller.login)

export default userroutes