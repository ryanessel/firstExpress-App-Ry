const express = require('express');
const app = express();
const PORT = 3000;
// variables and declarations always at the top of the file



// middleware always comes between declarations and routes
// ========== MIDDLEWARE =============
app.use(express.static('public'));
app.use(express.static('views'));


// ===================================


// routes are the 2nd to last element in your app.js
// ============== ROUTES =====================

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/contact', (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
})

// ============================================


// remember to listen at bottom of the app js
app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT}`));