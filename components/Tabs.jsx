import { useState } from 'react';

export default function Tabs({ data }) {
	const [currentTab, setCurrentTab] = useState(0);
	return (
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
	)
}