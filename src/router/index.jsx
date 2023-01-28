import DashboardLayout from "@/components/layout/dashboard";
import HomeLayout from "@/components/layout/home";
import { Home } from "@/pages";
import { ExchangePage, OrderPage } from "@/pages/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<DashboardLayout />}>
					<Route path="/exchange" element={<ExchangePage />} />
					<Route path="/orders" element={<OrderPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
