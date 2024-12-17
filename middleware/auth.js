// IMPORT PACKAGES
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

exports.isAuth = asyncHandler(async (req, res, next) => {
    const { token } = req.cookies;
    console.log('token validation')
    if (!token) {
        throw new Error('Unautherorised access');
    } else {
        const {firstname, lastname, id, email} = jwt.verify(token, 'secret-key');
        const user = {firstname , lastname , id , email}
        req.current_user = user;
        next();
    }
})