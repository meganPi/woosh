import mongoose from 'mongoose';

//define review schema (how reviews will be saved in mongodb database)
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //Name required
    rating: { type: Number, default: 0 }, //Rating required and default set to 0
    comment: { type: String, required: true }, //Review comment required
  },
  {
    timestamps: true,
  }
);
//define product schema (how products will be saved in mongodb database)
//All the products details are string types and all the fields are required.
const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true }, //price default set to 0.
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true }, //stock default set to 0.
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true }, //rating default set to 0.
  numReviews: { type: Number, default: 0, required: true }, //review default set to 0.
  reviews: [reviewSchema],
});
//Create model for products
const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
