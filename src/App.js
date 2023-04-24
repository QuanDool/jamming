import { useCallback, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { addPlaylist, createPlaylist, useTracks, useUser } from "./api/Spotify";

function App() {
	const user = useUser();

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
		async (playlistName) => {
			const playlist = await createPlaylist(user.id, playlistName);
			const trackURIs = playlistTracks.map((track) => track.uri);
			addPlaylist(playlist.id, trackURIs);
		},
		[user, playlistTracks]
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
