import jwt from 'jsonwebtoken'
import usermodel from '../db/models/users.model.js'
import { tokenfunction } from '../utils/token.js'

export const auth = () => {
    return async (req, res, next) => {
        const { token } = req.headers
        if (!token || !token.startsWith(process.env.BEARER_KEY)) {
            res.json({ message: 'please enter valid token' })
        } else {
            const newtoken = token.split(process.env.BEARER_KEY)[1]
            const decoded = tokenfunction({ payload: newtoken, genrate: false })
            if (!decoded || !decoded.id) {
                return res.json({ message: "invalid token" });
            }
            const user = await usermodel.findById(decoded.id)
            if (user) {
                req.user = user
                next()
            } else {
                res.json({ message: 'unvalid token' })
            }
        }
    }
}
