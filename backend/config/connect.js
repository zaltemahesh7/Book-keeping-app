const mongoose = require('mongoose')

const connect = () =>{
    // Connecting Database
mongoose.connect('mongodb+srv://Mahesh:y39LKs2NWUuaJtDG@cluster0.yfyid.mongodb.net/Book-keeping-app', {
    // useFindandmodify: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useNewUrlPaeser: true
}).then(() => { console.log("Connection Success......."); })
    .catch(err => { console.log(err); })
}

module.exports = connect