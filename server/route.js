const express = require('express')
const routes = express.Router()
const position = require('./position.json')
const spin = async (req, res) => {
  const random = Math.floor(Math.random() * 4)
  // console.log('someone reached the server')
  res.header('Content-Type', 'application/json')
  res.status(200).json(position.OBJECTS[random])
}
routes.route('/spin').get(spin)


module.exports = routes