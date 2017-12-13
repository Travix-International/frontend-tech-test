import React from 'react';
import Head from 'next/head';

const Header = (props) => (
	<header>
		<Head>
			<title>{props.title}</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link crossOrigin="anonymous" href='/static/css/main.css' media="all" rel="stylesheet" />
			<link crossOrigin="anonymous" href='/static/css/theme.css' media="all" rel="stylesheet" />
			<link crossOrigin="anonymous" href='/static/css/ui-bundle.css' media="all" rel="stylesheet" />
		</Head>
		<div className='top-bar'>
			<div className='image-container'>
				<img src='/static/images/logo.png' alt={props.lang ? props.lang.logo_alt : ''} />
			</div>
		</div>
	</header>
);

export default Header;
