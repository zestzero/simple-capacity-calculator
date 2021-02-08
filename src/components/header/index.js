import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Team Capacity Calculator</h1>
		<nav>
			<Link activeClassName={style.active} href="/">🏃</Link>
			{/*<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>*/}
		</nav>
	</header>
);

export default Header;
