import { Entity, validatorAdapter } from 'speck-entity'
import Joi from 'joi-browser'
const adapter = validatorAdapter('joi', Joi)

class Task extends Entity {

  static SCHEMA = {
    id: adapter(Joi.number()),
    title: adapter(Joi.string().required()),
    description: adapter(Joi.string().required()),
  }
}

export default Task
