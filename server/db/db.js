import mongoose from "mongoose";

const connectToDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected')
    }catch(error){
        console.error('MongoDB connection failed:', error.message)
        throw error
    }
}

export default connectToDatabase