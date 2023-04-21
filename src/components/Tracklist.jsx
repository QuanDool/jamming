import React from "react";
import Track from "./Track";

function Tracklist({ tracks, onToggle, onPlaylist }) {
	return (
		<div className="divide-y">
			{tracks.map((track) => (
				<Track
					key={track.id}
					track={track}
					onToggle={onToggle}
					onPlaylist={onPlaylist}
				/>
			))}
		</div>
	);
}

export default Tracklist;
