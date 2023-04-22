import React from "react";
import Tracklist from "./Tracklist";

function SearchResults({ tracks, onAdd }) {
	return (
		<div className="w-[30rem] bg-gray-900/70 px-7 py-10 text-white rounded-[2rem]">
			<h2 className="font-bold text-3xl mb-5 box-border">Results</h2>
			<Tracklist tracks={tracks} onToggle={onAdd} onPlaylist={false} />
		</div>
	);
}

export default SearchResults;
