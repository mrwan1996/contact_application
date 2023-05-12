
import { Router } from 'express';
import * as allcontroller from '../../modules/contacts modules/contact.models.js'
import { auth } from "../../middlewere/auth.js";
const contactroutes =  Router();

contactroutes.post ('/addcontact', auth(),allcontroller.addcontact)
contactroutes.put ('/update/:contactid', auth(),allcontroller.UpdateContact)
contactroutes.delete ('/delete/:contactid', auth(),allcontroller.deletecontact)
contactroutes.get ('/contacts', auth(),allcontroller.getcontact)

export default contactroutes