document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", function() {
      const checkbox = this.previousElementSibling;
      checkbox.checked = !checkbox.checked;
  });
});