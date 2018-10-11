import * as React from 'react';
import NoItem from './NoItem';

export default class TodoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchStr: '',
		};
	}

	serchByTitle(e) {
		e.preventDefault();
		this.setState({
			searchStr: e.target.value
		});
	}

	generateListHeader() {
		return (
			<tr className="column-12 no-padding">
				<th className="column-2 no-padding text-left">Title </th>
				<th className="column-8 no-padding text-left">Description </th>
				<th className="column-2 no-padding text-left">Action</th>
			</tr>
		)
	}

	generateSearch() {
		return (
			<tr colSpan={3} className="column-12 no-padding searchBar">
				<input
					className="column-4"
					tppe="text"
					placeholder={"search"}
					onChange={(e) => { this.serchByTitle(e) }}
				/>
			</tr>
		)
	}
	generateListBody() {
		const { tasks, todoListConfiguration } = this.props;
		const { searchStr } = this.state;
		const searchReg = new RegExp(searchStr, 'gi');

		return (tasks || [])
			.filter(v => searchReg.test(v.title) || searchReg.test(v.description))
			.map((task, index) => {
				return (
					<tr key={index} className="column-12 no-padding">						
						<td className="column-2 text-left">{task.title}</td>
						<td className="column-8 text-left">{task.description}</td>
						<td className="column-2">
							<button className="column-5" onClick={(e) => todoListConfiguration.selectTask(e, task.id)}> Edit </button>
							<button className="column-5" onClick={(e) => todoListConfiguration.deleteTask(task.id)}> Delete </button>
						</td>
					</tr>
				);
			})
	}

	noItem() {
		return (
			<NoItem />
		)
	}

	render() {

		const { todoListConfiguration, tasks } = this.props;

		return (
			<div className="column-12 no-padding">
				<table className="column-12 task-list-table no-padding">
					<thead className="column-12 no-padding">
						{todoListConfiguration.searchBar ? this.generateSearch() : false}
						{this.generateListHeader()}
					</thead>
					<tbody className="column-12 no-padding">
						{tasks.length > 0 ? this.generateListBody() : this.noItem()}
					</tbody>
				</table>
			</div>
		)
	}
}