import React from "react";

function SearchBar() {
	const handdleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<div>
				<form
					onSubmit={handdleSubmit}
					className="py-20 flex flex-col items-center"
				>
					<input
						type="text"
						className="py-3 px-6 bg-gray-300 rounded-full mb-5 w-[20rem] focus:outline"
					/>
					<button className="bg-purple-600/75 hover:bg-purple-700/75 px-5 py-1 rounded-full active:outline active:outline-1 active:outline-purple-900">
						Search
					</button>
				</form>
			</div>
		</>
	);
}

export default SearchBar;
