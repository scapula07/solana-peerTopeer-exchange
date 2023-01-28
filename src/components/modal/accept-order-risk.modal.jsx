import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../input/button";

// assets
import { CloseIcon, RiskIcon } from "@/assets/icons";
import CheckBox from "../input/checkbox";

const AcceptOrderRiskModal = ({
	showRiskModal,
	setShowRiskModal,
	transferData
}) => {
	const [isTermsAccepted, setIsTermsAccepted] = useState(false);
	const [isAcceptingOrder, setIsAcceptingOrder] = useState(false);
	const navigate = useNavigate();

	const handleCheckbox = () => setIsTermsAccepted(!isTermsAccepted);

	// console.log("data", transferData)
	const handleNavigation = (to) => navigate(to);
	const handleConfirm = async () => {
		console.log("confirming");
	};
	return (
		<Transition appear show={showRiskModal} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-[999999]"
				onClose={() => setShowRiskModal(false)}
			>
				<div className="min-h-screen text-center">
					<Dialog.Overlay className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-75 z-[999999]" />
					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-white max-w-lg px-6 py-6 rounded-[10px]">
						<Dialog.Title
							as="div"
							className="flex justify-between items-center"
						>
							<div
								className="cursor-pointer ml-auto"
								onClick={() => setShowRiskModal(false)}
							>
								<CloseIcon />
							</div>
						</Dialog.Title>
						<section className="my-6">
							<div className="mx-auto w-fit flex flex-col items-center">
								<RiskIcon />
								<h3 className="capitalize mt-4 text-center text-xl leading-6 text-black font-bold md:text-2xl md:leading-6">
									risk notice
								</h3>
							</div>
							<div className="my-4">
								<p className="text-center text-[#737374] text-sm md:text-base">
									Clicking on accept order means you want to be an exchanger for
									this order which would last for{" "}
									<span className="text-[#9B0C14]">45 mins.</span> <br />
									Do you wish to continue?
								</p>
							</div>
							<div className="flex items-center">
								<CheckBox checked={isTermsAccepted} onChange={handleCheckbox} />
								<p className="text-[#737374] text-xs md:text-base">
									I have read and agree to the above terms and condition
								</p>
							</div>
						</section>
						<div className="flex items-center space-x-[10px] justify-end md:space-x-[22px]">
							{isAcceptingOrder ? (
								<Button
									type="button"
									title="processing request"
									isDisabled={isAcceptingOrder}
									onClick={handleConfirm}
									className="w-full h-9 rounded-[5px] text-sm leading-[18px]"
								/>
							) : (
								<Button
									type="button"
									title="Yes, Continue"
									isDisabled={!isTermsAccepted}
									onClick={handleConfirm}
									className="w-full h-9 rounded-[5px] text-sm leading-[18px]"
								/>
							)}
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default AcceptOrderRiskModal;
