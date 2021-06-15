const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Pizza', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => {
    console.log(" DataBase connected...")

    const PORT = 8000;
    app.listen(PORT, () => {
        console.log(`Server is  listing  at http://localhost:${PORT}`)
    })
});
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)
 