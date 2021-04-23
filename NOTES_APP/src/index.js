const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

// Initializations

const app = express();
require('./database')

// Settings

// if there is a port in the computer use it, else use the port 3000
app.set("port", process.env.PORT || 3000);

// saying where the views folder is located
app.set("views", path.join(__dirname, 'views'))

// configure module export handlebars 
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname:".hbs" 

}));

// configurar motor de vistas
app.set("view engine", "hbs");

// middleware 

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true
}))
app.use(flash()); 

//Global variables

app.use((req, res, next) => {
    res.locals.succes_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// Routes

app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

// Static Files

app.use(express.static(path.join(__dirname, "public")));

// server is listenning 
app.listen(app.get('port'), () => {
    console.log("Server on port " + app.get('port'));
});