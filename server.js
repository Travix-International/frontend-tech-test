'use strict'

const app = require('express')()
const bodyParser = require('body-parser')
const tasksContainer = require('./tasks.json')

// uuid function.
// Taken from https://gist.github.com/jed/982883
// eslint-disable-next-line
function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}

/**
 * Middlewares
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  next()
})

app.use(bodyParser.json())

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => res.status(200).json(tasksContainer.tasks))

/**
 * POST /task/create/
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/', (req, res) => {
  const task = {
    description: req.body.description,
    done: false,
    id: b(),
    title: req.body.title,
  }

  tasksContainer.tasks.push(task)

  return res.status(201).json(task)
})

/**
 * DELETE /task/:id/delete
 *
 * id: String
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 200.
 * If the task is not found, return a status code 404.
 */
app.delete('/task/:id/delete/', (req, res) => {
  const { id } = req.params
  const task = tasksContainer.tasks.find(item => item.id === id)

  if (task) {
    tasksContainer.tasks.splice(tasksContainer.tasks.indexOf(task), 1)
    return res.status(200).json(task)
  }

  return res.status(404).json({
    message: 'Not found',
  })
})

/**
 * PUT /task/:id/complete
 *
 * id: String
 *
 * Toggle complete the task linked to the  given id.
 * If the task is found and completed, return a status code 200.
 * If the task is not found, return a status code 404.
 */
app.put('/task/:id/complete', (req, res) => {
  const { id } = req.params
  const task = tasksContainer.tasks.find(item => item.id === id)

  if (task) {
    task.complete = !task.complete
    return res.status(200).json(task)
  }

  return res.status(404).json({
    message: 'Not found',
  })
})

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n')
})
