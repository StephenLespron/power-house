import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			phone: '',
			email: '',
			subject: '',
			prefContact: '',
			message: '',
			buttonText: 'Send Message',
		};
	}

	updateValue = (ev) => {
		ev.preventDefault();

		this.setState({
			[ev.target.name]: ev.target.value,
		});
	};

	render() {
		return (
			<div className='Contact'>
				<h2>Contact Us</h2>
				<span>
					Phone: <a href='tel:+15555555555'>555-555-5555</a>
				</span>
				<span>
					Email:{' '}
					<a href='mailto:fake@email.com'>powerhousebuilders@gmail.com</a>
				</span>
				<p> or fill out the form below!</p>

				<form>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={this.state.name}
						onChange={(ev) => this.updateValue(ev)}
					/>
					<input
						type='tel'
						placeholder='Phone Number'
						name='phone'
						value={this.state.phone}
						onChange={(ev) => this.updateValue(ev)}
					/>
					<input
						type='email'
						placeholder='Email@email.com'
						name='email'
						value={this.state.email}
						onChange={(ev) => this.updateValue(ev)}
					/>
					<select
						required
						name='prefContact'
						value={this.state.prefContact}
						onChange={(ev) => this.updateValue(ev)}>
						<option disabled selected hidden value=''>
							Phone or Email
						</option>
						<option value='Phone'>Phone</option>
						<option value='Email'>Email</option>
					</select>
					<select
						required
						name='subject'
						value={this.state.subject}
						onChange={(ev) => this.updateValue(ev)}>
						<option disabled selected hidden value=''>
							Subject (Choose one)
						</option>
						<option value='Quote: Custom Home'>Quote: Custom Home</option>
						<option value='Quote: Remodel'>Quote: Remodel</option>
						<option value='General Inquiry'>General Inquiry</option>
						<option value='Review'>Review</option>
					</select>

					<textarea
						id='messageBox'
						type='text'
						name='message'
						value={this.state.message}
						onChange={(ev) => this.updateValue(ev)}
					/>
					<input id='sendMsgBtn' type='submit' value={this.state.buttonText} />
				</form>
			</div>
		);
	}
}

export default Contact;
