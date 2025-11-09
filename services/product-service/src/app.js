import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import Product from './models/productModel.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Product Service is running');
});

const PORT = process.env.PORT || 4001;
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
  })
  .catch((err) => console.error('DB connection failed:', err));
