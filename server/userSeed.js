import User from './models/User.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import connectToDatabase from './db/db.js'

const userRegister = async () => {
    try{
        await connectToDatabase()
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
        console.log('Admin user created')
    }catch(error){
        console.error('Admin user seed failed:', error.message)
        process.exitCode = 1
    } finally {
        await mongoose.disconnect()
    }
}
userRegister();