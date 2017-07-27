import React, { Component } from "react";
import { Link } 			from "react-router-dom";

export default class NotFound extends Component {
	render() {
		return (
			<div className="home">
				<div className="container">
					<div className="row">
					  <div className="col-md-6 col-md-offset-3">
							<div className="hero-unit">
								<h1 className="app-title">404 Page</h1>
								<Link to="/">Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
