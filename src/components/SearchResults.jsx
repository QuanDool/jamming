import React from "react";
import Tracklist from "./Tracklist";

function SearchResults({ tracks }) {
	return (
		<div className="w-[30rem] bg-gray-900/70 px-7 py-10 text-white rounded-[2rem]">
			<h2 className="font-bold text-3xl mb-5">Results</h2>
			<Tracklist tracks={tracks} />
		</div>
	);
}

export default SearchResults;
