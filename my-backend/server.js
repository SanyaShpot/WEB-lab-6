const express = require('express');
const sequelize = require('./db');
const Product = require('./Product');
const productRoutes = require('./productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

app.use('/api/products', productRoutes);

const seedProducts = async () => {
  try {
    await Product.bulkCreate([
      {
        name: "Різдвяна",
        price: 1500,
        image: "https://cdn.27.ua/sc--media--prod/default/76/c4/25/76c4258d-3cc0-4016-89c9-96a90e1b2657.jpg",
        height: 180,
        manufacturer: "EcoTree",
        material: "Plastic"
      },
      {
        name: "Новорічна",
        price: 1200,
        image: "https://christmasexpres.com.ua/image/cache/catalog/image/cache/catalog/11-mary-zasnezhennaja/meri-snegeno-1000x1500-1000x1500.webp",
        height: 210,
        manufacturer: "EcoTree",
        material: "Plastic"
      },
      {
        name: "Зелена",
        price: 1300,
        image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg",
        height: 200,
        manufacturer: "EcoTree",
        material: "Wood"
      }
    ]);
    console.log("Products seeded successfully!");
  } catch (err) {
    console.error("Error seeding products:", err);
  }
};

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL using Sequelize');
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('Database synchronized');
    return seedProducts();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to MySQL:', err);
  });
