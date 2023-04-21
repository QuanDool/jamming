import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function Body() {
	// const tokenEndpoint = "https://accounts.spotify.com/api/token";
	// const client_id = "ccf705df96ea4898a52253a9a88ebb44";
	// const client_secret = "0dc9e110c2b4443cbdff573c90843c01";

	// const authOptions = {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/x-www-form-urlencoded",
	// 		Authorization: "Basic " + window.btoa(`${client_id}:${client_secret}`),
	// 	},
	// 	body: "grant_type=client_credentials",
	// };

	// const getAccessToken = async () => {
	// 	try {
	// 		const response = await fetch(tokenEndpoint, authOptions);
	// 		const data = await response.json();
	// 		return data.access_token;
	// 	} catch (error) {
	// 		console.log(error);
	// 		return undefined;
	// 	}
	// };

	// getAccessToken().then((token) => console.log(token));
	return (
		<>
			<div>Body</div>
		</>
	);
}

export default Body;
