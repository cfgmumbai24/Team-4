const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// const customerRouter = require('./routes/customers');

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(bodyParser.json());
app.use(cors());
// const customerRouter = require('./routes/customers');
mongoose.connect('mongodb+srv://team4:team-4@main.dw0igyf.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.error(error);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/', require('./routes/courses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
