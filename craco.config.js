const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@products': resolvePath('./src/modules/products'),
      '@cart': resolvePath('./src/modules/cart'),
    },
  },
};
