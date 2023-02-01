const express = require('express');
const cors = require('cors');

const app = express();

require('./server/settings/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const ProductRoutes = require('./server/routes/product.route');
ProductRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
