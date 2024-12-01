const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Invalid email format",
        },
    },
    password: { type: String, required: true },
    gender: {
        type: String
    },
    isActive: { type: Boolean, default: true },
    role: { type: String, default: "admin", enum: ["user", "admin"] },
}, { timestamps: true });


module.exports = mongoose.model(process.env.userTable, userSchema);
