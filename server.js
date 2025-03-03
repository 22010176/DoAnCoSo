const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// application middleware
app.use(cors())
app.use(morgan('combined'))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('public'))

// api route
// app.use('/api', require('./src/app/api'))
app.use('/*', (req, res) => { res.sendFile(__dirname + '/public/dist/index.html') })

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

