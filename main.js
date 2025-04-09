6
let menu = document.getElementById('links');
let closeBtn = document.getElementById('closeBtn');
let toggleBtn = document.getElementById('menuBtn');
let body = document.getElementById("body");



if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        menu.classList.add('show-menu');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
}

const links = document.querySelectorAll('.link-item')

function linkAction(){
    const menu = document.getElementById('links')
    menu.classList.remove('show-menu')
}
links.forEach(link => link.addEventListener('click', linkAction))


//pagination pages

let pizzaItems = document.getElementById("pizzaItems");
let panzarotiItems = document.getElementById("panzarotiItems");
let mqilaItems = document.getElementById("mqilaItems");
let poutinsItems = document.getElementById("poutinsItems");
let pastichioItems = document.getElementById("pastichioItems");
let shawarmaItems = document.getElementById("shawarmaItems");
let tacosItems = document.getElementById("tacosItems");
let sandwitchesItems = document.getElementById("sandwitchesItems");
let jusItems = document.getElementById("jusItems");
let saladesItems = document.getElementById("saladesItems");


function pizzaMenu(){
    pizzaItems.style.display = "block";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function panzarotiMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "block";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function mqilaMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "block";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function poutinMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "block";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function pastichioMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "block";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function shawarmaMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "block";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function tacosMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "block";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function sandwichesMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "block";
    jusItems.style.display = "none";
    saladesItems.style.display = "none";
}

function jusMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "block";
    saladesItems.style.display = "none";
}

function saladesMenu(){
    pizzaItems.style.display = "none";
    panzarotiItems.style.display = "none";
    mqilaItems.style.display = "none";
    poutinsItems.style.display = "none";
    pastichioItems.style.display = "none";
    shawarmaItems.style.display = "none";
    tacosItems.style.display = "none";
    sandwitchesItems.style.display = "none";
    jusItems.style.display = "none";
    saladesItems.style.display = "block";
}



// on scroll animation 

let leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("showLeftContent");
        }
        else{
            entry.target.classList.remove("showLeftContent")
        }
    })
})

let showFL = document.querySelectorAll(".showFromLeft");
showFL.forEach((el) => leftObserver.observe(el))


let rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("showRightContent");
        }
        else{
            entry.target.classList.remove("showRightContent")
        }
    })
})

let showFR = document.querySelectorAll(".showFromRight");
showFR.forEach((el) => rightObserver.observe(el))


window.addEventListener("scroll", function(){
    let scrollOrigin = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percentage = (scrollOrigin / scrollHeight) * 100;
    document.querySelector(".progressBar").style.width = percentage + "%"
})

let offer1 = document.getElementById("item1");
let offer2 = document.getElementById("item2");
let offer3 = document.getElementById("item3");
let noOfferBox = document.getElementById("noOfferBox")
offer1.style.display = "none";
offer2.style.display = "none";
offer3.style.display = "none";
noOfferBox.style.display = "block";
let now = new Date();
let day = now.getDay();
console.log(day)

if (day == 0 || day == 6){
    offer1.style.display = "block"
    offer2.style.display = "flex"
    offer3.style.display = "flex"
    noOfferBox.style.display = "none";
}



//-----------------
document.oncontextmenu = () => {
    return false
}
document.onkeydown = e => {
    if (e.key == "F12"){
        return false
    }
    else if (e.ctrlKey && e.key == "u"){
        return false
    }
}
