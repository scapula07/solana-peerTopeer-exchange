// images
import noTransactionIcon from "@/assets/icons/NoTransactionIcon.svg";

const NoTransaction = () => {
	return (
		<div className="mt-[60px]">
			<div className="grid place-items-center">
				<img src={noTransactionIcon} alt="" className="mb-4" />
				<p className="text-[#5B616E] text-xs text-center">
					You have not performed any transaction
				</p>
			</div>
		</div>
	);
};

export default NoTransaction;
