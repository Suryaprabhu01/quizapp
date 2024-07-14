import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://admin:admin123@quiz.mmxps33.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}