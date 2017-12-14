import React, { Component } from 'react';
// import Link from 'next/link';
import { Spinner } from 'travix-ui-kit';
import withRedux from 'next-redux-wrapper';

import initStore from './../store';

import { getLang, changeLang } from './../actions/langActions';

import { Header } from '../common/index';

import stylesheet from '../styles/index.scss';


export class Home extends Component {
	componentWillMount() {
		this.props.getLang();
	}

	render() {
		return (
			<div className="home_page">
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<Header lang={this.props.lang} title={this.props.lang.home_title} />
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
