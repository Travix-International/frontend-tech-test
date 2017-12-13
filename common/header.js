import React from 'react';
import Head from 'next/head';

const Header = (props) => (
	<Head>
		<title>{props.title}</title>
		<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		<link crossOrigin="anonymous" href='/static/css/main.css' media="all" rel="stylesheet" />
	</Head>
);

export { Header };
