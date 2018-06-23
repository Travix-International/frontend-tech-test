const React = require('react');
const CreateTask = require('../containers/CreateTask');
const List = require('../containers/List');

const App = () => (
  <div>
    <header role="banner">
      <h1 className="banner__logo">Traxix</h1>
      <h2 className="banner__title">We <strong>manage</strong> tasks</h2>
      <CreateTask />
    </header>
    <List />
  </div>
);

module.exports = App;