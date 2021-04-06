const { OK } = require('http-status-codes');
const router = require('express').Router();

const reviewService = require('./review.service');

router.get('/', async (req, res) => {
  const reviews = await reviewService.get();

  res
    .status(OK)
    .send(reviews.sort(() => Math.random() - Math.random()).slice(0, 3));
});

router.put('/', async (req, res) => {
  const reviews = await reviewService.put(req.body);

  res.status(OK).send(reviews);
});

module.exports = router;
