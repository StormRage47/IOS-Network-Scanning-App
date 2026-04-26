const express = require('express');
const router = express.Router();

const { runScan } = require('/Users/stormrage/Documents/GitHub/IOS-Network-Scanning-App/App/backend/controllers/scanController');

router.get('/scan', runScan);

module.exports = router;