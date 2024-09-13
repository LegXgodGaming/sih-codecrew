import  mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
       const connectionDone= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\nMongoDB connected !! DB HOSt : ${connectionDone.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED" ,error)
        process.exit(1)
        
    }
}


export default connectDB;