// Простые интерактивные элементы для демонстрации работы сайта.
const message = document.querySelector("#interaction-message");

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    message.textContent = `Ти переглядаєш інформацію про «${product}». Це демонстраційна взаємодія.`;

    // Користувацька подія для Google Analytics 4 (працюватиме після підключення GA4).
    if (typeof window.gtag === "function") {
      window.gtag("event", "view_product_info", {
        product_name: product
      });
    }
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-message").textContent =
    "Дякуємо! Це навчальна форма — дані не надсилалися.";
  event.currentTarget.reset();

  // Демонстраційна подія GA4 (працюватиме після підключення GA4).
  if (typeof window.gtag === "function") {
    window.gtag("event", "demo_form_submit");
  }
});
