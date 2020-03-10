const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];




const domh1 = document.querySelector('.cta h1');
domh1.textContent = siteContent["cta"]["h1"]

const button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

let code = document.getElementById("cta-img");
code.setAttribute('src', siteContent["cta"]["img-src"])



let mainContenth4 = document.querySelectorAll("h4");
mainContenth4[0].textContent = siteContent["main-content"]["features-h4"];
mainContenth4[1].textContent = siteContent["main-content"]["about-h4"];
mainContenth4[2].textContent = siteContent["main-content"]["services-h4"];
mainContenth4[3].textContent = siteContent["main-content"]["product-h4"];
mainContenth4[4].textContent = siteContent["main-content"]["vision-h4"];

let maincontentp = document.querySelectorAll("p");
maincontentp[0].textContent = siteContent["main-content"]["features-content"];
maincontentp[1].textContent = siteContent["main-content"]["about-content"];
maincontentp[2].textContent = siteContent["main-content"]["services-content"];
maincontentp[3].textContent = siteContent["main-content"]["product-content"];
maincontentp[4].textContent = siteContent["main-content"]["vision-content"];

let codeimg = document.getElementById("middle-img");
codeimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"]

let contactp = document.querySelectorAll(".contact p")
contactp[0].textContent = siteContent["contact"]["address"];
contactp[1].textContent = siteContent["contact"]["phone"];
contactp[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"]





const newContent = document.createElement("a");
newContent.textContent = "first";
const parentElement = document.querySelector('nav');
parentElement.prepend(newContent);

const newContent2 = document.createElement("a");
newContent2.textContent = "Last";
const parentElement2 = document.querySelector('nav');
parentElement2.append(newContent2);


let navColor = document.querySelectorAll("a")
navColor.forEach(element => {
    element.style.color = '#008000';
});