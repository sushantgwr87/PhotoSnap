import React, { useState, useEffect, useRef } from 'react';
import logo from '../../public/PhotoSnap2.svg';
import Image from 'next/image';
import Link from 'next/link';
import useBreakpoints from '../customHook/useBreakpoints';

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
				<div className="logo">
					<Image src={logo} alt='Logo' />
				</div>
				{isMd ?
					(
						<div className='navDesktop'>
							<ul>
								<Link href="#">STORIES</Link>
								<Link href="#">FEATURES</Link>
								<Link href="#">PRICING</Link>
							</ul>
							<button className='inviteButton'>Get an Invite</button>
						</div>
					)
					:
					<>
						<button className='navButton' onClick={() => setShowDropdown(b => !b)}>&#9776;</button>
						<div className={showDropdown ? "navMobile showNav" : "navMobile hideNav"} ref={dropdown}>
							<ul>
								<li><Link href="#">STORIES</Link></li>
								<li><Link href="#">FEATURES</Link></li>
								<li><Link href="#">PRICING</Link></li>
								<li><button className='inviteButton'>Get an Invite</button></li>
							</ul>
						</div>
					</>
				}
			</nav>
		</header>
	);
};

export default Navbar;