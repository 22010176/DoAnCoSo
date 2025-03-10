const path = require('path')
const fs = require('fs')
const MongoStore = require("connect-mongo");

const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser');

const app = express()

const publicFolder = path.resolve(__dirname, '../public')
if (!fs.existsSync(publicFolder)) fs.mkdirSync(publicFolder)

const viewFolder = path.resolve(publicFolder, 'dist')
if (!fs.existsSync(viewFolder)) fs.mkdirSync(viewFolder)

if (process.env.MODE === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const webpackCompiler = webpack(webpackConfig, function () { })

  // Set up webpack middleware
  app.use(require('webpack-dev-middleware')(webpackCompiler))
  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

app.set('views', viewFolder)
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// application middleware
app.use(cors({ credentials: true }))
app.use(morgan('combined'))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 }, // 1 giờ
}))
app.use(express.static(publicFolder))


// api route
app.use('/api', require('./route'))
app.use('/*', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

