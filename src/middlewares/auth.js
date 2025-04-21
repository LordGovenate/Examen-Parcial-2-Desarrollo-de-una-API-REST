const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: `${process.env.JWT_ISSUER}/.well-known/jwks.json`,
});


function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      console.error('Error obteniendo clave pública:', err);
      return callback(err);
    }
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}


const authenticateJWT = (requiredScopes = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
      token,
      getKey,
      {
        algorithms: ['RS256'],
        issuer: process.env.JWT_ISSUER,
      },
      (err, decoded) => {
        if (err) {
          console.error('Token verification failed:', err);
          return res.status(403).json({ message: 'Invalid or expired token' });
        }

        // Verificar scopes
        if (requiredScopes.length > 0) {
            const tokenScopes = decoded.scope
            ? decoded.scope.split(' ')
            : Array.isArray(decoded.scp)
            ? decoded.scp
            : [];
          const requiredArray = Array.isArray(requiredScopes) ? requiredScopes : [requiredScopes];

          const hasScope = requiredArray.some(scope => tokenScopes.includes(scope));
          if (!hasScope) {
            return res.status(403).json({ message: 'Insufficient scope' });
          }
        }

        req.user = decoded;
        next();
      }
    );
  };
};

module.exports = authenticateJWT;


