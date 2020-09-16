import React, { Component } from 'react';
import './About.css';

export class About extends Component {
	constructor() {
		super();
		this.state = {
			statements: [
				'Faithful',
				'Family',
				'the Power Family',
				'Power House Builders',
			],
			current: 0,
		};
	}

	timeout = (seconds) => {
		return new Promise((res) => setTimeout(res, seconds));
	};

	changeCurrent = async () => {
		await this.timeout(2500);
		const { statements, current } = this.state;
		if (current < statements.length - 1) {
			this.setState({ current: current + 1 });
			this.changeCurrent();
		} else {
			return;
		}
	};

	componentDidMount() {
		this.changeCurrent();
	}

	render() {
		const { statements, current } = this.state;
		return (
			<div className='About'>
				<div className='heading'>
					<h2>We are {`${statements[current]}`}</h2>
					<p>
						"For the kingdom of God depends not on talk but on power." -
						Corinthians 4:20
					</p>
				</div>
				<div className='about-content'>
					<span>
						<p>
							Hi! We're the Power Family and have run Power House Builders since
							1847. Over the centuries, we have reformed our skills as
							techniques and technologies have evolved. Thank you considering us
							for your home!{' '}
						</p>
						<img
							id='img'
							alt=''
							src='\images\108363911_10207111339778822_6275725333716194815_o.jpg'
						/>
					</span>
					<span>
						{' '}
						<img
							id='img'
							alt=''
							src='\images\55653385_10205282435257352_5479801343918997504_o.jpg'
						/>
						<div>
							<p>
								In 1608, Lance's grandparents settled in Jamestown, Virginia
								with the first colonies of what is now the USA. A few decades
								later, Lance was born in modern day Chicago. After serving the
								colonial army in the Revolutionary War and the U.S. army in the
								Northwest Indian War, Lance retired from a life of violence and
								transitioned his career into construction. In 1803, Lance worked
								a labor building Fort Dearborn near the Chicago River. After
								this project, his love for building was set in stone
								(literally).
							</p>
							<p>
								In 1820, Lance traveled East to attend university at Columbia at
								which he studied architecture. During his tenure at Columbia, he
								met his future wife, Amy. After Columbia, he returned to Chicago
								and began his career as an architect. Over the decades, Lance
								continued to fine-tune his skills as an architect, but quickly
								grew bored working at a desk. It was around 1840 that he packed
								his stuff and rode a wagon down to Okeechobee, FL and started
								Power House Builders.
							</p>
							<p>
								In Florida, Lance met Amy from Colombia and the courtship began.
								She helped him establish PHB as they started making homes by
								hammer and nail. Their first home netted them a whopping $1.68!
							</p>
							<p>
								Since the early days, Lance and Amy have become expert home
								builders and adapted with every change to the market.
								Transitioning from horse to automobiles and learning to use
								phones computers, they have never faltered.
							</p>
						</div>
					</span>{' '}
					<span>
						<p>
							Today, PHB is one of the leading, family-run contractors in the
							Central Florida area. We strive to provide a professional
							experience and beautiful work, no matter the size of the job. We
							specialize both in custom homes and remodels. We would love the
							opportunity to assist in creating your dream home!
						</p>
						<img
							id='img'
							alt=''
							src='\images\19990596_10212070307246046_8558106867123489289_n.jpg'
						/>
					</span>
				</div>
			</div>
		);
	}
}

export default About;
