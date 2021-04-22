const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  code: {
    type: String
  },
  decription: {
    type: String
  },
  isenabled: {
    type: Boolean
  }
});


module.exports = Coupon = mongoose.model('coupon', CouponSchema);