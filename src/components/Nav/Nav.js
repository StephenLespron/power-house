import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
	render() {
		return (
			<div className='Nav'>
				<ul>
					<Link
						style={
							this.props.location.pathname === '/examples'
								? { textDecoration: 'underline' }
								: {}
						}
						to='/examples'>
						Examples
					</Link>
					<Link
						style={
							this.props.location.pathname === '/process'
								? { textDecoration: 'underline' }
								: {}
						}
						to='/process'>
						Process
					</Link>
				</ul>
				<Link to='/'>
					<img alt='Power House Builders logo' src='images/PHB logo only.png' />
				</Link>
				<ul>
					<Link
						style={
							this.props.location.pathname === '/about'
								? { textDecoration: 'underline' }
								: {}
						}
						to='/about'>
						About
					</Link>
					<Link
						style={
							this.props.location.pathname === '/contact'
								? { textDecoration: 'underline' }
								: {}
						}
						to='/contact'>
						Contact
					</Link>
				</ul>
			</div>
		);
	}
}

export default withRouter(Nav);
