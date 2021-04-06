const review = require('./review.db.repository');

const get = async () => {
  const reviews = await review.get();

  return reviews;
};

const put = async arrReview => {
  const reviews = await review.put(arrReview);

  return reviews;
};

module.exports = { put, get };
