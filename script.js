// *************************Navbar**************************

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".list a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      current = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('.list a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const darkBtn = document.querySelector(".dark-btn-ui"); // Your button
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button emoji based on mode
  darkBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("fade");
  observer.observe(sec);
});
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});


