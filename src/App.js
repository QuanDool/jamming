import { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { createPlaylist, useTracks, useUser } from "./api/Spotify";

function App() {
	const user = useUser();
	console.log(user);

	// Manage Results
	const [tracks, searchTracks] = useTracks();

	// Manage Playlist Tracks
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const playlistNameInputRef = useRef(null);

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

	const savePlaylist = useCallback(
		(playlistName) => {
			createPlaylist(user.id, playlistName);
			console.log(playlistName);
		},
		[user]
	);

	return (
		<>
			<NavBar />
			<SearchBar searchTracks={searchTracks} />
			<div className="flex flex-row flex-wrap gap-10 justify-center px-5 sm:px-39">
				<SearchResults tracks={tracks} onAdd={addTrack} />
				<Playlist
					tracks={playlistTracks}
					onRemove={removeTrack}
					playlistNameInput={playlistNameInputRef}
					onSave={savePlaylist}
				/>
			</div>
		</>
	);
}

export default App;
