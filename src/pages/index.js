import Layout from "../../components/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="home hero is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-gapless">
							<div className="column">
								<div className="cont-info">
									<h5>SO, YOU WANT TO TRAVEL TO</h5>
									<h1>Space</h1>
									<p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
								</div>
							</div>
							<div className="column">
								<button className="button">Explore</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
