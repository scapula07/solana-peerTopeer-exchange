import { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "@/utils/hooks";
import { dashboardNavLinks } from "@/utils/data";
import { Button } from "@/components/input/button";

const Sidebar = ({ isOpen, toggleMenu, setIsOpen }) => {
	const sideBarRef = useRef(null);
	const account = "0xDEDA35DfaF6e2b26d6Fb9c92037BD86f9ED3Bf21";
	const isWalletConnected = false;
	const clickOutsideHandler = () => {
		setIsOpen(false);
	};

	useOnClickOutside(sideBarRef, clickOutsideHandler);

	const handleConnectWallet = () => {
		// if (!isWalletConnected) {
		//     connectWallet();
		// }
	};

	return isOpen ? (
		<div
			className={`bg-black/80 w-full fixed h-screen top-0 left-0 z-[200] overflow-y-hidden md:hidden`}
		>
			<aside
				ref={sideBarRef}
				className={`bg-white pb-5 pl-5 pt-[17px] pr-[33px] w-3/5 fixed top-0 overflow-hidden z-[9999] h-screen ${
					isOpen
						? "right-0 transition-all ease-in-out "
						: "right-[-100%] transition-all ease-in-out"
				}`}
			>
				<div className="flex justify-between items-center mb-[45px]">
					<div onClick={toggleMenu} className="ml-auto">
						<XMarkIcon className="h-6 w-6" />
					</div>
				</div>
				<ul>
					{dashboardNavLinks.map((item, index) => (
						<li key={index} className="mb-[38px]">
							<a
								href={item.link}
								className="text-[#111111] text-base leading-[21px] capitalize"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				<Button
					title={
						isWalletConnected ? formatWalletAddress(account) : "connect wallet"
					}
					className="w-[117px] h-8"
					onClick={handleConnectWallet}
				/>
			</aside>
		</div>
	) : null;
};

export default Sidebar;
