
const express = require('express');

const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user.model.cjs').default;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/Debugit', { useNewUrlParser: true });

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.create({
            name: req.body.username,
            email: req.body.Email,
            password: req.body.Password,
            role: req.body.Role,
        });
    } catch (error) {
        res.json({
            status : 'error',
            error : 'Duplicate Email',
        });
    }
    res.json({
        status : 'success',
    });
})

app.get('/api/register', async (req, res) => {
    console.log(req.body);
    const user = await UserModel.find({
        email: req.body.Email,
    });

    if(user) {
        res.json({
            status : 'ok',
            user : true,
        });
    }
    else {
        res.json({
            status : 'ok',
            user : false,
        });
    }


    res.json({
        status : 'success',
    });
})

app.listen(8080, () => {

    console.log('Server is running on port 8080');

})