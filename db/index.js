const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://chels:chels@cluster0.pb1jkzb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.once('open', function () {
    console.log("Successfully connected to MongoDB DB");
});

module.exports = db