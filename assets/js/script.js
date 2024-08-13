'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

// Add event listener for form button click
formBtn.addEventListener("click", function () {
  // Construct the message body from form inputs (example)
  let message = "";
  for (let i = 0; i < formInputs.length; i++) {
    message += `${formInputs[i].name}: ${formInputs[i].value}\n`;
  }

  // Sending email
  let email = "wizardaj120@gmail.com";
  let subject = "Form Submission";
  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Open mail client
  window.location.href = mailtoLink;

  // Sending SMS or WhatsApp
  let phoneNumber = "+916200799470";
  let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  let whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  // Uncomment the desired action below:
  window.location.href = smsLink; // For SMS
  window.open(whatsappLink); // For WhatsApp
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

/*--------------------
Vars
--------------------*/
const deg = (a) => Math.PI / 180 * a
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1))
const opt = {
  particles: window.width / 500 ? 1000 : 500,
  noiseScale: 0.009,
  angle: Math.PI / 180 * -90,
  h1: rand(0, 360),
  h2: rand(0, 360),
  s1: rand(20, 90),
  s2: rand(20, 90),
  l1: rand(30, 80),
  l2: rand(30, 80),
  strokeWeight: 1.2,
  tail: 82,
}
const Particles = []
let time = 0
document.body.addEventListener('click', () => {
  opt.h1 = rand(0, 360)
  opt.h2 = rand(0, 360)
  opt.s1 = rand(20, 90)
  opt.s2 = rand(20, 90)
  opt.l1 = rand(30, 80)
  opt.l2 = rand(30, 80)
  opt.angle += deg(random(60, 60)) * (Math.random() > .5 ? 1 : -1)
  
  for (let p of Particles) {
    p.randomize()
  }
})


/*--------------------
Particle
--------------------*/
class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.lx = x
    this.ly = y
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2
    this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2
    this.light = this.hueSemen > .5 ? opt.l1 : opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
  }
  
  randomize() {
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2
    this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2
    this.light = this.hueSemen > .5 ? opt.l1 : opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
  }
  
  update() {
    this.follow()
    
    this.vx += this.ax
    this.vy += this.ay
    
    var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
    var a = Math.atan2(this.vy, this.vx)
    var m = Math.min(this.maxSpeed, p)
    this.vx = Math.cos(a) * m
    this.vy = Math.sin(a) * m
    
    this.x += this.vx
    this.y += this.vy
    this.ax = 0
    this.ay = 0
    
    this.edges()
  }
  
  follow() {
    let angle = (noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale)) * Math.PI * 0.5 + opt.angle
    
    this.ax += Math.cos(angle)
    this.ay += Math.sin(angle)
    
  }
  
  updatePrev() {
    this.lx = this.x
    this.ly = this.y
  }
  
  edges() {
    if (this.x < 0) {
      this.x = width
      this.updatePrev()
    }
    if (this.x > width) {
      this.x = 0
      this.updatePrev()
    }
    if (this.y < 0) {
      this.y = height
      this.updatePrev()
    }
    if (this.y > height) {
      this.y = 0
      this.updatePrev()
    }
  }
  
  render () {
    stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`)
    line(this.x, this.y, this.lx, this.ly)
    this.updatePrev()
  }
}


/*--------------------
Setup
--------------------*/
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < opt.particles; i++) {
    Particles.push(new Particle(Math.random() * width, Math.random() * height))
  }
  strokeWeight(opt.strokeWeight)
}


/*--------------------
Draw
--------------------*/
function draw() {
  time++
  background(0, 100 - opt.tail)
  
  for (let p of Particles) {
    p.update()
    p.render()
  }
}


/*--------------------
Resize
--------------------*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
