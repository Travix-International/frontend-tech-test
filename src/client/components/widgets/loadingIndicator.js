'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../content/styles/widgets/fullPageLoaderWidget.css';

class FullPageLoaderWidget extends Component {
	render() {
	  return (
	  	<div id="FullPageLoaderWidget">
		  	<div className="sk-circle">
	          <div className="sk-circle1 sk-child"></div>
	          <div className="sk-circle2 sk-child"></div>
	          <div className="sk-circle3 sk-child"></div>
	          <div className="sk-circle4 sk-child"></div>
	          <div className="sk-circle5 sk-child"></div>
	          <div className="sk-circle6 sk-child"></div>
	          <div className="sk-circle7 sk-child"></div>
	          <div className="sk-circle8 sk-child"></div>
	          <div className="sk-circle9 sk-child"></div>
	          <div className="sk-circle10 sk-child"></div>
	          <div className="sk-circle11 sk-child"></div>
	          <div className="sk-circle12 sk-child"></div>
	        </div>
	  	</div>
	  );
	}
}

var mapStateToProps = (state) => {
  return {
  }
}

var mapDispatchToProps = (dispatch) => {
	return {
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(FullPageLoaderWidget)