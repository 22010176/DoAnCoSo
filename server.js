const path = require('path')
const fs = require('fs')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackCompiler = webpack(webpackConfig, function () { })

const app = express()

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')

// set up view engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.resolve(__dirname, "./dist"))

// application middleware
app.use(require('webpack-dev-middleware')(webpackCompiler))
app.use(require('webpack-hot-middleware')(webpackCompiler));
app.use(cors('*'))
app.use(morgan('combined'))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'dist')))

// api route
app.use('/api', require('./src/api'))
app.use('/*', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

