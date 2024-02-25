import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";

const Error = () => {
	const navgiate = useNavigate();
	return (
		<div class="error-container">
			<h1>404</h1>
			<h2>Page not found!</h2>
			<a
				onClick={() => {
					navgiate("/home");
				}}
				href="#"
			>
				Go back to home
			</a>
		</div>
	);
};

export default Error;
