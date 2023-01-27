import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./navbar";

const DashboardLayout = () => {
	return (
		<div>
			<DashboardNavbar />
			<main className="pt-20 bg-[#F5F5F5] min-h-screen">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
