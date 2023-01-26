import toast from "react-hot-toast";

const CopyToClipboard = ({ text, icon }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
		toast.success("Copied successfully");
	};
	return (
		<img
			src={icon}
			alt=""
			onClick={copyToClipboard}
			className="cursor-pointer"
		/>
	);
};

export default CopyToClipboard;
