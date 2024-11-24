const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/psychologists', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../data/psychologists.json'));
  res.json(JSON.parse(data));
});

router.get('/courses', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../data/courses.json'));
  res.json(JSON.parse(data));
});

module.exports = router;
