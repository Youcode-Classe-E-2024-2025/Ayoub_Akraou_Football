export default function (player) {
	return `<div class="add-form z-20 bg-white border-1 border-black px-7 py-5 max-w-sm mx-auto rounded-lg relative">
				<button
					class="close-form-btn absolute top-1 right-2 text-black text-xl hover:scale-125 transition-transform duration-300">
					<i class="close-icon fa-solid fa-xmark"></i>
				</button>
				<h2 class="text-center text-lg sm:text-xl font-semibold mb-4">Please fill the inputs below</h2>
				<form class="text-sm" onsubmit="editPlayer(event,${player.id})">
					<input type="text" placeholder="fullname" id="name" class="add-form-input" value="${player.name}"  title="name" />
					<input type="url" placeholder="image url" id="photo" class="add-form-input" value="${player.photo}"  title="photo" />
					<input type="text" placeholder="position" id="position" class="add-form-input" value="${player.position}"  title="position" />
					<input type="text" placeholder="nationality" id="nationality" class="add-form-input" value="${player.nationality}"  title="nationality" />
					<input type="url" placeholder="flag image url" id="flag" class="add-form-input" value="${player.flag}"  title="flag" />
					<input type="text" placeholder="club" id="club" class="add-form-input" value="${player.club}"  title="club" />
					<input type="text" placeholder="logo" id="logo" class="add-form-input" value="${player.logo}"  title="logo" />

					<div class="flex gap-1 justify-between">
						<input type="text" placeholder="OVR" id="rating" class="add-form-small-input" value="${player.rating}" title="rating" />
						<input type="text" placeholder="PAC" id="pace" class="add-form-small-input" value="${player.pace}" title="pace" />
						<input type="text" placeholder="SHO" id="shooting" class="add-form-small-input" value="${player.shooting}" title="shooting" />
						<input type="text" placeholder="PAS" id="passing" class="add-form-small-input" value="${player.passing}" title="passing" />
						<input type="text" placeholder="DRI" id="dribbling" class="add-form-small-input" value="${player.dribbling}" title="dribbling" />
						<input type="text" placeholder="DEF" id="defending" class="add-form-small-input" value="${player.defending}" title="defending" />
						<input type="text" placeholder="PHY" id="physical" class="add-form-small-input" value="${player.physical}" title="physical" />
					</div>
					<button
						id="submit"
						type="submit"
						class="w-full bg-emerald-400 text-white py-2 rounded text-sm md:text-base font-medium">
						Edit player
					</button>
				</form>
			</div>
`;
}
