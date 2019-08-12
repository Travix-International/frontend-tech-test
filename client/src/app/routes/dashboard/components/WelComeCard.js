import React from "react";

const WelComeCard = ({todosCount}) => {

  const name = localStorage.getItem('user_name') || "Dear Guest";

  return (
    <div className="jr-wel-ema pt-xl-2">
      <h1 className="mb-3">Welcome {name || "My Guest"}</h1>
      <p className="jr-fs-sm text-uppercase">You Have</p>
      <ul className="list-unstyled">
        <li className="mb-1">
          <i className="zmdi zmdi-file-plus zmdi-hc-fw zmdi-hc-lg mr-2"/>
          <span>{todosCount} Due tasks</span>
        </li>
      </ul>
    </div>
  );
};

export default WelComeCard;
