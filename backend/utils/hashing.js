import bcrypt from 'bcryptjs'
export const haching = (
    {
        payload='',
        saltrounds= + process.env.SALT_ROUND,
        haching=true,
        refernce = ''
    }
)=>{
    if (haching)
    {
        const hashedpassword = bcrypt.hashSync(payload,saltrounds)
        return hashedpassword
    }
    if(!haching)
    {
        const compare = bcrypt.compareSync(payload,refernce)
        return compare
    }
}