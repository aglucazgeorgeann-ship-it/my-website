const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    const isOpen = content.classList.contains("show");

    // Close all
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.classList.remove("show");
      c.style.maxHeight = null;
    });

    document.querySelectorAll(".accordion-header").forEach(h => {
      h.classList.remove("active");
    });

    // Toggle current
    if (!isOpen) {
      content.classList.add("show");
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("active");
    }
  });
});