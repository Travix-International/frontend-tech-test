import React from 'react';
import { Button } from 'travix-ui-kit';

const Header = (props) => (
	<header>
		<div className='top-bar'>
			<div className='image-container'>
				<img src='/static/images/logo.png' alt={props.lang ? props.lang.logo_alt : ''} />
			</div>
			<div className='buttons-container'>
				<Button onClick={props.changeLang}>
					<span >
						{props.lang.lang}
					</span>
				</Button>
				<Button onClick={props.openAbout}>
					<span>{props.lang.about} </span>
				</Button>
			</div>
		</div>
	</header>
);

export default Header;
