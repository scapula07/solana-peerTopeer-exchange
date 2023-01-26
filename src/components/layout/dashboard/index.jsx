import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./navbar";

const DashboardLayout = () => {
	return (
		<div>
			<DashboardNavbar />
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
