import React, { Component } from 'react';
// import Link from 'next/link';
import { Spinner } from 'travix-ui-kit';
import withRedux from 'next-redux-wrapper';

import initStore from './../store';

import { getLang, changeLang } from './../actions/langActions';

import { Header } from '../common/index';

class Home extends Component {
	componentWillMount() {
		this.props.getLang();
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.changeLang();
		}, 3000);
	}

	render() {
		return (
			<div className="home_page">
				<Header lang={this.props.lang} title={'home custom'} />
				<Spinner size='xl' />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		lang: state.lang
	};
}

export default withRedux(initStore, mapStateToProps, { getLang, changeLang })(Home);
