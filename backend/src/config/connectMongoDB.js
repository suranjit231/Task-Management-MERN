import mongoose from "mongoose";



//========= connecting mongodb using mongoose =================//
const connectMongodb = async()=>{
    const url = `${process.env.DB_URl}/Task_DB`
    // const url = 'mongodb+srv://namasudrasuranjit164:rahul2314@cluster0.cpyvocf.mongodb.net/Task_DB?retryWrites=true&w=majority&appName=Cluster0';
  
    try{
        await mongoose.connect(url,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log("mongodb is connected!")

    }catch(error){
        console.log(error);
        console.log("mongodb connection falid!")

    }

}

export default connectMongodb;