const Product = require('./Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, height, manufacturer, material, image } = req.body;
    const newProduct = await Product.create({
      name,
      price,
      height,
      manufacturer,
      material,
      image,
    });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFilteredProducts = async (req, res) => {
  const { searchTerm, price, height, material } = req.query;

  try {
    let whereConditions = {};

    if (material && material !== 'none') {
      whereConditions.material = material;
    }

    let products = await Product.findAll({ where: whereConditions });

    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (price && price !== 'none') {
      products.sort((a, b) => (price === 'asc' ? a.price - b.price : b.price - a.price));
    }

    if (height && height !== 'none') {
      products.sort((a, b) => (height === 'asc' ? a.height - b.height : b.height - a.height));
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


