# Travix test

Needs mongodb instance running and a config.json file placed on root.


Example Config
```
{
  "restApi": {
    "dbConnectionString": "mongodb://localhost/todo-db",
    "port": 5000
  },
  "bff": {
    "port": 5001
  },
  "socket": {
    "port": 5002
  },
  "client": {
    "port": 5003
  }
}
```

To run:
```
npm i

npm run start
```
