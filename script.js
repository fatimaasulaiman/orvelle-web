
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuButton.textContent = isOpen ? "×" : "☰";
});

// Close the mobile menu when a navigation link is selected.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// Automatically display the current year in the footer.
document.querySelector("#year").textContent = new Date().getFullYear();

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const clientName = document.getElementById("client-name").value.trim();
    const brandName = document.getElementById("brand-name").value.trim();
    const websiteType = document.getElementById("website-type").value;
    const clientBudget = document.getElementById("client-budget").value;
    const projectDetails = document.getElementById("project-details").value.trim();

    const message = `Hello Orvelle Web! I'd like to enquire about a website.

Name: ${clientName}
Brand: ${brandName}
Website needed: ${websiteType}
Budget: ${clientBudget}
Project details: ${projectDetails || "Not provided"}`;

    const whatsappURL = `https://wa.me/2348135276302?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}
