import React, { Component } from 'react';
// import Link from 'next/link';
import { Spinner, Modal } from 'travix-ui-kit';
import withRedux from 'next-redux-wrapper';

import initStore from './../store';

import { getLang, changeLang } from './../actions/langActions';
import { toggleAboutModal, toggleTaskModal } from './../actions/modalsActions';

import { HeadContainer, Header } from '../common/index';

import stylesheet from '../styles/index.scss';


export class Home extends Component {
	constructor(props) {
		super(props);
		this.changeLang = this.changeLang.bind(this);
		this.openAbout = this.openAbout.bind(this, true);
		this.closeAbout = this.closeAbout.bind(this, false);
	}
	componentWillMount() {
		this.props.getLang();
	}
	changeLang() {
		this.props.changeLang();
	}
	openAbout(data) {
		this.props.toggleAboutModal(data);
	}
	closeAbout(data) {
		this.props.toggleAboutModal(data);
	}
	render() {
		return (
			<div className="home_page">
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<HeadContainer title={this.props.lang.home_title} />
				<Header changeLang={this.changeLang} openAbout={this.openAbout} lang={this.props.lang} />
				<Modal
					active={this.props.modals.about}
					onClose={this.closeAbout}
				>
					<p>{this.props.lang.about_content}</p>
				</Modal>
				<Spinner size='m' />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		lang: state.lang,
		modals: state.modals
	};
}
const actionsToBind = {
	getLang,
	changeLang,
	toggleAboutModal,
	toggleTaskModal,
};

export default withRedux(initStore, mapStateToProps, actionsToBind)(Home);
