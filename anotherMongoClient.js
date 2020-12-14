const mongoose = require('mongoose');
const { Contact } = require('./model');

const username = `Admina`;
const password = `a`;
const uri = `mongodb+srv://${username}:${password}@cluster0.5ot88.mongodb.net/AdVizData?retryWrites=true&w=majority`;

// connecting to the database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// get a connection object (a connection from this client to the db)
const db = mongoose.connection;

// error handling
db.on('error', console.error.bind(console, 'connection error:'));

// when the db is ready to use
db.once('open', function () {
    // we're connected!
    Contact.find() // find all users from contacts collection (⚠ not Contacts.) -> See PR.
        .then((a) => console.log(JSON.stringify(a)))
        .catch((err) => console.log(err));
});
