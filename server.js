const path = require('path')
const express = require('express')

const morgan = require('morgan')
const cors = require('cors')

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackCompiler = webpack(webpackConfig, function () { })

const app = express()

// set up view engine
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "./public/dist"))

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

// api route
app.use('/*', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

