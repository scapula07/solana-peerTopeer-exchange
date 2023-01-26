import { Button } from "@/components/input/button";
// images
import hero from "@/assets/images/hero.svg";

const Home = () => {
	return (
		<div className="layout-container h-[calc(100vh_-_80px)] grid place-items-center">
			<div>
				<h1 className="text-center text-3xl md:text-[64px] md:leading-[82px] text-[#371269] font-bold max-w-3xl">
					The new way to send money across borders.
				</h1>
				<p className="text-center text-[#070707] mt-3 mb-[31px] md:text-2xl">
					We're changing the way people send money. Receive money, when you need
					it.
				</p>
				<Button href="/home" title="get started" centered />
				<img src={hero} alt="" className="mt-[45px] mx-auto" />
			</div>
		</div>
	);
};

export default Home;
