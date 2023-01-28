import { useState } from "react";
import { StepOne, StepTwo } from ".";

const SendMoney = () => {
	const initialbankDetails = {
		amount: "",
		country: "Nigeria",
		bankName: "",
		accountNumber: "",
		accountName: "",
		isTermsAccepted: false
	};
	const [formData, setFormData] = useState(initialbankDetails);

	return !formData.amount ? (
		<StepOne {...{ setFormData }} />
	) : (
		<StepTwo {...{ formData, setFormData, initialbankDetails }} />
	);
};

export default SendMoney;
