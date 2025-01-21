import { useState } from 'react';
import Layout from "../../../components/Layout";

const data = [
	{
		name: 'launch-vehicle',
		description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
	},
	{
		name: 'spaceport',
		description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
	},
	{
		name: 'space-capsule',
		description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
	}
]

export default function Technology() {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<Layout
			title={'Technology'}
		>
			<section className="technology hero is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h5><span>03</span> SPACE LAUNCH 101</h5>
						<div className="columns is-flex-direction-row-reverse">
							<div className="column">
								<picture>
									<source srcSet={`/technology/image-${data[currentTab].name}-portrait.jpg`} media="(min-width: 769px)" />
									<img src={`/technology/image-${data[currentTab].name}-landscape.jpg`} alt="MDN" />
								</picture>
							</div>
							<div className="column">
								<div className="tabs-container">
									<div className="tabs">
										<ul>
											{
												data?.map((item, index) => (
													<li key={item.name} className={`${currentTab == index ? 'is-active' : '' }`} onClick={() => setCurrentTab(index)}><h4>{index + 1}</h4></li>		
												))
											}
										</ul>
									</div>
									{data?.map((item, index) => (
										<div key={index} className={`tabs-content ${currentTab == index ? 'is-active' : ''}`}>
											<h4>THE TERMINOLOGY… </h4>
											<h3>{item.name.replace('-', ' ')}</h3>
											<p>{item.description}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}