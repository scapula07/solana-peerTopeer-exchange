import { Button } from "@/components/input/button";
// images
import logo from "@/assets/logo/logo-colored.svg";

const Navbar = () => {
	return (
		<div className="bg-white h-20 flex items-center">
			<div className="layout-container flex justify-between items-center">
				<img src={logo} alt="" className="h-10 w-20 md:h-20 md:w-40" />
				<Button href="/exchange" title="get started" />
			</div>
		</div>
	);
};

export default Navbar;
