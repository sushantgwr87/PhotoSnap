import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../../styles/Navbar.module.css';
import SVGIcon from './SVGIcon';

const Navbar = () => {
	const { isMd } = useBreakpoints();

	const [showDropdown, setShowDropdown] = useState(false);
	// create a React ref for the dropdown element
	const dropdown = useRef(null);

	useEffect(() => {
		// only add the event listener when the dropdown is opened
		if (!showDropdown) return;
		function handleClick(event) {
			if (dropdown.current && !dropdown.current.contains(event.target)) {
				setShowDropdown(false);
			}
		}
		window.addEventListener("click", handleClick);
		// clean up
		return () => window.removeEventListener("click", handleClick);
	}, [showDropdown]);

	return (
		<header>
			<nav>
				<Link href="/">
					<a>
						<SVGIcon className={styles.nav_logo} name="photosnap" fill={'#000'} width={'250px'} />
					</a>
				</Link>
				{isMd ?
					(
						<div className={styles.nav_desktop}>
							<ul>
								<Link href="/stories">STORIES</Link>
								<Link href="/features">FEATURES</Link>
								<Link href="/pricing">PRICING</Link>
							</ul>
							<button className={styles.nav_modal___btn}>GET AN INVITE</button>
						</div>
					)
					:
					<>
						<div className={showDropdown ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowDropdown(b => !b)}></div>
						<div className={`${styles.nav_mobile} ${showDropdown ? styles.nav_mobile___show : styles.nav_mobile___hide}`} ref={dropdown}>
							<ul>
								<li><Link href="/stories">STORIES</Link></li>
								<li><Link href="/features">FEATURES</Link></li>
								<li><Link href="/pricing">PRICING</Link></li>
								<li><button className={styles.nav_modal___btn}>GET IN INVITE</button></li>
							</ul>
						</div>
					</>
				}
			</nav>
		</header>
	);
};

export default Navbar;