import { useCallback, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useAccessToken, useQueryTracks } from "./api/Spotify";

function App() {
	const accessToken = useAccessToken();

	const [playlistTracks, setPlaylistTracks] = useState([]);
	const playlistNameRef = useRef(null);

	const tracks = useQueryTracks(accessToken);

	const addTrack = useCallback(
		(track) => {
			if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
				return;
			}
			setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
		},
		[playlistTracks]
	);

	const removeTrack = useCallback(
		(track) => {
			if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
				setPlaylistTracks((prevPlaylistTracks) =>
					prevPlaylistTracks.filter((prevTrack) => prevTrack.id !== track.id)
				);
			}
			return;
		},
		[playlistTracks]
	);

	const savePlaylist = useCallback(function () {
		console.log(playlistNameRef.current.value);
	}, []);

	return (
		<>
			<NavBar />
			<SearchBar />
			<div className="flex flex-row flex-wrap gap-10 justify-center px-5 sm:px-39">
				<SearchResults tracks={tracks} onAdd={addTrack} />
				<Playlist
					tracks={playlistTracks}
					onRemove={removeTrack}
					playlistNameInput={playlistNameRef}
					onSave={savePlaylist}
				/>
			</div>
		</>
	);
}

export default App;
