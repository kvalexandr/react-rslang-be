const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    review: {
      type: Object,
      required: false
    },
    date: {
      type: Object,
      required: false
    },
    name: {
      type: Object,
      required: false
    },
    avatar: {
      type: Object,
      required: false
    }
  },
  { collection: 'review' }
);

module.exports = mongoose.model('Review', ReviewSchema);
