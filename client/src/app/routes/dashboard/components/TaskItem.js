import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import labelsList from '../../todo/data/labels'

import Aux from "util/Auxiliary";

const getTags = (tags) => {
  return labelsList.map((tag, index) => {
    if (tags.includes(tag.id)) {
      return <Tooltip key={index} title={tag.title}>
        <li className={`text-${tag.color}`}>
          <i className="zmdi zmdi-circle jr-fs-xxs"/>
        </li>
      </Tooltip>
    }
    return null;
  })
};

const TaskItem = ({data, onChange}) => {

  const {title, labels, completed, user, dueDate} = data;
  return (
    <Aux>
      <div className="media jr-task-list-item align-items-sm-center flex-nowrap">
        <div className="mr-3">
          <Checkbox className="size-20"
                    checked={completed}
                    onChange={() => onChange(data)}
          />
        </div>
        <div className="media-body jr-task-item-content">
          <div className="jr-task-item-content-left">
            <p className={`text-truncate mb-0 ${completed ? 'text-strikethrough' : 'jr-text-hover'}`}>{title}</p>
          </div>
          <div className="jr-task-item-content-right">
            <span className="bg-grey text-white px-2 jr-fs-sm ml-2 mb-0 rounded-xl order-sm-2">{user.projectName}</span>
            <ul className="jr-dot-list mb-0 order-sm-1 ml-2">
              {getTags(labels)}
            </ul>
            <span className="jr-fs-sm text-grey ml-3 jr-task-date order-sm-4">{dueDate}</span>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default TaskItem;
