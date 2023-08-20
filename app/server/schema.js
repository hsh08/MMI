const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

model.exports = {
    User
}
