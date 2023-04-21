import React from "react";

function Track({ track, onToggle, onPlaylist }) {
	const toggleSave = (event) => {
		onToggle(track);
	};

	return (
		<>
			<div className="mt-3 relative">
				<h3>{track.name}</h3>
				<p>
					<span className="text-purple-600/75">{track.artist}</span> |{" "}
					<span>{track.album}</span>
				</p>
				<button
					onClick={toggleSave}
					className="absolute right-5 top-3 font-bold text-xl"
				>
					{onPlaylist ? "-" : "+"}
				</button>
			</div>
		</>
	);
}

export default Track;
