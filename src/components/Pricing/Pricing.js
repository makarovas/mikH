import React, { Component } from 'react'
import MyButton from './../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
	state = {
		prices: [100, 150, 250],
		positions: ['Vip', 'Fan Zone', 'Dance Parter'],
		desc: ['zone1', 'zone2', 'zone3'],
		fullDesc: [
			'The signs are designed to emphasize the information they contain, not signs themselves. Their color accurately matches the color of the walls while the floor signs are made of the same metal that is used in the design of the stadium.',
			'It isn’t a navigation system, it is an ode to subtlety. Signs help visitors find their way without overloading the visual space.',
			'The signs are positioned high enough to be visible in the flow of spectators. They match the dimensions of the space they are located in: small plates in stairwells and huge signs at building entrances.'

		],
		linkto: [
			'https://msk.kassir.ru/koncert/ok-lujniki/metallica-worldwired-tour-2019_2019-07-21',
			'https://ponominalu.ru/event/metallica/21.07/18:00?utm_source=partner&utm_medium=songkick&utm_campaign=dynamic',
			'https://eticket4.ru/event/metallica_worldwired_tour_2019_277'
		],
		delay: [500, 0, 500]
	}

	showBoxes = () => (
		this.state.prices.map((box, i) => (
			<Zoom
				key={i}
				delay={this.state.delay[i]}>
				<div className='pricing_item'>
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>
								${this.state.prices[i]}
							</span>
							<span>
								{this.state.positions[i]}
							</span>
						</div>
						<div className="pricing_description">
							{this.state.fullDesc[i]}
						</div>
						<div className="pricing_buttons">
							<MyButton
								text='Purchase'
								bck='#ffa800'
								color='#fff'
								link={`${this.state.linkto}`} />

						</div>
					</div>
				</div>
			</Zoom>
		))
	)
	render() {
		return (
			<div className='bck_black'>
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">
						{this.showBoxes()}
					</div>
				</div>
			</div>
		)
	}
}
