import { useState } from "react";

export const useAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const SignIn = () => setIsLoggedIn(true);

	const Logout = () => setIsLoggedIn(false);

	return { isLoggedIn, SignIn, Logout };
};
