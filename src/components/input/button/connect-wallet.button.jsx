import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from ".";
import { CopyToClipboard } from "@/components/misc";
import { useOnClickOutside } from "@/utils/hooks";

// images
import copyIcon from "@/assets/icons/copy-icon.svg";
import dropDrownArrow from "@/assets/icons/arrow-down.svg";

const ConnectWalletButton = () => {
	const [showDropDown, setShowDropDown] = useState(false);

	const dropDownRef = useRef(null);

	const handleShowDropDown = () => setShowDropDown(!showDropDown);

	const clickOutsideHandler = () => setShowDropDown(false);

	useOnClickOutside(dropDownRef, clickOutsideHandler);

	return (
		<div ref={dropDownRef} className="relative">
			{showDropDown && true ? (
				<div className="absolute top-[53px] bg-white rounded-lg shadow-[0px_6px_60px_#F2F3F7] py-6 pl-6 pr-9">
					<ul className="text-base leading-7 capitalize space-y-4 text-[#1B1C1E] font-satoshiRegular">
						<li>
							<Link to="" onClick={handleShowDropDown}>
								see transactions
							</Link>
						</li>
						<li
							className="cursor-pointer"
							// onClick={disconnectAccount}
						>
							disconnect wallet
						</li>
					</ul>
				</div>
			) : null}
			<div>
				{false ? (
					<div className="flex items-center justify-between bg-[#F3F4F5] rounded-[38px] py-2 px-[10px]">
						<div className="flex items-center">
							<img
								src={`https://avatars.dicebear.com/api/pixel-art/.svg`}
								className="rounded-full mr-2 w-[30px] h-[30px]"
							/>
							<p className="text-base leading-[18px] text-primary2 font-medium mr-[26px]">
								0xded...3bf21
							</p>
						</div>
						<div className="flex items-center space-x-[9px]">
							<CopyToClipboard icon={copyIcon} text="0xded...3bf21" />
							<img
								src={dropDrownArrow}
								alt=""
								className="cursor-pointer"
								onClick={handleShowDropDown}
							/>
						</div>
					</div>
				) : (
					<Button
						title="connect wallet"
						// onClick={connectAccount}
						className="w-[170px]"
					/>
				)}
			</div>
		</div>
	);
};

export default ConnectWalletButton;
