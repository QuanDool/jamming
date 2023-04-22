import { useEffect, useState } from "react";

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const client_id = "ccf705df96ea4898a52253a9a88ebb44";
const client_secret = "0dc9e110c2b4443cbdff573c90843c01";
const authOptions = {
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		Authorization: "Basic " + window.btoa(`${client_id}:${client_secret}`),
	},
	body: "grant_type=client_credentials",
};

async function getAccessToken() {
	try {
		const response = await fetch(tokenEndpoint, authOptions);
		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

export const useAccessToken = () => {
	const [accessToken, setAccessToken] = useState(null);
	useEffect(() => {
		getAccessToken()
			.then((token) => {
				setAccessToken(token);
			})
			.catch((error) => console.log(error));
	}, []);
	return accessToken;
};
