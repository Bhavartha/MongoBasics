// Load the location of the database in variable
require('dotenv').config()
const uri = process.env.URI

// Import mongoose to work with mongo
const mongoose = require('mongoose')

// Use ES6 promises 
mongoose.Promise = global.Promise

// Fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect to DB before running any tests
before((done) => {
    mongoose.connect(uri)
    mongoose.connection
        .once('open', () => console.log("Connection established"))
        .on('error', (e) => console.log(e))
    done()
})


// Close connection after running all tests
after(()=> mongoose.connection.close())