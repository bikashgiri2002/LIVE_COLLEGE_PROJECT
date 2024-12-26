const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB is connected...'))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
};
module.exports = connectDB;