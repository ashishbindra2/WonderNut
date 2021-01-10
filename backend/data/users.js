import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'ashish',
    email: 'ashis@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'bindra',
    email: 'bindra@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
