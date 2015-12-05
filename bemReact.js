var createClass = require('./createClass');

// ES6 modules support
exports[ 'default' ] = exports.createClass = createClass;

// Non-enurable property
Object.defineProperty(
    exports,
    '__esModule',
    { value: true }
);
