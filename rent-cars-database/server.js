require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
    credentials: true,
}));

const rentCarsRoutes = require('./src/rent-cars/routes');


app.get('/', (req, res) => {
    res.send(
        "Good job"
    )
})

app.use('/api/v1/rent-cars', rentCarsRoutes)

app.listen(process.env.APP_PORT, () => {
    console.log('Server start', process.env.APP_PORT)
})