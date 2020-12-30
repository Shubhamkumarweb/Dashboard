const b=document.querySelector("body");
const cf=document.querySelectorAll(".card_follow");
const co=document.querySelectorAll(".card_overview");
var isdark=true;
const t=document.querySelector(".top");
const slid=document.querySelector(".slider");
const toggle=()=>{
if(isdark){
    b.style.background="white";
    cf.forEach(e=>{
        e.classList.add("bright");
    });
    co.forEach(e=>{
        e.classList.add("bright");
    });
    slid.style.background="hsl(230, 22%, 74%)";
    t.classList.add("light");
    isdark=false;
}
else{
    b.style.background="hsl(230, 17%, 14%)";
    cf.forEach(e=>{
        e.classList.remove("bright");
    });
    
    co.forEach(e=>{
        e.classList.remove("bright");
    });
    slid.style.background="linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    // ball.style.background="hsl(230, 17%, 14%)";
    t.classList.remove("light");
    isdark=true;
}
}