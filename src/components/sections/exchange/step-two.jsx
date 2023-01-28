import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Select, TextInput } from "@/components/input";
import { Button } from "@/components/input/button";
import { nigerianBankList } from "@/utils/data";
import getBankDetails from "@/api";
import { RiskNoticeOne, TradeDetails } from "@/components/modal";

// images
import { ArrowLeft } from "@/assets/icons";

const StepTwo = ({ setFormData, formData, initialbankDetails }) => {
	const [isValid, setIsValid] = useState(false);
	const [showTradeDetails, setShowTradeDetails] = useState(false);
	const [showRiskNoticeOne, setShowRiskNoticeOne] = useState(false);

	const handleTextChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleClick = () => {
		setFormData(initialbankDetails);
	};

	const handleSelectChange = (value) => {
		setFormData((prev) => ({
			...prev,
			bankName: value.name,
			bankCode: value.code
		}));
	};

	const handleAccountNumber = (e) => {
		setFormData((prev) => ({
			...prev,
			accountNumber: e.target.value
		}));
	};

	const fetchAccountDetails = async () => {
		const notification = toast.loading("Fetching account detals");
		try {
			const response = await getBankDetails(
				formData.accountNumber,
				formData.bankCode
			);
			if (response?.status) {
				setFormData((prev) => ({
					...prev,
					accountName: response?.data?.data?.account_name,
					accountNumber: response?.data?.data?.account_number
				}));
				toast.success("Account details fetched successfully", {
					id: notification
				});
			} else {
				toast.error("Please check the account details", {
					id: notification
				});
			}
		} catch (error) {
			toast.error("Something went wrong", {
				id: notification
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowTradeDetails(true);
	};

	useEffect(() => {
		if (formData?.accountNumber?.length === 10 && formData?.bankName) {
			fetchAccountDetails();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData?.accountNumber, formData?.bankCode]);

	return (
		<div className="bg-white mt-5 py-8 px-6">
			{showTradeDetails && (
				<TradeDetails
					{...{
						setShowRiskNoticeOne,
						setShowTradeDetails,
						showTradeDetails,
						formData
					}}
				/>
			)}
			{showRiskNoticeOne && (
				<RiskNoticeOne
					{...{
						showRiskNoticeOne,
						setShowRiskNoticeOne,
						formData,
						setFormData,
						// setBalance,
						// setOrderList
					}}
				/>
			)}
			<button className="mb-[13px]" onClick={handleClick}>
				<ArrowLeft />
			</button>
			<h3 className="font-bold text-[#0B0B27] text-sm capitalize md:text-2xl">
				enter recepient bank details
			</h3>
			<form onSubmit={handleSubmit} className="mt-5 space-y-5">
				<Select
					title="Bank Name"
					options={nigerianBankList}
					headertitle="Bank Name"
					onChange={handleSelectChange}
				/>
				<TextInput
					type="text"
					labelText="Bank account number"
					name="accountNumber"
					placeholder="Account Number"
					handleTextChange={handleAccountNumber}
					maxLength="10"
				/>
				<TextInput
					labelText="Account Name"
					name="accountName"
					placeholder="Account Name"
					isDisabled
					handleTextChange={handleTextChange}
					value={formData?.accountName}
				/>
				<Button
					primary
					isDisabled={!isValid}
					title="continue"
					className="w-full h-10"
				/>
			</form>
		</div>
	);
};

export default StepTwo;
