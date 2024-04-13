const express = require('express');
const router = express.Router();

router.use('/public' , require('./public/api.public.js'))

module.exports = router;