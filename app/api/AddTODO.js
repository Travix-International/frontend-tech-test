//API Instance
import { API } from './config/API'

export default (DATA) => API.post(`/task`, DATA);