import Layout from "../../../components/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const data = [
	{
		name: 'Douglas Hurley',
		title: 'Commander',
		description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
		image: 'image-douglas-hurley'
	},
	{
		name: 'MARK SHUTTLEWORTH',
		title: 'Mission Specialist',
		description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
		image: 'image-mark-shuttleworth'
	},
	{
		name: 'Victor Glover',
		title: 'PILOT',
		description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
		image: 'image-victor-glover'
	},
	{
		name: 'Anousheh Ansari',
		title: 'Flight Engineer',
		description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
		image: 'image-anousheh-ansari'
	}
]

export default function Crew() {
	return (
		<Layout
			title={'crew'}
		>
			<section className="crew hero is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h5><span>02</span>MEET YOUR CREW</h5>
						<div className="slider">
							<Swiper
								spaceBetween={0}
								slidesPerView={1}
								effect={'fade'}
								fadeEffect={{crossFade: true}}
								modules={[Autoplay, EffectFade, Pagination]}
								autoplay={{
									delay: 5000,
									disableOnInteraction: true,
								}}
								pagination={{
									clickable: true,
								}}
							>
								{data?.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="slide-cont">
											<div className="columns is-gapless">
												<div className="column">
													<div className="cont-info">
														<h4>{item.title}</h4>
														<h3>{item.name}</h3>
														<p>{item.description}</p>
													</div>
												</div>
												<div className="column">
													<img src={`/crew/${item.image}.webp`} alt={item.name} />
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}