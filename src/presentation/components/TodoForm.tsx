import * as React from "react";
import { TodoApplicationService } from "../../application";

export interface DispatcherProps {
  service: TodoApplicationService;
}

type Props = DispatcherProps & {
  title?: string,
  idForEdit?: string;
  onEnter?: () => void;
}

interface State {
  title: string;
}

export class TodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: this.props.title || ""
    }
  }

  onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (this.props.idForEdit) {
        this.props.service.editTodo(this.props.idForEdit, this.state.title || "");
        // tslint:disable-next-line:no-unused-expression
        this.props.onEnter && this.props.onEnter();
      } else {
        this.props.service.addNewTodo(this.state.title || "");
      }
      this.setState({ title:"" });
    }
  }

  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape" || e.key === "Tab") {
      if (this.props.idForEdit) {
        this.props.service.editTodo(this.props.idForEdit, this.props.title || "");
        // tslint:disable-next-line:no-unused-expression
        this.props.onEnter && this.props.onEnter();
      } 
    }
    if (e.key === "Tab") {
      if (this.props.idForEdit) {
        this.props.service.editTodo(this.props.idForEdit, this.state.title || "");
        // tslint:disable-next-line:no-unused-expression
        this.props.onEnter && this.props.onEnter();
      } 
    }
  }

  render() {
    return (
      <input 
        type="text"
        placeholder="What do you need to do?"
        className="form-control" 
        value={this.state.title}
        autoFocus={true}
        onChange={(e) => this.setState({ title: e.target.value })} 
        onKeyPress={(e) => this.onKeyPress(e)}
        onKeyDown={(e) => this.onKeyDown(e)} />
    );
  }
}