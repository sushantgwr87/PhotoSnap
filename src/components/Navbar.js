import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../../styles/Navbar.module.css';
import SVGIcon from './SVGIcon';
import Modal from '../components/Modal';
import useMountTransition from '../customHook/useMountTransition';
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
	const { isMd } = useBreakpoints();

	const { data: session, status } = useSession();
	const loading = status === "loading";
	const loginAuth = status === "authenticated";
	const hasTransitionedIn = useMountTransition(loginAuth, 1000);

	const [modalShow, setModalShow] = useState(false);

	const [showSidebar, setShowSidebar] = useState(false);

	// create a React ref for the sidebar element
	const sidebar = useRef(null);

	const closeNav = () => {
		setShowSidebar(false)
	}

	const handleModalNav = () => {
		setShowSidebar(!showSidebar);
		setModalShow(true);
	}

	function handleClick(event) {
		if (sidebar.current && !sidebar.current.contains(event.target)) {
			setShowSidebar(false);
		}
	}

	useEffect(() => {
		// only add the event listener when the sidebar is opened
		if (!showSidebar) return;
		if (showSidebar)
			window.addEventListener("click", handleClick);
		// clean up
		return () => window.removeEventListener("click", handleClick);
	}, [showSidebar]);

	const [showSubmenu, setShowSubmenu] = useState(false);

	const subMenu = useRef(null);

	const handleSubmenu = (event) => {
		if (subMenu.current && !subMenu.current.contains(event.target)) {
			setShowSubmenu(false);
		}
	};

	useEffect(() => {
		// only add the event listener when the subMenu is opened
		if (!showSubmenu) return;
		if (showSubmenu)
			window.addEventListener("click", handleSubmenu);
		// clean up
		return () => window.removeEventListener("click", handleSubmenu);
	}, [showSubmenu]);




	const handleLogout = () => {
		signOut({ redirect: false });
		setShowSubmenu(false);
	};

	const logged_menu = (
		hasTransitionedIn && loginAuth ?
			<div className={styles.profile_menu}>
				<button className={styles.profile_btn} onClick={() => setShowSubmenu(!showSubmenu)}>{session.user.name}</button>
				<div className={`${styles.sub_menu} ${showSubmenu ? styles.sub_menu___show : styles.sub_menu___hide}`} ref={subMenu}>
					<span className={styles.sub_menu_item}>
						<Link href='/uploadForm'>Upload</Link>
					</span>
					<span className={styles.sub_menu_item}>
						<button className={styles.logout_btn} onClick={handleLogout}>Logout</button>
					</span>
				</div>
			</div> :
			<>
				<button className={styles.nav_modal___btn} onClick={handleModalNav}>Get an invite</button>
				<Modal onClose={() => setModalShow(false)} show={modalShow} />
			</>
	)

	return (
		<header>
			<nav>
				<Link href="/" passHref>
					<a className={styles.nav_logo___link}>
						<SVGIcon className={styles.nav_logo} name="photosnap" fill={'#000'} />
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
							{logged_menu}
						</div>
					)
					:
					<>
						<div className={showSidebar ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowSidebar(!showSidebar)}></div>
						<div className={`${styles.nav_mobile} ${showSidebar ? styles.nav_mobile___show : styles.nav_mobile___hide}`} ref={sidebar}>
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
									{logged_menu}
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