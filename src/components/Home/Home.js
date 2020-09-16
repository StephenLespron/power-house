import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<div>
					<h1>Power House Builders</h1>
					<p>
						In efficitur, urna vel rutrum congue, dui nisi pellentesque justo,
						nec lacinia odio lacus venenatis velit. Nam fermentum ante urna, ac
						hendrerit tellus posuere id. Maecenas tincidunt nulla laoreet mollis
						eleifend. Vivamus a lorem ut mi scelerisque ultricies. Aenean
						consectetur euismod nunc at faucibus. Quisque consectetur, diam in
						vulputate consequat, justo turpis congue ligula, sed rutrum metus
						dui vitae nulla. Integer rutrum placerat orci sit amet tempor.
						Quisque in ipsum id dolor finibus vestibulum eget quis magna.
						Integer vehicula purus quam, eget ultricies lectus viverra a. Aenean
						varius leo laoreet, porta eros non, laoreet dui. Aliquam erat
						volutpat. Fusce eget ante sollicitudin, condimentum nisi id, viverra
						risus. Maecenas sollicitudin vitae felis laoreet condimentum.
					</p>

					<span>
						Please call us at <a href='tel:+15555555555'>555-555-5555</a> or{' '}
						<a href='mailto:fake@email.com'>email</a> with any questions!
					</span>
				</div>
				<img alt='' src='images/construction-stock-photo.jpg' />
			</div>
		);
	}
}

export default Home;
