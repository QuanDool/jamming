import React from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function Tracklist() {
	return (
		<>
			<div className="flex flex-row flex-nowrap">
				<SearchResults />
				<Playlist />
			</div>
		</>
	);
}

export default Tracklist;
