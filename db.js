const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://asjadsk:password1234567@cluster0.bkqliu4.mongodb.net/test?retryWrites=true&w=majority");
        console.log(`MongoDB connected`);
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports=connectdb
