const { createProxyMiddleware } = require('http-proxy-middleware');
const { BASE_URL } = require('./api/config');

module.exports = function (app) {
  app.use(
    '/api', // Adjust this path to match your API endpoint
    createProxyMiddleware({
      target: BASE_URL, // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
