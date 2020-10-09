const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Navbar Endpoints
app.use('/user', createProxyMiddleware({ target: 'http://localhost:8001/', changeOrigin: true }));
app.use('/entry', createProxyMiddleware({ target: 'http://localhost:8001/', changeOrigin: true }));

// Product Display
app.use('/product-display', createProxyMiddleware({ target: 'http://localhost:8002/', changeOrigin: true }));
app.use('/photo-display', createProxyMiddleware({ target: 'http://localhost:8002/', changeOrigin: true }));

// Reviews Endpoints
app.use('/reviewsItem', createProxyMiddleware({ target: 'http://localhost:8003/', changeOrigin: true }));
app.use('/reviewsShop', createProxyMiddleware({ target: 'http://localhost:8003/', changeOrigin: true }));

// Seller Endpoints
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8004/', changeOrigin: true }));

// Related Endpoints
app.use('/related', createProxyMiddleware({ target: 'http://localhost:8005/', changeOrigin: true }));


app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);
