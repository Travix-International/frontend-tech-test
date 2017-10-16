const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

app.use(cors())

app.use(require('./controller'))

app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
})

let server = app.listen(PORT, () => {
  process.stdout.write(`Todo Manager listening on http://localhost:${PORT}/\n`)
})

module.exports = server
