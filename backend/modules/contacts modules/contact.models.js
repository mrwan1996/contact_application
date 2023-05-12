import usermodel from "../../db/models/users.model.js"
import contactmodel from "../../db/models/contact.model.js"

export const addcontact = async (req, res, next) => {
    const { _id } = req.user
    const { name, phone, adress, notes } = req.body
    if (! await usermodel.findById({ _id }))
        return res.status(401).json({ message: "please log in again" })
    const NewContact = new contactmodel({
        name,
        phone,
        adress,
        notes,
        addedby: _id
    })
    const saveuser = await NewContact.save()
    if (!saveuser) {
        res.status(500).json({ message: 'error' })
    } else {
        res.status(201).json({ message: 'done', data: NewContact })
    }
}

export const UpdateContact = async (req, res, next) => {
    const { _id } = req.user
    const { contactid } = req.params
    const { name, phone, adress, notes } = req.body
    const Contact = await contactmodel.findOne({ _id: contactid, addedby: _id })
    if (!Contact)
        return res.status(401).json({ message: 'no contact found' })
    if (req.body.name) {
        Contact.name = req.body.name
    }
    if (req.body.adress) {
        Contact.adress = req.body.adress
    }
    if (req.body.phone) {
        Contact.phone = req.body.phone
    }
    if (req.body.notes) {
        Contact.notes = req.body.notes
    }
    const saved = await Contact.save()
    saved ? res.status(200).json({ message: "done", data: Contact })
        : res.status(204).json({ message: "error" })


}
export const deletecontact = async (req, res, next) => {
    const { _id } = req.user
    const { contactid } = req.params
    const contact = await contactmodel.findById({ _id: contactid, addedby: _id })
    if (!contact)
        return res.status(401).json({ message: 'no contact found' })
    const delted = await contactmodel.deleteOne(contact)
    delted ? res.status(200).json({ message: "done" })
        : res.status(204).json({ message: "error" })

}

export const getcontact = async (req, res, next) => {
    try {
      const {_id} = req.user;
      const page = parseInt(req.query.page) || 1;
      const limit = 5;
  
      const count = await contactmodel.countDocuments({ addedby: _id });
      const totalPages = Math.ceil(count / limit);
      const skip = (page - 1) * limit;
  
      const contacts = await contactmodel.find({ addedby: _id })
        .skip(skip)
        .limit(limit);
  
      if (contacts.length > 0) {
        return res.status(200).json({
          message: 'done',
          data: contacts,
          totalPages,
          currentPage: page
        });
      } else {
        return res.status(404).json({ message: 'No contacts found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error fetching contacts' });
    }
  };
  