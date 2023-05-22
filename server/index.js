const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const generalRoutes = require("./routes/general.js");
const clientRoutes = require("./routes/client.js");
const salesRoutes = require("./routes/sales.js");
const managementRoutes = require("./routes/management.js");

//MODEL IMPORT
const User = require("./models/User.js");
const Product = require("./models/Product.js");
const ProductStat = require("./models/ProductStat.js");
const Transaction = require("./models/Transaction.js");
const OverallStat = require("./models/OverallStat.js");
const AffiliateStat = require("./models/AffiliateStat.js");

//DATA IMPORTS
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} = require("./data/index.js");

//CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/general", generalRoutes);
app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);

//MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => console.log(`Service Started at PORT: ${PORT}`));

    //only once
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((error) => console.log(`Error: ${error}`));
