import * as apiPaths from '../constants/apiPaths'

const creatTask = () => {
  const payload = fetch(apiPaths.CREATE, {
    method: 'POST'
  });

  return {
    type: 'CREATE_TASK',
    payload
  }
}

export default creatTask
