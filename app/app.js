let app = require('express')()
let cors = require('cors')

app.use(cors())
app.use(require('./controller'))

let server = app.listen(9001, () => {
  process.stdout.write('Todo Managemet server available on http://localhost:9001/\n')
})

module.exports = server
