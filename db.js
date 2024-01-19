const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todos");
        console.log(`MongoDB connected`);
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports=connectdb