import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Error Connecting to DB'));

db.once('open',()=>{
    console.log('Connected to DB');
})


export default db;  