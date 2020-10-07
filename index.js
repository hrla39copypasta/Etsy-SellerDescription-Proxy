const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ target: 'http://localhost:8004', changeOrigin: true }));
app.listen(8094);