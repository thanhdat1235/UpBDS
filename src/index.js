const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const { engine } = require('express-handlebars');

const livereload = require('livereload');
const connectLivereload = require("connect-livereload");
// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, '/src'));

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

// connect db 
db.connect();
// HTTP Loger
// app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'))

// Template engine
app.engine('hbs', engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b,
    }
}));

route(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(connectLivereload());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));


app.listen(port, () => console.log(`Listening on port at http://localhost:${port}`));