const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connect = mongoose.connect('mongodb://localhost:27017/cattegory')
        console.log('db connected');

    } catch (error) {
        console.log(error);

    }
}

module.exports= connectDB