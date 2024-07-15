const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path'); 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// Routes
const productRoutes = require('./routes/products'); 
const apiRoutes = require('./routes/api');

app.use('/', productRoutes); 
app.use('/api', apiRoutes); 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
