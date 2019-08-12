import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import labels from 'app/routes/todo/data/labels';
import {DatePicker} from 'material-ui-pickers';
import CustomScrollbars from 'util/CustomScrollbars';


class ToDoDetail extends React.Component {
  handleLabelClick = event => {
    this.setState({labelMenu: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({userMenu: false, labelMenu: false});
  };

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitComment();
    }
  };

  handleEditTitle = () => {
    if (this.state.editTitle) {
      const todo = this.state.todo;
      todo.title = this.state.title;
      this.props.onTodoBatchUpdate([todo])
    }
    this.setState({
      editTitle: !this.state.editTitle
    });
  };
  handleEditNote = () => {
    if (this.state.notes) {
      const todo = this.state.todo;
      todo.notes = this.state.notes;
      this.props.onTodoBatchUpdate([todo])
    }
    this.setState({
      editNote: !this.state.editNote
    });
  };
  handleDueDateChange = (date) => {
    this.setState({
      todo: {...this.state.todo, dueDate: date}
    });
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  constructor(props) {
    super(props);
    const {title, notes} = props.todo;
    this.state = {
      todo: props.todo,
      title,
      notes,
      anchorEl: undefined,
      userMenu: false,
      labelMenu: false,
      editTitle: false,
      editNote: false,
    };
  }


  render() {
    const {onTodoBatchUpdate, onLabelUpdate, onDeleteToDo, width} = this.props;
    const {todo, editNote, editTitle, title, notes} = this.state;

    return (
      <div className="module-detail module-list">
        <CustomScrollbars className="module-list-scroll scrollbar"
                          style={{height: width >= 1200 ? 'calc(100vh - 225px)' : 'calc(100vh - 210px)'}}>

          <div className="module-detail-item module-detail-header">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                <div className="d-flex align-items-center">
                  
                  <DatePicker className="module-date"
                              value={todo.dueDate}
                              invalidLabel="Due Date"
                              onChange={this.handleDueDateChange.bind(this)}
                              animateYearScrolling={false}
                              leftArrowIcon={<i className="zmdi zmdi-arrow-back"/>}
                              rightArrowIcon={<i className="zmdi zmdi-arrow-forward"/>}
                              InputProps={{
                                endAdornment: (
                                  <IconButton className="icon-btn">
                                    <i className="zmdi zmdi-calendar"/>
                                  </IconButton>
                                ),
                              }}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div
                  className="d-flex flex-sm-row-reverse justify-content-between justify-content-sm-start">


                  <IconButton className="icon-btn" onClick={() => {
                    onDeleteToDo(todo);
                  }}>
                    <i className="zmdi zmdi-delete"/>
                  </IconButton>

                  <IconButton className="icon-btn" onClick={() => {
                    todo.starred = !todo.starred;
                    onTodoBatchUpdate([todo]);
                  }}>
                    {todo.starred ?
                      <i className="zmdi zmdi-star"/> :
                      <i className="zmdi zmdi-star-outline"/>
                    }

                  </IconButton>

                  <IconButton className="icon-btn" onClick={this.handleLabelClick}>
                    <i className="zmdi zmdi-label-alt"/>
                  </IconButton>

                  <Menu id="label-menu"
                        anchorEl={this.state.anchorEl}
                        open={this.state.labelMenu}
                        onClose={this.handleRequestClose}

                        MenuListProps={{
                          style: {
                            width: 150,
                          },
                        }}>
                    {labels.map(label =>
                      <MenuItem key={label.id} onClick={() => {
                        this.handleRequestClose();
                        onLabelUpdate(todo, label)
                      }}>
                        {label.title}
                      </MenuItem>,
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <div className="module-detail-item">

            <div className="labels mb-4">
              {labels.map((label, index) => {
                return (todo.labels).includes(label.id) && <div key={index}
                                                                className={`badge text-white bg-${label.color}`}>{label.title}</div>
              })}
            </div>

            <div className="form-group d-flex align-items-center mb-0">
              <IconButton className="icon-btn p-1" onClick={(event) => {
                todo.completed = !todo.completed;
                onTodoBatchUpdate([todo]);
              }}>
                {todo.completed ?
                  <span className="border-2 size-30 rounded-circle text-green border-green">
                                        <i className="zmdi zmdi-check"/></span>
                  : <span className="border-2 size-30 w-2 rounded-circle text-muted border-grey">
                                        <i className="zmdi zmdi-check"/>
                                    </span>
                }
              </IconButton>
              {editTitle ? <div className="d-flex align-items-center w-100">
                  <div className="col">
                    <Input
                      fullWidth
                      multiline className="task-title"
                      id="required"
                      placeholder="Title"
                      onChange={(event) => this.setState({title: event.target.value})}
                      defaultValue={title}/>
                  </div>

                  <IconButton onClick={this.handleEditTitle}>
                    <i className="zmdi zmdi-check"/>
                  </IconButton>
                </div> :
                <div className="d-flex align-items-center w-100">
                  <div className="task-title col">
                    {title}
                  </div>
                  <IconButton className="icon-btn" onClick={this.handleEditTitle}>
                    <i className="zmdi zmdi-edit"/>
                  </IconButton>

                </div>}
            </div>


          </div>

          <div className="module-detail-item mb-4">
            {editNote ? <div className="d-flex align-items-center w-100">
                <Input
                  fullWidth
                  id="required"
                  multiline
                  placeholder="Note"
                  onChange={(event) => this.setState({notes: event.target.value})}
                  defaultValue={notes}/>

                <IconButton className="icon-btn" onClick={this.handleEditNote}>
                  <i className="zmdi zmdi-check"/>
                </IconButton>
              </div> :
              <div className="d-flex align-items-center w-100">
                <div className="task-des col px-0">
                  {notes}
                </div>
                <IconButton className="icon-btn" onClick={this.handleEditNote}>
                  <i className="zmdi zmdi-edit"/>
                </IconButton>

              </div>}
          </div>



        </CustomScrollbars>

      </div>
    );
  }
}

export default ToDoDetail;