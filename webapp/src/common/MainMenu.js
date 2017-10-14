import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/secondpage">Second Page</Link>
  </div>
);

export default MainMenu;
