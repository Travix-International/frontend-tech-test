const React = require('react');
const CreateTask = require('../CreateTask');
const List = require('../List');

const App = () => (
  <div>
    <header className="banner" role="banner">
      <h1 className="banner__logo">Travix</h1>
      <CreateTask />
    </header>
    <main>
      <List />
    </main>
  </div>
);

module.exports = App;
