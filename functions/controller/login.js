const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')

exports.login = asyncHandler(async (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    const user = {firstname : 'abc', lastname : 'xyx', id : '123', email}
    // res.status(200).cookie('token', generateToken(user)).json({ status: true, message: 'User logged in successfully', user });
    res.status(200).json({ token: generateToken(user), status: true, message: 'User logged in successfully', user });
});

const generateToken = ({ email, firstname, lastname, id }) => {
    const token = jwt.sign({
        email, firstname, lastname, id
    }, 'secret-key', { expiresIn: '30d' });
    return token
}

exports.details = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "successfully authenticated!"})
})