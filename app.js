const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hidden-from-left');
const hiddenRightElements = document.querySelectorAll('.hidden-from-right');
const hiddenDownElements = document.querySelectorAll('.hidden-from-down');
const hiddenUpElements = document.querySelectorAll('.hidden-from-up');
hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));
hiddenDownElements.forEach((el) => observer.observe(el));
hiddenUpElements.forEach((el) => observer.observe(el));
