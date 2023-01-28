import { NoTransactionIcon } from "@/assets/icons";

const NoTransaction = () => {
	return (
		<div className="mt-[60px]">
			<div className="grid place-items-center">
				<div className="mb-4">
					<NoTransactionIcon />
				</div>
				<p className="text-[#5B616E] text-xs text-center">
					You have not performed any transaction
				</p>
			</div>
		</div>
	);
};

export default NoTransaction;
