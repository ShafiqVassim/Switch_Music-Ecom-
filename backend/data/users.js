import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123',10),
        isAdmin: true
    },
    {
        name: 'shafiq',
        email: 'shafiqvassim08@gmail.com',
        password: bcrypt.hashSync('123',10),
    }
]

export default users;