import jwt from 'jsonwebtoken'

const key = process.env.JWT_KEY;

function ValidateToken(token) {
    try {
        let decoded = jwt.verify(token, key);
        return decoded;
    } catch (err) {
        return false;
    }
}

function GenerateToken(data) {
    return jwt.sign(data, key/*, {
        expiresIn: process.env.JWT_EXPIRE
    }*/);
}

export {ValidateToken, GenerateToken}