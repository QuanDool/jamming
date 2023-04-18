import React from "react";

function Track({ track }) {
	const { name, artist, album } = track;

	return (
		<>
			<div className="mt-3">
				<h3>{name}</h3>
				<p>
					<span className="text-purple-600/75">{artist}</span> |{" "}
					<span>{album}</span>
				</p>
			</div>
		</>
	);
}

export default Track;
