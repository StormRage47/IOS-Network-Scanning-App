const express = require('express');
const router = express.Router();

const { addScan, getScans } = require('../controllers/scanController');

router.post('/scan', addScan);
router.get('/scans', getScans);

module.exports = router;