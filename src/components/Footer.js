import React, { Component } from "react";
import FontAwesome 					from "react-fontawesome";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<a href="http://albsugy.com/" target="_blank">
				Albsugy</a>
				<a href="https://twitter.com/albsugy" target="_blank">
				<FontAwesome name='twitter' /></a>
				<a href="https://github.com/albsugy" target="_blank">
				<FontAwesome name='github' /></a>
				<a href="https://www.linkedin.com/in/albsugy/" target="_blank">
				<FontAwesome name='linkedin' /></a>
				<a href="mailto:albsugy@gmail.com">
				<FontAwesome name='envelope' /></a>
			</footer>
		);
	}
}
