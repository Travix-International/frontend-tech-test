import React from 'react';
import Button from '../Button';
import EditTask from '../EditTask';
import {
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
export default props => {
  const { edit } = props;

  return edit ? (
    <Edit {...props} />
  ) : (
    <DisPlayCard {...props} />
  );
};
const Edit = props => (
  <Card>
    <CardContent>
      <EditTask {...props} />
    </CardContent>
  </Card>
);
const DisPlayCard = props => {
  const { item, directUpdate, working } = props;
  const { title, description, done } = item;

  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <FormControlLabel
          value="Done"
          control={
            <Checkbox
              label="Done"
              checked={done}
              disabled={working}
              onChange={e =>
                directUpdate({
                  ...item,
                  done: e.target.checked,
                })
              }
            />
          }
          label="Done"
          labelPlacement="start"
        />{' '}
        <Actions {...props} />
      </CardContent>
    </Card>
  );
};

const Actions = ({
  item,
  error,
  working,
  editItem,
  removeRequested,
  requestDeleteItem,
  cancelDeleteItem,
  confirmDeleteItem,
}) => {
  return removeRequested ? (
    <div>
      {error && <h4>ERROR:{error}</h4>}
      <Button
        variant="text"
        color="default"
        onClick={cancelDeleteItem}
        disabled={working}
        loading={working}
        value="Do not delete"
      />
      <Button
        variant="text"
        color="secondary"
        onClick={() => confirmDeleteItem(item)}
        disabled={working}
        loading={working}
        value="Confirm Delete"
      />
    </div>
  ) : (
    <div>
      <Button
        variant="text"
        color="secondary"
        disabled={working}
        loading={working}
        onClick={() => requestDeleteItem(item)}
        value="Delete"
      />
      <Button
        variant="text"
        color="default"
        onClick={() => editItem(item)}
        disabled={working}
        loading={working}
        value="Edit"
      />
    </div>
  );
};
