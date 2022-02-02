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
				{/* <div> */}
					<Link href="/">
						<a>
							<SVGIcon className={styles.logo} name="photosnap" fill={'#000'} width={'200px'} />
						</a>
					</Link>
				{/* </div> */}
				{isMd ?
					(
						<div className={styles.navDesktop}>
							<ul>
								<Link href="/stories">STORIES</Link>
								<Link href="/features">FEATURES</Link>
								<Link href="/pricing">PRICING</Link>
							</ul>
							<button className={styles.inviteModalButton}>GET AN INVITE</button>
						</div>
					)
					:
					<>
						{/* <button className={styles.navMobileButton} onClick={() => setShowDropdown(b => !b)}> */}
							<div className={showDropdown ? styles.hamburgerMenuClose : styles.hamburgerMenuOpen} onClick={() => setShowDropdown(b => !b)}></div>
						{/* </button> */}
						<div className={`${styles.navMobile} ${showDropdown ? styles.showSideNavbar : styles.hideSideNavbar}`} ref={dropdown}>
							<ul>
								<li><Link href="/stories">STORIES</Link></li>
								<li><Link href="/features">FEATURES</Link></li>
								<li><Link href="/pricing">PRICING</Link></li>
								<li><button className={styles.inviteModalButton}>GET IN INVITE</button></li>
							</ul>
						</div>
					</>
				}
			</nav>
		</header>
	);
};

export default Navbar;