const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBoocamp,
  updateBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcampsController');

const router = express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBoocamp);

module.exports = router;
