import React from 'react';
import Head from 'next/head';

const Header = (props) => (
	<header>
		<Head>
			<title>{props.title}</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			{/*<link crossOrigin="anonymous" href='/static/css/main.css' media="all" rel="stylesheet" />*/}
			<link crossOrigin="anonymous" href='/static/css/theme.css' media="all" rel="stylesheet" />
			<link crossOrigin="anonymous" href='/static/css/ui-bundle.css' media="all" rel="stylesheet" />
			<link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/static/images/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/static/images/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/static/images/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/static/images/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
			<link rel="manifest" href="/static/images/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
		<div className='top-bar'>
			<div className='image-container'>
				<img src='/static/images/logo.png' alt={props.lang ? props.lang.logo_alt : ''} />
			</div>
		</div>
	</header>
);

export default Header;
