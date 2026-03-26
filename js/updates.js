const searchInput = document.getElementById("searchInput");
const timelineItems = document.querySelectorAll(".timeline-item");
const sectionBlocks = document.querySelectorAll(".timeline-section");
const progressFill = document.querySelector(".progress-fill");

if (progressFill) {
  const value = progressFill.getAttribute("data-progress");
  progressFill.style.width = value + "%";
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase().trim();

    timelineItems.forEach((item) => {
      const cardText = item.textContent.toLowerCase();
      item.style.display = cardText.includes(searchValue) ? "block" : "none";
    });

    sectionBlocks.forEach((section) => {
      const itemsInSection = section.querySelectorAll(".timeline-item");
      let hasVisibleItem = false;

      itemsInSection.forEach((item) => {
        if (item.style.display !== "none") {
          hasVisibleItem = true;
        }
      });

      section.style.display = hasVisibleItem ? "block" : "none";
    });
  });
}