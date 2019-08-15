import React from "react";

import "./Info.scss";

const Info: React.FC = () => (
  <div className="info-block">
    <h3>Information</h3>
    <ul>
      <li>
        Click on Add new task and you'll be able to create new task. It will be
        placed at the top of the list
      </li>
      <li>
        You can click on any item from list and you will get more information
        about that task at the left side of the page.
      </li>
      <li>Also, you can edit selected task</li>
      <li>If you will click on checkbox, status of the task will be changed</li>
      <li>
        You can delete any task by clicking on trash icon next to task title
      </li>
      <li>
        After you add new task with new category, it will update categories list
        by adding new one there
      </li>
      <li>
        You are able to filter tasks by category. You just need to click on
        category in the list
      </li>
    </ul>
  </div>
);

export default Info;
