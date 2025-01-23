import { useState } from 'react';
import Layout from "../../../components/Layout";

const data = [
	{
		name: "Moon",
		description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400",
		traveltime: "3 days"
	},
	{
		name: "MARS",
		description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 MIL.",
		traveltime: "9 months"
	},
	{
		name: "EUROPA",
		description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 MIL.",
		traveltime: "3 years"
	},
	{
		name: "TITAN",
		description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 BIL.",
		traveltime: "7 years"
	}
]

export default function Destination() {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<Layout
			title={'Destination'}
		>
			<section className="destination hero is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h5><span>01</span> PICK YOUR DESTINATION</h5>
						<div className="tab-component">
							<div className="columns is-gapless">
								<div className="column">
									<div className="tab-image">
										{data ? <img src={`./destination/image-${data[currentTab].name}.webp`} alt="" /> : ''}
									</div>
								</div>
								<div className="column">
									<div className="tabs-container">
										<div className="tabs">
											<ul>
												{data?.map((item, index) => (
													<li key={index} className={`${currentTab == index ? 'is-active' : ''}`} onClick={() => setCurrentTab(index)}>
														<p className="medium">{item.name}</p>
													</li>
												))}
											</ul>
										</div>
										{data?.map((item, index) => (
											<div key={index} className={`tabs-content ${currentTab == index ? 'is-active' : ''}`}>
												<div className="cont-info">
													<h2>{item.name}</h2>
													<p>{item.description}</p>
												</div>
												<div className="columns is-gapless">
													<div className="column">
														<p className="small">AVG. DISTANCE</p>
														<h6>{item.distance} km</h6>
													</div>
													<div className="column">
														<p className="small">Est. travel time</p>
														<h6>{item.traveltime}</h6>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}