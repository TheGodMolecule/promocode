const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../Models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
  Coupon.find()
    .then(coupons => res.json(coupons))
    .catch(err => res.status(404).json({ nocouponsfound: 'No Coupons found' }));
});

router.post('/', (req, res) => {
    Coupon.create(req.body)
      .then(coupon => res.json({ msg: 'Coupon added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Coupon' }));
  });

// @route GET api/books
// @description Get all books
// @access Public
// router.get('/', (req, res) => {
//   Book.find()
//     .then(books => res.json(books))
//     .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
// });

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
// router.post('/', (req, res) => {
//   Book.create(req.body)
//     .then(book => res.json({ msg: 'Book added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
// });

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;