const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});