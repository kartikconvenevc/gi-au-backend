const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const associationRoutes = require('./routes/associationRoutes');
const templateRoutes = require('./routes/templateRoutes');
const reportLogRoutes = require('./routes/reportLogRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const authRoutes = require('./routes/authRoutes');
const auUserRoutes = require('./routes/auUserRoutes')



const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/au-users', auUserRoutes);
app.use('/api/products', productRoutes);
app.use('/api/associations', associationRoutes);


app.use('/api/templates', templateRoutes);


app.use('/api/report-logs', reportLogRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api', authRoutes);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
