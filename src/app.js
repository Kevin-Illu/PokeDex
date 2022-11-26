// eslint-disable-next-line import/extensions

document.querySelector('#app').innerHTML = `
<header id="header">
			<!-- container -->
			<div class="w-[90%] mx-auto my-0 flex flex-col gap-8 py-4">
				<div class="flex justify-end">
					<div id="date"></div>
					<button id="toggle-theme" class="rounded px-4 py-2">
						<div id="dark-theme">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						</div>
						<div id="light-theme">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
								/>
							</svg>
						</div>
					</button>
					<button id="menu" class="bg-black text-white rounded-xl px-4 py-2">
						<div id="open-menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 9h16.5m-16.5 6.75h16.5"
								/>
							</svg>
						</div>
						<div id="close-menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</button>
				</div>
				<div>
					<form>
						<input
							type="search"
							placeholder="Busca un pokemon"
							class="px-2 py-3 w-[100%] rounded-lg border-2 border-solid border-neutral-200 outline-offset-4 outline-blue-400"
						/>
					</form>
				</div>
			</div>
			<!-- end container -->
		</header>
		<main class="w-[90%] mx-auto my-0 flex flex-col gap-8 py-4">
			<section
				id="pokemons-list"
				class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				<div id="box" class="bg-neutral-200 py-36"></div>
				<!--pruebas-->
			</section>
		</main>
		<footer id="footer"></footer>
`;
