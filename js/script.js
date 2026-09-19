/* =====================================
EVERYFAR V1
script.js
===================================== */

// Mobile Nav Toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

if (menuToggle && navList) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navList.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    navList.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navList.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}

// Navbar Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
header.style.background="rgba(5,5,5,.92)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.45)";
}else{
header.style.background="rgba(5,5,5,.75)";
header.style.boxShadow="none";
}

});

// Scroll Reveal (mobile-safe: never leave content invisible)
const revealEls = document.querySelectorAll("section,.service,.project");
if ("IntersectionObserver" in window) {
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0)"}
],{
duration:700,
fill:"forwards",
easing:"ease"
});

observer.unobserve(entry.target);

}

});

},{
threshold:.1,
rootMargin:"0px 0px -40px 0px"
});

revealEls.forEach(el=>{
el.style.opacity=0;
observer.observe(el);
// Safety: force visible after 2.5s if observer never fires
setTimeout(()=>{ el.style.opacity = el.style.opacity === "0" ? "1" : el.style.opacity; }, 2500);
});
} else {
revealEls.forEach(el=>{ el.style.opacity=1; });
}

// Desktop only helpers
const isFinePointer = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
const isDesktopWidth = window.matchMedia && window.matchMedia("(min-width:992px)").matches;
const enableFancy = isFinePointer && isDesktopWidth;

// Magnetic Buttons (desktop only - breaks touch)
if (enableFancy) {
document.querySelectorAll(".buttons a,.actions a").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=
"translate("+x*.15+"px,"+y*.15+"px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});
}

// Animated Counter (Future)
function counter(element,target){

let count=0;

const speed=target/80;

const run=()=>{

count+=speed;

if(count<target){

element.innerHTML=Math.floor(count);

requestAnimationFrame(run);

}else{

element.innerHTML=target;

}

};

run();

}

// WhatsApp Floating Button: CSS animation only (JS version removed - was fighting CSS + breaking mobile)


// Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("EVERYFAR Premium Loaded ✔");


// ===============================
// Performance Chart
// ===============================

const chartCanvas = document.getElementById("performanceChart");

if(chartCanvas){

    const ctx = chartCanvas.getContext("2d");

    const performanceChart = new Chart(ctx,{
        type:"line",

        data:{

            labels:["Jan","Feb","Mar","Apr","May","Jun"],

            datasets:[{

                label:"Growth",

                data:[18,30,28,45,60,82],

                borderColor:"#E50914",

                hoverBorderWidth:5,

                borderWidth:3,

                tension:.4,

                fill:false,

                pointRadius:4,

                pointHoverRadius:10,
pointHoverBorderWidth:3,
pointHoverBackgroundColor:"#ffffff",
pointHoverBorderColor:"#E50914",

                pointBackgroundColor:"#ffffff"


            }]


        },
        
        

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                x:{

                    grid:{
                        display:false
                    },

                    ticks:{
                        color:"#888"
                    }

                },

                y:{

                    grid:{
                        color:"rgba(255,255,255,.06)"
                    },

                    ticks:{
                        color:"#888"
                    }

                }

            }

        }

    });

}

// =========================
// Counter Animation
// =========================

function animateValue(id, start, end, duration, suffix = "") {

    const obj = document.getElementById(id);

    if (!obj) return;

    let startTime = null;

    function animation(currentTime) {

        if (!startTime) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);

        const value = start + (end - start) * progress;

        obj.textContent = Math.floor(value) + suffix;

        if (progress < 1) {

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}

animateValue("leads",0,1284,2000);

animateValue("roas",0,68,2000);
setTimeout(() => {
    const r = document.getElementById("roas");
    if (r) r.innerHTML = "×6.8";
},2100);

animateValue("ctr",0,8,2000,"%");

animateValue("cpc",0,34,2000);
setTimeout(() => {
    const c = document.getElementById("cpc");
    if (c) c.innerHTML = "$0.34";
},2100);

// ===========================
// Dashboard Activity Feed
// ===========================

const activities = [

{
icon:"🟢",
title:"New WhatsApp Lead",
time:"Just now"
},

{
icon:"🔴",
title:"Google Ads Optimized",
time:"1 minute ago"
},

{
icon:"🟣",
title:"TikTok Campaign Started",
time:"2 minutes ago"
},

{
icon:"🔵",
title:"New Shopify Store",
time:"3 minutes ago"
}

];

let activityIndex = 0;

function changeActivity(){

    const title = document.getElementById("activityTitle");

    const time = document.getElementById("activityTime");

    const icon = document.querySelector(".notification-icon");

    if(!title || !time || !icon) return;

    activityIndex++;

    if(activityIndex >= activities.length){

        activityIndex = 0;

    }

   const card = document.querySelector(".notification-card");
if(!card) return;

card.style.opacity = "0";

card.style.transform = "translateY(15px)";

setTimeout(()=>{

    title.textContent = activities[activityIndex].title;

    time.textContent = activities[activityIndex].time;

    icon.textContent = activities[activityIndex].icon;

    card.style.opacity = "1";

    card.style.transform = "translateY(0)";

},300);

}

setInterval(changeActivity,5000);


// ===========================
// Premium Dashboard Parallax (desktop only, single loop)
// ===========================

const dashboard = document.querySelector(".hero-dashboard");

if (dashboard && enableFancy) {

    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;
    let floatT = 0;

    dashboard.addEventListener("mousemove", (e) => {

        const rect = dashboard.getBoundingClientRect();

        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * -10;

    });

    dashboard.addEventListener("mouseleave", () => {

        targetX = 0;
        targetY = 0;

    });

    function animateDashboard(){

        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        floatT += 0.02;
        const floatY = Math.sin(floatT) * 6;

        dashboard.style.transform =
        `perspective(1400px)
        rotateX(${currentY}deg)
        rotateY(${currentX}deg)
        translateY(${floatY}px)`;

        requestAnimationFrame(animateDashboard);

    }

    animateDashboard();

}

const glow = document.querySelector(".mouse-glow");
const redLight = document.querySelector(".red-light");

function moveGlow(x, y){
    if (!glow) return;
    glow.style.left = x + "px";
    glow.style.top = y + "px";
}

if (enableFancy) {
// Desktop only - touchmove versions removed for performance
document.addEventListener("mousemove",(e)=>{
    moveGlow(e.clientX,e.clientY);
    if (redLight) redLight.style.left = (e.clientX - 90) + "px";
});
}

// ===============================
// Language Switch
// ===============================

const userLanguage = navigator.language || navigator.userLanguage || "ar";

const languageBtn = document.getElementById("lang");

let currentLanguage = "ar";

function setText(id, val){
  const el = document.getElementById(id);
  if (el && typeof val === "string") el.textContent = val;
}

if (languageBtn) languageBtn.addEventListener("click", () => {
if (typeof translations === "undefined") return;

    if (currentLanguage === "ar") {
        setText("heroTitle", translations.en.heroTitle);
        setText("heroText", translations.en.heroText);
        setText("contactBtn", translations.en.contact);
        setText("servicesTitleLink", translations.en.servicesTitle);
        setText("hs1", translations.en.hs1);
        setText("hs2", translations.en.hs2);
        setText("hs3", translations.en.hs3);
        setText("hs4", translations.en.hs4);
        setText("hs5", translations.en.hs5);
        setText("hs6", translations.en.hs6);
        setText("hs7", translations.en.hs7);
        setText("portfolioBtn", translations.en.portfolio);
        setText("ctaTitle", translations.en.ctaTitle);
        setText("ctaButton", translations.en.ctaButton);
        setText("agencyTitle", translations.en.marketingAgency);
        languageBtn.textContent = "AR";
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        currentLanguage = "en";
    } else {
        setText("heroTitle", translations.ar.heroTitle);
        setText("heroText", translations.ar.heroText);
        setText("contactBtn", translations.ar.contact);
        setText("servicesTitleLink", translations.ar.servicesTitle);
        setText("hs1", translations.ar.hs1);
        setText("hs2", translations.ar.hs2);
        setText("hs3", translations.ar.hs3);
        setText("hs4", translations.ar.hs4);
        setText("hs5", translations.ar.hs5);
        setText("hs6", translations.ar.hs6);
        setText("hs7", translations.ar.hs7);
        setText("portfolioBtn", translations.ar.portfolio);
        setText("ctaTitle", translations.ar.ctaTitle);
        setText("ctaButton", translations.ar.ctaButton);
        setText("agencyTitle", translations.ar.marketingAgency);
        languageBtn.textContent = "EN";
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        currentLanguage = "ar";
    }

});

window.addEventListener("load", () => {
    if (!languageBtn) return;
    if (window.__SKIP_AUTO_LANG__) return;
    try {
    if (String(userLanguage).toLowerCase().startsWith("ar")) {
        if (currentLanguage !== "ar") {
            languageBtn.click();
        }
    } else {
        if (currentLanguage !== "en") {
            languageBtn.click();
        }
    }
    } catch(e){ /* ignore */ }
});