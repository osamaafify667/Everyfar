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

// Scroll Reveal
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0)"}
],{
duration:900,
fill:"forwards",
easing:"ease"
});

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.service,.project,.hero-dashboard").forEach(el=>{
el.style.opacity=0;
observer.observe(el);
});

// Floating Dashboard
const dash=document.querySelector(".hero-dashboard");

if(dash){

let t=0;

function animate(){

t+=0.02;

dash.style.transform=
"translateY("+Math.sin(t)*10+"px)";

requestAnimationFrame(animate);

}

animate();

}

// Magnetic Buttons
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

// WhatsApp Floating Button (ready)
const whatsapp=document.querySelector(".whatsapp-float");

if(whatsapp){

let y=0;

let dir=1;

setInterval(()=>{

y+=dir;

if(y>8)dir=-1;

if(y<-8)dir=1;

whatsapp.style.transform="translateY("+y+"px)";

},30);

}

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

    document.getElementById("roas").innerHTML = "×6.8";

},2100);

animateValue("ctr",0,8,2000,"%");

animateValue("cpc",0,34,2000);
setTimeout(() => {

    document.getElementById("cpc").innerHTML = "$0.34";

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
// Premium Dashboard Parallax
// ===========================

const dashboard = document.querySelector(".hero-dashboard");

if (dashboard) {

    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;

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

        dashboard.style.transform =
        `perspective(1400px)
        rotateX(${currentY}deg)
        rotateY(${currentX}deg)`;

        requestAnimationFrame(animateDashboard);

    }

    animateDashboard();

}

const glow = document.querySelector(".mouse-glow");

function moveGlow(x, y){

    glow.style.left = x + "px";
    glow.style.top = y + "px";

}

// الكمبيوتر

document.addEventListener("mousemove",(e)=>{

    moveGlow(e.clientX,e.clientY);

});

// الموبايل

document.addEventListener("touchmove",(e)=>{

    moveGlow(
        e.touches[0].clientX,
        e.touches[0].clientY
    );

},{passive:true});

const redLight = document.querySelector(".red-light");

// الكمبيوتر

document.addEventListener("mousemove", (e)=>{

    redLight.style.left = (e.clientX - 90) + "px";

});

// الموبايل

document.addEventListener("touchmove", (e)=>{

    redLight.style.left = (e.touches[0].clientX - 90) + "px";

},{passive:true});

// ===============================
// Language Switch
// ===============================

const userLanguage = navigator.language || navigator.userLanguage;

const languageBtn = document.getElementById("lang");

let currentLanguage = "ar";

languageBtn.addEventListener("click", () => {

    if (currentLanguage === "ar") {

        document.getElementById("heroTitle").textContent =
            translations.en.heroTitle;

        document.getElementById("heroText").textContent =
    translations.en.heroText;
    document.getElementById("startNowBtn").textContent =
    translations.en.startNow;
    document.getElementById("contactBtn").textContent =
    translations.en.contact;

    document.getElementById("servicesTitle").textContent =
    translations.en.servicesTitle;

document.getElementById("service1").textContent =
    translations.en.service1;

document.getElementById("service2").textContent =
    translations.en.service2;

document.getElementById("service3").textContent =
    translations.en.service3;

document.getElementById("service4").textContent =
    translations.en.service4;

document.getElementById("portfolioBtn").textContent =
    translations.en.portfolio;
    
document.getElementById("ctaTitle").textContent =
    translations.en.ctaTitle;

document.getElementById("ctaButton").textContent =
    translations.en.ctaButton;    

document.getElementById("agencyTitle").textContent =
    translations.en.marketingAgency;

    
        languageBtn.textContent = "AR";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        currentLanguage = "en";

    } else {

        document.getElementById("heroTitle").textContent =
            translations.ar.heroTitle;
        
        document.getElementById("heroText").textContent =
    translations.ar.heroText;
    document.getElementById("startNowBtn").textContent =
    translations.ar.startNow;
    document.getElementById("contactBtn").textContent =
    translations.ar.contact;

    document.getElementById("servicesTitle").textContent =
    translations.ar.servicesTitle;

document.getElementById("service1").textContent =
    translations.ar.service1;

document.getElementById("service2").textContent =
    translations.ar.service2;

document.getElementById("service3").textContent =
    translations.ar.service3;

document.getElementById("service4").textContent =
    translations.ar.service4;
    

document.getElementById("portfolioBtn").textContent =
    translations.ar.portfolio;
 
document.getElementById("ctaTitle").textContent =
    translations.ar.ctaTitle;

document.getElementById("ctaButton").textContent =
    translations.ar.ctaButton;    

document.getElementById("agencyTitle").textContent =
    translations.ar.marketingAgency;

        languageBtn.textContent = "EN";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        currentLanguage = "ar";

    }

});

window.addEventListener("load", () => {

    if (userLanguage.startsWith("ar")) {

        if (currentLanguage !== "ar") {
            languageBtn.click();
        }

    } else {

        if (currentLanguage !== "en") {
            languageBtn.click();
        }

    }

});