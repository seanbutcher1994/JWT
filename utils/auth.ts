const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()

const secret = process.env.JWT_SECRET;
const expiration = "3m"
const refreshExpiration = "30m";

export const Auth = {
    // Function to return a jwt accessToken
    signToken: function (data) {
        try {
            // Return token using JWT's sign function. Takes in the data to be house in the token
            // the secret and an object with the expiration time like so: { expiresIn: expirationTime }
            return jwt.sign(data, secret, { expiresIn: expiration})
            // Catch any errors relating to the creation of the token
        } catch (error) {
            console.error("Error: ", error)
        }
    }
}