const mongoose = require('mongoose');

// import mongoose from 'mongoose';
const {Schema, model} = mongoose;
const User =  new Schema(
    {
        name: { typeof: String, required: true },
        email: { typeof: String, required: true, unique: true },
        password: { typeof: String, required: true },
        role: { typeof: String, required: true },
        createdAt: { typeof: Date, default: Date.now },
    }, 
    { collection: 'User-data' }
);

const UserModel = model('UserData', User);

module.exports = UserModel

