const appConstants = {
  'DEFAULTS': {
    'DATA_LIMIT': 20,
    'TAB': 0,
  },
  'API': {
    'FETCH_APP_DATA': '/task/get-app-data?limit=__limit__',
    'FECTH_TAB_DATA': '/task/get-all-tasks?limit=__limit__&page=__page__&type=__type__',
    'UPDATE_TASK': '/task/:id'
  }
};

export default appConstants;
