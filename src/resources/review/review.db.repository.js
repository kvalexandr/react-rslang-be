const Review = require('./review.model');

const get = async () => {
  const review = await Review.find();

  return review;
};

const put = async arrReview => {
  const review = await Review.create(arrReview);

  return review;
};

const remove = async userId => Review.deleteOne({ userId });

module.exports = { get, put, remove };
