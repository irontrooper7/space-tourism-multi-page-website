import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";

export default function Header() {
	const route = useRouter()
	const [menuStatus, setMenuStatus] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', function() {
			if( menuStatus === true ) {
				setMenuStatus(false)
			}
		});
	});
	return (
		<header>
			<nav className="navbar">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="/logo.svg" alt="Logo"/>
					</a>
					<a role="button" className={`navbar-burger ${menuStatus ? 'is-active' : ''}`} onClick={() => setMenuStatus(!menuStatus)} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbarBasicExample" className={`navbar-menu ${menuStatus ? 'is-active' : ''}`}>
					<div className="navbar-end">
						<a className={`navbar-item ${ route.asPath === '/' ? 'is-active' : '' }`} href="/"><b>00</b>Home</a>
						<a className={`navbar-item ${ route.asPath === '/destination' ? 'is-active' : '' }`} href="/destination"><b>01</b>destination</a>
						<a className={`navbar-item ${ route.asPath === '/crew' ? 'is-active' : '' }`} href="/crew"><b>02</b>crew</a>
						<a className={`navbar-item ${ route.asPath === '/technology' ? 'is-active' : '' }`} href="/technology"><b>03</b>technology</a>
					</div>
				</div>
			</nav>
		</header>
	)
}