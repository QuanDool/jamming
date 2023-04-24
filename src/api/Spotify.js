import { useCallback, useEffect, useState } from "react";

const authorizeEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "ccf705df96ea4898a52253a9a88ebb44";
// const clientSecret = "0dc9e110c2b4443cbdff573c90843c01";
const redirectUri = "http://localhost:3000/";
let accessToken;

function getAccessToken() {
	if (accessToken) {
		return accessToken;
	}

	const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
	const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
	if (accessTokenMatch && expiresInMatch) {
		accessToken = accessTokenMatch[1];
		const expiresIn = Number(expiresInMatch[1]);
		localStorage.setItem("accessToken", accessToken);
		window.setTimeout(() => {
			localStorage.removeItem("accessToken");
			accessToken = null;
		}, expiresIn * 1000);
		window.history.pushState("Access Token", null, "/");
		return accessToken;
	} else {
		const params = new URLSearchParams();
		params.append("client_id", clientId);
		params.append("response_type", "token");
		params.append("scope", "playlist-modify-public");
		params.append("redirect_uri", redirectUri);
		const accessUrl = `${authorizeEndpoint}` + params.toString();
		window.location = accessUrl;
	}
}

async function getTracks(queryTerm) {
	const accessToken = getAccessToken();
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

export const useTracks = () => {
	const [tracks, setTracks] = useState([]);
	const searchTracks = useCallback((queryTerm) => {
		getTracks(queryTerm)
			.then((items) => {
				const searchTracks = items.map((item) => {
					return {
						id: item.id,
						name: item.name,
						artist: item.artists[0].name,
						album: item.album.name,
						uri: item.uri,
					};
				});
				setTracks(searchTracks);
			})
			.catch((error) => console.log(error));
	}, []);
	return [tracks, searchTracks];
};

async function fetchUser() {
	const accessToken = getAccessToken();
	try {
		const response = await fetch("https://api.spotify.com/v1/me", {
			method: "GET",
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export const useUser = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		fetchUser().then((me) => {
			setUser(me);
		});
	}, []);
	return user;
};

export const createPlaylist = async (userId, playlistName) => {
	const accessToken = getAccessToken();
	const postEndpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
	console.log(accessToken);
	const response = await fetch(postEndpoint, {
		method: "POST",
		headers: { Authorization: `Bearer ${accessToken}` },
		body: JSON.stringify({ name: playlistName }),
	});
	return await response.json();
};

export const addPlaylist = (playlistId, trackURIs) => {
	const accessToken = getAccessToken();
	const postEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

	fetch(postEndpoint, {
		method: "POST",
		headers: { Authorization: `Bearer ${accessToken}` },
		body: JSON.stringify({
			uris: trackURIs,
		}),
	});
};
