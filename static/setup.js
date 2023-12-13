const theme = localStorage.getItem("theme");
if (theme) {
	document.documentElement.setAttribute("data-theme", theme);
}

const prefersDarkMode = window.matchMedia(
	"(prefers-color-scheme: dark)",
).matches;
if (prefersDarkMode) {
	document.documentElement.setAttribute("data-theme", "dark");
} else {
	document.documentElement.setAttribute("data-theme", "light");
}

const lang = localStorage.getItem("lang");
document.addEventListener("DOMContentLoaded", function () {
	const themeSelect = document.getElementById("theme");
	if (theme) {
		themeSelect.value = theme;
	} else if (prefersDarkMode) {
		themeSelect.value = "dark";
	} else {
		themeSelect.value = "light";
	}

	const langSelect = document.getElementById("lang");
	if (lang) {
		langSelect.value = lang;
		if (lang !== "en" && !window.location.href.includes(lang)) {
			const newURL =
				window.location.origin + `/${lang}` + window.location.pathname;
			window.location.assign(newURL);
		}
	} else {
		langSelect.value = "en";
		localStorage.setItem("lang", "en");
	}

	langSelect.addEventListener("change", function (e) {
		localStorage.setItem("lang", e.target.value);
		if (e.target.value !== "en") {
			const newURL =
				window.location.origin +
				`/${e.target.value}` +
				window.location.pathname;
			window.location.assign(newURL);
		} else {
			const newPathname = window.location.pathname.replace(
				/^\/[^\/]+(\/.*)/,
				"$1",
			);
			const newURL = window.location.origin + newPathname;
			console.log(newURL);
			window.location.assign(newURL);
		}
	});

	themeSelect.addEventListener("change", function (e) {
		localStorage.setItem("theme", e.target.value);
		if (e.target.value === "dark") {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	});
});
