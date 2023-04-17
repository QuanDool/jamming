import React from "react";
import Track from "./Track";

function Playlist({ tracks }) {
	return (
		<>
			<div className="w-[30rem] bg-gray-900/70 px-7 py-10 space-y-3 divide-y">
				<h2 className="font-bold text-3xl mb-5">Playlist</h2>
				{tracks.map((track, index) => (
					<Track key={index} track={track} />
				))}
			</div>
		</>
	);
}

export default Playlist;
