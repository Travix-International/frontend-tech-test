'use strict'

const app = require('express')()
const cors = require('cors')
const tasksContainer = require('./tasks.json')

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Cache-Control',
    'Expires'
  ]
}

const limit = 5

app.use(cors(corsOptions))

const generateId = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks/:page', (req, res) => {
  const page = parseInt(req.params.page, 10)
  const pages = Math.ceil(tasksContainer.tasks.length / limit)
  const begin = page * limit
  const end = page * limit + limit
  const tasks = tasksContainer.tasks.slice(begin, end)

  return res.status(200).json({ tasks, pages })
})

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task/:id', (req, res) => {
  const id = req.params.id

  if (id) {
    const task = tasksContainer.find(item => item.id === id)

    if (task) {
      return res.status(200).json(task)
    } else {
      return res.status(404).json({
        message: 'Not found.'
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.'
    })
  }
})

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id/:page/:title/:description', (req, res) => {
  const id = req.params.id
  const page = parseInt(req.params.page, 10)
  const begin = page * limit
  const end = page * limit + limit
  const tasks = tasksContainer.tasks.slice(begin, end)

  if (id) {
    const task = tasks.find(item => item.id === id)

    if (task) {
      task.title = req.params.title
      task.description = req.params.description
      return res.status(200).json({ task })
    } else {
      return res.status(404).json({
        message: 'Not found'
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
    })
  }
})

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/:title/:description', (req, res) => {
  const task = {
    id: generateId(),
    title: req.params.title,
    description: req.params.description
  }

  tasksContainer.tasks.unshift(task)

  return res.status(200).json({ task })
})

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id/:page', (req, res) => {
  const id = req.params.id
  const page = parseInt(req.params.page, 10)
  const begin = page * limit
  const end = page * limit + limit
  const tasks = tasksContainer.tasks.slice(begin, end)

  if (id) {
    const task = tasks.find(item => item.id === id)

    if (task) {
      const taskIndex = tasksContainer.tasks.indexOf(task)
      tasksContainer.tasks.splice(taskIndex, 1)
      return res.status(204).end()
    } else {
      return res.status(404).json({
        message: 'Not found'
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
    })
  }
})

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n')
})
