const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI,
        {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useindAndModify: true
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
         ,() => {
        console.log('Mongo_DB is alive.....')
    })
}

module.exports = connectDB;