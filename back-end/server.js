const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors')
const fileUpload = require('express-fileupload');

const imgUploadRouter = require('./routes/admin/imgUpload');
const getTableStatusRouter = require('./routes/admin/getTableStatus');

const signupRouter = require('./routes/Admin/signup');
const getUserRouter = require('./routes/Admin/getUser');
const registerRouter = require('./routes/Admin/register');
const userRouter = require('./routes/user');
const chartRouter = require('./routes/Admin/chart');
const reportsQueriesRouter = require('./routes/Admin/reportsQueries');

const productsByListRouter = require('./routes/productsByList');
const productsByCategoryRouter = require('./routes/productsByCategory');
const productsByLatestRouter = require('./routes/productsByLatest');
const productRouter = require('./routes/product');
const productEditRouter = require('./routes/Admin/productUpdate');
const productAddRouter = require('./routes/Admin/productAdd');
const productDeleteRouter = require('./routes/Admin/productDelete');


const sliderItemsRouter = require('./routes/sliderItems');
const sliderEditRouter = require('./routes/admin/sliderUpdate');
const sliderAddRouter = require('./routes/admin/sliderAdd');
const sliderDeleteRouter = require('./routes/admin/sliderDelete');

const categoriesRouter = require('./routes/categories');
const categoryEditRouter = require('./routes/admin/categoryUpdate');
const categoryAddRouter = require('./routes/admin/categoryAdd');
const categoryDeleteRouter = require('./routes/admin/categoryDelete');

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(cors())
app.use(fileUpload());
app.use("/img", express.static(__dirname + '/img')); //Serves resources from public folder
app.use("/imgUpload", imgUploadRouter);



app.use("/getTableStatus", getTableStatusRouter);
app.use("/signup", signupRouter);
app.use("/getUser", getUserRouter);
app.use("/register", registerRouter);
app.use("/chart", chartRouter);
app.use("/reportsQueries", reportsQueriesRouter);

app.use("/user", userRouter);

app.use("/productsByList", productsByListRouter);
app.use("/productsByCategory", productsByCategoryRouter);
app.use("/productsByLatest", productsByLatestRouter);
app.use("/product", productRouter);
app.use("/productUpdate", productEditRouter);
app.use("/productAdd", productAddRouter);
app.use("/productDelete", productDeleteRouter);

app.use("/sliderItems", sliderItemsRouter);
app.use("/sliderUpdate", sliderEditRouter);
app.use("/sliderAdd", sliderAddRouter);
app.use("/sliderDelete", sliderDeleteRouter);

app.use("/categories", categoriesRouter);
app.use("/categoryUpdate", categoryEditRouter);
app.use("/categoryAdd", categoryAddRouter);
app.use("/categoryDelete", categoryDeleteRouter);


app.listen(4000);

