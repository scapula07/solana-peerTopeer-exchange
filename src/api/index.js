import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_PAYSTACK_BASE_URL
});

instance.defaults.headers.common["Authorization"] = `Bearer ${
	import.meta.env.VITE_APP_NOT_PAYSTACK_SECRET_KEY
}`;

const getBankDetails = async (accountNumber, bankCode) => {
	let response;
	try {
		response = await instance.get(
			`/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
		);
		return response;
	} catch (error) {
		return error;
	}
};

export default getBankDetails;
