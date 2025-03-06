const path = require('path')
const fs = require('fs')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

if (process.env.MODE === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config')
  const webpackCompiler = webpack(webpackConfig, function () { })

  // Set up webpack middleware
  app.use(require('webpack-dev-middleware')(webpackCompiler))
  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

// set up view engine
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.set('views', path.resolve(__dirname, "./dist"))

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')

// application middleware
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

