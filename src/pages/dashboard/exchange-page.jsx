import {
	RecentTransactions,
	SendMoney,
	UserBalance
} from "@/components/sections/exchange";

const ExchangePage = () => {
	return (
		<div className="layout-container mt-2 md:mt-8 md:grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-x-5 lg:gap-x-[60px]">
			<div className="">
				<UserBalance />
				<RecentTransactions />
			</div>
			<SendMoney />
		</div>
	);
};

export default ExchangePage;
