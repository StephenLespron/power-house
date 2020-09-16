import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
	render() {
		return (
			<footer className='Footer'>
				<a href='https://lespron.dev' target='_blank' rel='noopener noreferrer'>
					<img src='/images/Lespron Logo.png' alt='Lespron Logo' /> Website
					Created By Stephen Lespron
				</a>
			</footer>
		);
	}
}

export default Footer;
