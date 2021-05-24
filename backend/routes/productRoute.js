import express from 'express';
//import product from model.
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

//get list of products for user.
router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await Product.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products);
  //if product exists, then return product.
});

//Get API to get the product based on its id.
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
    //if product not found, display error message.
  }
});

//Create post API to add the reviews to the product.
router.post('/:id/reviews', isAuth, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((a, c) => c.rating + a, 0) /
      product.reviews.length;
    const updatedProduct = await product.save();
    res.status(201).send({
      data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
//Create put API to update the product details.
router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  //Find the product based on its id.
  //If product exist, then update the product information.
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
        //Product updated successfully, send success message.
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
  //Product did not update, send error messsage.
});

//API to delete a product if the user is an authorised admin.
router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  //find the product by its id and then delete it.
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
    //product succesfully deleted.
  } else {
    res.send('Error in Deletion.');
    //product deletion failed.
  }
});

//API to create a product if the user is an authorised admin.
router.post('/', isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  //Call save for new products.
  const newProduct = await product.save();
  //if product exists, then it was created correctly.
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
      //send message to say new product created.
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
  //Failed to create new product.
});

export default router;
