// ================= SLIDER GENÉRICO =================
document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    if (!slides.length) return;

    let index = 0;

    const show = i => {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    };

    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    if (prevBtn) {
        prevBtn.addEventListener("click", e => {
            e.preventDefault();
            index = (index - 1 + slides.length) % slides.length;
            show(index);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", e => {
            e.preventDefault();
            index = (index + 1) % slides.length;
            show(index);
        });
    }

    // asegura la primera visible
    show(index);
});