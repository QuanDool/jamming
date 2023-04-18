import React from "react";
import Track from "./Track";

function Tracklist({ tracks }) {
	return (
		<div className="divide-y">
			{tracks.map((track, index) => (
				<Track key={index} track={track} />
			))}
		</div>
	);
}

export default Tracklist;
