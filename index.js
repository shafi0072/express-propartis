const express = require('express');

const app = express();
const handle = require('./handle')

const admin = express()


app.get('/', handle)

app.use('/admin', admin)

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard')
})

app.post('/', (req, res) => {
    
    res.send('hello world with post request')
})

app.listen(5000, () => {
    console.log('app is running on 3000');
})