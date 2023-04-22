import { useCallback, useEffect, useState } from "react";

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
		return null;
	}
}

export const useAccessToken = () => {
	const [accessToken, setAccessToken] = useState(null);
	useEffect(() => {
		getAccessToken()
			.then((token) => {
				setAccessToken(token);
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	}, []);
	return accessToken;
};

export async function getTracks(accessToken, queryTerm) {
	try {
		const response = await fetch(
			`https://api.spotify.com/v1/search?type=track&q=${queryTerm}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		const jsonResponse = await response.json();
		return jsonResponse.tracks.items;
	} catch (error) {
		console.log(error);
	}
}

export const useTracks = (accessToken) => {
	const [tracks, setTracks] = useState([]);
	const searchTracks = useCallback(
		(queryTerm) => {
			getTracks(accessToken, queryTerm)
				.then((items) => {
					const searchTracks = items.map((item) => {
						return {
							id: item.id,
							name: item.name,
							artist: item.artists[0].name,
							album: item.album.name,
						};
					});
					setTracks(searchTracks);
				})
				.catch((error) => console.log(error));
		},
		[accessToken]
	);
	return [tracks, searchTracks];
};
