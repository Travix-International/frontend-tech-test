import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DataWrapper 					from "./DataWrapper";
// Page Components
import AppTitle 						from "./AppTitle";
import TodoList 						from "./TodoList";
import CreateNew 						from "./CreateNew";

@DataWrapper
@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.store.appState.fetchTasks();
	}
	render() {
		const store = this.store;
		return (
			<div className="home">
				<div className="container">
					<div className="row">
					  <div className="col-md-6 col-md-offset-3">

							<AppTitle />
							<CreateNew />
							<TodoList />
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}
