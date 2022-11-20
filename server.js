import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

var corsOptions = {
    origin:"http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// call sysc()
const db = require("./app/models");
db.sequelize.sync();

// tutorial routes
import  routes from  "./app/routes/tutorial.routes.js";(app)
//require("./app/routes/tutorial.routes.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a mi api" });
  });

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

