import DashboardLayout from "@/components/layout/dashboard";
import HomeLayout from "@/components/layout/home";
import { Home } from "@/pages";
import { ExchangePage } from "@/pages/dashboard";
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
				</Route>
				{/* <Route element={<DashboardLayout />}>
					<Route path="/doctors" element={<Doctors />} />
					<Route path="doctors/:id" element={<Doctor />} />
					<Route path="/Patients" element={<Patients />} />
					<Route path="Patients/:id" element={<Patient />} />
					<Route path="/message" element={<Message />} />
					<Route path="/video-call" element={<VideoCall />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/meeting" element={<Meeting />} />
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
