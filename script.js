    // Мобильное меню
    const body = document.body;
    const toggle = document.querySelector(".nav-toggle");

    toggle.addEventListener("click", () => {
      body.classList.toggle("nav-open");
    });

    // Закрытие меню при клике по пункту
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        body.classList.remove("nav-open");
      });
    });