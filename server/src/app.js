const express = require('express')

const cors = require('cors');

const morgan = require('morgan')


const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');


const errorHandler = require('./middleware/errorHandler')

const app = express();

//  Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.json({ message: 'Nexora E-com APi running , Welcome to the server' })
})

//  Routes 
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/users', userRoutes)



//  Using the errorHadler  as a middleware
app.use(errorHandler)

module.exports = app;