import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ tracks, onRemove, playlistNameInput, onSave }) {
	const handleSaveButton = (event) => {
		onSave();
	};

	return (
		<>
			<div className="w-[30rem] bg-gray-900/70 px-7 py-10 text-white flex flex-col rounded-[2rem]">
				<input
					ref={playlistNameInput}
					type="text"
					className="bg-transparent font-bold mb-5 text-3xl box-border border border-t-0 border-l-0 border-r-0 border-b-purple-600/75 focus:outline-0"
					defaultValue={"New Playlist"}
				/>
				<Tracklist tracks={tracks} onToggle={onRemove} onPlaylist={true} />
				<button
					onClick={handleSaveButton}
					className="bg-purple-600/75 hover:bg-purple-700/75 px-5 py-1 rounded-full w-fit mx-auto mt-5 border-none"
				>
					Add to Playlist
				</button>
			</div>
		</>
	);
}

export default Playlist;
