import { cva } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const button = cva(
	"rounded h-10 md:h-12 font-medium text-base leading-5 capitalize w-[147px] flex items-center justify-center",
	{
		variants: {
			intent: {
				primary: "bg-[#6E24D1] text-white",
				secondary: "bg-[#F5F5F5] text-primary2"
			},
			centered: {
				true: "mx-auto"
			}
		},
		defaultVariants: {
			intent: "primary"
		}
	}
);

const Button = ({
	href,
	title,
	className,
	icon,
	intent,
	centered,
	...props
}) => {
	return href ? (
		<Link
			to={href}
			className={twMerge(`${button({ intent, centered })}  ${className}`)}
			{...props}
		>
			{title}
		</Link>
	) : (
		<button
			className={twMerge(`${button({ intent, centered })}  ${className}`)}
		>
			{icon ? <img src={icon} alt="" className="mr-[11px]" /> : null}
			{title}
		</button>
	);
};

export default Button;
