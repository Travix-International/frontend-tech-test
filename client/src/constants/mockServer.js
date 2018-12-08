const mockServer = {
  'fetchAppDataSuccess': {
    'data': {
      'tasks': [
        {
          'id': 'T-2714fa55d3a714d1f75511',
          'title': 'Test title 0',
          'description': 'Test description 0',
          'isCompleted': true,
          'createdAt': 1544260778133,
          'lastUpdatedAt': 1544260778133
        },
        {
          'id': 'T-a2cb2d4093c110dc961dfb',
          'title': 'Test title 1',
          'description': 'Test description 1',
          'isCompleted': false,
          'createdAt': 1544260778133,
          'lastUpdatedAt': 1544260778133
        }
      ],
      'allCount': 2,
      'completedCount': 1,
      'pendingCount': 1
    }
  },
  fetchAppDataError: {
    'message': 'Something went wrong!'
  }
};

export default mockServer;
