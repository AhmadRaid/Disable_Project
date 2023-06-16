const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.set("strictQuery", false);

//console.log(process.env.mongoUrl);
const connectDB = async () => {
await mongoose.connect("mongodb+srv://user:3EF7EZaFvv4Sz3gM@cluster0.qmgxzwy.mongodb.net/Disable-Project?retryWrites=true&w=majority" ,connectionParams)
    .then( () => {
        console.log("MongoDB Connected");
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}
connectDB()


