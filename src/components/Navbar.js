import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../../styles/Navbar.module.css';
import SVGIcon from './SVGIcon';
import Modal from '../components/Modal';

const Navbar = () => {
	const { isMd } = useBreakpoints();
	const [modalShow, setModalShow] = useState(false);

	const [showDropdown, setShowDropdown] = useState(false);

	// create a React ref for the dropdown element
	const dropdown = useRef(null);

	const closeNav = () => {
		setShowDropdown(false)
	}

	const handleModalNav = () => {
		setShowDropdown(!showDropdown);
		setModalShow(true);
	}

	function handleClick(event) {
		if (dropdown.current && !dropdown.current.contains(event.target)) {
			setShowDropdown(false);
		}
	}

	useEffect(() => {
		// only add the event listener when the dropdown is opened
		if (!showDropdown) return;
		if (showDropdown)
			window.addEventListener("click", handleClick);
		// clean up
		return () => window.removeEventListener("click", handleClick);
	}, [showDropdown]);

	return (
		<header>
			<nav>
				<Link href="/" passHref>
					<a className={styles.nav_logo___link}>
						<SVGIcon className={styles.nav_logo} name="photosnap" fill={'#000'} width={'250px'} />
					</a>
				</Link>
				{isMd ?
					(
						<div className={styles.nav_desktop}>
							<ul>
								<Link href="/stories">Stories</Link>
								<Link href="/features">Features</Link>
								<Link href="/pricing">Pricing</Link>
							</ul>
							<button className={styles.nav_modal___btn} onClick={() => setModalShow(true)}>Get an invite</button>
							<Modal onClose={() => setModalShow(false)} show={modalShow} />
						</div>
					)
					:
					<>
						<div className={showDropdown ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowDropdown(!showDropdown)}></div>
						<div className={`${styles.nav_mobile} ${showDropdown ? styles.nav_mobile___show : styles.nav_mobile___hide}`} ref={dropdown}>
							<ul>
								<li>
									<Link href="/stories">
										<a onClick={closeNav}>Stories</a>
									</Link>
								</li>
								<li>
									<Link href="/features">
										<a onClick={closeNav}>Features</a>
									</Link>
								</li>
								<li>
									<Link href="/pricing">
										<a onClick={closeNav}>Pricing</a>
									</Link>
								</li>
								<li>
									<button className={styles.nav_modal___btn} onClick={handleModalNav}>Get an invite</button>
									<Modal onClose={() => setModalShow(false)} show={modalShow} />
								</li>
							</ul>
						</div>
					</>
				}
			</nav>
		</header>
	);
};

export default Navbar;