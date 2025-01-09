import Image from "next/image";

export default function Header() {
	return (
		<header>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="/logo.svg" alt="Logo"/>
					</a>
					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item"><b>00</b>Home</a>
						<a className="navbar-item"><b>01</b>destination</a>
						<a className="navbar-item"><b>02</b>crew</a>
						<a className="navbar-item"><b>03</b>technology</a>
					</div>
				</div>
			</nav>
		</header>
	)
}