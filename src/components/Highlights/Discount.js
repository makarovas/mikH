import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';


export default class Discount extends Component {
	state = {
		startPrice: 0,
		finalPrice: 176000
	}

	ticketPrice = () => {
		if (this.state.startPrice < this.state.finalPrice) {
			this.setState({
				startPrice: this.state.startPrice + 1000
			})
		}
	}

	componentDidUpdate() {
		setTimeout(() => this.ticketPrice(), 30);
	}

	render() {
		return (
			<div className='center_wrapper'>
				<div className='discount_wrapper'>
					<Fade onReveal={() => this.ticketPrice()}>
						<div className='discount_porcentage'>
							<span>The ‘Dream No More’ Experience</span>

							<span>{this.state.startPrice} RUB per ticket package – VIP1</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_descrtiption">
							<ul>
								<li>One (1) general admission ticket to the Snakepit – a viewing area right in front of the stage</li>
								<li>Dedicated venue entrance</li>
								<li>Hang with members of the band backstage before the show</li>
								<li>Professional photograph taken of you with the full band</li>
								<li>One (1) show specific autographed setlist</li>
								<li>Access to the ‘Sanitarium Rubber Room’ lounge featuring:
								<ul>
										<li>Dinner at the ‘Spit Out The Bone’ Buffet</li>
										<li>Experience the UPDATED ‘Memory Remains’ touring exhibit, showcasing the band’s own personally chosen collection of memorabilia</li>
									</ul>
								</li>
								<li>One (1) show specific poster</li>
								<li>One (1) Metallica tour t-shirt, chosen by you</li>
								<li>Priority merchandise shopping</li>
								<li>Dedicated on-site staff</li>
							</ul>
							<MyButton
								text='Buy the ticket'
								bck='#ffa800'
								color='#ffffff'
								link='#tickets'
							/>
						</div>
					</Slide>
				</div>
			</div>
		)
	}
}
