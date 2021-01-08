const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection is successful with Database');
}).catch(err => {
    console.log('Databse connection failed',err)
});