let app = require('express')()

app.use(require('./controller'))

let server = app.listen(9001, () => {
  process.stdout.write('Todo Managemet server available on http://localhost:9001/\n')
})

module.exports = server
