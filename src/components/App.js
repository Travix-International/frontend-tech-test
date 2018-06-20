const React = require('react');
const CreateTask = require('../containers/CreateTask');
const List = require('../containers/List');

const App = () => (
  <main>
    <CreateTask />
    <List />
  </main>
);

module.exports = App;