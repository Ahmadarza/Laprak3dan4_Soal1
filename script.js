document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const soalElements = document.querySelectorAll(".soal");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const soal = link.dataset.soal;

            links.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            soalElements.forEach(soalEl => {
                if (soalEl.dataset.soal === soal) {
                    soalEl.style.display = "block";
                } else {
                    soalEl.style.display = "none";
                }
            });
        });
    });
});
