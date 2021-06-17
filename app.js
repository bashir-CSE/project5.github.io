const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const cross = document.querySelector(".cross");

menu.addEventListener("click", () => {
	links.classList.add(`show`);
	menu.classList.add(`null`);
});
cross.addEventListener("click", () => {
	menu.classList.remove(`null`);
	links.classList.remove(`show`);
});
