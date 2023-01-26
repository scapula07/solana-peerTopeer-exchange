import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Button, ConnectWalletButton } from "@/components/input/button";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { dashboardNavLinks } from "@/utils/data";
import { formatWalletAddress } from "@/utils/helpers/wallet.helpers";

// images
import logo from "@/assets/logo/logo-colored.svg";

const DashboardNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const account = "0xDEDA35DfaF6e2b26d6Fb9c92037BD86f9ED3Bf21";
	const isWalletConnected = false;
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleConnectWallet = () => {
		// if (!isWalletConnected) {
		//   setShowConnectWalletModal(true)
		// }
	};

	return (
		<>
			<Sidebar {...{ isOpen, setIsOpen, toggleMenu }} />
			<nav className="fixed z-[50] h-20 bg-white flex items-center w-full">
				<div className="layout-container flex items-center justify-between">
					{/* logo */}
					<Link to="/">
						<img src={logo} alt="" className="h-10 w-20 md:h-20 md:w-40" />
					</Link>
					<div className="hidden md:flex items-center space-x-8">
						<ul className="flex items-center space-x-8">
							{dashboardNavLinks.map((item, index) => (
								<li key={index}>
									<Link
										to={item.link}
										className={`capitalize text-base leading-[22px] font-medium ${
											index === 1 ? "text-[#737374]" : "text-primary-2"
										}`}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<Button
							title={
								isWalletConnected
									? formatWalletAddress(account)
									: "connect wallet"
							}
							className="w-32 h-8"
							onClick={handleConnectWallet}
						/>
					</div>
					<button onClick={toggleMenu} className="md:hidden cursor-pointer">
						<Bars3Icon className="h-6 w-6" />
					</button>
				</div>
			</nav>
		</>
	);
};

export default DashboardNavbar;
