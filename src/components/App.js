import React, { Component } from "react";
import { Switch, Route } 		from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute 						from "lazy-route";
import DevTools 						from "mobx-react-devtools";
// Page Components
import Footer 							from "./Footer";
import NotFound 						from "./NotFound";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		const { timeToRefresh, refreshToken } = this.store.appState;
		return (
			<div>
				{/*<DevTools />*/}
				<Switch>
				  <Route exact path="/"
					render={props => ( <LazyRoute {...props} component={import("./Home")} /> )} />
				  <Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		);
	}
}
