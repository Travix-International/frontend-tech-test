//API Instance
import { API } from './config/API'

export default (DATA) => API.put(`/task/${DATA._id}`, DATA);