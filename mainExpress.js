const express = require('express');
//const publicRoutes = require('./publicRoutes');
//const privateRoutes = require('./privateRoutes');
//const loginRoutes = require('./loginRoutes');

const app = express();

// Route handlers
//app.use('/public', publicRoutes);
//app.use('/private', privateRoutes);
//app.use('/login', loginRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

