import React from "react";

function Track({ track, onToggle, onPlaylist }) {
	const toggleSave = (event) => {
		onToggle(track);
	};

	return (
		<>
			<div className="mt-3 relative">
				<h3 className="font-bold text-md">{track.name}</h3>
				<p className="pr-10">
					<span className="text-purple-400/75">{track.artist}</span> |{" "}
					<span>{track.album}</span>
				</p>
				<button
					onClick={toggleSave}
					className="absolute right-5 top-3 font-bold text-xl my-auto"
				>
					{onPlaylist ? "-" : "+"}
				</button>
			</div>
		</>
	);
}

export default Track;
