const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const db = require("./models");

const app = express();


const PORT = config.port

var corsOptions = {
  origin: `http://localhost:${PORT}`
};

db.sequelize.sync();

app.use(morgan('tiny'));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

require("./routes/book.routes")(app);

app.listen(PORT, (req) => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});