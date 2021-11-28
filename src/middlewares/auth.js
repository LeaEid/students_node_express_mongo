//Auth middleware
const auth = async (req, res, next) => {
    try {
        const headerAuth = req.header('Authorization')
        if(headerAuth === undefined ){
            throw new Error()
        }

        //encoded value
		var encoded = headerAuth.split(' ')[1];
		// decode using base64
		var decoded = new Buffer(encoded,'base64').toString();
		var name = decoded.split(':')[0];
		var password = decoded.split(':')[1];

        if(name !== process.env.AUTH_USER || password !== process.env.AUTH_USER_PASS) {
            throw new Error()
        }	

        next()
    } catch (e) {
        res.status(403).send({ error: ' Wrong Username or Password'})
    } 
}

module.exports = auth