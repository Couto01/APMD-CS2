const buttons = document.querySelectorAll(".proxima");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const nextSection = button.parentElement.parentElement.nextElementSibling;
		nextSection.scrollIntoView({ behavior: "smooth" });
	});
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
	sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
			section.querySelector(".titulo").classList.add("show");
		} else {
			section.querySelector(".titulo").classList.remove("show");
		}
	});
});
