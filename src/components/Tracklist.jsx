import React from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function Tracklist() {
	const tracks = [
		{
			name: "Let Her Go",
			artist: "Passenger",
			album: "All the Little Lights",
		},
		{
			name: "Hello",
			artist: "Adele",
			album: "25",
		},
		{
			name: "Stay With Me",
			artist: "Sam Smith",
			album: "In The Lonely Hour",
		},
	];

	return (
		<>
			<div className="flex flex-row flex-nowrap px-80 text-white justify-around">
				<SearchResults tracks={tracks} />
				<Playlist tracks={tracks.slice(1)} />
			</div>
		</>
	);
}

export default Tracklist;
