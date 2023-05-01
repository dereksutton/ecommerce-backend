const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
        include: [
          { model: Category },
          { model: Tag, as: 'tags', through: ProductTag }
        ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id` include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
        include: [
          { model: Category },
          { model: Tag, as: 'tags', through: ProductTag },
        ],
    });

    if (!productData) {
        res.status(404).json({ message: 'No product found with that ID.' });
        return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
    try {
      const product = await Product.create(req.body);
  
      if (req.body.tagIds && Array.isArray(req.body.tagIds) && req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        await ProductTag.bulkCreate(productTagIdArr);
      } else {
        res.status(200).json(product);
      }
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

//update product
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
    const productTagIds = productTags.map(({ tag_id }) => tag_id);

    if (req.body.tagIds) {
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Product successfully updated.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const product = await Product.destroy({
        where: {
            id: req.params.id,
        },
    });

    if (!product) {
        res.status(404).json({ message: 'No product found with that ID.' });
        return;
    }

    res.status(200).json({ message: 'Product successfully deleted.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
