import React from "react";

function SearchBar({ searchTracks }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		searchTracks(event.target.query.value);
	};

	return (
		<>
			<div>
				<form
					onSubmit={handleSubmit}
					className="py-20 flex flex-col items-center space-y-5"
				>
					<input
						type="text"
						className="py-3 px-6 bg-gray-300 rounded-full w-[20rem] focus:outline"
						name="query"
					/>
					<button className="bg-purple-600/75 hover:bg-purple-700/75 px-5 py-1 rounded-full text-white">
						Search
					</button>
				</form>
			</div>
		</>
	);
}

export default SearchBar;
