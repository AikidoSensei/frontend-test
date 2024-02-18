const express = require('express')
const app = express()
const router = express.Router()
const PORT = 3000 || 5000
const position = require('./position.json')
const cors = require('cors')
const bodyParser = require('body-parser')
const spinRoute = require('./route')
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'https://adavize-ensake-test.vercel.app',
    methods: 'GET',
    credentials: true,
  })
)
app.use('/',spinRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`)
})