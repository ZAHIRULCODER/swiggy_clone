import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<div className=" text-center p-2">
				<p>© {new Date().getFullYear()} Developed by ❤ SK ZAHIRUL ISLAM</p>
				<p>Follow me on Linkedin</p>
			</div>
			<div className="flex justify-center items-center pb-2">
				<a href="https://www.linkedin.com/in/sk-zahirul-islam-823a73270/" target="_blank">
					<FaLinkedin size={30} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
