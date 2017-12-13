import React, { Component } from 'react';
// import Link from 'next/link';

import stylesheet from '../styles/index.scss';

class Home extends Component {
	handleOnClick() {
		try {
			fetch('/tasks').then(res => res.json().then(e => console.log(e))).catch(reason => console.log(reason));
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="home_page">
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<button onClick={this.handleOnClick.bind(this)}>
					Dummy Application
				</button>
				<button href='/weather'>
					Weather Application
				</button>
				<button href='/blogger'>
					Blogger Application
				</button>
			</div>
		);
	}
}

export default Home;
