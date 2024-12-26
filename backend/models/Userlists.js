const mongoose = require("mongoose");

const UserListSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    type : String,
});

module.exports = mongoose.model("Userlist", UserListSchema);