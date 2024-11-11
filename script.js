// Back to top script
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};
    
function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopBtn.style.display = "block";
    } else {
    backToTopBtn.style.display = "none";
    }
}
    
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

// Book a consultation button
const scrollToSectionBtn = document.getElementById("book-a-consultation-btn");
const contactSection = document.getElementById("book-a-consultation");

scrollToSectionBtn.addEventListener("click", function() {
    contactSection.scrollIntoView({
        behavior: "smooth", 
        block: "start"      
    });
});

// Explore more resources
document.getElementById("take-to-resources-btn").onclick = function () {
    location.href = "resources.html";
};