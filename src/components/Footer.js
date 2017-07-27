import React, { Component } from "react";
import FontAwesome 					from "react-fontawesome";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<a href="https://twitter.com/albsugy" target="_blank">
				<FontAwesome name='twitter' />{" "}@albsugy{" "} | {" "}</a>
				<a href="https://github.com/albsugy" target="_blank">
				<FontAwesome name='github' />{" "}Albsugy {" "} | {" "}</a>
				<a href="https://www.linkedin.com/in/albsugy/" target="_blank">
				<FontAwesome name='linkedin' />{" "}Albsugy {" "} | {" "}</a>
				<a href="mailto:albsugy@gmail.com">
				<FontAwesome name='envelope' />{" "}Albsugy </a>
			</footer>
		);
	}
}
