import { useCallback, useState } from "react";
import NavBar from "./components/NavBar";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
	const [tracks, setTracks] = useState([
		{
			id: 1,
			name: "Let Her Go",
			artist: "Passenger",
			album: "All the Little Lights",
		},
		{
			id: 2,
			name: "Hello",
			artist: "Adele",
			album: "25",
		},
		{
			id: 3,
			name: "Stay With Me",
			artist: "Sam Smith",
			album: "In The Lonely Hour",
		},
	]);

	const [playlistTracks, setPlaylistTracks] = useState([]);
	const addTrack = useCallback(
		(track) => {
			if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
				return;
			}
			setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
		},
		[playlistTracks]
	);

	return (
		<>
			<NavBar />
			<SearchBar />
			<div className="flex flex-row flex-wrap gap-10 justify-center px-5 sm:px-39">
				<SearchResults tracks={tracks} onAdd={addTrack} />
				<Playlist tracks={playlistTracks} />
			</div>
		</>
	);
}

export default App;
