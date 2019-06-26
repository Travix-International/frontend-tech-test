import React from 'react';
import {
  TextField,
  FormControlLabel,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '../Button';
export default props => {
  const {
    item,
    working,
    error,
    editTitle,
    editDescription,
    editDone,
    commitItem,
    cancel,
  } = props;
  const { title, id, description, done } = item;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        commitItem(item);
      }}
    >
      <div>
        <div>
          {error && <h4>ERROR:{error}</h4>}
          <TextField
            label="Title"
            value={title}
            required={true}
            fullWidth={true}
            onChange={e => editTitle(id, e.target.value)}
            margin="normal"
          />

          <TextField
            label="Description"
            value={description}
            required={true}
            fullWidth={true}
            onChange={e =>
              editDescription(id, e.target.value)
            }
            margin="normal"
          />
          <FormControlLabel
            value="done"
            control={
              <Checkbox
                label="Done"
                checked={done}
                onChange={e =>
                  editDone(id, e.target.checked)
                }
              />
            }
            label="Done"
            labelPlacement="start"
          />
        </div>
        <div>
          <Button
            variant="text"
            disabled={working}
            loading={working}
            color="default"
            onClick={() => cancel(item)}
            value="Cancel"
          />
          <Button
            type="submit"
            variant="text"
            disabled={working}
            loading={working}
            color="primary"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
};
