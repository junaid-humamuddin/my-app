const express = require('express');
const asyncHandler = require('express-async-handler');
const axios = require('axios');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({ msg: 'Hello world' });
}).get('/posts', asyncHandler(async function (req, res) {
    const posts = await axios('https://jsonplaceholder.typicode.com/posts');
    if (!posts) res.status(404).json({ msg: 'No posts found' });
    res.status(200).json(posts.data);
}));

module.exports = router;