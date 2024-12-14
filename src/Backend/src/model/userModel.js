const db = require("../config/db");
const bcrypt = require("bcrypt");

// Create a new user
const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    return new Promise((resolve, reject) => {
        db.query(query, [name, email, hashedPassword], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// Find user by email
const findUserByEmail = (email) => {
    const query = "SELECT * FROM users WHERE email = ?";

    return new Promise((resolve, reject) => {
        db.query(query, [email], (err, result) => {
            if (err) reject(err);
            resolve(result[0]); // Return the first match
        });
    });
};

module.exports = { createUser, findUserByEmail };
