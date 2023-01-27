import React from "react";
import { NoTransaction } from ".";

const RecentTransactions = () => {
	return (
		<div className="bg-white mt-5 rounded-2xl p-6 h-[360px] lg:h-[400px]">
			<h3 className="capitalize font-medium md:text-xl text-[#192839]">
				recent transactions
			</h3>

			{true ? <NoTransaction /> : <div>hello</div>}
		</div>
	);
};

export default RecentTransactions;
