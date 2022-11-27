export function setupToggleTheme(target, element) {
	const app = document.querySelector(target);
	const button = document.querySelector(element);

	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		app.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	} else {
		app.classList.remove('dark');
	}

	button.addEventListener('click', () => {
		if (app.classList.contains('dark')) {
			app.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			app.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
		button.classList.toggle('active');
	});
}

export function setupToggleMenu(target, element) {
	const menu = document.querySelector(target);
	const button = document.querySelector(element);

	button.addEventListener('click', () => {
		menu.classList.toggle('open');
		button.classList.toggle('active');
	});
}
