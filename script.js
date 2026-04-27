const header = document.querySelector("[data-header]");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const contactForm = document.querySelector("[data-contact-form]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

const syncHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 32);
};

const syncActiveNav = () => {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top < 180)
    .pop();

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      current && link.getAttribute("href") === `#${current.id}`,
    );
  });
};

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const subject = encodeURIComponent(`E-Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );

  window.location.href = `mailto:2908375382@qq.com?subject=${subject}&body=${body}`;
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
};

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    const src = new URL(button.dataset.lightboxSrc, window.location.href).href;
    const caption = button.dataset.lightboxCaption || "";

    lightboxImage.removeAttribute("src");
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      lightboxImage.src = src;
    });
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

window.addEventListener("scroll", () => {
  syncHeader();
  syncActiveNav();
});

syncHeader();
syncActiveNav();
